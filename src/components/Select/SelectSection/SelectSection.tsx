import React, { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

import Pet from '../../../assets/illustrations/dog.png';
import Sun from '../../../assets/illustrations/sun.png';
import Watering from '../../../assets/illustrations/wateringcan.png';
import { fetchData } from '../../../services/api';
import { useMediaQuery } from 'react-responsive';

import Loading from '../../Loading/LoadingComponent';

import SelectInputComponent from '../SelectInputComponent/SelectInputComponent';
import PlantSection from '../../PlantSection/PlantSection';
import { SectionWrapper } from './styles';
import { Plant, SelectedOptions } from '../../../types/types';

const SelectSection = () => {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    sunOption: '',
    waterOption: '',
    petOption: '',
  });
  const [loading, setLoading] = useState(false);
  const [listData, setListData] = useState<Plant[]>([]);
  const [shouldFetch, setShouldFetch] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

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
      dimensions: {
        width: !isMobile ? '75px' : '135px',
        height: !isMobile ? '75px' : '135px',
      },
      iconSrc: Sun,
      text: '<b>1.</b> Set the amount of <b>sunlight</b><br /> your plant will get.',
      options: sunOptions,
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
        setSelectedOptions((prev) => ({ ...prev, sunOption: e.target.value })),
    },
    {
      dimensions: {
        width: !isMobile ? '103px' : '163px',
        height: !isMobile ? '75px' : '125px',
      },
      iconSrc: Watering,
      text: '<b>2.</b> How often do you want to<br /> <b>water</b> your plant?',
      options: waterOptions,
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
        setSelectedOptions((prev) => ({
          ...prev,
          waterOption: e.target.value,
        })),
    },
    {
      dimensions: {
        width: !isMobile ? '75px' : '135px',
        height: !isMobile ? '75px' : '135px',
      },
      iconSrc: Pet,
      text: '<b>3</b>. Do you have pets? Do<br /> they <b>chew</b> plants?',
      options: petOptions,
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
        setSelectedOptions((prev) => ({
          ...prev,
          petOption: e.target.value === 'yes' ? true : false,
        })),
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
