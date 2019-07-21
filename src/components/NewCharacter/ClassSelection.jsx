import React from 'react';
import BoxWithTitle from '../shared/BoxWithTitle';
import { Box, RadioButton } from 'grommet';

const ClassSelection = props => {
  return (
    <BoxWithTitle title='Stats'> {
      window.K.Klasses.map(text => {
        const label = text.split("|")[0];
        return (
          <Box key={label} margin={{ vertical: 'small' }}>
            <RadioButton
              name='prop'
              checked={props.selected === label}
              label={label}
              onChange={() => {}}
            />
        </Box>
        )
    })}
    </BoxWithTitle>
  );
}
export default ClassSelection;