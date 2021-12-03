import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import Home from './pages/home';
import Router from './router';
import Footer from './components/footer';
const App = () => {
  return (
    <Grid className="App">
      <Home />
      <Router />
      <Footer sx={{ mt: 8, mb: 4 }} />
    </Grid>
  );
};

export default App;
