import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes para animação do círculo girando
const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Estilo do componente de Loading
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
`;

const LoadingCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 14px solid #15573F;
  border-top-color: #75BC97;
  animation: ${spinAnimation} 1s linear infinite;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingCircle />
    </LoadingContainer>
  );
};

export default Loading;
