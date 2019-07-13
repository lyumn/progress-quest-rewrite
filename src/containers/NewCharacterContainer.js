import React from 'react';
import './App.css';
import { Box, Button, Grommet, Grid } from 'grommet';
import BoxWithTitle from '../components/shared/BoxWithTitle';
import { connect } from 'react-redux';
import { getTraits } from '../reducers/newCharacter'
import StatsGeneration from '../components/NewCharacter/StatsGeneration'

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

const NameGeneration = props => (
  <div>name</div>
)

const RaceSelect = props => (
  <BoxWithTitle title='Race'>
    {props}
    </BoxWithTitle>
)

const ClassSelect = props => (
  <BoxWithTitle title='Class'>
    </BoxWithTitle>
)

const NewCharacterContainer = ({traits}) => (
  <Grommet theme={theme}>
    <Grid
      areas={[
        { name: 'top', start: [0, 0], end: [2, 0] },
        { name: 'name-generation', start: [0, 1], end: [2, 1] },
        { name: 'race', start: [0, 2], end: [0, 2] },
        { name: 'class', start: [1, 2], end: [1, 2] },
        { name: 'stats', start: [2, 2], end: [2, 2] },
        { name: 'status', start: [0, 2], end: [2, 3] },
      ]}
      columns={['1/3', '1/3', '1/3']}
      rows={['xsmall', 'medium', 'medium', 'small']}
      gap='small'
    >
      <Box gridArea='top' background='brand' />
      <NameGeneration gridArea='name-generation' justify='stretch' />
      {/* <RaceSelect selected={traits['Race']} gridArea='race' background='brand' /> */}
      <ClassSelect gridArea='race' background='brand' />
      <StatsGeneration gridArea='race' background='brand' traits ={traits} />
      <Box gridArea='status' background='accent-1' />
    </Grid>
  </Grommet>
);

const mapStateToProps = (state) => ({
  traits: getTraits(state),
})

export default connect(
  mapStateToProps,
  // { checkout }
)(NewCharacterContainer)
