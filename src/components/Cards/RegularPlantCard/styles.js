import styled from "styled-components";

export const PlantCard = styled.div`
  background: var(--white);
  border-radius: 0.313rem;
  width: 12.875rem;
  height: 15.313rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const PlantPhoto = styled.img`
  width: 9.375rem;
  height: 9.375rem;
  margin-bottom: 1rem;
`;

export const PlantInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 12.5rem;
`;

export const PlantIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.25rem;
`;

export const PlantPrice = styled.p`
font-style: normal;
font-weight: 700;
font-size: 1rem;
line-height: 1.75rem;
color: var(--dark-olive);
`;

export const PlantName = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.625rem;
  color: var(--darker-olive);
  width: 8.75rem;
`;