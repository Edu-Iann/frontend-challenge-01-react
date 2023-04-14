import React, { useEffect, useState } from 'react';

import PickIcon from '../../assets/illustrations/pick.png';
import BackToTopComponent from '../Buttons/BackToTop/BackToTopComponent';

import FavoritePlant from '../Cards/BigPlantCard/BigPlantCard';
import RegularPlant from '../Cards/RegularPlantCard/RegularPlant';
import { NoPlant } from '../Cards/NoResults/NoResultsComponent';
import {
  Pick,
  PlantListContainer,
  PlantListWrapper,
  SectionTitle,
} from './styles';
import { Plant } from '../../types/types';

// interface Plant {
//   id: number;
//   name: string;
//   sun: string;
//   water: string;
//   url: string;
//   price: number;
//   toxic: boolean;
//   staff_favorite: boolean;
// }

const PlantSection: React.FunctionComponent<{ data: Plant[] }> = ({ data }) => {
  const [sortedData, setSortedData] = useState<Plant[]>(data);

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
                <FavoritePlant item={item} key={index} />
              ) : (
                <RegularPlant item={item} key={index} />
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
