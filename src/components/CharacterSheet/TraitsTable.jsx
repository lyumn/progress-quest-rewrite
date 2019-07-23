import React from 'react';
import PropTypes from 'prop-types';
import GameTable from '../shared/GameTable';

const COLUMNS = [
  {
    property: 'trait',
    label: 'Trait'
  },
  {
    property: 'value',
    label: 'Value'
  }
];

const TraitsTable = props => {
  const data = Object.keys(props.traits).map(function(key) {
    return {
      trait: key,
      value: props.traits[key]
    };
  });

  return <GameTable data={data} columns={COLUMNS} hasHeader />;
};

TraitsTable.propTypes = {
  // width: PropTypes.string.isRequired,
};

export default TraitsTable;
