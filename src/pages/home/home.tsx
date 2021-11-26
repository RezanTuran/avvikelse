import React from 'react';
import { Button, Grid, Divider, useMediaQuery } from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import { Helmet } from 'react-helmet';

const Home = () => {
  const isMobile = useMediaQuery('(min-width:991px)');
  const classes = useStyles();

  return (
    <Grid>
      <Helmet>
        <title>Höviksnäs Kyltransport AB</title>
      </Helmet>
      <Grid className={classes.logo}>
        <img src={Logo} alt="logo" width={isMobile ? '' : '300px'} />
      </Grid>
      <Divider variant="middle" />
      <Grid className={classes.container}>
        <Grid className={classes.buttonBox}>
          <Button variant="contained" className={classes.button}>
            <Link className={classes.link} to="/kungalvform">
              ICA AVVIKELSERAPPORT KUNGÄLV
            </Link>
          </Button>
        </Grid>
        <Grid className={classes.buttonBox}>
          <Button variant="contained" className={classes.button}>
            <Link className={classes.link} to="/helsingborgform">
              ICA AVVIKELSERAPPORT Helsingborg
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
