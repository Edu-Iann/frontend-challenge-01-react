import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import LeftDesktopLeaves from '../../assets/hero/desktop/left-leaves.png'
import RightDesktopLeaves from '../../assets/hero/desktop/right-leaves.png'
import DesktopPerson from '../../assets/hero/desktop/plantperson.png'
import LogoText from '../../assets/icons/logo-white.svg'
// import DownArrowIcon from '../../assets/icons/arrow-down.svg'
import DownArrowIcon from '../../assets/icons/bolder-arrowdown.svg'

import MobileLeaves from '../../assets/hero/mobile/mobile-leaves.png'
import MobilePerson from '../../assets/hero/mobile/mobile-plantperson.png'


const HeaderWrapper = styled.header`
  width: 90rem;
  height: 31.25rem;
  position: relative;
  background-color: #75BC97;
  margin: auto;

  @media screen and (max-width: 768px) {
    width: 48rem;
    height: 90rem;
    /* display: flex; */
  }
`;

const LeftLeaves = styled.img`
  position: absolute;
  width: 862px;
  height: 500px;

  @media screen and (max-width: 768px) {
    width: 48rem;
    height: 60rem;
    z-index: 1;
  }
`;

const Person = styled.img`
  position: absolute;
  top: 2rem;
  left: 50rem; 
  width: 20.9rem;
  height: 26.56rem;

  @media screen and (max-width: 768px) {
    left: 4rem;
    bottom: -40rem;
    margin: auto;
    width: 40rem;
    height: 40rem;
    z-index: 0;
  }
`;

const RightLeaves = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 361px;
  height: 500px;
`;

const Logo = styled.img`
  position: absolute;
  top: 57px;
  left: 288px;
  width: 209px;
  height: 25px;
  z-index: 2;

  @media screen and (max-width: 768px) {
    top: -4.75rem;
    left: 5rem;
    width: 22rem;
    height: 22rem;
    z-index: 2;
  }
`;

const Cta = styled.h1`
  position: absolute;
  width: 400px;
  height: 252px;
  left: 288px;
  top: 124px;
  margin: 0;
  padding: 0;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 85px;

  color: #FFFFFF;

  @media screen and (max-width: 768px) {
    top: 12rem;
    left: 5rem;
    width: 40rem;
    line-height: 7.6rem;
    z-index: 10;
    font-size: 95px;
  }
`;

const DownArrow = styled.img`
  position: absolute;
  top: 407px;
  left: 291px;
  width: 35px;
  height: 39px;
  z-index: 3;
  
  @media screen and (max-width: 768px) {
  position: absolute;
  width: 4.5rem;
  height: 4.5rem;
  left: 13.5%;
  right: 76.56%;
  top: 40.65%;
  bottom: 51.77%;
  transform: scale(1.1)
  }
`;

export const HeaderComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })

  return (
    <HeaderWrapper>
      <Logo src={LogoText} alt='Imagem 1' />
      <LeftLeaves
        src={!isMobile ? LeftDesktopLeaves : MobileLeaves}
        // src={LeftDesktopLeaves}
        alt='Imagem 1'
      />
      <Person
        src={!isMobile ? DesktopPerson : MobilePerson}
        alt='Imagem 1'
      />
      {!isMobile && <RightLeaves
        src={RightDesktopLeaves}
        alt='Imagem 1'
      />}
      <Cta> Find your next green friend </Cta>
      <DownArrow src={DownArrowIcon} alt='Imagem 1' />
    </HeaderWrapper>
  );
};
