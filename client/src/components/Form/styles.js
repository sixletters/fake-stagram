import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    width: '30%' ,
    border: 'solid 2px rgba(243,92,81, 1)',
    borderRadius: 10,
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'col'
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    width: '300px',
    height: '50px'
  },
  buttonClear: {
    width: '300px',
    height: '50px'
  }
}));