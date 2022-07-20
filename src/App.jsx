import React from 'react'
import Grid from '@material-ui/core/Grid';
import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';
import {
    BigTranscript,
    BigTranscriptContainer,
    ErrorPanel
} from "@speechly/react-ui";
import {
    SpeechProvider
} from "@speechly/react-client";
import Main from './components/Main/Main';
import Details from './components/Details/Details'
import useStyles from './styles'

const App = () => {
    const classes = useStyles()

    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems='center' justifyContent='center' style={{ height: '100vh' }}>
                <Grid item xs={12} sm={4}>
                    <Details title='Income' />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Details title='Expense' />
                </Grid>
            </Grid>
            {/* <SpeechProvider appId="b47aaa8c-8edb-4639-ac96-feaca267063d" language="en-US"> */}
                <BigTranscriptContainer>
                    <BigTranscript />
                </BigTranscriptContainer>

                <PushToTalkButtonContainer>
                    <PushToTalkButton captureKey=" " />
                </PushToTalkButtonContainer>
            {/* </SpeechProvider> */}
        </div>
    )
}

export default App