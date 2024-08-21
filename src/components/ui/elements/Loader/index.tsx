import React from 'react';
import styled from 'styled-components';
import { FaPaw } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white; 
  z-index: 9999; 
  font-family: 'Londrina Solid', cursive;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 20px;
`;

const Loader = styled.div`
  position: relative;
  width: 250px;
  height: 50px;
`;

const Icon = styled.span`
  position: absolute;
`;

const LeftPaw = styled(Icon)`
  animation: move-left-paw 3.2s ease infinite;
  color: #4b3832;
  left: 0;
  transform: rotate(75deg);

  @keyframes move-left-paw {
    0% {
      left: 0%;
      opacity: 0;
    }
    15% {
      left: 25%;
      opacity: 1;
      color: #4b3832;
    }
    25% {
      left: 25%;
      opacity: 0;
    }
    50% {
      left: 75%;
      opacity: 1;
      color: #be9b7b;
    }
    75% {
      left: 75%;
      opacity: 0;
    }
    100% {
      left: 100%;
      opacity: 0;
    }
  }
`;

const RightPaw = styled(Icon)`
  transform: rotate(100deg);
  top: 20px;
  animation: move-right-paw 3.2s ease infinite;
  color: #be9b7b;

  @keyframes move-right-paw {
    0% {
      left: 15%;
      opacity: 1;
      color: #be9b7b;
    }
    15% {
      left: 15%;
      opacity: 0;
    }
    25% {
      left: 50%;
      opacity: 1;
      color: #4b3832;
    }
    50% {
      left: 50%;
      opacity: 0;
    }
    75% {
      left: 100%;
      opacity: 1;
      color: #be9b7b;
    }
    100% {
      left: 100%;
      opacity: 0;
    }
  }
`;
interface PetLoaderProps {
    isLoading: boolean;
  }

const PetLoader: React.FC<PetLoaderProps> = ({ isLoading }) => {
  return isLoading ? (
    <Container>
      <Title>Finding your pet...</Title>
      <Loader>
        <LeftPaw>
          <FaPaw size={32} />
        </LeftPaw>
        <RightPaw>
          <FaPaw size={32} />
        </RightPaw>
      </Loader>
    </Container>
  ) : null;
};

export default PetLoader;
