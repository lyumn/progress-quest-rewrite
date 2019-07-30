import React from 'react';
import PropTypes from 'prop-types';
import GameTable from '../shared/GameTable';

const COLUMNS = [
  {
    property: 'stat',
    label: 'Stat'
  },
  {
    property: 'value',
    label: 'Value'
  }
];

const StatsTable = ({ stats }) => {
  const data = Object.keys(stats)
    .filter(e => e !== 'seed')
    .map(key => ({
      stat: key,
      value: stats[key]
    }));

  return <GameTable data={data} columns={COLUMNS} hasHeader />;
};

StatsTable.propTypes = {
  stats: PropTypes.isRequired
};

export default StatsTable;
