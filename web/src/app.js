import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
//Import Template Icons CSS Files
import './assets/css/font-awesome.min.css';
import './assets/css/simple-line-icons.css';
//Import Bootstrap CSS File
import './assets/css/bootstrap.min.css';
//Import External CSS Files
import './assets/css/owl.carousel.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/selectric.css';
//Import Template's CSS Files
import './assets/css/style.css';
import './assets/css/responsive.css';
import { Login } from './pages/login.js';

const App = () => (
    <Login loginType="login" />
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

Login.propTypes = {
    loginType: PropTypes.oneOf(['register', 'login']).isRequired
};
