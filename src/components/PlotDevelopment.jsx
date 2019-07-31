import React from 'react';
import { Box, Grid, CheckBox } from 'grommet';
import romanize from 'romanize';
import PropTypes from 'prop-types';
import BoxWithTitle from './shared/BoxWithTitle';
import ProgressBar from './shared/ProgressBar';

const range = (start, end) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
}; // use _.takeRight(arr, 5);

const PlotDevelopment = ({ plotDevelopment, plotProgress }) => (
  <Grid
    areas={[
      { name: 'table', start: [0, 0], end: [0, 0] },
      { name: 'tracking', start: [0, 1], end: [0, 1] }
    ]}
    columns={['flex']}
    rows={['flex', '25px']}
    gap="small"
  >
    <BoxWithTitle gridArea="table" title="Plot Development">
      <CheckBox checked label="Prologue" style={{ margin: '2px 0px' }} />
      {range(1, plotDevelopment.Act).map((e, i) => (
        <CheckBox
          key={`pd-${i}`}
          checked={e !== plotDevelopment.Act}
          label={`Act ${romanize(e)}`}
          style={{ margin: '2px 0px' }}
        />
      ))}
    </BoxWithTitle>
    <Box gridArea="tracking">
      <ProgressBar width={plotProgress} />
    </Box>
  </Grid>
);

PlotDevelopment.propTypes = {
  plotDevelopment: PropTypes.arrayOf(
    PropTypes.shape({
      Act: PropTypes.number.isRequired
    })
  ).isRequired,
  plotProgress: PropTypes.string.isRequired
};

export default PlotDevelopment;
