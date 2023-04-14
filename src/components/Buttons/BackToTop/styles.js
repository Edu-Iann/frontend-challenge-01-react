import styled from 'styled-components';

export const BackToTop = styled.button`
  border: 1px solid #15573F;
  border-radius: 1.563rem;
  width: 56.25rem;
  height: 3.125rem;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 1.875rem auto;
  transition: background-color 0.3s ease;

  :hover {
    background-color: var(--transparent-olive);
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 6rem;
    border-radius: 6rem;
  }
  `;

export const ButtonTitle = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.25rem;
  color: #196146;
  
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const UpArrow = styled.img`
  width: 1.563rem;
  height: 1.563rem;
  margin-right: 1.563rem;

  @media screen and (max-width: 768px) {
    width: 3.125rem;
    height: 3.125rem;
  }
`;