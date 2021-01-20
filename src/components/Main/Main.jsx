import React from 'react';
import {Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';

const Main = () => {
    const classes= useStyles();
    return (
        <Card className={classes.root} >
            <CardHeader style={{color:'rgb(0,128,128)', paddingLeft:'4rem'}}  title="TRACK YOUR EXPENSES" />
            <CardContent>
                <Typography  align="center" variant="h5" style={{color:'rgba(103, 65, 114, 1)'}}  >Total balance $2000</Typography>
                <Typography align="center" variant="h6" style={{lineHeight:'1.5em', marginTop:'20px', color:'rgba(52, 73, 94, 1)'}} > 
                    Enter Transactions: 
                 </Typography>
                 <Typography style={{color:'rgba(30, 130, 76, 1', fontSize:'15px', fontWeight:'600', paddingBottom:'1rem'}} >
                     Hint : Try saying add transaction for 100 dollars in category sports next friday
                 </Typography>
                 <Divider />
                 <Form />
            </CardContent>
            <CardContent className={classes.CardContent} >
                <Grid container spacing={2} >
                    <Grid item xs={12} >
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
