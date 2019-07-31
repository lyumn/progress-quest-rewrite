import PropTypes from 'prop-types';
import React from 'react';
import BoxWithTitle from './shared/BoxWithTitle';
import GameTable from './shared/GameTable';

const COLUMNS = [
  {
    property: 'spell',
    label: 'spell'
  },
  {
    property: 'level',
    label: 'level'
  }
];

const SpellBookTable = ({ spellBook }) => {
  const data = spellBook.map(value => ({
    spell: value[0],
    level: value[1]
  }));
  return <GameTable data={data} columns={COLUMNS} hasHeader />;
};

const SpellBook = ({ spellBook }) => (
  <BoxWithTitle gridArea="table" title="Spell Book">
    <SpellBookTable spellBook={spellBook} />
  </BoxWithTitle>
);

SpellBook.propTypes = {
  spellBook: PropTypes.array.isRequired
};

SpellBookTable.propTypes = {
  spellBook: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired
};

export default SpellBook;
