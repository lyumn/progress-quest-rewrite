import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Box, Grommet } from 'grommet';
import MainContainer from './MainContainer';
import NewCharacterContainer from './NewCharacterContainer';
import theme from '../theme';

const App = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <Grommet theme={theme}>
    <Box background="dark">
      <Router>
        <Route path="/new" exact component={NewCharacterContainer} />
        <Route path="/game/:name" component={MainContainer} />
      </Router>
    </Box>
  </Grommet>
);

export default App;
