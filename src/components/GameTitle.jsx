import React from 'react';
import { Box, Grid, Button, Text, Menu } from 'grommet';
import { gameDataList } from '../utils/storage';

const GameTitle = () => {
  const gameData = gameDataList();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Grid
        areas={[
          { name: 'title', start: [0, 0], end: [1, 0] },
          { name: 'new', start: [0, 1], end: [0, 1] },
          { name: 'continue', start: [1, 1], end: [1, 1] }
        ]}
        columns={['1/2', '1/2']}
        rows={['auto', 'auto']}
        gap="xlarge"
      >
        <Box gridArea="title" align="center" animation="pulse" style={{}}>
          <Text style={{ fontSize: 96 }}>Progress Quest</Text>
        </Box>
        <Box gridArea="new" align="center">
          <Button
            label={<Text style={{ fontSize: 24 }}>New Game</Text>}
            onClick={() => {
              window.location.href = '/new';
            }}
            style={{ marginTop: '9px' }}
            plain
          />
        </Box>
        <Box gridArea="continue" align="center">
          <Menu
            label={<Text style={{ fontSize: 24 }}>Continue</Text>}
            items={gameData.map(e => ({
              label: e,
              href: `game/${e}`
            }))}
            icon={false}
            disabled={gameData.length === 0}
          />
        </Box>
      </Grid>
    </div>
  );
};

export default GameTitle;
