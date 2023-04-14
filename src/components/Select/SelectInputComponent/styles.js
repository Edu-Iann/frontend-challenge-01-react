import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    /* margin: auto; */
  }
`;

export const Icon = styled.img`
  margin-bottom: 0.875rem;
`;

export const Text = styled.div`
  color: var(--dark-gray);
  font-style: normal;
  font-size: 0.875rem;
  line-height: 1.375rem;
  margin-bottom: 0.625rem;

  @media screen and (max-width: 768px) {
  font-size: 1.875rem;
  line-height: 2.375rem;
  
  }
`;

export const SelectInput = styled.select`
  border: 1px solid var(--gray);
  border-radius: 1.8rem;
  height: 2.5rem;
  width: 13.75rem;
  color: var(--gray);
  padding: 0 1.25rem;
  appearance: none;

  @media screen and (max-width: 768px) {
  border-radius: 4rem;
  width: 33rem;
  height: 5rem;
  font-size: 1.5rem;
  padding: 0 2rem;

}
`;

export const InputArrow = styled.img`
  width: 1.25rem; 
  height: 0.625rem; 
  position: relative;
  top: 1.6875rem; 
  left: 11.5625rem; 
  pointer-events: none;

  @media screen and (max-width: 768px) {
  top: 3.5rem; 
  left: 29.2rem; 
  width: 2rem;
  height: 2rem;
}
`;