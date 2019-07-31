import React from 'react';
import { Grid, Box } from 'grommet';
import PropTypes from 'prop-types';
import BoxWithTitle from '../shared/BoxWithTitle';
import TraitsTable from './TraitsTable';
import StatsTable from './StatsTable';
import ExperienceBar from './ExperienceBar';

const CharacterSheet = ({ characterSheet, experience }) => (
  <Grid
    areas={[
      { name: 'table', start: [0, 0], end: [0, 0] },
      { name: 'xp', start: [0, 1], end: [0, 1] }
    ]}
    columns={['flex']}
    rows={['flex', '45px']}
    gap="small"
  >
    <BoxWithTitle gridArea="table" title="Character Sheet">
      <TraitsTable traits={characterSheet.Traits} />
      <p />
      <StatsTable stats={characterSheet.Stats} />
    </BoxWithTitle>
    <Box gridArea="xp">
      <div>Experience</div>
      <ExperienceBar width={experience} />
    </Box>
  </Grid>
);

CharacterSheet.propTypes = {
  characterSheet: PropTypes.shape({
    Stats: PropTypes.shape({
      CHA: PropTypes.number.isRequired,
      CON: PropTypes.number.isRequired,
      DEX: PropTypes.number.isRequired,
      'HP Max': PropTypes.number.isRequired,
      INT: PropTypes.number.isRequired,
      'MP Max': PropTypes.number.isRequired,
      STR: PropTypes.number.isRequired,
      WIS: PropTypes.number.isRequired
    }).isRequired,
    Traits: PropTypes.shape({
      Class: PropTypes.string.isRequired,
      Level: PropTypes.number.isRequired,
      Name: PropTypes.string.isRequired,
      Race: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  experience: PropTypes.string.isRequired
};

export default CharacterSheet;
