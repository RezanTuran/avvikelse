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
  checkbox: {
    display: 'flex',
    justifyContent: 'center',
  },
}));
