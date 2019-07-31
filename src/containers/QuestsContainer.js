import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getQuests } from '../reducers/quests';
import { getPosition } from '../reducers/bars/questBar';
import Quests from '../components/Quests';

const QuestsContainer = ({ quests, questProgress }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <Quests quests={quests} questProgress={questProgress} />
);

QuestsContainer.propTypes = {
  quests: PropTypes.array.isRequired,
  questProgress: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  quests: getQuests(state),
  questProgress: getPosition(state)
});

export default connect(mapStateToProps)(QuestsContainer);
