import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSpellBook } from '../reducers/spellBook';
import SpellBook from '../components/SpellBook';

// eslint-disable-next-line react/jsx-filename-extension
const SpellBookContainer = ({ spellBook }) => <SpellBook spellBook={spellBook} />;

SpellBookContainer.propTypes = {
  spellBook: PropTypes.isRequired
};

const mapStateToProps = state => ({
  spellBook: getSpellBook(state)
});

export default connect(mapStateToProps)(SpellBookContainer);
