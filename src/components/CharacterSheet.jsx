import React from 'react';
import {
  Table, TableBody, TableCell, TableFooter, TableHeader, TableRow,
  Text,
} from 'grommet';
import BoxWithTitle from './shared/BoxWithTitle';


// const TRAIT_COLUMNS = [
//   {
//     property: 'trait',
//     label: 'Trait',
//     dataScope: 'row',
//     // format: datum => <strong>{datum.name}</strong>,
//   },
//   {
//     property: 'value',
//     label: 'Value',
//     // footer: amountFormatter.format(TOTAL / 100),
//     // format: datum => amountFormatter.format(datum.amount / 100),
//   },
// ];

// const traitData = [
//   {
//     id: 1, trait: 'Name', value: 'Brovdrub',
//   },
//   {
//     id: 2, trait: 'Race', value: 'Crested Dwarf',
//   },
//   {
//     id: 3, trait: 'Class', value: 'Mage Illusioner',
//   },
//   {
//     id: 4, trait: 'Level', value: 7,
//   },
// ];

// const STAT_COLUMNS = [
//   {
//     property: 'stat',
//     label: 'Stat',
//     dataScope: 'row',
//     // format: datum => <strong>{datum.name}</strong>,
//   },
//   {
//     property: 'value',
//     label: 'Value',
//     // footer: amountFormatter.format(TOTAL / 100),
//     // format: datum => amountFormatter.format(datum.amount / 100),
//   },
// ];

// const statData = [
//   {
//     id: 1, trait: 'STR', value: 19,
//   },
//   {
//     id: 2, trait: 'CON', value: 19,
//   },
//   {
//     id: 3, trait: 'DEX', value: 19,
//   },
//   {
//     id: 4, trait: 'INT', value: 7,
//   },
//   {
//     id: 1, trait: 'WIS', value: 19,
//   },
//   {
//     id: 2, trait: 'CHA', value: 19,
//   },
//   {
//     id: 3, trait: 'HP Max', value: 19,
//   },
//   {
//     id: 4, trait: 'MP Max', value: 7,
//   },
// ];

// const TraitTable = props => (
//   <Table caption='Simple Table'>
//       <TableHeader>
//         <TableRow>
//           {TRAIT_COLUMNS.map(c => (
//             <TableCell key={c.property} scope='col' border='bottom' align={c.align}>
//               <Text>{c.label}</Text>
//             </TableCell>
//           ))}
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {traitData.map(datum => (
//           <TableRow key={datum.id}>
//             {TRAIT_COLUMNS.map(c => (
//               <TableCell key={c.property} scope={c.dataScope} align={c.align}>
//                 <Text>
//                   {datum[c.property]}
//                 </Text>
//               </TableCell>
//             ))}
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
// );

// const StatTable = props => (
//   <Table caption='Simple Table'>
//       <TableHeader>
//         <TableRow>
//           {STAT_COLUMNS.map(c => (
//             <TableCell key={c.property} scope='col' border='bottom' align={c.align}>
//               <Text>{c.label}</Text>
//             </TableCell>
//           ))}
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {statData.map(datum => (
//           <TableRow key={datum.id}>
//             {TRAIT_COLUMNS.map(c => (
//               <TableCell key={c.property} scope={c.dataScope} align={c.align}>
//                 <Text>
//                   {datum[c.property]}
//                 </Text>
//               </TableCell>
//             ))}
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
// );


// const CharacterSheet = props => (
//   <section>
//     <h2>Character Sheet</h2>
//     <TraitTable />
//     <StatTable />
//   </section>
// );

const CharacterSheet = props => (
  <BoxWithTitle gridArea='table' title='Character Sheet'>{JSON.stringify(props.data).toString()}</BoxWithTitle>
);

// Inventory.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
//   })).isRequired,
// }

export default CharacterSheet;