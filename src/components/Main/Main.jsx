import React from 'react'
import { Card, CardContent, CardHeader, Divider, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import useStyles from './styles'
import Form from './Form/Form';
import List from './List/List';

const Main = () => {

    const classes = useStyles()

  return (
    <Card className={classes.root}>
        <CardHeader title='Expense Analyser' subheader='Powered by Speechly'/>
        <CardContent>
            <Typography align='center' variant='h5'>Total Balance $100</Typography>
            <Typography variant='subtitle1' style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                Try saying: Add income for $100 in Category Salary for Monday...
            </Typography>
            <Divider/>
            <Form />
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <List />
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default Main