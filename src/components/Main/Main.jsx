import React from 'react'
import { Card, CardContent, CardHeader, Divider, Typography } from '@material-ui/core'
import { ExpenseAnalyzerContext } from '../../context/context';

import Grid from '@material-ui/core/Grid';
import useStyles from './styles'
import Form from './Form/Form';
import List from './List/List';
import InfoCard from '../InfoCard';

const Main = () => {
    const classes = useStyles()
    const { balance } = React.useContext(ExpenseAnalyzerContext)

  return (
    <Card className={classes.root}>
        <CardHeader title='Expense Analyser'/>
        <CardContent>
            <Typography align='center' variant='h5'>Total Balance ${balance}</Typography>
            <Typography variant='subtitle1' style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                <InfoCard />
            </Typography>
            <Divider className={classes.divider} />
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