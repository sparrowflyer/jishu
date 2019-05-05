import React from 'react';
import ReactDom from 'react-dom';
import {HomePage} from "./page/home.jsx";
import { Login } from './page/Login.js';
import {UniversityList} from "./page/UniversityList.jsx";
import {UniversityDetail} from "./page/UniversityDetail.jsx";

ReactDom.render(
    <UniversityDetail />,
    document.getElementById('app')
);
