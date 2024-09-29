// import React, { useEffect, useState } from "react";
// import { Card, Modal, Skeleton } from "antd";
// import Image from "next/image";
// import usePetCardUtils from "./usePetCard.utils";
// import { IPetType } from "@/types";
// import { useTheme } from '@/components/ui/theme';
// import { useRouter } from "next/navigation";

// // You can create a type alias if needed

// const PetCardComponent = () => {
//   const { isDarkMode } = useTheme();
//   const router = useRouter(); 
//   const {
//     isModalVisible,
//     selectedPet,
//     filteredPets,
//     shortDescText,
//     showModal,
//     handleOk,
//     handleCancel,
//     isLoading,
//   } = usePetCardUtils();

//   const skeletonCount = filteredPets.length;
//   const SkeletonCard = () => (
//     <Card className={`my-2 w-full sm:w-[70%] ${isDarkMode ? 'shadow-none' : 'shadow-lg shadow-gray-200'}`}>
//       <Skeleton.Image className="w-full h-48" active />
//       <Skeleton active paragraph={{ rows: 4 }} />
//     </Card>
//   );
//   const handleCardClick = (pet: IPetType) => {
//     router.push(`/singlePetInfo/${pet.strPetName}/${pet.id}`);
//   };
//   return (
//     <div className={`pt-20 min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
//       <div>
//         <h1 className={`text-center font-semibold uppercase text-xl ${isDarkMode ? 'text-white' : 'text-black'}`}>
//           Our Pet Shop
//         </h1>
//       </div>
//       {isLoading ?  (
//         // Dynamically render skeleton cards during loading
//         Array.from({ length: 8 }).map((_, index) => (
//             <SkeletonCard key={index} />
//           ))
//       ) : filteredPets.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 py-5 px-10">
//           {filteredPets.map((pet) => {
//             const convertedPet: IPetType = {
//               id: pet.intPetInfoId,
//               intPetInfoId: pet.intPetInfoId,
//               intId: pet.intId, // Map intId
//               strPetName: pet.strPetName, // Pet name remains the same
//               imageUrl: pet.strImageURL, // Map strImageURL to imageUrl
//               fullDescription: pet.strPetDesc, // Map strPetDesc to fullDescription
//               strPetDesc: pet.strPetDesc, // Keep strPetDesc as it is
//               size: pet.strPetSize, // Map strPetSize to size
//               color: pet.strPetColor, // Map strPetColor to color
//               strPetFood: pet.strPetFood, // Map pet food
//               dteCreatedAt: new Date(pet.dteCreatedAt), // Convert string to Date
//               strPetSize: pet.strPetSize, // Keep strPetSize as it is
//               strPetColor: pet.strPetColor, // Keep strPetColor as it is
//             };

//             return (
//               <Card
//                 key={pet.intId}
//                 onClick={() => handleCardClick(convertedPet)} 
//                 className={`hover:shadow-lg transition-shadow my-2 flex flex-col w-full sm:w-[70%] justify-between items-center ${isDarkMode ? 'shadow-none' : 'shadow-lg shadow-gray-200'}`}
//                 cover={
//                   <Image
//                     src={convertedPet.imageUrl}
//                     alt={convertedPet.strPetName}
//                     width={200}
//                     height={200}
//                     className="object-cover w-full h-48"
//                   />
//                 }
//               >
//                 <div className="w-full">
//                   <h2 className="text-xl font-bold">
//                     {convertedPet.strPetName}
//                   </h2>
//                   <p>Size: {convertedPet.size}</p>
//                   <p>Color: {convertedPet.color}</p>
//                   <p>Food: {convertedPet.strPetFood}</p>
//                   <p
//                     className="cursor-pointer font-medium"
//                     onClick={() => showModal(convertedPet)} // Now pass the converted object
//                   >
//                     Desc:{" "}
//                     <span>{shortDescText(convertedPet.strPetDesc, 50)}</span>
//                   </p>
//                 </div>
//               </Card>
//             );
//           })}
//         </div>
//       ) : (
//         <div className="flex justify-center items-center h-64">
//           <p className="text-xl text-gray-500">No Pets Found In Your Search.</p>
//         </div>
//       )}
//       <Modal
//         title={selectedPet?.strPetName}
//         open={isModalVisible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         className=""
//       >
//         <p>{selectedPet?.strPetDesc}</p>
//         <p>
//           Created At:{" "}
//           {new Date(selectedPet?.dteCreatedAt ?? "").toLocaleDateString()}
//         </p>
//       </Modal>
//     </div>
//   );
// };

// export default PetCardComponent;

import React from "react";
import { Card, Modal, Skeleton } from "antd";
import Image from "next/image";
import usePetCardUtils from "./usePetCard.utils";
import { IPetType } from "@/types";
import { useTheme } from '@/components/ui/theme';
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const PetCardComponent = () => {
  const { isDarkMode } = useTheme();
  const { data: session, status } = useSession();
  const router = useRouter();
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

  const SkeletonCard = () => (
    <Card className={`my-2 w-full sm:w-[70%] ${isDarkMode ? 'bg-gray-800 shadow-none' : 'bg-white shadow-lg shadow-gray-200'}`}>
      <Skeleton.Image className="w-full h-48" active />
      <Skeleton active paragraph={{ rows: 0 }} />
      <Skeleton.Input style={{ width: '60%', marginTop: '10px' }} active size="small" />
      <Skeleton.Input style={{ width: '40%', marginTop: '10px' }} active size="small" />
      <Skeleton.Input style={{ width: '50%', marginTop: '10px' }} active size="small" />
      <Skeleton.Input style={{ width: '90%', marginTop: '10px' }} active size="small" />
    </Card>
  );

  const handleCardClick = (pet: IPetType) => {
    if (status === "authenticated") {
      router.push(`/singlePetInfo/${pet.strPetName}/${pet.id}`);
    } else {
      // Store the intended destination
      sessionStorage.setItem('intendedDestination', `/singlePetInfo/${pet.strPetName}/${pet.id}`);
      router.push('/api/auth/signin');
    }
  };

  return (
    <div className={`pt-20 min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div>
        <h1 className={`text-center font-semibold uppercase text-xl ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Our Pet Shop
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 py-5 px-10">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => <SkeletonCard key={index} />)
          : filteredPets.length > 0
          ? filteredPets.map((pet) => {
              const convertedPet: IPetType = {
                id: pet.intPetInfoId,
                intPetInfoId: pet.intPetInfoId,
                intId: pet.intId,
                strPetName: pet.strPetName,
                imageUrl: pet.strImageURL,
                fullDescription: pet.strPetDesc,
                strPetDesc: pet.strPetDesc,
                size: pet.strPetSize,
                color: pet.strPetColor,
                strPetFood: pet.strPetFood,
                dteCreatedAt: new Date(pet.dteCreatedAt),
                strPetSize: pet.strPetSize,
                strPetColor: pet.strPetColor,
              };

              return (
                <Card
                  key={pet.intId}
                  onClick={() => handleCardClick(convertedPet)}
                  className={`hover:shadow-lg transition-shadow my-2 flex flex-col w-full sm:w-[70%] justify-between items-center ${
                    isDarkMode ? 'bg-gray-800 shadow-none' : 'bg-white shadow-lg shadow-gray-200'
                  }`}
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
                    <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                      {convertedPet.strPetName}
                    </h2>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Size: {convertedPet.size}</p>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Color: {convertedPet.color}</p>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Food: {convertedPet.strPetFood}</p>
                    <p
                      className={`cursor-pointer font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                      onClick={() => showModal(convertedPet)}
                    >
                      Desc: <span>{shortDescText(convertedPet.strPetDesc, 50)}</span>
                    </p>
                  </div>
                </Card>
              );
            })
          : (
            <div className="flex justify-center items-center h-64 col-span-full">
              <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>No Pets Found In Your Search.</p>
            </div>
          )}
      </div>
      <Modal
        title={selectedPet?.strPetName}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className={isDarkMode ? 'ant-modal-dark' : ''}
      >
        <p>{selectedPet?.strPetDesc}</p>
        <p>
          Created At: {new Date(selectedPet?.dteCreatedAt ?? "").toLocaleDateString()}
        </p>
      </Modal>
    </div>
  );
};

export default PetCardComponent;