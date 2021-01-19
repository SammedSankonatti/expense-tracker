import React from 'react';
import {Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import useStyles from './styles';

const Main = () => {
    const classes= useStyles();
    return (
        <Card className={classes.root} >
            <CardHeader title="Expense tracker" subheader="speechly powered app" />
            <CardContent>
                <Typography  align="center" variant="h5"  >Total balance $2000</Typography>
                <Typography variant="subtitle1" style={{lineHeight:'1.5em', marginTop:'20px'}} > 
                    Say Something
                 </Typography>
                 <Divider />
                 {/* <Form></Form> */}
            </CardContent>
            <CardContent className={classes.CardContent} >
                <Grid container spacing={2} >
                    <Grid item xs={12} >
                        {/* <List /> */}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
