import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import Home from './pages/home';
import Router from './router';
function App() {
  return (
    <Grid className="App">
      <Home />
      <Router />
    </Grid>
  );
}

export default App;
