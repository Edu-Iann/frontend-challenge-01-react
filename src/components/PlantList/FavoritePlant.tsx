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
  width: 437px;
  height: 510px;
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
  height: 353px;
`;

const StaffChoice = styled.img`
  width: 189px;
  height: 43px;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  position: relative;
  top: 17px;
  left: -124px;
`;

const PlantInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0;
  margin: 10px;
  width: 200px;
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
font-size: 16px;
line-height: 28px;
color: #257556;
margin: 0;
padding: 0;
`;

const PlantName = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
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
  return (
    <FavoritePlantCard key={item.name}>
      <StaffChoice src={Favorite} />
      <FavoritePlantPhoto src={item.url} />
      <PlantName>{item.name}</PlantName>
      <PlantInfo>
        <PlantPrice>{'$' + item.price}</PlantPrice>
        <div>
          <PlantIcon
            src={
              item.sun === 'high'
                ? HighSun
                : item.sun === 'low'
                ? LowSun
                : NoSun
            }
          />
          <PlantIcon src={item.toxic ? Toxic : Pet} />
          <PlantIcon
            src={
              item.water === 'rarely'
                ? Rarely
                : item.water === 'regularly'
                ? Regularly
                : Daily
            }
          />
        </div>
      </PlantInfo>
    </FavoritePlantCard>
  );
};

export default FavoritePlant;