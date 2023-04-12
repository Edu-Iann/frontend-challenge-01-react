import React, { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import styled from 'styled-components';

import Pet from '../../assets/illustrations/dog.png';
import Sun from '../../assets/illustrations/sun.png';
import Watering from '../../assets/illustrations/wateringcan.png';
import { fetchData,Plant } from '../../services/api.ts';
import Loading from '../Loading/LoadingComponent.tsx';
import PlantSection from '../PlantList/PlantSection.tsx';

import SelectInputComponent from './SelectInputComponent.tsx';

const SectionWrapper = styled.header`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 124px;
  margin: 0;
  padding: 0;
  background-color: #FFFFFF;
`;

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
  const [listData, setListData] = useState<Plant[]>([]);
  const [shouldFetch, setShouldFetch] = useState(false);

  const sunOptions = ['Select...', 'no', 'low', 'high'];
  const waterOptions = ['Select...', 'rarely', 'regularly', 'daily'];
  const petOptions = ['Select...', 'yes', 'no'];

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

  const selectInputProps = [
    {
      dimensions: { width: '75px', height: '75px' },
      iconSrc: Sun,
      text: '<b>1.</b> Set the amount of <b>sunlight</b><br /> your plant will get.',
      options: sunOptions,
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
        setSelectedOptions((prev) => ({ ...prev, sunOption: e.target.value })),
    },
    {
      dimensions: { width: '102px', height: '75px' },
      iconSrc: Watering,
      text: '<b>2.</b> How often do you want to<br /> <b>water</b> your plant?',
      options: waterOptions,
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
        setSelectedOptions((prev) => ({ ...prev, waterOption: e.target.value })),
    },
    {
      dimensions: { width: '75px', height: '75px' },
      iconSrc: Pet,
      text: '<b>3</b>. Do you have pets? Do<br /> they <b>chew</b> plants?',
      options: petOptions,
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
        setSelectedOptions((prev) => ({ ...prev, petOption: e.target.value === 'yes' ? true : false })),
    },
  ];

  return (
    <>
      <SectionWrapper>
      {selectInputProps.map((component, index) => (
          <SelectInputComponent
            key={index}
            dimensions={component.dimensions}
            iconSrc={component.iconSrc}
            text={component.text}
            options={component.options}
            onChange={component.onChange}
          />
        ))}
      </SectionWrapper>
      {loading ? <Loading /> : <PlantSection data={listData} />}
    </>
  );
};

export default SelectSection;
