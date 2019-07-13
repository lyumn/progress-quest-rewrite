import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    border: '3px solid #cccccc',
    borderRadius: '10px',
  },
  progress: {
    backgroundColor: '#7fffd4',
    width: '0%',
    height: '10px',
    border: '0px solid #7fffd4',
    borderRadius: '3px',
  },
};
//TODO text on the progress bar
const ProgressBar = ({width}) => (
  <div style={styles.container}>
    <div style={Object.assign(styles.progress, {width: width})}></div>
  </div>
);

ProgressBar.propTypes = {
  width: PropTypes.string.isRequired,
}

export default ProgressBar;
