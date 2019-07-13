import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPlotDevelopment } from '../reducers/plotDevelopment'
import PlotDevelopment from '../components/PlotDevelopment'

const PlotDevelopmentContainer = ({ plotDevelopment }) => (
  <PlotDevelopment
    data={plotDevelopment}
  />
)

// InventoryContainer.propTypes = {
//   inventory: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
//   })).isRequired,
// }

const mapStateToProps = (state) => ({
  plotDevelopment: getPlotDevelopment(state),
})

export default connect(
  mapStateToProps,
  // { checkout }
)(PlotDevelopmentContainer)
