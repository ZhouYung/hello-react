import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Event from './Event';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <App />
        <Event />
    </div>,
    document.getElementById('root')
);
registerServiceWorker();
