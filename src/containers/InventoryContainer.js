import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getInventory } from '../reducers/inventory';
import { getPosition } from '../reducers/bars/encumbranceBar';
import Inventory from '../components/Inventory';

const InventoryContainer = ({ inventory, encumbrance }) => (
  <Inventory data={inventory} encumbrance={encumbrance} />
);

InventoryContainer.propTypes = {
  inventory: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  encumbrance: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  inventory: getInventory(state),
  encumbrance: getPosition(state)
});

export default connect(
  mapStateToProps
  // { checkout }
)(InventoryContainer);
