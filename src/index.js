import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HandlingEvents from './HandlingEvents';
import ConditionalRendering from './ConditionalRendering';
import registerServiceWorker from './registerServiceWorker';
;
ReactDOM.render(
    <div>
        <App />
        <HandlingEvents />
        <ConditionalRendering/>

    </div>,
    document.getElementById('root')
);
registerServiceWorker();
