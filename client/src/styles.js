import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'solid 2px rgba(243,92,81, 1)',
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    height: 60,
    textAlign: 'center',
    width: '57%',
  },
  heading: {
    color: 'black',
    fontWeight: 'bold'
  },
  button: {
    background: 'white',
    width: '200px',
    color: 'black',
    border: 'solid 2px rgba(243,92,81, 1)',
    fontWeight: 'bold',
    borderRadius: 12
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: "column-reverse"
    }
  }
}));