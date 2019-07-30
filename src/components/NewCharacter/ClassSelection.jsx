import React from 'react';
import { Box, RadioButton } from 'grommet';
import PropTypes from 'prop-types';
import BoxWithTitle from '../shared/BoxWithTitle';

const ClassSelection = ({ selected, onSelect }) => {
  return (
    <BoxWithTitle title="Select Class">
      {' '}
      {// eslint-disable-next-line no-undef
      window.K.Klasses.map(text => {
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

ClassSelection.propTypes = {
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default ClassSelection;
