import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import NoSun from '../../assets/icons/no-sun.svg'
import LowSun from '../../assets/icons/low-sun.svg'
import HighSun from '../../assets/icons/high-sun.svg'
import Rarely from '../../assets/icons/1-drop.svg'
import Regularly from '../../assets/icons/2-drops.svg'
import Daily from '../../assets/icons/3-drops.svg'
import Pet from '../../assets/icons/pet.svg'
import Toxic from '../../assets/icons/toxic.svg'

const ListSection = styled.header`
  width: 1440px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  margin: 0;
  padding: 0;
  background-color: #F6F6F6;
`;

const ListDisplay = styled.div`
  width: 1440px;
  height: 300px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 0;
  background-color: #F6F6F6;
`;

const ListNoOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ListNoOptionTitle = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 55px;
  color: #A9A9A9;
`;

const ListNoOptionDesc = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #A9A9A9;
  width: 220px;
  word-wrap: break-word;
  padding: 0;
  margin: 0;
`;

const NoResultsIcon = styled.img`
  width: 104px;
  height: 203px;
`;

// CARDS STYLE

const PlantContainer = styled.div`
  width: 1440px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
  margin: auto;
  padding: 20px;
  background-color: #F6F6F6;
`

const PlantWrapper = styled.div`
  width: 900px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
  margin: auto;
  padding: 20px;
  background-color: #F6F6F6;
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
  width: 120px;
  height: 150px;
`;

const PlantInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 200px;
`;

const PlantIcon = styled.img`
  width: 20px;
  height: 20px;
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


const PlantSection = ({data}) => {
  const [sortedData, setSortedData] = useState(data)

  const sortStaffFavoritesFirst = (data) => {
    // Filtra os objetos que possuem staff_favorite como true
    const staffFavorites = data.filter(item => item.staff_favorite === true);
    
    // Filtra os objetos que possuem staff_favorite como false ou não possuem a propriedade
    const nonStaffFavorites = data.filter(item => item.staff_favorite !== true);
    
    // Retorna o array concatenando os staffFavorites primeiro e os nonStaffFavorites em seguida
    return [...staffFavorites, ...nonStaffFavorites];
  }

  useEffect(() => {
    const favoriteFirst = sortStaffFavoritesFirst(data);
    setSortedData(favoriteFirst)
  }, [])
  
  
  return (
    <>
    {data.length === 0 ? 
    <ListSection>
      <ListDisplay>
        <ListNoOptionWrapper>
          <ListNoOptionTitle>
            No results yet...
          </ListNoOptionTitle>
          <ListNoOptionDesc>
          {`Use the filters above to find the plant that best fits your environment :)`}  
          </ListNoOptionDesc>
        </ListNoOptionWrapper>
        <NoResultsIcon src={"../src/assets/illustrations/no-results.png"} />
      </ListDisplay>
    </ListSection>
    :
    <PlantContainer>
      <PlantWrapper>
    {sortedData.map(item => {
      return (
        <PlantCard>
          <PlantPhoto src={item.url}/>
          <PlantName>{item.name} + {item.staff_favorite === true ? "true" : "false"}</PlantName>
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
    </PlantContainer>
    }
    </>
  )
}

export default PlantSection  