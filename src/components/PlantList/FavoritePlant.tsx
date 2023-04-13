import React from 'react';
import styled from 'styled-components';

import Rarely from '../../assets/icons/1-drop.svg';
import Regularly from '../../assets/icons/2-drops.svg';
import Daily from '../../assets/icons/3-drops.svg';
import HighSun from '../../assets/icons/high-sun.svg';
import LowSun from '../../assets/icons/low-sun.svg';
import NoSun from '../../assets/icons/no-sun.svg';
import Pet from '../../assets/icons/pet.svg';
import Favorite from '../../assets/icons/staff-fav.svg';
import Toxic from '../../assets/icons/toxic.svg';

const FavoritePlantCard = styled.div`
  background: #FFFFFF;
  border-radius: 5px;
  width: 435px;
  height: 515px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-row: span 2;
  grid-column: span 2;
  margin: 0;
  padding: 0;
`;

const FavoritePlantPhoto = styled.img`
  width: 300x;
  height: 355px;
`;

const StaffChoice = styled.img`
  width: 190px;
  height: 45px;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  position: relative;
  top: 18px;
  left: -124px;
`;

const PlantInfo = styled.div`
  display: flex;
  padding: 0;
  margin: 10px;
  width: 381px;
`;

const PlantIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  border-radius: 5px;
`;

const PlantIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 4px;
`;

const PlantPrice = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
font-size: 24px;
line-height: 28px;
  color: #257556;
margin: 0 0 16px 0;
  padding: 0;

`;

const PlantName = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 37px;
  color: #1E6B4E;
  margin: 0;
  padding: 0;
  justify-self: end;
`;

interface FavoritePlantProps {
  item: {
    name: string;
    url: string;
    price: number;
    sun: string;
    toxic: boolean;
    water: string;
  };
}

const FavoritePlant: React.FC<FavoritePlantProps> = ({ item }) => {
  const {name, url, price, toxic, water, sun} = item
  return (
    <FavoritePlantCard key={name}>
      <StaffChoice src={Favorite} />
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
