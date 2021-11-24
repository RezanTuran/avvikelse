import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  logo: {
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2em',
  },
  buttonBox: {
    margin: '10px',
  },
  button: {
    backgroundColor: '#00A093',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
}));
