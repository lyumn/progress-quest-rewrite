import React from 'react';
import { Box, Grid, CheckBox } from 'grommet';
import romanize from 'romanize';
import BoxWithTitle from './shared/BoxWithTitle';
import ProgressBar from './shared/ProgressBar';

const range = (start, end) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
}; // use _.takeRight(arr, 5);

const PlotDevelopment = props => (
  <Grid
    areas={[
      { name: 'table', start: [0, 0], end: [0, 0] },
      { name: 'tracking', start: [0, 1], end: [0, 1] }
    ]}
    columns={['flex']}
    rows={['flex', '20px']}
    gap="small"
  >
    <BoxWithTitle gridArea="table" title="Plot Development">
      <CheckBox checked label="Prologue" style={{ margin: '2px 0px' }} />
      {range(1, props.data.Act).map(e => (
        <CheckBox
          checked={e != props.data.Act}
          label={`Act ${romanize(e)}`}
          style={{ margin: '2px 0px' }}
        />
      ))}
    </BoxWithTitle>
    <Box gridArea="tracking">
      <ProgressBar width={props.plotProgress} />
    </Box>
  </Grid>
);

// Inventory.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
//   })).isRequired,
// }

export default PlotDevelopment;
