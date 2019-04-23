import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import HomePage from './pages/homePage';

if (module.hot) {
    //当模块更新的时候，通知index.js
    module.hot.accept();
}

ReactDOM.render(
    <HomePage></HomePage>,
    document.getElementById('app')
);