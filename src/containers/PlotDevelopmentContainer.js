import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPlotDevelopment } from '../reducers/plotDevelopment';
import { getPosition } from '../reducers/bars/plotBar';
import PlotDevelopment from '../components/PlotDevelopment';

const PlotDevelopmentContainer = ({ plotDevelopment, plotProgress }) => (
  <PlotDevelopment data={plotDevelopment} plotProgress={plotProgress} />
);

// InventoryContainer.propTypes = {
//   inventory: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
//   })).isRequired,
// }

const mapStateToProps = state => ({
  plotDevelopment: getPlotDevelopment(state),
  plotProgress: getPosition(state)
});

export default connect(
  mapStateToProps
  // { checkout }
)(PlotDevelopmentContainer);
