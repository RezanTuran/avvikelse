import React from 'react';
import { Button, Grid, Divider, useMediaQuery } from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import { Helmet } from 'react-helmet';
//import LoginIcon from '@mui/icons-material/Login';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CarRepair from '@mui/icons-material/CarRepair';
import { AppRegistration, Login } from '@mui/icons-material';

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

      <Grid className={isMobile ? classes.containerDesktop : classes.container}>
        {/* <Link className={classes.link} to="/login">
          <Button
            variant="contained"
            startIcon={<LoginIcon />}
            className={isMobile ? classes.buttonDekstop : classes.button}
          >
            Logga in
          </Button>
        </Link> */}

        <Link className={classes.link} to="/kungalvform">
          <Button
            variant="contained"
            startIcon={<AssignmentIcon />}
            className={isMobile ? classes.buttonDekstop : classes.button}
          >
            ICA AVVIKELSERAPPORT KUNGÄLV
          </Button>
        </Link>

        <Link className={classes.link} to="/helsingborgform">
          <Button
            variant="contained"
            startIcon={<AssignmentIcon />}
            className={isMobile ? classes.buttonDekstop : classes.button}
          >
            ICA AVVIKELSERAPPORT Helsingborg
          </Button>
        </Link>

        <Link className={classes.link} to="/truckRepair">
          <Button
            variant="contained"
            startIcon={<CarRepair />}
            className={isMobile ? classes.buttonDekstop : classes.button}
          >
            Anmäl Fordon Skada
          </Button>
        </Link>

        <Link className={classes.link} to="/register">
          <Button
            variant="contained"
            startIcon={<AppRegistration />}
            className={isMobile ? classes.buttonDekstop : classes.button}
          >
            REGISTER
          </Button>
        </Link>
        <Link className={classes.link} to="/login">
          <Button
            variant="contained"
            startIcon={<Login />}
            className={isMobile ? classes.buttonDekstop : classes.button}
          >
            Login
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Home;
