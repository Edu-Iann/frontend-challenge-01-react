import React from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
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
  padding: 0 20px;
`;

const SelectComponent = ({ icon, text, options, dimensions }) => {

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   const handlers = {
  //     value: setExpenseValue,
  //     description: setDescription,
  //     currency: setSelectedCurrency,
  //     method: setMethod,
  //     tag: setTag,
  //   };
  //   const handler = handlers[name];
  //   handler(value);
  // };


  return (
    <SelectContainer>
      {icon && <Icon width={dimensions.width} height={dimensions.height} src={icon} />}
      {text && <Text dangerouslySetInnerHTML={{ __html: text }} />}
      <SelectInput>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </SelectInput>
    </SelectContainer>
  );
};

export default SelectComponent;