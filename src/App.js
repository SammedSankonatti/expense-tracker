import React from 'react'
import {Grid, Typography} from '@material-ui/core';
import Details from './components/Details/Details'

import useStyles from './styles';
import Main from './components/Main/Main';

import {PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui'

function App() {
  const classes = useStyles();
  return (
    <div >
        <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{height:'100vh'}} >
            <Grid item xs={12} >
                <Typography align='center' variant='h4' className={classes.colour} > EXPENSE TRACKER</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Details title="Income" />
            </Grid>
            <Grid item xs={12} sm={3}>
                <Main />
            </Grid>
            <Grid item xs={12} sm={3}>
                <Details title="Expense" />
            </Grid>
        </Grid>
        <PushToTalkButtonContainer>
            <PushToTalkButton />
            <ErrorPanel />
        </PushToTalkButtonContainer>
    </div>
  )
}

export default App;
