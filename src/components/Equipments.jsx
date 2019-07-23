import React from 'react';
import { Table, TableBody, TableCell, TableFooter, TableHeader, TableRow, Text } from 'grommet';
import BoxWithTitle from './shared/BoxWithTitle';
import GameTable from './shared/GameTable';

const COLUMNS = [
  {
    property: 'category'
  },
  {
    property: 'name'
  }
];

const EquipmentTable = props => {
  const data = Object.keys(props.equipments).map(function(key) {
    return {
      category: key,
      name: props.equipments[key]
    };
  });
  return <GameTable data={data} columns={COLUMNS} hasHeader={false} />;
};

const Equipments = props => (
  <BoxWithTitle gridArea="table" title="Equipments">
    <EquipmentTable equipments={props.data} />
  </BoxWithTitle>
);

// Inventory.propTypes = {
//   data: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
//   }).isRequired,
// }

export default Equipments;
