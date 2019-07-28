import React from 'react';
import './App.css';
import { Box, Button, Grommet, Grid } from 'grommet';
import { connect } from 'react-redux';
import BoxWithTitle from '../components/shared/BoxWithTitle';
import { sold } from '../reducers/newCharacter';
import { getTraits, getStats } from '../reducers/characterSheet';
import StatsGeneration from '../components/NewCharacter/StatsGeneration';
import NameGeneration from '../components/NewCharacter/NameGeneration';
import RaceSelection from '../components/NewCharacter/RaceSelection';
import ClassSelection from '../components/NewCharacter/ClassSelection';
import { roll, generateName, chooseClass, chooseRace, updateName } from '../actions';

const NewCharacterContainer = ({
  traits,
  stats,
  roll,
  sold,
  generateName,
  chooseClass,
  chooseRace,
  updateName
}) => (
  <Grid
    areas={[
      { name: 'top', start: [0, 0], end: [2, 0] },
      { name: 'name-generation', start: [0, 1], end: [2, 1] },
      { name: 'race', start: [0, 2], end: [0, 2] },
      { name: 'class', start: [1, 2], end: [1, 2] },
      { name: 'stats', start: [2, 2], end: [2, 2] }
    ]}
    columns={['1/3', '1/3', '1/3']}
    rows={['xxsmall', 'xsmall', 'large']}
    gap="small"
    style={{ width: '686px', margin: '0 auto' }}
    id="main"
  >
    <Box gridArea="top">
      <h1>Progress Quest</h1>
    </Box>
    {/* <Box gridArea='name-generation' background='brand' /> */}
    <Box gridArea="name-generation">
      <NameGeneration name={traits.Name} onGenerateName={generateName} onUpdate={updateName} />
    </Box>
    <RaceSelection
      selected={traits.Race}
      gridArea="race"
      background="brand"
      onSelect={chooseRace}
    />
    <ClassSelection
      selected={traits.Class}
      gridArea="class"
      background="brand"
      onSelect={chooseClass}
    />
    <StatsGeneration gridArea="stats" stats={stats} onRoll={roll} onSold={sold} />
  </Grid>
);

const mapStateToProps = state => ({
  traits: getTraits(state),
  stats: getStats(state),
  sold: sold(state)
});

export default connect(
  mapStateToProps,
  { roll, generateName, chooseClass, chooseRace, updateName }
)(NewCharacterContainer);
