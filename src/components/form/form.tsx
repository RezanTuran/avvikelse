import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import Axios from 'axios';

const Form = () => {
  const isMobile = useMediaQuery('(min-width:767px)');

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

    const url = 'http://localhost:80/';
    Axios.post(url, formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <Grid
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h5" align="center" color="primary">
        ICA AVVIKELSERAPPORT
      </Typography>
      <Grid
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: isMobile ? '50%' : '100%',
        }}
      >
        <TextField
          type="number"
          label="LASS Nummer"
          variant="outlined"
          style={{ margin: '1em' }}
          onChange={(e) => {
            setLoadNumber(e.target.value);
          }}
        />
        <TextField
          type="date"
          variant="outlined"
          label={isMobile ? '' : 'Datum'}
          style={{ margin: '1em' }}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <TextField
          type="text"
          label="Namn Chaufför"
          variant="outlined"
          style={{ margin: '1em' }}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <TextField
          type="text"
          label="Efternamn Chaufför"
          variant="outlined"
          style={{ margin: '1em' }}
          onChange={(e) => {
            setSureName(e.target.value);
          }}
        />
        <TextField
          type="number"
          label="Chaufförs nummer"
          variant="outlined"
          style={{ margin: '1em' }}
          onChange={(e) => {
            setDriverNumber(e.target.value);
          }}
        />
        <TextField
          type="number"
          label="Mobilnummer"
          variant="outlined"
          style={{ margin: '1em' }}
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
          style={{ margin: '1em' }}
          onChange={(e) => {
            setWaitTimeGuard(e.target.value);
          }}
        />
        <TextField
          type="number"
          label="Väntan på hänvisad last port (Minuter)"
          variant="outlined"
          style={{ margin: '1em' }}
          onChange={(e) => {
            setWaitTimePort(e.target.value);
          }}
        />
        <TextField
          type="number"
          label="Väntan på utlastare (Minuter)"
          variant="outlined"
          style={{ margin: '1em' }}
          onChange={(e) => {
            setWaitTimeUnloader(e.target.value);
          }}
        />
        <TextField
          type="number"
          label="Uppsökning av ej funnet gods (Minuter)"
          variant="outlined"
          style={{ margin: '1em' }}
          onChange={(e) => {
            setWaitTimeSearchGoods(e.target.value);
          }}
        />
        <TextField
          type="number"
          label="Väntan för avlastning av tomgods (Minuter)"
          variant="outlined"
          style={{ margin: '1em' }}
          onChange={(e) => {
            setWaitTimeEmptyGoods(e.target.value);
          }}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ margin: '1em' }}
          onClick={sendRapport}
        >
          Skicka
        </Button>
      </Grid>
    </Grid>
  );
};

export default Form;
