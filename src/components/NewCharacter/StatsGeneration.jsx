import React from 'react';
import { Box, Button, Grommet, Grid } from 'grommet';
import BoxWithTitle from '../shared/BoxWithTitle';

const StatsGeneration = props => {
  // debugger;
  // TODO use Grid
  return (
    <BoxWithTitle title="Stats">
      <div>
        <p>{`STR: ${props.stats.STR}`}</p>
        <p>{`CON: ${props.stats.CON}`}</p>
        <p>{`DEX: ${props.stats.DEX}`}</p>
        <p>{`INT: ${props.stats.INT}`}</p>
        <p>{`WIS: ${props.stats.WIS}`}</p>
        <p>{`CHA: ${props.stats.CHA}`}</p>
        <p>{`HP Max: ${props.stats['HP Max']}`}</p>
        <p>{`MP Max: ${props.stats['MP Max']}`}</p>
      </div>
      <div style={{ marginTop: '30px' }}>
        <Button label="Roll" onClick={props.onRoll} />
        <Button label="Sold" onClick={props.onSold} style={{ marginLeft: '15px' }} />
      </div>
    </BoxWithTitle>
  );
};
export default StatsGeneration;
