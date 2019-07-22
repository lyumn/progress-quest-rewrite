import React from 'react';
import './App.css';
import MainContainer from './MainContainer';
import NewCharacterContainer from './NewCharacterContainer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Box, Button, Grommet, Grid } from 'grommet';
import theme from '../theme';


const App = props => (
  <Grommet theme={theme}>
    <Box background='dark'>
      <Router>
        <Route path="/new" exact component={NewCharacterContainer} />
        <Route path="/game/:name" component={MainContainer} />
      </Router>
    </Box>
  </Grommet>
);

export default App;