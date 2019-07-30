import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from '../shared/ProgressBar';

const ExperienceBar = ({ width }) => {
  return <ProgressBar width={width} />;
};

ExperienceBar.propTypes = {
  width: PropTypes.string.isRequired
};

export default ExperienceBar;
