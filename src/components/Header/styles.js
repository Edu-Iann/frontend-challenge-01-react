import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 90rem;
  height: 31.25rem;
  position: relative;
  background-color: #75BC97;
  margin: auto;

  @media screen and (max-width: 768px) {
    width: 48rem;
    height: 90rem;
  }
`;

export const LeftLeaves = styled.img`
  position: absolute;
  width: 53.875rem;
  height: 31.25rem;

  @media screen and (max-width: 768px) {
    width: 48rem;
    height: 60rem;
    z-index: 1;
  }
`;

export const Person = styled.img`
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

export const RightLeaves = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 22.563rem;
  height: 31.25rem;
`;

export const Logo = styled.img`
  position: absolute;
  top: 3.563rem;
  left: 18rem;
  width: 13.063rem;
  height: 1.563;
  z-index: 2;

  @media screen and (max-width: 768px) {
    top: -4.75rem;
    left: 5rem;
    width: 22rem;
    height: 22rem;
    z-index: 2;
  }
`;

export const Cta = styled.h1`
  position: absolute;
  width: 25rem;
  height: 15.75rem;
  left: 18rem;
  top: 7.75rem;
  margin: 0;
  padding: 0;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 4.375rem;
  line-height: 5.313rem;

  color: #FFFFFF;

  @media screen and (max-width: 768px) {
    top: 12rem;
    left: 5rem;
    width: 40rem;
    line-height: 7.6rem;
    z-index: 10;
    font-size: 5.938rem;
  }
`;

export const DownArrow = styled.img`
  position: absolute;
  top: 25.438rem;
  left: 18.188rem;
  width: 2.188rem;
  height: 2.438rem;
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