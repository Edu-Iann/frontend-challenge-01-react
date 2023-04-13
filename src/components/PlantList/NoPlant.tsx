import React from 'react';
import styled from 'styled-components';

const ListSection = styled.header`
  width: 90rem;
  height: 300px;
  display: flex;
  background-color: #F6F6F6;
  margin: auto;

  @media screen and (max-width: 768px) {
    height: 30rem;
    width: 48rem;
    /* flex-direction: column; */
    /* gap: 5rem */
  }
`;

const ListDisplay = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 48rem;
    flex-direction: column;
    /* height: 20rem; */
    /* gap: 5rem */
  }
`;

const ListNoOptionWrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

const ListNoOptionTitle = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 55px;
  color: #A9A9A9;

  @media screen and (max-width: 768px) {
    font-size: 70px;
    width: 25rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
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

export const NoPlant = () => {
  return (
    <ListSection>
      <ListDisplay>
        <ListNoOptionWrapper>
          <ListNoOptionTitle>No results yet...</ListNoOptionTitle>
          <ListNoOptionDesc>
            {`Use the filters above to find the plant that best fits your environment :)`}
          </ListNoOptionDesc>
        </ListNoOptionWrapper>
        <NoResultsIcon src={'../src/assets/illustrations/no-results.png'} />
      </ListDisplay>
    </ListSection>
  );
};
