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

const TraitsTable = ({ traits }) => {
  const data = Object.keys(traits).map(key => ({
    trait: key,
    value: traits[key]
  }));

  return <GameTable data={data} columns={COLUMNS} hasHeader />;
};

TraitsTable.propTypes = {
  traits: PropTypes.string.isRequired
};

export default TraitsTable;
