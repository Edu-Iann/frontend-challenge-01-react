import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 1.25rem; 

  @media screen and (max-width: 768px) { 
    width: 48rem;
    height: 30rem;
  }
`;

export const LoadingCircle = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 0.875rem solid #15573F;
  border-top-color: var(--light-olive);
  animation: ${spinAnimation} 1s linear infinite;

  @media screen and (max-width: 768px) {
    width: 10rem;
    height: 10rem;
  }
`;