import React from 'react';
import styled from 'styled-components';
// import { useMediaQuery } from 'react-responsive';

const HeaderWrapper = styled.header`
  width: 1440px;
  height: 500px;
  position: relative;
  top: 0;
  background-color: #75BC97;
`;

const LeftLeaves = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 862px;
  height: 500px;
`;

const Person = styled.img`
  position: absolute;
  top: 0;
  left: 800px;
  width: 335px;
  height: 425px;
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
`;

const DownArrow = styled.img`
  position: absolute;
  top: 407px;
  left: 291px;
  width: 35px;
  height: 39px;
  z-index: 3;
`;

export const HeaderComponent = () => {
  // const isMobile = useMediaQuery({ maxWidth: 768 })
  // Esse módulo seria usado para gerenciar quando a aplicação estaria num modo de celular
  // com isso, poderia ser criada um novo componente melhor construido para atender ao design mobile
  return (
    <HeaderWrapper>
      <Logo src={'../src/assets/icons/logo-white.svg'} alt='Imagem 1' />
      <LeftLeaves
        src={'../src/assets/hero/desktop/left-leaves.png'}
        alt='Imagem 1'
      />
      <Person
        src={'../src/assets/hero/desktop/plantperson.png'}
        alt='Imagem 1'
      />
      <RightLeaves
        src={'../src/assets/hero/desktop/right-leaves.png'}
        alt='Imagem 1'
      />
      <Cta> Find your next green friend </Cta>
      <DownArrow src={'../src/assets/icons/arrow-down.svg'} alt='Imagem 1' />
    </HeaderWrapper>
  );
};
