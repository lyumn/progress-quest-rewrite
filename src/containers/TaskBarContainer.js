import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getQuests } from '../reducers/quests';
import { getPosition, getTask } from '../reducers/bars/taskBar';
import Quests from '../components/Quests';
import ProgressBar from '../components/shared/ProgressBar';

const TaskContainer = ({ taskProgress, task }) => (
  <div>
    <div>{task}</div>
    <ProgressBar width={taskProgress} />
  </div>
);

// InventoryContainer.propTypes = {
//   inventory: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
//   })).isRequired,
// }

const mapStateToProps = state => ({
  taskProgress: getPosition(state),
  task: getTask(state)
});

export default connect(
  mapStateToProps
  // {checkout}
)(TaskContainer);
