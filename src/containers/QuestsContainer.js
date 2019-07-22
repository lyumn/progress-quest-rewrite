import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getQuests } from '../reducers/quests';
import { getPosition } from '../reducers/bars/questBar';
import Quests from '../components/Quests';

const QuestsContainer = ({ quests, questProgress }) => <Quests data={quests} questProgress={questProgress}/>;

// InventoryContainer.propTypes = {
//   inventory: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
//   })).isRequired,
// }

const mapStateToProps = state => ({
  quests: getQuests(state),
  questProgress: getPosition(state),
});

export default connect(
  mapStateToProps
  // { checkout }
)(QuestsContainer);
