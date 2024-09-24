import React from "react";
import { Card, Modal, Skeleton } from "antd";
import Image from "next/image";
import usePetCardUtils from "./usePetCard.utils";
import { IPetType } from "@/types";
// You can create a type alias if needed

const PetCardComponent = () => {
  const {
    isModalVisible,
    selectedPet,
    filteredPets,
    shortDescText,
    showModal,
    handleOk,
    handleCancel,
    isLoading,
  } = usePetCardUtils();
  const skeletonCount = filteredPets.length;

  return (
    <div className="pt-20 min-h-screen">
      <div>
        <h1 className="text-center font-semibold uppercase text-xl">
          Our Pet Shop
        </h1>
      </div>
      {isLoading ? (
        // Dynamically render skeleton cards during loading
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 py-5 px-4">
          {[...Array(skeletonCount)].map((_, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow flex flex-col justify-between items-center shadow-lg shadow-gray-200 w-full sm:w-72"
            >
              <Skeleton.Image className="w-full h-48" />
              <div className="w-full p-4">
                <Skeleton active paragraph={{ rows: 3 }} />
              </div>
            </Card>
          ))}
        </div>
      ) : filteredPets.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 py-5 px-10">
          {filteredPets.map((pet) => {
            const convertedPet: IPetType = {
              id: pet.intPetInfoId, // PetInfoDataProps has intPetInfoId, map it to id
              intId: pet.intId, // Map intId
              strPetName: pet.strPetName, // Pet name remains the same
              imageUrl: pet.strImageURL, // Map strImageURL to imageUrl
              fullDescription: pet.strPetDesc, // Map strPetDesc to fullDescription
              strPetDesc: pet.strPetDesc, // Keep strPetDesc as it is
              size: pet.strPetSize, // Map strPetSize to size
              color: pet.strPetColor, // Map strPetColor to color
              strPetFood: pet.strPetFood, // Map pet food
              dteCreatedAt: new Date(pet.dteCreatedAt), // Convert string to Date
              strPetSize: pet.strPetSize, // Keep strPetSize as it is
              strPetColor: pet.strPetColor, // Keep strPetColor as it is
            };

            return (
              <Card
                key={pet.intId}
                className="hover:shadow-lg transition-shadow my-2 flex flex-col w-full sm:w-[70%] justify-between items-center shadow-lg shadow-gray-200"
                cover={
                  <Image
                    src={convertedPet.imageUrl}
                    alt={convertedPet.strPetName}
                    width={200}
                    height={200}
                    className="object-cover w-full h-48"
                  />
                }
              >
                <div className="w-full">
                  <h2 className="text-xl font-bold">
                    {convertedPet.strPetName}
                  </h2>
                  <p>Size: {convertedPet.size}</p>
                  <p>Color: {convertedPet.color}</p>
                  <p>Food: {convertedPet.strPetFood}</p>
                  <p
                    className="cursor-pointer font-medium"
                    onClick={() => showModal(convertedPet)} // Now pass the converted object
                  >
                    Desc:{" "}
                    <span>{shortDescText(convertedPet.strPetDesc, 50)}</span>
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl text-gray-500">No Pets Found In Your Search.</p>
        </div>
      )}
      <Modal
        title={selectedPet?.strPetName}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className=""
      >
        <p>{selectedPet?.strPetDesc}</p>
        <p>
          Created At:{" "}
          {new Date(selectedPet?.dteCreatedAt ?? "").toLocaleDateString()}
        </p>
      </Modal>
    </div>
  );
};

export default PetCardComponent;
