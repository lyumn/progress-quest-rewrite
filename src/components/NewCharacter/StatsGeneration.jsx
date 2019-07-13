import React from 'react';
import BoxWithTitle from '../shared/BoxWithTitle';
import { Box, Button, Grommet, Grid } from 'grommet';

const StatsGeneration = props => (
  <BoxWithTitle title='Stats'>
    <div>
      {JSON.stringify(props.traits).toString()}
    </div>
    <div>
      <Button label='Roll' onClick={() => {}} />
      <Button label='Unroll' onClick={() => {}} />
    </div>
  </BoxWithTitle>
)

export default StatsGeneration;