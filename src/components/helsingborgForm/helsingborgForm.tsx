import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  Typography,
  useMediaQuery,
  TextareaAutosize,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import useStyles from './styles';
import Axios from 'axios';
import Rapports from '../rapports/rapports';
import emailjs from 'emailjs-com';

const Form = () => {
  const isMobile = useMediaQuery('(min-width:767px)');
  const classes = useStyles();

  const [pickup, setPickup] = useState(false);
  const [distribution, setDistribution] = useState(false);
  const [firstName, setFirstName] = useState(String);
  const [sureName, setSureName] = useState(String);
  const [phoneNumber, setPhoneNumber] = useState(String);
  const [driverNumber, setDriverNumber] = useState(String);
  const [loadNumber, setLoadNumber] = useState(String);
  const [date, setDate] = useState(String);
  const time = new Date().toLocaleTimeString();
  const [waitTimeGuard, setWaitTimeGuard] = useState(String);
  const [waitTimePort, setWaitTimePort] = useState(String);
  const [waitTimeUnloader, setWaitTimeUnloader] = useState(String);
  const [waitTimeSearchGoods, setWaitTimeSearchGoods] = useState(String);
  const [waitTimeOmexPort, setWaitTimeOmexPort] = useState(String);
  const [includedLoad, setIncludedLoad] = useState(String);
  const [loadNotRady, setLoadNotRady] = useState(String);
  const [otherInfo, setOtherInfo] = useState(String);

  const sendRapport = (e: any) => {
    e.preventDefault();

    let formData = new FormData();

    if (pickup === true) {
      formData.append('drivingtype', 'Helsingborg');
    }
    if (distribution === true) {
      formData.append('drivingtype', 'Distribution');
    }
    formData.append('name', firstName);
    formData.append('surename', sureName);
    formData.append('phonenumber', phoneNumber);
    formData.append('drivernumber', driverNumber);
    formData.append('loadnumber', loadNumber);
    formData.append('date', date);
    formData.append('time', time);
    formData.append('waittimeguard', waitTimeGuard);
    formData.append('waittimeport', waitTimePort);
    formData.append('waittimeunloader', waitTimeUnloader);
    formData.append('waittimesearchgoods', waitTimeSearchGoods);
    formData.append('waittimeomexport', waitTimeOmexPort);
    formData.append('includedload', includedLoad);
    formData.append('loadnotrady', loadNotRady);
    formData.append('otherinfo', otherInfo);

    const url = 'http://localhost:80/insert.php/';
    Axios.post(url, formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  function sendEmail(e: any) {
    e.preventDefault();
    sendRapport(e);
    emailjs
      .sendForm(
        'service_9eavzwt',
        'template_ud9xd4c',
        e.target,
        'user_5dRo73CQVOaKHBKHe6xgQ'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <form onSubmit={sendEmail}>
      <Grid className={classes.wrapper}>
        <Typography variant="h5" align="center" color="primary">
          ICA AVVIKELSERAPPORT HELSINGBORG
        </Typography>
        <Grid
          className={classes.container}
          style={{
            width: isMobile ? '50%' : '100%',
          }}
        >
          <TextField
            type="number"
            name="lass_number"
            label="LASS Nummer"
            variant="outlined"
            className={classes.input}
            onChange={(e) => {
              setLoadNumber(e.target.value);
            }}
          />
          <TextField
            type="date"
            name="date"
            variant="outlined"
            label={isMobile ? '' : 'Datum'}
            className={classes.input}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <TextField
            type="text"
            label="Namn Chaufför"
            name="driver_name"
            variant="outlined"
            className={classes.input}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <TextField
            type="text"
            label="Efternamn Chaufför"
            name="driver_surename"
            variant="outlined"
            className={classes.input}
            onChange={(e) => {
              setSureName(e.target.value);
            }}
          />
          <TextField
            type="number"
            label="Chaufförs nummer"
            name="driver_number"
            variant="outlined"
            className={classes.input}
            onChange={(e) => {
              setDriverNumber(e.target.value);
            }}
          />
          <TextField
            type="number"
            label="Mobilnummer"
            name="phone_number"
            variant="outlined"
            className={classes.input}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <Grid className={classes.checkbox}>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => {
                    setPickup(e.target.checked);
                  }}
                  style={{ color: '#00A093' }}
                />
              }
              label="Hämtning Helsingborg"
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => {
                    setDistribution(e.target.checked);
                  }}
                  style={{ color: '#00A093' }}
                />
              }
              label="Ditrubition"
            />
          </Grid>
          <Typography variant="h6" align="center" color="primary">
            AVVIKELSER LASTNING ICA HELSINGBORG (FRYS)
          </Typography>

          <TextField
            type="text"
            name="wait_time_guard"
            label="Invänta vakt för öppning av port (Minuter)"
            variant="outlined"
            className={classes.input}
            onChange={(e) => {
              setWaitTimeGuard(e.target.value);
            }}
          />
          <TextField
            type="number"
            name="wait_time_port"
            label="Väntan på hänvisad last port (Minuter)"
            variant="outlined"
            className={classes.input}
            onChange={(e) => {
              setWaitTimePort(e.target.value);
            }}
          />
          <TextField
            type="number"
            label="Väntan på utlastare (Minuter)"
            name="wait_time_loader"
            variant="outlined"
            className={classes.input}
            onChange={(e) => {
              setWaitTimeUnloader(e.target.value);
            }}
          />
          <TextField
            type="number"
            label="Uppsökning av ej funnet gods (Minuter)"
            name="wait_time_loader"
            variant="outlined"
            className={classes.input}
            onChange={(e) => {
              setWaitTimeSearchGoods(e.target.value);
            }}
          />
          <TextField
            type="number"
            label="Vänta på port OMEX Exportgatan (Minuter)"
            name="search_load"
            variant="outlined"
            className={classes.input}
            onChange={(e) => {
              setWaitTimeOmexPort(e.target.value);
            }}
          />
          <TextField
            type="number"
            label="Medtaget gods (Antal)"
            name="wait_time_empty_load"
            variant="outlined"
            className={classes.input}
            onChange={(e) => {
              setIncludedLoad(e.target.value);
            }}
          />

          <TextField
            type="number"
            label="Lass ej färdigtplockat (Minuter)"
            name="minut"
            variant="outlined"
            className={classes.input}
            onChange={(e) => {
              setLoadNotRady(e.target.value);
            }}
          />

          <Typography variant="h6" align="center" color="primary">
            ÖVRIGA AVVIKELSER: SPECIFICERA NOGGRANT
          </Typography>
          <Typography variant="body1" align="center" color="secondary">
            Exempel: Väntan för avlastning i butik, försening på grund av
            omständigheter.
          </Typography>
          <TextareaAutosize
            rows={10}
            name="other_info"
            className={classes.input}
            onChange={(e) => {
              setOtherInfo(e.target.value);
            }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.input}
          >
            Skicka
          </Button>
        </Grid>
        <Rapports />
      </Grid>
    </form>
  );
};

export default Form;
