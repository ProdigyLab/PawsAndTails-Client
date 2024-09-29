'use client'
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { getMethod } from "@/utils/api/getMethod";
import { endPoints } from "@/utils/api/route";
import { PetInfoDataProps } from "@/components/ui/features/PetCard/usePetCard.utils";

const PetDetailsPage = () => {
  const params = useParams();
  const { petName, id } = params;

  const [petDetails, setPetDetails] = useState<PetInfoDataProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPetDetails = async () => {
      if (!id) {
        setError("Pet ID is missing");
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      try {
        const response = await getMethod(endPoints.petInfo.getSinglePetInfo(Number(id)));
        if (response.data && response.data.data) {
          setPetDetails(response.data.data);
          setIsLoading(false);
        } else {
          setError("Pet details not found.");
        }
      } catch (err) {
        setError("Failed to fetch pet details.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPetDetails();
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!petDetails) return <div>No pet details available.</div>;

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden">
        <h1 className="text-3xl font-bold mb-4 p-6 bg-gray-200">{petDetails.strPetName}</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6">
            <div className="relative h-64 w-full">
              <Image 
                src={petDetails.strImageURL} 
                layout="fill"
                objectFit="contain"
                alt={petDetails.strPetName} 
              />
            </div>
          </div>
          <div className="md:w-1/2 p-6">
            <p className="text-lg"><strong>Size:</strong> {petDetails.strPetSize}</p>
            <p className="text-lg"><strong>Color:</strong> {petDetails.strPetColor}</p>
            <p className="text-lg"><strong>Food:</strong> {petDetails.strPetFood}</p>
            <p className="text-lg mt-4"><strong>Description:</strong> {petDetails.strPetDesc}</p>
            <p className="text-sm text-gray-500 mt-4">
              Created At: {new Date(petDetails.dteCreatedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetailsPage;