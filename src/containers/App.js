import React from 'react';
import './App.css';
import MainContainer from './MainContainer';
import NewCharacterContainer from './NewCharacterContainer';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};


// const App = props => (
//   <Grommet theme={theme}>
//     <Box align="center" border={{ color: 'brand', size: 'large' }} pad='xlarge' >
//       <CharacterSheet gridArea='top' />
//     </Box>
//     <InventoryContainer />
//   </Grommet>
// );

const App = props => (
  true ? <NewCharacterContainer /> : <MainContainer />
);

export default App;
