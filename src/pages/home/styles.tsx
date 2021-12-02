import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  logo: {
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1em',
  },
  button: {
    backgroundColor: '#00A093',
    color: 'black',
    fontWeight: 'bold',
    width: '100%',
    padding: '0.6em',
    marginTop: '1em',
  },
  containerDesktop: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1em',
  },
  buttonDekstop: {
    backgroundColor: '#00A093',
    color: 'black',
    fontWeight: 'bold',
    marginTop: '2em',
    marginBottom: '2em',
    margin: '5px',
  },
  link: {
    textDecoration: 'none',
  },
}));
