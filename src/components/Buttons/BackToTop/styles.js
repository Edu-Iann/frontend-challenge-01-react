import styled from 'styled-components';

export const BackToTop = styled.button`
  border: 1px solid #15573F;
  border-radius: 25px;
  width: 900px;
  height: 50px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 30px auto;
  transition: background-color 0.3s ease;

  :hover {
    background-color: #99d6c088;
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
  font-size: 16px;
  line-height: 20px;
  color: #196146;
  
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const UpArrow = styled.img`
  width: 25px;
  height: 25px;
  color: red;
  margin-right: 25px;

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;