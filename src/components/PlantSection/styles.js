import styled from "styled-components";

export const Pick = styled.img`
  width: 9.875rem;
  height: 4.875rem;
  margin: 3.125rem 0 1.25rem;
  padding-left: 1.25rem;

  @media screen and (max-width: 768px) {
    width: 14.063rem;
    height: 6.25rem;
    margin: 3.125rem 0 1.25rem 4.375rem;
  }
`;

export const SectionTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 3.4375rem;
  line-height: 4.1875rem;
  margin: 0 0 1.25rem 0;
  padding-left: 1.25rem;
  color: #0C261C;

  @media screen and (max-width: 768px) {
    width: 28rem;
    height: 12.5rem;
    margin: 0 auto;
    font-size: 5rem;
    margin-bottom: -2rem;
  }
`;

export const PlantListContainer = styled.div`
  width: 90rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-content: center;
  flex-wrap: wrap;
  margin: auto;
  background-color: var(--light-gray);
  
  @media screen and (max-width: 768px) {
    width: 48rem;
  }
`;

export const PlantListWrapper = styled.div`
  width: 56.25rem;
  height: 100%;
  display: flex;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5625rem;
  margin: auto;
  padding: 1.25rem;
  background-color: var(--light-gray);

  @media screen and (max-width: 768px) {
    width: 29.5rem;
    overflow-y: scroll;
    display: flex;
    flex-wrap: nowrap;
    gap: 1.5625rem;
    padding: 1.25rem;
  }
`;