import React from 'react';
import styled from 'styled-components';

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
  box-sizing: border-box;
  border: 1px solid #A8A8A8;
  border-radius: 19px;
  height: 40px;
  width: 220px;
  color: #A8A8A8;
  padding: 0 10px;
`;

interface SelectProps {
  iconSrc: string;
  text: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInputComponent: React.FC<SelectProps> = ({
  iconSrc,
  text,
  options,
  onChange,
}) => {
  return (
    <Container>
      <Icon width={'75px'} height={'75px'} src={iconSrc} />
      <Text dangerouslySetInnerHTML={{ __html: text }} />
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
