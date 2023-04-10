import React from 'react'
import styled from 'styled-components';
import SelectComponent from './SelectComponent';
import Dog from '../../assets/illustrations/dog.png'
import Sun from '../../assets/illustrations/sun.png'
import Watering from '../../assets/illustrations/wateringcan.png'

const SectionWrapper = styled.header`
  width: 1440px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  margin: 0;
  padding: 0;
`; 

const SelectMap = [
  {
    icon: Sun,
    text: "<b>1.</b> Set the amount of <b>sunlight</b><br /> your plant will get.",
    options: ["Select...","no", "low", "high"],
    dimensions: {
      width: "75px",
      height: "75px"
    }
  },
  {
    icon: Watering,
    text: "<b>2.</b> How often do you want to<br /> <b>water</b> your plant?.",
    options: ["Select...","rarely", "regularly", "daily"],
    dimensions: {
      width: "103px",
      height: "75px"
    }
  },
  {
    icon: Dog,
    text: "<b>3</b>. Do you have pets? Do<br /> they <b>chew</b> plants? ",
    options: ["Select...","yes", "no"],
    dimensions: {
      width: "75px",
      height: "62px"
    }
  },
]

const SelectSection = () => {
  return (
    <SectionWrapper>
      {SelectMap.map(item => {
        return (
        <SelectComponent
        key={item.icon}
        icon={item.icon}
        text={item.text}
        options={item.options}
        dimensions={item.dimensions}
        />
        )})}

    </SectionWrapper>
  )
}

export default SelectSection