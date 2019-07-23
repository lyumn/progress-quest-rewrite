import React from 'react';
import './App.css';
import { Box, Button, Grommet, Grid } from 'grommet';
import { connect } from 'react-redux';
import BoxWithTitle from '../components/shared/BoxWithTitle';
import { sold } from '../reducers/newCharacter';
import { getTraits, getStats } from '../reducers/characterSheet';
import { getSeed } from '../reducers/seed';
import StatsGeneration from '../components/NewCharacter/StatsGeneration';
import NameGeneration from '../components/NewCharacter/NameGeneration';
import RaceSelection from '../components/NewCharacter/RaceSelection';
import ClassSelection from '../components/NewCharacter/ClassSelection';
import { roll, generateName } from '../actions';

const NewCharacterContainer = ({ traits, stats, roll, sold, generateName }) => (
  <Grid
    areas={[
      { name: 'top', start: [0, 0], end: [2, 0] },
      { name: 'name-generation', start: [0, 1], end: [2, 1] },
      { name: 'race', start: [0, 2], end: [0, 2] },
      { name: 'class', start: [1, 2], end: [1, 2] },
      { name: 'stats', start: [2, 2], end: [2, 2] },
      { name: 'status', start: [0, 3], end: [2, 3] }
    ]}
    columns={['1/3', '1/3', '1/3']}
    rows={['xsmall', 'xsmall', 'large', 'small']}
    gap="small"
    style={{ width: '686px', margin: '0 auto' }}
  >
    <Box gridArea="top" background="brand" />
    {/* <Box gridArea='name-generation' background='brand' /> */}
    <Box gridArea="name-generation">
      <NameGeneration name={traits.Name} onGenerateName={generateName} />
    </Box>
    <RaceSelection selected={traits['Race']} gridArea="race" background="brand" />
    <ClassSelection selected={traits['Class']} gridArea="class" background="brand" />
    <StatsGeneration gridArea="stats" stats={stats} onRoll={roll} onSold={sold} />
    <Box gridArea="status" background="accent-1" />
  </Grid>
);

const mapStateToProps = state => ({
  traits: getTraits(state),
  stats: getStats(state),
  seed: getSeed(state),
  sold: sold(state)
});

export default connect(
  mapStateToProps,
  { roll, generateName }
)(NewCharacterContainer);
