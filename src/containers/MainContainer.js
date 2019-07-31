import React, { useEffect } from 'react';
import './App.css';
import { Box, Grid } from 'grommet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CharacterSheetContainer from './CharacterSheetContainer';
import InventoryContainer from './InventoryContainer';
import EquipmentsContainer from './EquipmentsContainer';
import PlotDevelopmentContainer from './PlotDevelopmentContainer';
import QuestsContainer from './QuestsContainer';
import SpellBookContainer from './SpellBookContainer';
import TaskBarContainer from './TaskBarContainer';
import { getMain, helpers } from '../reducers/helpers/main';

import start from '../gameEngine';
import {
  loadGame,
  incrementTask,
  levelUp,
  completeQuest,
  completePlot,
  nextTask,
  incrementExperience,
  incrementQuest,
  incrementPlot,
  loot,
  buy,
  sellOne
} from '../actions';

const MainContainer = props => {
  useEffect(() => {
    if (!props.data.characterSheet.Traits.Name) {
      props.loadGame();
    }

    try {
      start(props);
    } catch (_err) {
      // eslint-disable-next-line no-undef
      window.location.reload();
    }
  });

  return (
    // eslint-disable-next-line react/jsx-filename-extension
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
      id="main"
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

/* eslint-disable react/no-unused-prop-types */
MainContainer.propTypes = {
  data: PropTypes.object.isRequired,
  helpers: PropTypes.object.isRequired,
  loadGame: PropTypes.func.isRequired,
  incrementTask: PropTypes.func.isRequired,
  levelUp: PropTypes.func.isRequired,
  completeQuest: PropTypes.func.isRequired,
  completePlot: PropTypes.func.isRequired,
  nextTask: PropTypes.func.isRequired,
  incrementExperience: PropTypes.func.isRequired,
  incrementQuest: PropTypes.func.isRequired,
  incrementPlot: PropTypes.func.isRequired,
  loot: PropTypes.func.isRequired,
  buy: PropTypes.func.isRequired,
  sellOne: PropTypes.func.isRequired
};
/* eslint-enable react/no-unused-prop-types */

const mapStateToProps = state => ({
  data: getMain(state),
  helpers
});

export default connect(
  mapStateToProps,
  {
    loadGame,
    incrementTask,
    levelUp,
    completeQuest,
    completePlot,
    nextTask,
    incrementExperience,
    incrementQuest,
    incrementPlot,
    loot,
    buy,
    sellOne
  }
)(MainContainer);
