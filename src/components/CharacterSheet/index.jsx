import React from 'react';
import { Grid, Box } from 'grommet';
import BoxWithTitle from '../shared/BoxWithTitle';
import TraitsTable from './TraitsTable';
import StatsTable from './StatsTable';
import ExperienceBar from './ExperienceBar';

const CharacterSheet = props => (
  <Grid
    areas={[
      { name: 'table', start: [0, 0], end: [0, 0] },
      { name: 'xp', start: [0, 1], end: [0, 1] }
    ]}
    columns={['flex']}
    rows={['flex', '35px']}
    gap="small"
  >
    <BoxWithTitle gridArea="table" title="Character Sheet">
      <TraitsTable traits={props.characterSheet.Traits} />
      <p />
      <StatsTable stats={props.characterSheet.Stats} />
    </BoxWithTitle>
    <Box gridArea="xp">
      <div>Experience</div>
      <ExperienceBar width={props.experience} />
    </Box>
  </Grid>
);

// Inventory.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
//   })).isRequired,
// }

export default CharacterSheet;