import styled from "styled-components";

export const PlantCard = styled.div`
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
`;

export const PlantPhoto = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 1rem;
`;

export const PlantInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 200px;
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
font-size: 16px;
line-height: 28px;
color: #257556;

`;

export const PlantName = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: #1E6B4E;
  width: 140px;
`;