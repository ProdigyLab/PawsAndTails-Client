import React, { useEffect, useMemo, useState } from "react";
import { IPetType } from "../../../../types/index";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { getMethod } from "@/utils/api/getMethod";
import { endPoints } from "@/utils/api/route";

interface PetDetailsProps {
  petId: number; // Ensure that petId is passed correctly to the component
}
export interface PetInfoDataProps {
  intId: number;
  intPetInfoId: number;
  strPetName: string;
  strPetSize: "Small" | "Medium" | "Large"; // Assuming size is predefined
  strImageURL: string;
  strPetColor: string;
  strPetFood: string;
  strPetDesc: string;
  dteCreatedAt: string;
}
const usePetCardUtils = (petId?: number) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPet, setSelectedPet] = useState<IPetType | null>(null);
  const [petInfoCard, setPetInfoCard] = useState<PetInfoDataProps[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [singlePetInfo, setSinglePetInfo] = useState({});

  const searchTerm = useSelector(
    (state: RootState) => state.searchReducer.search.searchTerm
  );

  useEffect(() => {
    const handleSinglePet = async (id: number) => {
      try {
        const response = await getMethod(
          endPoints.petInfo.getSinglePetInfo(id)
        );
        console.log("response.data.data", response.data.data);
        setSinglePetInfo(response.data.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    if (petId) {
      handleSinglePet(petId); // Ensure handleSinglePet is called with the passed id
    }
  }, [petId]);
  const shortDescText = (text: string | undefined, maxLength: number) => {
    if (typeof text === "string" && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text || "";
  };
  const filteredPets = petInfoCard.filter((pet) =>
    pet.strPetName.toLowerCase().includes(searchTerm.toLowerCase())
  );
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

  const petsInformation = async () => {
    setLoading(true);
    try {
      const petDataResponse = await getMethod(
        endPoints.petInfo.getPetsInfoData
      );
      if (petDataResponse.data.statusCode === 200) {
        setPetInfoCard(petDataResponse.data.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    petsInformation();
  }, []);
  return {
    isModalVisible,
    selectedPet,
    filteredPets,
    shortDescText,
    showModal,
    handleOk,
    handleCancel,
    isLoading,
    singlePetInfo,
  };
};

export default usePetCardUtils;
