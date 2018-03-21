import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
