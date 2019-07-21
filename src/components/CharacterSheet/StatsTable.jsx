import React from 'react'
import PropTypes from 'prop-types'
import GameTable from '../shared/GameTable'

const COLUMNS = [
  {
    property: 'stat',
    label: 'Stat',
  },
  {
    property: 'value',
    label: 'Value',
  },
];

const StatsTable = (props) => {
  const data = Object.keys(props.stats).filter((e) => e !== 'seed').map(function(key) {
    return {
      stat:  key,
      value: props.stats[key]
    };
  });

  return (
    <GameTable data={data} columns={COLUMNS} hasHeader={true} />
  )
};

StatsTable.propTypes = {
  stats: PropTypes.object.isRequired,
}

export default StatsTable;