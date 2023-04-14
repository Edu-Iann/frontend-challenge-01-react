import React from 'react';
import { useMediaQuery } from 'react-responsive';

import LeftDesktopLeaves from '../../assets/hero/desktop/left-leaves.png'
import RightDesktopLeaves from '../../assets/hero/desktop/right-leaves.png'
import DesktopPerson from '../../assets/hero/desktop/plantperson.png'
import LogoText from '../../assets/icons/logo-white.svg'
import DownArrowIcon from '../../assets/icons/bolder-arrowdown.svg'
import MobileLeaves from '../../assets/hero/mobile/mobile-leaves.png'
import MobilePerson from '../../assets/hero/mobile/mobile-plantperson.png'

import { Cta, DownArrow, HeaderWrapper, LeftLeaves, Logo, Person, RightLeaves } from './styles';

export const HeaderComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })

  return (
    <HeaderWrapper>
      <Logo src={LogoText} alt='Imagem 1' />
      <LeftLeaves
        src={!isMobile ? LeftDesktopLeaves : MobileLeaves}
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
