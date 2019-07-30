import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from 'grommet';
import BoxWithTitle from './shared/BoxWithTitle';
import ProgressBar from './shared/ProgressBar';
import GameTable from './shared/GameTable';

const COLUMNS = [
  {
    property: 'item',
    label: 'Item'
  },
  {
    property: 'qty',
    label: 'Qty'
  }
];

const InventoryTable = props => {
  const data = props.items.map(function(value) {
    return {
      item: value.name,
      qty: value.quantity
    };
  });

  return <GameTable data={data} columns={COLUMNS} hasHeader />;
};

const Inventory = ({ inventory, encumbrance }) => (
  <Grid
    areas={[
      { name: 'table', start: [0, 0], end: [0, 0] },
      { name: 'tracking', start: [0, 1], end: [0, 1] }
    ]}
    columns={['flex']}
    rows={['flex', '30px']}
    gap="small"
  >
    <BoxWithTitle gridArea="table" title="Inventory">
      <InventoryTable items={inventory} />
    </BoxWithTitle>
    <Box gridArea="tracking">
      <div>Encumbrance</div>
      <ProgressBar width={encumbrance} />
    </Box>
  </Grid>
);

Inventory.propTypes = {
  inventory: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  encumbrance: PropTypes.string.isRequired
};

export default Inventory;
