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
  Box,
} from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send';
import useStyles from './styles';
import Axios from 'axios';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import SignatureCanvas from 'react-signature-canvas';

let signatureData: any[] = [];
let data = '';

const HelsingborgForm = () => {
  const signCanvas = React.useRef() as React.MutableRefObject<any>;
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
  const [signature, setSignature] = useState([]);

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
  if (waitTimeOmexPort === '') {
    setWaitTimeOmexPort('0');
  }
  if (includedLoad === '') {
    setIncludedLoad('0');
  }
  if (loadNotRady === '') {
    setLoadNotRady('0');
  }
  if (otherInfo === '') {
    setOtherInfo(' ');
  }

  const saveSignature = () => {
    if (signCanvas.current.isEmpty()) {
      Swal.fire({
        icon: 'error',
        title: 'OBS!',
        text: 'Vänlingen signera i rutan',
      });
      return false;
    } else {
      setSignature([...signature]);
      signatureData.push(
        signCanvas.current.getTrimmedCanvas().toDataURL('image/png')
      );
      Swal.fire({
        icon: 'success',
        text: 'Din signatur är godkänd',
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

    if (pickup === true) {
      formData.append('drivingtype', 'Hämtning Helsingborg');
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
    } else if (!pickup && !distribution) {
      Swal.fire({
        icon: 'error',
        title: 'OBS!',
        text: 'Vänligen välj körningtyp',
      });
      return false;
    } else if (signCanvas.current.isEmpty() === true) {
      Swal.fire({
        icon: 'error',
        title: 'OBS!',
        text: 'Vänligen signera',
      });
      return false;
    } else if (signatureData.length < 1) {
      Swal.fire({
        icon: 'error',
        title: 'OBS!',
        text: 'Vänligen signera genom att klcika på signera buttonen',
      });
      return false;
    } else {
      sendRapport(e);
      clearSignature();
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_ID || '',
          process.env.REACT_APP_HGB_EMAIL_TEMPLATE_ID || '',
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
            } else {
              Swal.fire({
                icon: 'error',
                text: 'Det gick inte skicka avvikelse rapporten vänligen försök igen',
              });
            }
          },
          (error) => {
            //console.log(error.text);
          }
        );
      e.target.reset();
    }
  };

  return (
    <Grid>
      <Helmet>
        <title>ICA Helsingborg Frys</title>
      </Helmet>

      <Box onSubmit={sendEmail} component="form">
        <Grid className={classes.wrapper}>
          <Typography variant="h5" align="center" color="primary">
            ICA AVVIKELSERAPPORT HELSINGBORG FRYS
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
              label={isMobile ? '' : 'Datum'}
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
            <Grid className={classes.checkbox}>
              <FormControlLabel
                control={
                  <Checkbox
                    value="Hämtning Helsingborg"
                    name="pickUp"
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
                    value="Ditrubition"
                    name="distribution"
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
              name="search_load"
              variant="outlined"
              className={classes.input}
              onChange={(e) => {
                setWaitTimeSearchGoods(e.target.value);
              }}
            />
            <TextField
              type="number"
              label="Vänta på port OMEX Exportgatan (Minuter)"
              name="waitTimeOmex"
              variant="outlined"
              className={classes.input}
              onChange={(e) => {
                setWaitTimeOmexPort(e.target.value);
              }}
            />
            <TextField
              type="number"
              label="Medtaget gods (Antal)"
              name="includingGods"
              variant="outlined"
              className={classes.input}
              onChange={(e) => {
                setIncludedLoad(e.target.value);
              }}
            />

            <TextField
              type="number"
              label="Lass ej färdigtplockat (Minuter)"
              name="godsNotReady"
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
            <Typography variant="h6" align="center" color="primary">
              Underskrift Chaufför
            </Typography>
            <Typography variant="body1" align="center" color="secondary">
              OBS! Glöm inte signera innan du skickar rapporten
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

export default HelsingborgForm;
