import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getSpellBook } from '../reducers/spellBook'
import SpellBook from '../components/SpellBook'

const SpellBookContainer = ({ spellBook }) => (
  <SpellBook
    data={spellBook}
  />
)

// InventoryContainer.propTypes = {
//   inventory: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
//   })).isRequired,
// }

const mapStateToProps = (state) => ({
  spellBook: getSpellBook(state),
})

export default connect(
  mapStateToProps,
  // { checkout }
)(SpellBookContainer)
