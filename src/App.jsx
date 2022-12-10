import React from 'react'
import Grid from '@material-ui/core/Grid';
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';
import { BigTranscript, BigTranscriptContainer } from "@speechly/react-ui";
import Main from './components/Main/Main';
import Details from './components/Details/Details'
import useStyles from './styles'

const App = () => {
    const classes = useStyles()

    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems='center' justifyContent='center' style={{ height: '100vh' }}>
                <Grid item xs={11} sm={8} md={3} className={classes.main}>
                    <Main />
                </Grid>
                <Grid item xs={11} sm={8} md={4} className={classes.income}>
                    <Details title='Income' />
                </Grid>
                <Grid item xs={11} sm={8} md={4} className={classes.expense}>
                    <Details title='Expense' />
                    <div className='A864166464a6sd46a8fw6e5f1cw6ed4w6e'></div>
                </Grid>
            </Grid>
            <BigTranscriptContainer>
                <BigTranscript />
            </BigTranscriptContainer>
            <PushToTalkButtonContainer>
                <PushToTalkButton captureKey=" " />
            </PushToTalkButtonContainer>
        </div>
    )
}

export default App