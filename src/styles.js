import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  colour:{
    color:'black',
    background: 'linear-gradient(to bottom right, rgba(140,255,0,0.2),rgba(0,122,255,0.3))',
    border:'none',
    
    // background: 'transparent'
  },
  desktop: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%',
    },
  },
  last: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px',
    },
  },
  grid: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));