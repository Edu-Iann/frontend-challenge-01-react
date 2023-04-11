import React from 'react';
import styled from 'styled-components';

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
`;

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
