import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  Typography,
  useMediaQuery,
  TextareaAutosize,
} from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';
import useStyles from './styles';
import Axios from 'axios';
import Rapports from '../rapports/rapports';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const KungalvForm = () => {
  const isMobile = useMediaQuery('(min-width:767px)');
  const classes = useStyles();

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
  const [waitTimeEmptyGoods, setWaitTimeEmptyGoods] = useState(String);
  const [requireTime, setRequireTime] = useState(String);
  const [mileage, setMileage] = useState(String);
  const [storeName, setStoreName] = useState(String);
  const [city, setCity] = useState(String);
  const [quantity, setQuantity] = useState(String);
  const [otherInfo, setOtherInfo] = useState(String);

  if (waitTimeGuard === '') {
    setWaitTimeGuard('0');
  }
  if (waitTimePort === '') {
    setWaitTimePort('0');
  }
  if (waitTimeUnloader === '') {
    setWaitTimeUnloader('0');
  }
  if (waitTimeSearchGoods === '') {
    setWaitTimeSearchGoods('0');
  }
  if (waitTimeEmptyGoods === '') {
    setWaitTimeEmptyGoods('0');
  }
  if (requireTime === '') {
    setRequireTime('0');
  }
  if (mileage === '') {
    setMileage('0');
  }
  if (storeName === '') {
    setStoreName(' ');
  }
  if (city === '') {
    setCity(' ');
  }
  if (quantity === '') {
    setQuantity('0');
  }
  if (otherInfo === '') {
    setOtherInfo(' ');
  }

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

    const url = process.env.REACT_APP_POST || '';
    Axios.post(url, formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (firstName === '') {
      Swal.fire({
        icon: 'error',
        title: 'OBS!',
        text: 'Vänligen skriv ditt förnamn',
      });
      return false;
    } else if (sureName === '') {
      Swal.fire({
        icon: 'error',
        title: 'OBS!',
        text: 'Vänligen skriv ditt efternamn',
      });
      return false;
    } else if (loadNumber === '') {
      Swal.fire({
        icon: 'error',
        title: 'OBS!',
        text: 'Vänligen skriv lass nummret',
      });
      return false;
    } else if (date === '') {
      Swal.fire({
        icon: 'error',
        title: 'OBS!',
        text: 'Vänligen skriv datumet',
      });
      return false;
    } else if (driverNumber === '') {
      Swal.fire({
        icon: 'error',
        title: 'OBS!',
        text: 'Vänligen skriv chaufförs nummret',
      });
      return false;
    } else if (phoneNumber === '') {
      Swal.fire({
        icon: 'error',
        title: 'OBS!',
        text: 'Vänligen skriv ditt telefonnummer',
      });
      return false;
    } else {
      sendRapport(e);
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_ID || '',
          process.env.REACT_APP_EMAIL_TEMPLATE_ID || '',
          e.target,
          process.env.REACT_APP_EMAIL_USER_ID || ''
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
  };

  return (
    <Grid>
      <Helmet>
        <title>ICA Kungälv</title>
      </Helmet>
      <form onSubmit={sendEmail}>
        <Grid className={classes.wrapper}>
          <Typography variant="h5" align="center" color="primary">
            ICA AVVIKELSERAPPORT KUNGÄLV
          </Typography>
          <Typography variant="h6" color="secondary">
            Fyll i stjärnmarkerade fält
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
              label="LASS Nummer *"
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
              label={isMobile ? '' : 'Datum *'}
              className={classes.input}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            <TextField
              type="text"
              label="Namn Chaufför *"
              name="driver_name"
              variant="outlined"
              className={classes.input}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <TextField
              type="text"
              label="Efternamn Chaufför *"
              name="driver_surename"
              variant="outlined"
              className={classes.input}
              onChange={(e) => {
                setSureName(e.target.value);
              }}
            />
            <TextField
              type="number"
              label="Chaufförs nummer *"
              name="driver_number"
              variant="outlined"
              className={classes.input}
              onChange={(e) => {
                setDriverNumber(e.target.value);
              }}
            />
            <TextField
              type="number"
              label="Mobilnummer *"
              name="phone_number"
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
              name="search_load"
              variant="outlined"
              className={classes.input}
              onChange={(e) => {
                setWaitTimeSearchGoods(e.target.value);
              }}
            />
            <TextField
              type="number"
              label="Väntan för avlastning av tomgods (Minuter)"
              name="wait_time_empty_load"
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
              name="minut"
              variant="outlined"
              className={classes.input}
              onChange={(e) => {
                setRequireTime(e.target.value);
              }}
            />
            <TextField
              type="number"
              label="Extra körsträcka (KM)"
              name="extra_drive"
              variant="outlined"
              className={classes.input}
              onChange={(e) => {
                setMileage(e.target.value);
              }}
            />
            <TextField
              type="text"
              label="Butiksnamn"
              name="store_name"
              variant="outlined"
              className={classes.input}
              onChange={(e) => {
                setStoreName(e.target.value);
              }}
            />
            <TextField
              type="text"
              label="Stad"
              name="city"
              variant="outlined"
              className={classes.input}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <TextField
              type="text"
              label="Antal ib (Överdrag)"
              name="quantity"
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
              endIcon={<SendIcon />}
              className={classes.input}
            >
              Skicka
            </Button>
          </Grid>
          <Rapports />
        </Grid>
      </form>
    </Grid>
  );
};

export default KungalvForm;
