import React from 'react'
import ReactDOM from "react-dom";
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App'
import './index.css'

ReactDOM.render(
    <SpeechProvider appId="b47aaa8c-8edb-4639-ac96-feaca267063d" language="en-US">
        <Provider>
            <App />
        </Provider>,
    </SpeechProvider>,
    document.getElementById('root')
);
