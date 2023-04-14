import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Rarely from '../../../assets/icons/1-drop.svg';
import Regularly from '../../../assets/icons/2-drops.svg';
import Daily from '../../../assets/icons/3-drops.svg';
import HighSun from '../../../assets/icons/high-sun.svg';
import LowSun from '../../../assets/icons/low-sun.svg';
import NoSun from '../../../assets/icons/no-sun.svg';
import Pet from '../../../assets/icons/pet.svg';
import Toxic from '../../../assets/icons/toxic.svg';
import FavoritePlant from '../BigPlantCard/BigPlantCard';
import { FavoritePlantProps } from '../../../types/types';
import { PlantCard, PlantIcon, PlantInfo, PlantName, PlantPhoto, PlantPrice } from './styles';


const RegularPlant: React.FunctionComponent<FavoritePlantProps> = ({
  item,
}: FavoritePlantProps) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })

  const { name, url, price, sun, water, toxic } = item;
  return (
    !isMobile ? (
    <PlantCard>
      <PlantPhoto src={url} />
      <PlantName>{name}</PlantName>
      <PlantInfo>
        <PlantPrice>
          {price
            .toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })
            .replace(/(\.00)$/g, '')}
        </PlantPrice>
        <div>
          <PlantIcon
            src={
              sun === 'high'
                ? HighSun
                : sun === 'low'
                ? LowSun
                : NoSun
            }
          />
          <PlantIcon src={toxic ? Toxic : Pet} />
          <PlantIcon
            src={
              water === 'rarely'
                ? Rarely
                : water === 'regularly'
                ? Regularly
                : Daily
            }
          />
        </div>
      </PlantInfo>
    </PlantCard>
    )
    :
    <FavoritePlant item={item } />
  );
};

export default RegularPlant;
