import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEquipments } from '../reducers/equipments';
import Equipments from '../components/Equipments';

// eslint-disable-next-line react/jsx-filename-extension
const EquipmentContainer = ({ equipments }) => <Equipments equipments={equipments} />;

EquipmentContainer.propTypes = {
  equipments: PropTypes.isRequired
};

const mapStateToProps = state => ({
  equipments: getEquipments(state)
});

export default connect(mapStateToProps)(EquipmentContainer);
