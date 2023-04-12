import React from 'react';
import styled from 'styled-components';

import ArrowDown from '../../assets/icons/inputArrow.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img`
  margin-bottom: 14px;
`;

const Text = styled.div`
  color: #797979;
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 25px;
`;

const SelectInput = styled.select`
  border: 1px solid #A8A8A8;
  border-radius: 19px;
  height: 40px;
  width: 220px;
  color: #A8A8A8;
  padding: 0 20px;
  appearance: none;

  @media screen and (max-width: 768px) {
  border: 10px solid #A8A8A8;
}
`;

const InputArrow = styled.img`
  width: 20px;
  height: 10px;
  position: relative;
  top: 27px;
  left: 185px;
  pointer-events: none;
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
