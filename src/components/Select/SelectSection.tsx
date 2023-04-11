import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Pet from '../../assets/illustrations/dog.png'
import Sun from '../../assets/illustrations/sun.png'
import Watering from '../../assets/illustrations/wateringcan.png'
import debounce from 'lodash.debounce';
import { fetchData } from '../../services/api';
import PlantSection from '../PlantList/PlantSection';
import Loading from '../Loading/LoadingComponent';


const SectionWrapper = styled.header`
  width: 1440px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 124px;
  margin: 0;
  padding: 0;
`; 

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
  padding: 0 10px;
`;

const sunOptions = ["Select...", "no", "low", "high"];
const waterOptions = ["Select...","rarely", "regularly", "daily"];
const petOptions = ["Select...","yes", "no"];

interface SelectedOptions {
  sunOption: string;
  waterOption: string;
  petOption: string | boolean;
}

const SelectSection = () => {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    sunOption: "",
    waterOption: "",
    petOption: "",
  });

  const [loading, setLoading] = useState(false)
  const [listData, setListData] = useState([])
  const [shouldFetch, setShouldFetch] = useState(false)

  useEffect(() => {
    const values = Object.values(selectedOptions);
    if (values.includes("") || values.includes("Select...")) return
    return setShouldFetch(true);
    
  }, [selectedOptions]);

  const fetchApiData = debounce(async () => {
    const { sunOption, waterOption, petOption } = selectedOptions;
    const data = await fetchData(sunOption, waterOption, petOption)
    setLoading(false)
    setListData(data)
    
  }, 600);

  useEffect(() => {
    if (shouldFetch) {
      setLoading(true)
      fetchApiData();
      setShouldFetch(false)
    }
  }, [shouldFetch]);


  return (
    <>
    <SectionWrapper>
      <SelectContainer>
        <Icon width={"75px"} height={"75px"} src={Sun} />
        <Text dangerouslySetInnerHTML={
          { __html: "<b>1.</b> Set the amount of <b>sunlight</b><br /> your plant will get." }
        } 
        />
        <SelectInput
        onChange={(e) => setSelectedOptions(prev => ({
          ...prev,
          sunOption: e.target.value
        }))
      }
      >
          {sunOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </SelectInput>
      </SelectContainer>
      <SelectContainer>
        <Icon width={"104px"} height={"75px"} src={Watering} />
        <Text dangerouslySetInnerHTML={
          { __html: "<b>2.</b> How often do you want to<br /> <b>water</b> your plant?" }
        } 
        />
        <SelectInput onChange={(e) => 
        setSelectedOptions(prev => ({
          ...prev,
          waterOption: e.target.value
        }))
      }
      >
          {waterOptions.map((option, index) => (
            <option key={index} value={option} >
              {option}
            </option>
          ))}
        </SelectInput>
      </SelectContainer>
      <SelectContainer>
        <Icon width={"75px"} height={"75px"} src={Pet} />
        <Text dangerouslySetInnerHTML={
          { __html: "<b>3</b>. Do you have pets? Do<br /> they <b>chew</b> plants?" }
        } 
        />
        <SelectInput 
        onChange={(e) => setSelectedOptions(prev => ({
          ...prev,
          petOption: e.target.value === "yes" ? true : false
        }))
      }
      >
          {petOptions.map((option, index) => (
            <option key={index} value={option} >
              {option}
            </option>
          ))}
        </SelectInput>
      </SelectContainer>
    </SectionWrapper>
    {loading ?
    <Loading /> :
    <PlantSection data={listData}/>
    }
    </>
  )
}

export default SelectSection