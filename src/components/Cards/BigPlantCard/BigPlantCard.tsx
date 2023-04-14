import React from 'react';

import Rarely from '../../../assets/icons/1-drop.svg';
import Regularly from '../../../assets/icons/2-drops.svg';
import Daily from '../../../assets/icons/3-drops.svg';
import HighSun from '../../../assets/icons/high-sun.svg';
import LowSun from '../../../assets/icons/low-sun.svg';
import NoSun from '../../../assets/icons/no-sun.svg';
import Pet from '../../../assets/icons/pet.svg';
import Favorite from '../../../assets/icons/staff-fav.svg';
import Toxic from '../../../assets/icons/toxic.svg';

import { FavoritePlantCard, FavoritePlantPhoto, PlantIcon, PlantIconContainer, PlantInfo, PlantName, PlantPrice, StaffChoice } from './styles';
import { FavoritePlantProps } from '../../../types/types';

const FavoritePlant: React.FC<FavoritePlantProps> = ({ item }) => {
  const {name, url, price, toxic, water, sun, staff_favorite} = item
  return (
    <FavoritePlantCard key={name}>
      {staff_favorite && <StaffChoice src={Favorite} />}
      <FavoritePlantPhoto src={url} />
      <PlantInfo>
        <PlantName>{name}</PlantName>
        <div>
          <PlantPrice>{'$' + price}</PlantPrice>
          <PlantIconContainer>
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
          </PlantIconContainer>
        </div>
      </PlantInfo>
    </FavoritePlantCard>
  );
};

export default FavoritePlant;
