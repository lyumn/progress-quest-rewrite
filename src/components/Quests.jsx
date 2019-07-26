import React from 'react';
import { Box, Grid, CheckBox } from 'grommet';

import BoxWithTitle from './shared/BoxWithTitle';
import ProgressBar from './shared/ProgressBar';

const Quests = props => {
  const array =
    props.data.length > 10 ? props.data.slice(Math.max(props.data.length - 10, 1)) : props.data;

  return (
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
        {array.map((e, i) => (
          <CheckBox checked={i < array.length - 1} label={e} style={{ margin: '2px 0px' }} />
        ))}
      </BoxWithTitle>
      <Box gridArea="tracking">
        <ProgressBar width={props.questProgress} />
      </Box>
    </Grid>
  );
};

// Inventory.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
//   })).isRequired,
// }

export default Quests;
