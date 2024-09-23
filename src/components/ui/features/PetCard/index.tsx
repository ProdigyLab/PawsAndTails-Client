import React from "react";
import { Card, Modal, Skeleton } from "antd";
import Image from "next/image";
import usePetCardUtils from "./usePetCard.utils";

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
        <h1 className="text-center font-semibold uppercase text-xl">Our Pet Shop</h1>
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
          {filteredPets.map((pet) => (
            
            <Card
              key={pet.intId}
              className="hover:shadow-lg transition-shadow my-2 flex flex-col w-full sm:w-[70%] justify-between items-center shadow-lg shadow-gray-200"
              cover={
                <Image
                  src={pet.strImageURL}
                  alt={pet.strPetName}
                  width={200}
                  height={200}
                  className="object-cover w-full h-48"
                />
              }
            >
              <div className="w-full">
                <h2 className="text-xl font-bold">{pet.strPetName}</h2>
                <p>Size: {pet.strPetSize}</p>
                <p>Color: {pet.strPetColor}</p>
                <p>Food: {pet.strPetFood}</p>
                <p
                  className="cursor-pointer font-medium"
                  onClick={() => showModal(pet)}
                >
                 Desc: <span>{shortDescText(pet.strPetDesc, 50)}</span>
                </p>
              </div>
            </Card>
          ))}
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
