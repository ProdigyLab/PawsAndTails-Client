import React, { useMemo, useState } from "react";
import { IPetType } from "../../../../types/index";
import { petData } from "./petData";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const usePetCardUtils = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPet, setSelectedPet] = useState<IPetType | null>(null);

  const searchTerm = useSelector(
    (state: RootState) => state.searchReducer.search.searchTerm
  );
  const shortDescText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  const filteredPets = useMemo(() => {
    return petData.filter((pet) =>
      pet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const showModal = (pet: IPetType) => {
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
  return {
    isModalVisible,
    selectedPet,
    filteredPets,
    shortDescText,
    showModal,
    handleOk,
    handleCancel,
  };
};

export default usePetCardUtils;
