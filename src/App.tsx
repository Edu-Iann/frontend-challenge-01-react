import React from 'react';
import styled from 'styled-components';

import PlantPage from './pages/PlantPage.tsx';

import './App.css';

const AppContainer = styled.div`
  width: 100%;
`;

const AppCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

function App() {
  return (
    <AppContainer>
      <AppCenter>
        <PlantPage />
      </AppCenter>
    </AppContainer>
  );
}

export default App;
