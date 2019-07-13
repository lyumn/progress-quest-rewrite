import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  box: {
    border: '3px solid #cccccc',
    borderRadius: '10px',
    textAlign: 'left',
  },
  title:{
    backgroundColor: 'white',
    position: 'relative',
    top: -12,
    left: 15,
    display: 'inline-block',
    padding: '0 6px',
  }
};

//TODO need a font for title
const BoxWithTitle = ({title, children}) => (
    <div style={styles.box}>
    <div style={styles.title}>{title}</div>
      <div style={{margin: '10px'}}>{children}</div>
    </div>
);

BoxWithTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

export default BoxWithTitle;