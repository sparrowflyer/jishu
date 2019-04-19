import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

if (module.hot) {
    //当模块更新的时候，通知index.js
    module.hot.accept();
}

ReactDOM.render(
    <div>Hello React!</div>,
    document.getElementById('app')
);