import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'

import useTransactions from '../../useTransactions'
import useStyles from './styles'

const Details = ({ title, subheader }) => {
    const { total, chartData } = useTransactions(title)
    const classes = useStyles()


    return (
        <Card className={title === 'Income' ? classes.income : classes.expense}>
            <CardHeader title={title} subheader={subheader} />
            <CardContent>
                <Typography variant='h5'>${total}</Typography>
                <Doughnut  data={chartData} 
                options= {{ 
                    legend: {
                        labels: {
                            fontColor: "#fff",
                            fontSize: 14
                        }
                    }
                }}
                />
            </CardContent>
        </Card>
    )
}

export default Details