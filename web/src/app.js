import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'whatwg-fetch';
import { Routers } from './utils/Routers.js';
import { reducerApp } from './redux/reducer.js';
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const store = createStore(reducerApp);
const options = {
    position: 'top center',
    timeout: 5000,
    transition: 'scale'
};

ReactDOM.render(
    //<Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
        <Routers />
    </AlertProvider>,
    //</Provider>
    document.getElementById('app')
);


