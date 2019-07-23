import React from 'react';
import { Box, RadioButton } from 'grommet';
import BoxWithTitle from '../shared/BoxWithTitle';

const RaceSelection = props => {
  // debugger;
  return (
    <BoxWithTitle title="Stats">
      {' '}
      {window.K.Races.map(text => {
        const label = text.split('|')[0];
        return (
          <Box key={label} margin={{ vertical: 'small' }}>
            <RadioButton
              name="prop"
              checked={props.selected === label}
              label={label}
              onChange={() => {}}
            />
          </Box>
        );
      })}
    </BoxWithTitle>
  );
};
export default RaceSelection;
