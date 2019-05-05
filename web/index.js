import React from 'react';
import ReactDom from 'react-dom';
import {HomePage} from "./page/home.jsx";
import { Login } from './page/Login.js';
import {UniversityList} from "./page/UniversityList.jsx";

ReactDom.render(
    <UniversityList />,
    document.getElementById('app')
);
