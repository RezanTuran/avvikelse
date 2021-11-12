import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  Typography,
  useMediaQuery,
  TextareaAutosize,
} from '@material-ui/core';
import useStyles from './styles';
import Axios from 'axios';
import Rapports from '../rapports/rapports';

const Form = () => {
  const isMobile = useMediaQuery('(min-width:767px)');
  const classes = useStyles();

  const [firstName, setFirstName] = useState('');
  const [sureName, setSureName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [driverNumber, setDriverNumber] = useState('');
  const [loadNumber, setLoadNumber] = useState('');
  const [date, setDate] = useState('');
  const time = new Date().toLocaleTimeString();
  const [waitTimeGuard, setWaitTimeGuard] = useState('');
  const [waitTimePort, setWaitTimePort] = useState('');
  const [waitTimeUnloader, setWaitTimeUnloader] = useState('');
  const [waitTimeSearchGoods, setWaitTimeSearchGoods] = useState('');
  const [waitTimeEmptyGoods, setWaitTimeEmptyGoods] = useState('');
  const [requireTime, setRequireTime] = useState('');
  const [mileage, setMileage] = useState('');
  const [storeName, setStoreName] = useState('');
  const [city, setCity] = useState('');
  const [quantity, setQuantity] = useState('');
  const [otherInfo, setOtherInfo] = useState('');

  const sendRapport = (e: any) => {
    e.preventDefault();
    let formData = new FormData();

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
    formData.append('waittimeemptygoods', waitTimeEmptyGoods);
    formData.append('requiretime', requireTime);
    formData.append('mileage', mileage);
    formData.append('storename', storeName);
    formData.append('city', city);
    formData.append('quantity', quantity);
    formData.append('otherinfo', otherInfo);

    const url = 'http://localhost:80/insert.php/';
    Axios.post(url, formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Grid className={classes.wrapper}>
      <Typography variant="h5" align="center" color="primary">
        ICA AVVIKELSERAPPORT
      </Typography>
      <Grid
        className={classes.container}
        style={{
          width: isMobile ? '50%' : '100%',
        }}
      >
        <TextField
          type="number"
          label="LASS Nummer"
          variant="outlined"
          className={classes.input}
          onChange={(e) => {
            setLoadNumber(e.target.value);
          }}
        />
        <TextField
          type="date"
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
          variant="outlined"
          className={classes.input}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <TextField
          type="text"
          label="Efternamn Chaufför"
          variant="outlined"
          className={classes.input}
          onChange={(e) => {
            setSureName(e.target.value);
          }}
        />
        <TextField
          type="number"
          label="Chaufförs nummer"
          variant="outlined"
          className={classes.input}
          onChange={(e) => {
            setDriverNumber(e.target.value);
          }}
        />
        <TextField
          type="number"
          label="Mobilnummer"
          variant="outlined"
          className={classes.input}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <Typography variant="h6" align="center" color="primary">
          AVVIKELSER LASTNING ICA KUNGÄLV
        </Typography>

        <TextField
          type="text"
          label="Invänta vakt för öppning av port (Minuter)"
          variant="outlined"
          className={classes.input}
          onChange={(e) => {
            setWaitTimeGuard(e.target.value);
          }}
        />
        <TextField
          type="number"
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
          variant="outlined"
          className={classes.input}
          onChange={(e) => {
            setWaitTimeUnloader(e.target.value);
          }}
        />
        <TextField
          type="number"
          label="Uppsökning av ej funnet gods (Minuter)"
          variant="outlined"
          className={classes.input}
          onChange={(e) => {
            setWaitTimeSearchGoods(e.target.value);
          }}
        />
        <TextField
          type="number"
          label="Väntan för avlastning av tomgods (Minuter)"
          variant="outlined"
          className={classes.input}
          onChange={(e) => {
            setWaitTimeEmptyGoods(e.target.value);
          }}
        />

        <Typography variant="h6" align="center" color="primary">
          UPPGIFTER VID ÖVEDRAG OCH STÄLLA SLÄP
        </Typography>
        <TextField
          type="number"
          label="Tidsåtgång (Minuter)"
          variant="outlined"
          className={classes.input}
          onChange={(e) => {
            setRequireTime(e.target.value);
          }}
        />
        <TextField
          type="number"
          label="Extra körsträcka (KM)"
          variant="outlined"
          className={classes.input}
          onChange={(e) => {
            setMileage(e.target.value);
          }}
        />
        <TextField
          type="text"
          label="Butiksnamn"
          variant="outlined"
          className={classes.input}
          onChange={(e) => {
            setStoreName(e.target.value);
          }}
        />
        <TextField
          type="text"
          label="Stad"
          variant="outlined"
          className={classes.input}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <TextField
          type="text"
          label="Antal ib (Överdrag)"
          variant="outlined"
          className={classes.input}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />
        <Typography variant="h6" align="center" color="primary">
          ÖVRIGA AVVIKELSER: SPECIFICERA NOGGRANT
        </Typography>
        <Typography variant="body1" align="center" color="secondary">
          Exempel: väntan för avlastning i butik, försening på grund av
          omständigheter.
        </Typography>
        <TextareaAutosize
          rows={10}
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
          onClick={sendRapport}
        >
          Skicka
        </Button>
      </Grid>

      <Rapports />
    </Grid>
  );
};

export default Form;
