import React from 'react';
import ReactDom from 'react-dom';
import { College } from './page/College.js';
import {HomePage} from "./page/home.jsx";

ReactDom.render(
    <HomePage />,
    document.getElementById('app')
);
