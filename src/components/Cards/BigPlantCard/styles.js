import styled from "styled-components";

export const FavoritePlantCard = styled.div`
  background: var(--white);
  border-radius: 0.313rem;
  width: 27.188rem;
  height: 32.188rem;
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
  width: 15.625rem;
  height: 22.188rem;
  margin-bottom: 1rem;
`;

export const StaffChoice = styled.img`
  height: 2.813rem;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  position: absolute;
  top: 1.25rem;
  left: 0rem;
`;

export const PlantInfo = styled.div`
  display: flex;
  margin: 0.625rem;
  width: 23.813rem;
  justify-content: space-around;
  align-items: center;
`;

export const PlantIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 0.313rem;
`;

export const PlantIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.25rem;
`;

export const PlantPrice = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.75rem;
  color: var(--dark-olive);
  margin: 0 0 1rem 0;
  padding: 0;
`;

export const PlantName = styled.p`
  font-weight: 700;
  font-size: 1.875rem;
  color: var(--darker-olive);
  width: 15rem;
`;