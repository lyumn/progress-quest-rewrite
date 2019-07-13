import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getQuests } from '../reducers/quests'
import Quests from '../components/Quests'

const QuestsContainer = ({ quests }) => (
  <Quests
    data={quests}
  />
)

// InventoryContainer.propTypes = {
//   inventory: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
//   })).isRequired,
// }

const mapStateToProps = (state) => ({
  quests: getQuests(state),
})

export default connect(
  mapStateToProps,
  // { checkout }
)(QuestsContainer)
