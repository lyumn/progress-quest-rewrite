import React from 'react';
import {
  Table, TableBody, TableCell, TableFooter, TableHeader, TableRow,
  Text,
} from 'grommet';
import BoxWithTitle from './shared/BoxWithTitle';

const Quests = props => (
  <BoxWithTitle gridArea='table' title='Quests'>{JSON.stringify(props.data).toString()}</BoxWithTitle>
);

// Inventory.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
//   })).isRequired,
// }

export default Quests;