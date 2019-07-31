import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPlotDevelopment } from '../reducers/plotDevelopment';
import { getPosition } from '../reducers/bars/plotBar';
import PlotDevelopment from '../components/PlotDevelopment';

const PlotDevelopmentContainer = ({ plotDevelopment, plotProgress }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <PlotDevelopment plotDevelopment={plotDevelopment} plotProgress={plotProgress} />
);

PlotDevelopmentContainer.propTypes = {
  plotDevelopment: PropTypes.object.isRequired,
  plotProgress: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  plotDevelopment: getPlotDevelopment(state),
  plotProgress: getPosition(state)
});

export default connect(mapStateToProps)(PlotDevelopmentContainer);
