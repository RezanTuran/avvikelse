import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    margin: '1em',
  },
  signatureContainer: {
    border: '1px solid black',
    borderRadius: '5px',
  },
  signature: {
    display: 'flex',
    justifyContent: 'center',
  },
  signatureButtonsBox: {
    display: 'flex',
    justifyContent: 'center',
    margin: '1em',
  },
  signatureAreaButtons: {
    margin: '5px',
    backgroundColor: '#00A093',
    color: 'black',
    fontWeight: 'bold',
  },
  hiddenInput: {
    display: 'none',
  },
}));
