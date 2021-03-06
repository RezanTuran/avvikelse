import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  Typography,
  useMediaQuery,
  TextareaAutosize,
  Box,
} from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';
import useStyles from './styles';
import Axios from 'axios';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import SignatureCanvas from 'react-signature-canvas';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

let signatureData: any[] = [];
let data = '';

const KungalvForm = () => {
  const signCanvas = React.useRef() as React.MutableRefObject<any>;
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
  const [storeNumber, setStoreNumber] = useState(String);
  const [city, setCity] = useState(String);
  const [quantity, setQuantity] = useState(String);
  const [otherInfo, setOtherInfo] = useState(String);
  const [signature, setSignature] = useState([]);
  const [deliveryArea, setDeliveryArea] = React.useState(String);

  const handleChange = (e: SelectChangeEvent) => {
    setDeliveryArea(e.target.value);
  };

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
  if (storeNumber === '') {
    setStoreNumber('0');
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

  const saveSignature = () => {
    if (signCanvas.current.isEmpty()) {
      Swal.fire({
        icon: 'error',
        title: 'OBS!',
        text: 'V??nlingen signera i rutan',
      });
      return false;
    } else {
      setSignature([...signature]);
      signatureData.push(
        signCanvas.current.getTrimmedCanvas().toDataURL('image/png')
      );
      Swal.fire({
        icon: 'success',
        text: 'Din signatur ??r godk??nd',
      });
    }
  };

  const clearSignature = () => {
    setSignature([...signature]);
    signatureData.pop();
    signCanvas.current.clear();
  };

  const sendRapport = (e: any) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append('name', firstName);
    formData.append('surename', sureName);
    formData.append('phonenumber', phoneNumber);
    formData.append('drivernumber', driverNumber);
    formData.append('loadnumber', loadNumber);
    formData.append('deliveryarea', deliveryArea);
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
    formData.append('storenumber', storeNumber);
    formData.append('city', city);
    formData.append('quantity', quantity);
    formData.append('otherinfo', otherInfo);

    data = signCanvas.current.getTrimmedCanvas().toDataURL('image/png');
    formData.append('signature', data);

    const url = process.env.REACT_APP_POST || '';
    Axios.post(url, formData);
    // .then((res) => console.log(res.data))
    // .catch((err) => console.log(err));
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (firstName === '') {
      Swal.fire({
        icon: 'error',
        title: 'OBS!',
        text: 'V??nligen skriv ditt f??rnamn',
      });
      return false;
    } else if (sureName === '') {
      Swal.fire({
        icon: 'error',
        title: 'OBS!',
        text: 'V??nligen skriv ditt efternamn',
      });
      return false;
    } else if (loadNumber === '') {
      Swal.fire({
        icon: 'error',
        title: 'OBS!',
        text: 'V??nligen skriv lass nummret',
      });
      return false;
    } else if (deliveryArea === '') {
      Swal.fire({
        icon: 'error',
        title: 'OBS!',
        text: 'V??nligen ange utleveransomr??de',
      });
      return false;
    } else if (date === '') {
      Swal.fire({
        icon: 'error',
        title: 'OBS!',
        text: 'V??nligen skriv datumet',
      });
      return false;
    } else if (driverNumber === '') {
      Swal.fire({
        icon: 'error',
        title: 'OBS!',
        text: 'V??nligen skriv chauff??rs nummret',
      });
      return false;
    } else if (phoneNumber === '') {
      Swal.fire({
        icon: 'error',
        title: 'OBS!',
        text: 'V??nligen skriv ditt telefonnummer',
      });
      return false;
    } else if (signCanvas.current.isEmpty() === true) {
      Swal.fire({
        icon: 'error',
        title: 'OBS!',
        text: 'V??nligen signera',
      });
      return false;
    } else if (signatureData.length < 1) {
      Swal.fire({
        icon: 'error',
        title: 'OBS!',
        text: 'V??nligen signera genom att klcika p?? signera buttonen',
      });
      return false;
    } else {
      sendRapport(e);
      clearSignature();
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_ID || '',
          process.env.REACT_APP_EMAIL_TEMPLATE_ID || '',
          e.target,
          process.env.REACT_APP_EMAIL_USER_ID || ''
        )
        .then(
          (result) => {
            //console.log(result.text);
            if (result.status === 200) {
              Swal.fire({
                icon: 'success',
                text: 'Avvikelse rapporten har skickats',
              });
            }
          },
          (error) => {
            //console.log(error.text);
            if (error) {
              Swal.fire({
                icon: 'error',
                text: 'Det gick inte skicka avvikelse rapporten v??nligen f??rs??k igen',
              });
            }
          }
        );
      e.target.reset();
    }
  };

  return (
    <Grid>
      <Helmet>
        <title>ICA Kung??lv</title>
      </Helmet>
      <Box onSubmit={sendEmail} component="form">
        <Grid className={classes.wrapper}>
          <Typography variant="h5" align="center" color="primary">
            ICA AVVIKELSERAPPORT KUNG??LV
          </Typography>
          <Typography variant="h6" color="secondary">
            Fyll i stj??rnmarkerade f??lt
          </Typography>
          <Grid
            className={classes.container}
            style={{
              width: isMobile ? '50%' : '100%',
            }}
          >
            <Grid className={classes.inputBox}>
              <Box sx={{ minWidth: 220 }}>
                <FormControl fullWidth>
                  <InputLabel
                    className={classes.input}
                    id="demo-simple-select-label"
                  >
                    Utleveransomr??de *
                  </InputLabel>
                  <Select
                    className={classes.input}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={deliveryArea}
                    label="Utleveransomr??de *"
                    onChange={handleChange}
                    name="delivery_area"
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <TextField
                fullWidth
                type="number"
                name="lass_number"
                label="LASS Nummer *"
                variant="outlined"
                className={classes.input}
                onChange={(e) => {
                  setLoadNumber(e.target.value);
                }}
              />
            </Grid>

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
              label="Namn Chauff??r *"
              name="driver_name"
              variant="outlined"
              className={classes.input}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <TextField
              type="text"
              label="Efternamn Chauff??r *"
              name="driver_surename"
              variant="outlined"
              className={classes.input}
              onChange={(e) => {
                setSureName(e.target.value);
              }}
            />
            <TextField
              type="number"
              label="Chauff??rs nummer *"
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
              AVVIKELSER LASTNING ICA KUNG??LV
            </Typography>

            <TextField
              type="text"
              name="wait_time_guard"
              label="Inv??nta vakt f??r ??ppning av port (Minuter)"
              variant="outlined"
              className={classes.input}
              onChange={(e) => {
                setWaitTimeGuard(e.target.value);
              }}
            />
            <TextField
              type="number"
              name="wait_time_port"
              label="V??ntan p?? h??nvisad last port (Minuter)"
              variant="outlined"
              className={classes.input}
              onChange={(e) => {
                setWaitTimePort(e.target.value);
              }}
            />
            <TextField
              type="number"
              label="V??ntan p?? utlastare (Minuter)"
              name="wait_time_loader"
              variant="outlined"
              className={classes.input}
              onChange={(e) => {
                setWaitTimeUnloader(e.target.value);
              }}
            />
            <TextField
              type="number"
              label="Upps??kning av ej funnet gods (Minuter)"
              name="search_load"
              variant="outlined"
              className={classes.input}
              onChange={(e) => {
                setWaitTimeSearchGoods(e.target.value);
              }}
            />
            <TextField
              type="number"
              label="V??ntan f??r avlastning av tomgods (Minuter)"
              name="wait_time_empty_load"
              variant="outlined"
              className={classes.input}
              onChange={(e) => {
                setWaitTimeEmptyGoods(e.target.value);
              }}
            />

            <Typography variant="h6" align="center" color="primary">
              UPPGIFTER VID ??VEDRAG OCH ST??LLA SL??P
            </Typography>
            <TextField
              type="number"
              label="Tids??tg??ng (Minuter)"
              name="minut"
              variant="outlined"
              className={classes.input}
              onChange={(e) => {
                setRequireTime(e.target.value);
              }}
            />
            <TextField
              type="number"
              label="Extra k??rstr??cka (KM)"
              name="extra_drive"
              variant="outlined"
              className={classes.input}
              onChange={(e) => {
                setMileage(e.target.value);
              }}
            />
            <Grid className={classes.inputBox}>
              <TextField
                fullWidth
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
                fullWidth
                type="number"
                label="Butiksnummer"
                name="store_number"
                variant="outlined"
                className={classes.input}
                onChange={(e) => {
                  setStoreNumber(e.target.value);
                }}
              />
            </Grid>
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
              label="Antal ib (??verdrag)"
              name="quantity"
              variant="outlined"
              className={classes.input}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
            <Typography variant="h6" align="center" color="primary">
              ??VRIGA AVVIKELSER: SPECIFICERA NOGGRANT
            </Typography>
            <Typography variant="body1" align="center" color="secondary">
              Exempel: V??ntan f??r avlastning i butik, f??rsening p?? grund av
              omst??ndigheter.
            </Typography>
            <TextareaAutosize
              rows={10}
              name="other_info"
              className={classes.input}
              onChange={(e) => {
                setOtherInfo(e.target.value);
              }}
            />
            <Typography variant="h6" align="center" color="primary">
              Underskrift Chauff??r
            </Typography>
            <Typography variant="body1" align="center" color="secondary">
              OBS! Gl??m inte signera innan du skickar rapporten
            </Typography>
            <Grid className={classes.signatureContainer}>
              <Grid className={classes.signature}>
                <SignatureCanvas
                  ref={signCanvas}
                  penColor="black"
                  canvasProps={{
                    width: isMobile ? 700 : 350,
                    height: 200,
                  }}
                />
              </Grid>
              <Grid className={classes.signatureButtonsBox}>
                <Button
                  onClick={saveSignature}
                  type="button"
                  variant="contained"
                  className={classes.signatureAreaButtons}
                >
                  Signera
                </Button>
                <Button
                  onClick={clearSignature}
                  type="button"
                  variant="contained"
                  className={classes.signatureAreaButtons}
                >
                  Rensa
                </Button>
              </Grid>
            </Grid>
            <TextField
              type="text"
              name="signature"
              value={signatureData}
              className={classes.hiddenInput}
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
        </Grid>
      </Box>
    </Grid>
  );
};

export default KungalvForm;
