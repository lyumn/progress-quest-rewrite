import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../theme';

const styles = {
  box: {
    border: '3px solid',
    borderColor: theme.global.colors['accent-1'],
    borderRadius: '10px',
    textAlign: 'left'
  },
  title: {
    backgroundColor: theme.global.colors.dark,
    position: 'relative',
    top: -12,
    left: 15,
    display: 'inline-block',
    padding: '0 6px'
  },
  body: {
    margin: '10px'
  }
};

const BoxWithTitle = ({ title, children }) => (
  <div style={styles.box}>
    <div style={styles.title}>{title}</div>
    <div style={styles.body}>{children}</div>
  </div>
);

BoxWithTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired
};

export default BoxWithTitle;
