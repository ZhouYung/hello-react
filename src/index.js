import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HandlingEvents from './HandlingEvents';
import ConditionalRendering from './ConditionalRendering';
import registerServiceWorker from './registerServiceWorker';
import ListAndKeys from "./ListAndKeys";
import MyForm from "./MyForm";
import StateUp from "./StateUp";
import {Containment,Contacts} from "./Containment";


ReactDOM.render(
    <div>
        <App />
        <HandlingEvents />
        <ConditionalRendering/>
        <ListAndKeys/>
        <MyForm/>
        <StateUp/>
        <Containment/>
        <Contacts/>
    </div>,
    document.getElementById('root')
);
registerServiceWorker();
