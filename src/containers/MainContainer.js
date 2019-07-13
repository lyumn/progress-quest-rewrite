import React from 'react';
import './App.css';
import { Box, Button, Grommet, Grid } from 'grommet';
import CharacterSheetContainer from './CharacterSheetContainer';
import InventoryContainer from './InventoryContainer';
import EquipmentsContainer from './EquipmentsContainer';
import PlotDevelopmentContainer from './PlotDevelopmentContainer';
import QuestsContainer from './QuestsContainer';
import SpellBookContainer from './SpellBookContainer';

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

const MainContainer = props => (
  <Grommet theme={theme}>
    <Grid
      areas={[
        { name: 'top', start: [0, 0], end: [2, 0] },
        { name: 'character-sheet', start: [0, 1], end: [0, 1] },
        { name: 'equipment', start: [1, 1], end: [1, 1] },
        { name: 'plot-development', start: [2, 1], end: [2, 1] },
        { name: 'spell-book', start: [0, 2], end: [0, 2] },
        { name: 'inventory', start: [1, 2], end: [1, 2] },
        { name: 'quests', start: [2, 2], end: [2, 2] },
        { name: 'status', start: [0, 3], end: [2, 3] },
      ]}
      columns={['1/3', '1/3', '1/3']}
      rows={['xsmall', 'medium', 'medium', 'small']}
      gap='small'
    >
      <Box gridArea='top' background='brand' />
      <CharacterSheetContainer gridArea='character-sheet' justify='stretch' />
      <EquipmentsContainer gridArea='equipment' background='brand' />
      <PlotDevelopmentContainer gridArea='plot-development' background='brand' />
      <SpellBookContainer gridArea='spell-book' background='accent-1' />
      <InventoryContainer gridArea='inventory' />
      <QuestsContainer gridArea='quests' background='accent-1' />
      <Box gridArea='status' background='accent-1' />
    </Grid>
  </Grommet>
);

export default MainContainer;
