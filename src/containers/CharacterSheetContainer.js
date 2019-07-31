import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCharacterSheet } from '../reducers/characterSheet';
import { getPosition } from '../reducers/bars/experienceBar';
import CharacterSheet from '../components/CharacterSheet/index';

const CharacterSheetContainer = ({ characterSheet, experience }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <CharacterSheet characterSheet={characterSheet} experience={experience} />
);

CharacterSheetContainer.propTypes = {
  characterSheet: PropTypes.object.isRequired,
  experience: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  characterSheet: getCharacterSheet(state),
  experience: getPosition(state)
});

export default connect(mapStateToProps)(CharacterSheetContainer);
