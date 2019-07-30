import React from 'react';
import { Button } from 'grommet';
import PropTypes from 'prop-types';
import BoxWithTitle from '../shared/BoxWithTitle';

const StatsGeneration = ({ stats, onRoll, onSold }) => {
  return (
    <BoxWithTitle title="Stats">
      <div style={{ marginLeft: '20px' }}>
        <p>{`STR: ${stats.STR}`}</p>
        <p>{`CON: ${stats.CON}`}</p>
        <p>{`DEX: ${stats.DEX}`}</p>
        <p>{`INT: ${stats.INT}`}</p>
        <p>{`WIS: ${stats.WIS}`}</p>
        <p>{`CHA: ${stats.CHA}`}</p>
        <p>{`HP Max: ${stats['HP Max']}`}</p>
        <p>{`MP Max: ${stats['MP Max']}`}</p>
      </div>
      <div style={{ marginTop: '30px' }}>
        <Button label="Roll" onClick={onRoll} style={{ marginLeft: '12px' }} />
        <Button label="Sold" onClick={onSold} style={{ marginLeft: '15px' }} />
      </div>
    </BoxWithTitle>
  );
};

StatsGeneration.propTypes = {
  stats: PropTypes.isRequired,
  onRoll: PropTypes.func.isRequired,
  onSold: PropTypes.func.isRequired
};

export default StatsGeneration;
