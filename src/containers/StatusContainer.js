import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCharacterSheet } from '../reducers/characterSheet';
import CharacterSheet from '../components/CharacterSheet';

const CharacterSheetContainer = ({ characterSheet }) => (
  <CharacterSheet data={characterSheet} />
);

// InventoryContainer.propTypes = {
//   inventory: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     quantity: PropTypes.number.isRequired,
//   })).isRequired,
// }

const mapStateToProps = state => ({
  characterSheet: getCharacterSheet(state),
});

export default connect(
  mapStateToProps
  // { checkout }
)(CharacterSheetContainer);
