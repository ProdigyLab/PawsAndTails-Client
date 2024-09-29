import React from 'react';
import usePetCardUtils from './usePetCard.utils';

const SinglePetInfo = ({ petId }: { petId: number }) => {
    const { singlePetInfo, isLoading } = usePetCardUtils(petId);
    return (
        <div>
             {singlePetInfo ? (
        <div>
          <h2>{singlePetInfo.strPetName}</h2>
          <p>{singlePetInfo.strPetDesc}</p>
          <img src={singlePetInfo.strImageURL} alt={singlePetInfo.strPetName} />
        </div>
      ) : (
        <p>No pet found.</p>
      )}
        </div>
    );
};

export default SinglePetInfo;