import React from 'react';
import BoxWithTitle from './shared/BoxWithTitle';
import { Box, Grid } from 'grommet';
import ProgressBar from './shared/ProgressBar';

const PlotDevelopment = props => (
  <Grid
areas={[
  { name: 'table', start: [0, 0], end: [0, 0] },
  { name: 'tracking', start: [0, 1], end: [0, 1] },
]}
columns={['flex']}
rows={['flex', '20px']}
gap='small'
>
<BoxWithTitle gridArea='table' title='Plot Development'>
{JSON.stringify(props.data).toString()}
</BoxWithTitle>
<Box gridArea='tracking'>
  <ProgressBar width={props.plotProgress}/>
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