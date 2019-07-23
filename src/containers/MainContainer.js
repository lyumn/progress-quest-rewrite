import React, { useState, useEffect } from 'react';
import './App.css';
import { Box, Button, Grommet, Grid } from 'grommet';
import { connect } from 'react-redux';
import delay from 'delay';
import CharacterSheetContainer from './CharacterSheetContainer';
import InventoryContainer from './InventoryContainer';
import EquipmentsContainer from './EquipmentsContainer';
import PlotDevelopmentContainer from './PlotDevelopmentContainer';
import QuestsContainer from './QuestsContainer';
import SpellBookContainer from './SpellBookContainer';
import TaskBarContainer from './TaskBarContainer';
import { getMain } from '../reducers/main';

import { start } from '../utils/gameEngine';
import {
  incrementTask,
  levelUp,
  completeQuest,
  completePlot,
  completeTask,
  incrementExperience,
  incrementQuest,
  incrementPlot
} from '../actions';
import { isEncumbranceFull } from '../reducers/bars/encumbranceBar';
import { isExperienceBarFull } from '../reducers/bars/experienceBar';
import { isPlotBarFull } from '../reducers/bars/plotBar';
import { isQuestBarFull } from '../reducers/bars/questBar';
import { isTaskBarFull } from '../reducers/bars/taskBar';

// const incrementTaskBar = async () => {
//   await delay(50);
//   incrementTask()
// };
// const startGame = (data) => {
//   // if ()
//   // debugger;
//   if (data.taskBar.position == '100%') {
//     debugger;
//   } else {
//     incrementTaskBar()
//   }
// }

const MainContainer = props => {
  useEffect(() => {
    start(props);
  });

  return (
    <Grid
      areas={[
        { name: 'top', start: [0, 0], end: [2, 0] },
        { name: 'character-sheet', start: [0, 1], end: [0, 1] },
        { name: 'equipment', start: [1, 1], end: [1, 1] },
        { name: 'plot-development', start: [2, 1], end: [2, 1] },
        { name: 'spell-book', start: [0, 2], end: [0, 2] },
        { name: 'inventory', start: [1, 2], end: [1, 2] },
        { name: 'quests', start: [2, 2], end: [2, 2] },
        { name: 'status', start: [0, 3], end: [2, 3] }
      ]}
      columns={['1/3', '1/3', '1/3']}
      rows={['xxsmall', 'medium', 'medium', 'small']}
      gap="small"
      style={{ width: '686px', margin: '0 auto' }}
    >
      <Box gridArea="top">
        <h1>Progress Quest</h1>
      </Box>
      <CharacterSheetContainer gridArea="character-sheet" justify="stretch" />
      <EquipmentsContainer gridArea="equipment" background="brand" />
      <PlotDevelopmentContainer gridArea="plot-development" background="brand" />
      <SpellBookContainer gridArea="spell-book" background="accent-1" />
      <InventoryContainer gridArea="inventory" />
      <QuestsContainer gridArea="quests" background="accent-1" />
      <Box gridArea="status">
        <TaskBarContainer />
      </Box>
    </Grid>
  );
};

const mapStateToProps = state => ({
  data: getMain(state),
  isEncumbranceFull: isEncumbranceFull(state),
  isExperienceBarFull: isExperienceBarFull(state),
  isPlotBarFull: isPlotBarFull(state),
  isQuestBarFull: isQuestBarFull(state),
  isTaskBarFull: isTaskBarFull(state)
});

export default connect(
  mapStateToProps,
  {
    incrementTask,
    levelUp,
    completeQuest,
    completePlot,
    completeTask,
    incrementExperience,
    incrementQuest,
    incrementPlot
  }
)(MainContainer);
