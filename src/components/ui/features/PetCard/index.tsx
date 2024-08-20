import React from "react";
import { Card, Modal } from "antd";
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
  } = usePetCardUtils();

  return (
    <div className="mt-10">
      <div>
        <h1 className="text-center font-medium uppercase">Our Pet Shop</h1>
      </div>
      {filteredPets.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-5">
          {filteredPets.map((pet) => (
            <Card
              key={pet.id}
              className="hover:shadow-lg transition-shadow flex justify-center items-center shadow-lg shadow-gray-200"
              cover={
                <Image
                  src={pet.imageUrl}
                  alt={pet.name}
                  width={50}
                  height={20}
                  className="object-contain"
                />
              }
            >
              <h2 className="text-xl font-bold">{pet.name}</h2>
              <p className="text-gray-500">Size: {pet.size}</p>
              <p className="text-gray-500">Color: {pet.color}</p>
              <p
                className="text-blue-500 cursor-pointer"
                onClick={() => showModal(pet)}
              >
                {shortDescText(pet.shortDescription, 20)}
              </p>
            </Card>
          ))}

          <Modal
            title={selectedPet?.name}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>{selectedPet?.fullDescription}</p>
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-xl text-gray-500">No Pets Found In Your Search.</p>
        </div>
      )}
    </div>
  );
};

export default PetCardComponent;
