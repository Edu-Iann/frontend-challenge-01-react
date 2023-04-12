import React, { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import styled from 'styled-components';

import Pet from '../../assets/illustrations/dog.png';
import Sun from '../../assets/illustrations/sun.png';
import Watering from '../../assets/illustrations/wateringcan.png';
import { fetchData } from '../../services/api.ts';
import Loading from '../Loading/LoadingComponent.tsx';
import PlantSection from '../PlantList/PlantSection.tsx';

import SelectInputComponent from './SelectInputComponent.tsx';

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

const sunOptions = ['Select...', 'no', 'low', 'high'];
const waterOptions = ['Select...', 'rarely', 'regularly', 'daily'];
const petOptions = ['Select...', 'yes', 'no'];

interface SelectedOptions {
  sunOption: string;
  waterOption: string;
  petOption: string | boolean;
}

const SelectSection = () => {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    sunOption: '',
    waterOption: '',
    petOption: '',
  });

  const [loading, setLoading] = useState(false);
  const [listData, setListData] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(false);

  useEffect(() => {
    const values = Object.values(selectedOptions);
    if (values.includes('') || values.includes('Select...')) return;
    return setShouldFetch(true);
  }, [selectedOptions]);

  const fetchApiData = debounce(async () => {
    const { sunOption, waterOption, petOption } = selectedOptions;
    const data = await fetchData(sunOption, waterOption, petOption);
    setLoading(false);
    setListData(data);
  }, 600);

  useEffect(() => {
    if (shouldFetch) {
      setLoading(true);
      fetchApiData();
      setShouldFetch(false);
    }
  }, [shouldFetch]);

  return (
    <>
      <SectionWrapper>
        <SelectInputComponent
          iconSrc={Sun}
          text='<b>1.</b> Set the amount of <b>sunlight</b><br /> your plant will get.'
          options={sunOptions}
          key={Sun}
          onChange={(e) =>
            setSelectedOptions((prev) => ({
              ...prev,
              sunOption: e.target.value,
            }))
          }
        />
        <SelectInputComponent
          iconSrc={Watering}
          text='<b>2.</b> How often do you want to<br /> <b>water</b> your plant?'
          options={waterOptions}
          key={Watering}
          onChange={(e) =>
            setSelectedOptions((prev) => ({
              ...prev,
              waterOption: e.target.value,
            }))
          }
        />
        <SelectInputComponent
          iconSrc={Pet}
          text='<b>3</b>. Do you have pets? Do<br /> they <b>chew</b> plants?'
          options={petOptions}
          key={Pet}
          onChange={(e) =>
            setSelectedOptions((prev) => ({
              ...prev,
              petOption: e.target.value === 'yes' ? true : false,
            }))
          }
        />
      </SectionWrapper>
      {loading ? <Loading /> : <PlantSection data={listData} />}
    </>
  );
};

export default SelectSection;
