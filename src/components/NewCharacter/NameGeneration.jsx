import React from 'react';
import { TextInput, Button, Box, Grid } from 'grommet';
import PropTypes from 'prop-types';

const NameGeneration = ({ name, onUpdate, onGenerateName }) => {
  return (
    <Grid
      areas={[
        { name: 'input', start: [0, 0], end: [0, 0] },
        { name: 'button', start: [1, 0], end: [1, 0] }
      ]}
      columns={['medium', 'xsmall']}
      rows={['xxsmall']}
      gap="medium"
    >
      <Box gridArea="input">
        <TextInput value={name} onChange={event => onUpdate(event.target.value)} />
      </Box>
      <Box gridArea="button">
        <Button label="?" onClick={onGenerateName} />
      </Box>
    </Grid>
  );
};

NameGeneration.propTypes = {
  name: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onGenerateName: PropTypes.func.isRequired
};

export default NameGeneration;
