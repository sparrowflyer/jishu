import React from 'react';
import ReactDom from 'react-dom';
import { Routers } from './utils/Routers.js';
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const alertOptions = {
    position: 'top center',
    timeout: 5000,
    transition: 'scale'
};

const Root = () => (
    <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Routers />
    </AlertProvider>
);

ReactDom.render(
    <Root />,
    document.getElementById('app')
);
