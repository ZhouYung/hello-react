import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HandlingEvents from './HandlingEvents';
import ConditionalRendering from './ConditionalRendering';
import registerServiceWorker from './registerServiceWorker';
import ListAndKeys from "./ListAndKeys";

ReactDOM.render(
    <div>
        <App />
        <HandlingEvents />
        <ConditionalRendering/>
        <ListAndKeys/>

    </div>,
    document.getElementById('root')
);
registerServiceWorker();
