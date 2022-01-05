import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  media: {
    height: '50%',
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginBottom: '40px'
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '40px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: theme.palette.background.paper,
    outline: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '12px',
    height: '70%',
    width: '30%',
    position: 'relative',
    overflow: 'scroll'
  },  
}));