import React from 'react';
import { Box, RadioButton } from 'grommet';
import PropTypes from 'prop-types';
import BoxWithTitle from '../shared/BoxWithTitle';

const RaceSelection = ({ selected, onSelect }) => {
  return (
    <BoxWithTitle title="Select Race">
      {' '}
      {// eslint-disable-next-line no-undef
      window.K.Races.map(text => {
        const label = text.split('|')[0];
        return (
          <Box key={label} margin={{ vertical: 'small' }}>
            <RadioButton
              name="prop"
              checked={selected === label}
              label={label}
              onChange={() => onSelect(label)}
            />
          </Box>
        );
      })}
    </BoxWithTitle>
  );
};

RaceSelection.propTypes = {
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default RaceSelection;
