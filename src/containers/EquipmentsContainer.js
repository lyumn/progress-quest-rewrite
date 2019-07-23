import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEquipments } from '../reducers/equipments';
import Equipments from '../components/Equipments';

const EquipmentContainer = ({ equipments }) => <Equipments data={equipments} />;

// InventoryContainer.propTypes = {
//   inventory: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
//   })).isRequired,
// }

const mapStateToProps = state => ({
  equipments: getEquipments(state)
});

export default connect(
  mapStateToProps
  // { checkout }
)(EquipmentContainer);
