import React from 'react';
import ReactDOM from 'react-dom';
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
import { Routers } from './utils/router.js';

const App = () => (
    <Routers />
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);


