import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import PickIcon from '../../assets/illustrations/pick.png';
import BackToTopComponent from '../Buttons/BackToTop/BackToTopComponent.tsx';

import FavoritePlant from './FavoritePlant.tsx';
import { NoPlant } from './NoPlant.tsx';
import RegularPlant from './RegularPlant.tsx';

// CARDS STYLE

const Pick = styled.img`
  width: 158px;
  height: 78px;
  margin: 50px 0 20px;
  padding-left: 20px;
`;

const SectionTitle = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 55px;
  line-height: 67px;
  margin: 0 0 20px 0;
  padding-left: 20px;
`;

const PlantListContainer = styled.div`
  width: 1440px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  flex-wrap: wrap;
  margin: auto;
  background-color: #F6F6F6;
`;

const PlantListWrapper = styled.div`
  width: 900px;
  height: 100%;
  display: flex;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin: auto;
  padding: 20px;
  background-color: #F6F6F6;
`;

interface Plant {
  id: number;
  name: string;
  sun: string;
  water: string;
  url: string;
  price: number;
  toxic: boolean;
  staff_favorite: boolean;
}

const PlantSection: React.FunctionComponent<{ data: Plant[] }> = ({ data }) => {
  const [sortedData, setSortedData] = useState(data);

  const sortStaffFavoritesFirst = (array: Plant[]) => {
    const staffFavorites = array.filter((item) => item.staff_favorite === true);
    const nonStaffFavorites = array.filter(
      (item) => item.staff_favorite !== true,
    );
    return [...staffFavorites, ...nonStaffFavorites];
  };

  useEffect(() => {
    const favoriteFirst = sortStaffFavoritesFirst(data);
    setSortedData(favoriteFirst);
  }, []);

  return (
    <>
      {data.length === 0 ? (
        <NoPlant />
      ) : (
        <PlantListContainer>
          <Pick src={PickIcon} />
          <SectionTitle>Our picks for you</SectionTitle>
          <PlantListWrapper>
            {sortedData.map((item, index: number) => {
              return item.staff_favorite === true ? (
                <FavoritePlant item={item} key={index}/>
              ) : (
                <RegularPlant item={item}  key={index}/>
              );
            })}
          </PlantListWrapper>
          <BackToTopComponent />
        </PlantListContainer>
      )}
    </>
  );
};

export default PlantSection;
