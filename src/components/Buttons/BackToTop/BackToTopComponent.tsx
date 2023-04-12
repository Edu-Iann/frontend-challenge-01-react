import React from 'react';
import styled from 'styled-components';

import ArrowUp from '../../../assets/icons/arrow-up.svg';


const BackToTop = styled.button`
  border: 1px solid #15573F;
border-radius: 25px;
width: 900px;
height: 50px;
background-color: transparent;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
margin: 20px auto;
transition: background-color 0.3s ease;

  :hover {
    background-color: #99d6c088;
  }
`;

const ButtonTitle = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #196146;


`;

const UpArrow = styled.img`
  width: 25px;
  height: 25px;
  color: red;
  margin-right: 25px;
  
`;

const BackToTopComponent = () => {
  return (
    <BackToTop onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <UpArrow src={ArrowUp} />
      <ButtonTitle>back to the top</ButtonTitle>
    </BackToTop>
  );
};

export default BackToTopComponent;
