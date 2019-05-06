import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from '../page/Home.jsx';
import { UniversityList } from '../page/UniversityList.jsx';
import {UniversityDetail} from "../page/UniversityDetail.jsx";
import { StudentDetail } from '../page/StudentDetail/index.js';
import { PersonalCenter } from '../page/PersonalCenter.js';
import { Login } from '../page/Login.js';

export function Routers() {
    return (
        <Router>
            <div style={{width: '100%', height: '100%'}}>
                <Switch>
                    <Route exact path='/' component={ HomePage } />
                    <Route path='/college' component={ UniversityList } />
                    <Route path='/collegeDetail' component={ UniversityDetail } />
                    <Route path='/StudentDetail' component={ StudentDetail } />
                    <Route path='/PersonalCenter' component={ PersonalCenter } />
                    <Route path='/login' component={ Login } />
                </Switch>
            </div>
        </Router>
    );
}