import React from 'react';
import { Box, Grid } from 'grommet';

import BoxWithTitle from './shared/BoxWithTitle';
import ProgressBar from './shared/ProgressBar';

const Quests = props => (
  <Grid
    areas={[
      { name: 'table', start: [0, 0], end: [0, 0] },
      { name: 'tracking', start: [0, 1], end: [0, 1] }
    ]}
    columns={['flex']}
    rows={['flex', '10px']}
    gap="small"
  >
    <BoxWithTitle gridArea="table" title="Quests">
      {JSON.stringify(props.data).toString()}
    </BoxWithTitle>
    <Box gridArea="tracking">
      <ProgressBar width={props.questProgress} />
    </Box>
  </Grid>
);

// Inventory.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
//   })).isRequired,
// }

export default Quests;
