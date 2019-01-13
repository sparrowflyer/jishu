import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'whatwg-fetch';
//Import Template Icons CSS Files
import './assets/css/font-awesome.min.css';
import './assets/css/simple-line-icons.css';
//Import Bootstrap CSS File
import './assets/css/bootstrap.min.css';
//Import External CSS Files
import './assets/css/owl.carousel.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/selectric.css';
//TimeTo Countdown CSS Files
import './assets/css/timeTo.css';
//Import Template's CSS Files
import './assets/css/style.css';
import './assets/css/responsive.css';
//WooCommerce
import './assets/css/woocommerce.css';
import { Routers } from './utils/Routers.js';
import { reducerApp } from './redux/reducer.js';
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import './assets/css/pagination.css';

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


