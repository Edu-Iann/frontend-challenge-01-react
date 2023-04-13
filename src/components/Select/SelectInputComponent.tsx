import React from 'react';
import styled from 'styled-components';

import ArrowDown from '../../assets/icons/inputArrow.svg';
import { useMediaQuery } from 'react-responsive';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    /* margin: auto; */
  }
`;

const Icon = styled.img`
  margin-bottom: 0.875rem;
`;

const Text = styled.div`
  color: #797979;
  font-style: normal;
  font-size: 0.875rem;
  line-height: 1.375rem;
  margin-bottom: 0.625rem;

  @media screen and (max-width: 768px) {
  font-size: 1.875rem;
  line-height: 2.375rem;
  
  }
`;

const SelectInput = styled.select`
  border: 1px solid #A8A8A8;
  border-radius: 1.8rem;
  height: 2.5rem;
  width: 13.75rem;
  color: #A8A8A8;
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

const InputArrow = styled.img`
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

interface Dimensions {
  width: string;
  height: string;
}

interface SelectProps {
  iconSrc: string;
  text: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  dimensions: Dimensions;
}

const SelectInputComponent: React.FC<SelectProps> = ({
  iconSrc,
  text,
  options,
  onChange,
  dimensions,
}) => {

  return (
    <Container>
      <Icon width={dimensions.width} height={dimensions.height} src={iconSrc} />
      <Text dangerouslySetInnerHTML={{ __html: text }} />
      <InputArrow src={ArrowDown} />
      <SelectInput onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </SelectInput>
    </Container>
  );
};

export default SelectInputComponent;
