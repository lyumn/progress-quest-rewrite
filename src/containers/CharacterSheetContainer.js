import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCharacterSheet } from '../reducers/characterSheet';
import CharacterSheet from '../components/CharacterSheet';

const CharacterSheetContainer = ({ characterSheet }) => (
  <CharacterSheet data={characterSheet} />
);

CharacterSheetContainer.propTypes = {
  data: PropTypes.shape({
    Stats: PropTypes.shape({
      'CHA': PropTypes.number.isRequired,
      'CON': PropTypes.number.isRequired,
      'DEX': PropTypes.number.isRequired,
      'HP Max': PropTypes.number.isRequired,
      'INT': PropTypes.number.isRequired,
      'MP Max': PropTypes.number.isRequired,
      'STR': PropTypes.number.isRequired,
      'WIS': PropTypes.number.isRequired,
      'seed': PropTypes.array.isRequired,
    }).isRequired,
    Traits: PropTypes.shape({
      'Class': PropTypes.string.isRequired,
      'Level': PropTypes.number.isRequired,
      'Name': PropTypes.string.isRequired,
      'Race': PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  characterSheet: getCharacterSheet(state),
});

export default connect(
  mapStateToProps
)(CharacterSheetContainer);
