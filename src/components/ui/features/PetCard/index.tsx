import React, { useState } from "react";
import { Card, Modal } from "antd";
import Image from "next/image";
// import 'antd/dist/antd.css';

interface Pet {
  id: number;
  name: string;
  imageUrl: string;
  shortDescription: string;
  fullDescription: string;
  size: string;
  color: string;
}

const petData: Pet[] = [
  {
    id: 1,
    name: "Buddy",
    imageUrl: "https://i.ibb.co/7QpKsCX/dog.jpg",
    shortDescription: "Friendly and playful dog.",
    fullDescription:
      "Buddy is a very friendly and playful dog who loves to play with kids and enjoys long walks in the park. He is loyal and well-trained.",
    size: "Medium",
    color: "Brown",
  },
  {
    id: 2,
    name: "Whiskers",
    imageUrl: "https://i.ibb.co/PQxg5Cz/cat-food.png",
    shortDescription: "Calm and affectionate cat.",
    fullDescription:
      "Whiskers is a calm and affectionate cat who loves to cuddle and enjoys a quiet environment. She is gentle and perfect for indoor living.",
    size: "Small",
    color: "Gray",
  },
  // Add more pets as needed
];

const PetCardComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

  const shortDescText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const showModal = (pet: Pet) => {
    setSelectedPet(pet);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setSelectedPet(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedPet(null);
  };

  return (
    <div className="mt-10">
      <div>
        <h1 className="text-center font-medium uppercase">Our Pet Shop</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-5">
        {petData.map((pet) => (
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
    </div>
  );
};

export default PetCardComponent;
