import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  radioGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '-10px',
  },
  button: {
    marginTop: '20px',
    borderColor: '#FFF',
    '&:hover': {
      borderColor: '#4caf50',
      background: 'rgba(255, 255, 255, 0.2)'
    },
  },
}));