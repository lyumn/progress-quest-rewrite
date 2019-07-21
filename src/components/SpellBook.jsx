// import React from 'react';
// import {
//   Table, TableBody, TableCell, TableFooter, TableHeader, TableRow,
//   Text,
// } from 'grommet';
// import BoxWithTitle from './shared/BoxWithTitle';

// const SpellBook = props => (
//   <BoxWithTitle gridArea='table' title='Spell Book'>{JSON.stringify(props.data).toString()}</BoxWithTitle>
// );

// // Inventory.propTypes = {
// //   data: PropTypes.arrayOf(PropTypes.shape({
// //     name: PropTypes.string.isRequired,
// //     quantity: PropTypes.number.isRequired,
// //   })).isRequired,
// // }

// export default SpellBook;


import React from 'react';
import {
  Table, TableBody, TableCell, TableFooter, TableHeader, TableRow,
  Text,
} from 'grommet';
import BoxWithTitle from './shared/BoxWithTitle';
import GameTable from './shared/GameTable'

const COLUMNS = [
  {
    property: 'spell',
    label: 'spell',
  },
  {
    property: 'level',
    label: 'level',
  },
];

const SpellBookTable = (props) => {
  const data = props.spells.map(function(value) {
    return {
      spell: value[0],
      level: value[1]
    };
  });
  return (
    <GameTable data={data} columns={COLUMNS} hasHeader={true} />
  )
};

const SpellBook = props => (
  <BoxWithTitle gridArea='table' title='Spell Book'>
    <SpellBookTable spells={props.data} />
    </BoxWithTitle>
);

// Inventory.propTypes = {
//   data: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
//   }).isRequired,
// }

export default SpellBook;