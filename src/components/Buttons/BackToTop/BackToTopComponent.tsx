import React from 'react';

import ArrowUp from '../../../assets/icons/arrow-up.svg';

import { BackToTop, ButtonTitle, UpArrow } from './styles';


const BackToTopComponent = () => {
  return (
    <BackToTop onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <UpArrow src={ArrowUp} />
      <ButtonTitle>back to the top</ButtonTitle>
    </BackToTop>
  );
};

export default BackToTopComponent;
