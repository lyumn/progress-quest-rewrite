import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEquipments } from '../reducers/equipments';
import Equipments from '../components/Equipments';

const EquipmentContainer = ({ equipments }) => <Equipments data={equipments} />;

EquipmentContainer.propTypes = {
  equipments: PropTypes.shape({
    Weapon: PropTypes.string.isRequired,
    Shield: PropTypes.string.isRequired,
    Helm: PropTypes.string.isRequired,
    Hauberk: PropTypes.string.isRequired,
    Brassairts: PropTypes.string.isRequired,
    Vambraces: PropTypes.string.isRequired,
    Gauntlets: PropTypes.string.isRequired,
    Gambeson: PropTypes.string.isRequired,
    Cuisses: PropTypes.string.isRequired,
    Greaves: PropTypes.string.isRequired,
    Sollerets: PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  equipments: getEquipments(state)
});

export default connect(mapStateToProps)(EquipmentContainer);
