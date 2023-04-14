import React from 'react';

import ArrowDown from '../../../assets/icons/inputArrow.svg';
import { Container, Icon, InputArrow, SelectInput, Text } from './styles';
import { SelectProps } from '../../../types/types';

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
