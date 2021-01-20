import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from './context/context';

import { SpeechProvider } from '@speechly/react-client';

ReactDOM.render(
  <SpeechProvider appId='1d70c721-712f-44c3-806f-8b7e5e560718' language="en-US" >
      <Provider>
          <App />
      </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);

