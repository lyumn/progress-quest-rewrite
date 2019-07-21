import React from 'react';
import BoxWithTitle from '../shared/BoxWithTitle';
import { Box, Button, Grommet, Grid } from 'grommet';

const StatsGeneration = props => {
  // debugger;
  return (
    <BoxWithTitle title='Stats'>
      <div>
        {JSON.stringify(props.stats).toString()}
      </div>
      <div>
        <Button label='Roll' onClick={props.onRoll} />
      </div>
      <div>
        <Button label='Sold' onClick={props.onSold} />
      </div>
    </BoxWithTitle>
  );
}
export default StatsGeneration;