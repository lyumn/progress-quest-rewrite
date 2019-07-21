import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getInventory } from '../reducers/inventory';
import Inventory from '../components/Inventory';

const InventoryContainer = ({ inventory }) => <Inventory data={inventory} />;

InventoryContainer.propTypes = {
  inventory: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = state => ({
  inventory: getInventory(state),
});

export default connect(
  mapStateToProps
  // { checkout }
)(InventoryContainer);
