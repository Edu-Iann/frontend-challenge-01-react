import React, { useEffect, useState } from 'react'
import NoSun from '../../assets/icons/no-sun.svg'
import LowSun from '../../assets/icons/low-sun.svg'
import HighSun from '../../assets/icons/high-sun.svg'
import Rarely from '../../assets/icons/1-drop.svg'
import Regularly from '../../assets/icons/2-drops.svg'
import Daily from '../../assets/icons/3-drops.svg'
import Pet from '../../assets/icons/pet.svg'
import Toxic from '../../assets/icons/toxic.svg'
import PickIcon from '../../assets/illustrations/pick.png'
import ArrowUp from '../../assets/icons/arrow-up.svg'

import styled from 'styled-components';
import { NoPlant } from './NoPlant'

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

const PlantContainer = styled.div`
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
`

const PlantWrapper = styled.div`
  width: 900px;
  height: 100%;
  display: flex;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin: auto;
  padding: 20px;
  background-color: #F6F6F6;
`

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
`

const PlantCard = styled.div`
  background: #FFFFFF;
  border-radius: 5px;
  width: 206px;
  height: 245px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`

const PlantPhoto = styled.img`
  width: 150px;
  height: 150px;
`;

const FavoritePlantPhoto = styled.img`
  width: 300x;
  height: 353px;
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
` 
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

const BackToTop = styled.button`
  border: 1px solid #15573F;
border-radius: 25px;
width: 900px;
height: 50px;
background-color: transparent;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
margin: 20px auto;
transition: background-color 0.3s ease;

  :hover {
    background-color: #99d6c088;
  }
`

const ButtonTitle = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #196146;


`;

const UpArrow = styled.img`
  width: 25px;
  height: 25px;
  color: red;
  margin-right: 25px;
  
` 

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

const PlantSection: React.FunctionComponent<{data: Plant[]}> = ({ data } )  => {
  const [sortedData, setSortedData] = useState(data)

  const sortStaffFavoritesFirst = (array: Plant[]) => {
    const staffFavorites = array.filter(item => item.staff_favorite === true);
    const nonStaffFavorites = array.filter(item => item.staff_favorite !== true);
    return [...staffFavorites, ...nonStaffFavorites];
  }

  useEffect(() => {
    const favoriteFirst = sortStaffFavoritesFirst(data);
    setSortedData(favoriteFirst)
  }, [])

  console.log(data)
  
  return (
    <>
    {data.length === 0 ? 
      <NoPlant />
    :
    <PlantContainer>
      <Pick src={PickIcon}/>
      <SectionTitle>Our picks for you</SectionTitle>
      <PlantWrapper>
    {sortedData.map(item => {
      return (
        item.staff_favorite === true ?
        <FavoritePlantCard key={item.name}>
          <FavoritePlantPhoto src={item.url}/>
          <PlantName>{item.name}</PlantName>
          <PlantInfo>
            <PlantPrice>
              {"$" + item.price}
            </PlantPrice>
            <div>  
              <PlantIcon src={
                item.sun === "high" ?
                HighSun : item.sun === "low" ? 
                LowSun : NoSun
              } 
              />
              <PlantIcon src={item.toxic ? Toxic : Pet} />
              <PlantIcon src={
                item.water === "rarely" ? 
                Rarely : item.water === "regularly" ?
                Regularly : Daily
              }
              />
            </div>
          </PlantInfo>
        </FavoritePlantCard> 
        :
        <PlantCard>
          <PlantPhoto src={item.url}/>
          <PlantName>{item.name}</PlantName>
          <PlantInfo>
            <PlantPrice>
              {item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace(/(\.00)$/g, '')}
            </PlantPrice>
            <div>  
              <PlantIcon src={
                item.sun === "high" ?
                HighSun : item.sun === "low" ? 
                LowSun : NoSun
              } 
              />
              <PlantIcon src={item.toxic ? Toxic : Pet} />
              <PlantIcon src={
                item.water === "rarely" ? 
                Rarely : item.water === "regularly" ?
                Regularly : Daily
              }
              />
            </div>
          </PlantInfo>
        </PlantCard>
        )
    })}
      </PlantWrapper>
      <BackToTop onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <UpArrow  src={ArrowUp}/>
        <ButtonTitle>
        back to the top
        </ButtonTitle>
      </BackToTop>
    </PlantContainer>
    }
    </>
  )
}

export default PlantSection  