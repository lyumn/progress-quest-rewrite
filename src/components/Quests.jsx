import React from 'react';
import { Box, Grid, CheckBox } from 'grommet';
import PropTypes from 'prop-types';

import BoxWithTitle from './shared/BoxWithTitle';
import ProgressBar from './shared/ProgressBar';

const DISPLAY_MAX = 10;

const styles = {
  checkBox: {
    margin: '2px 0px'
  }
};

const displayArray = array =>
  array.length > DISPLAY_MAX ? array.slice(Math.max(DISPLAY_MAX - 10, 1)) : array;

const Quests = ({ quests, questProgress }) => {
  const array = displayArray(quests);

  return (
    <Grid
      areas={[
        { name: 'table', start: [0, 0], end: [0, 0] },
        { name: 'tracking', start: [0, 1], end: [0, 1] }
      ]}
      columns={['flex']}
      rows={['flex', '13px']}
      gap="small"
    >
      <BoxWithTitle gridArea="table" title="Quests">
        {array.map((e, i) => (
          <CheckBox checked={i < array.length - 1} label={e} style={styles.checkBox} />
        ))}
      </BoxWithTitle>
      <Box gridArea="tracking">
        <ProgressBar width={questProgress} />
      </Box>
    </Grid>
  );
};

Quests.propTypes = {
  quests: PropTypes.arrayOf(PropTypes.string).isRequired,
  questProgress: PropTypes.string.isRequired
};

export default Quests;
