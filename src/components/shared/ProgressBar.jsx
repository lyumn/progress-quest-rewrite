import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../theme';

const styles = {
  container: {
    border: '4px solid',
    borderRadius: '10px',
    borderColor: theme.global.colors['accent-1']
  },
  progress: {
    backgroundColor: theme.global.colors['accent-2'],
    width: '0%',
    height: '11px',
    border: '0px solid #7fffd4',
    borderRadius: '3px'
  }
};

const ProgressBar = ({ width }) => (
  <div style={styles.container}>
    <div style={{ ...styles.progress, width }} />
  </div>
);

ProgressBar.propTypes = {
  width: PropTypes.string.isRequired
};

export default ProgressBar;
