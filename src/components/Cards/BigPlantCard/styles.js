import styled from "styled-components";

export const FavoritePlantCard = styled.div`
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
  margin: auto;
  position: relative;

`;

export const FavoritePlantPhoto = styled.img`
  width: 250px;
  height: 355px;
  margin-bottom: 1rem;
`;

export const StaffChoice = styled.img`
  height: 45px;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  position: absolute;
  top: 20px;
  left: 0px;
`;

export const PlantInfo = styled.div`
  display: flex;
  padding: 0;
  margin: 10px;
  width: 381px;
  justify-content: space-around;
  align-items: center;
`;

export const PlantIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  border-radius: 5px;
  
`;

export const PlantIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 4px;
`;

export const PlantPrice = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #257556;
  margin: 0 0 16px 0;
  padding: 0;

`;

export const PlantName = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  color: #1E6B4E;
  margin: 0;
  padding: 0;
  /* justify-self: end; */
  width: 15rem;
  /* margin: auto; */
`;