import React from 'react';
import { ListDisplay, ListNoOptionDesc, ListNoOptionTitle, ListNoOptionWrapper, ListSection, NoResultsIcon } from './styles';

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
