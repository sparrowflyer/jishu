import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from '../page/Home.jsx';
import { UniversityList } from '../page/UniversityList.jsx';
import {UniversityDetail} from "../page/UniversityDetail.jsx";
import StudentDetailPage from '../page/StudentDetail.js';
import PersonalCenterPage from '../page/PersonalCenter.js';
import LoginPage from '../page/Login.js';

export function Routers() {
    return (
        <Router>
            <div style={{width: '100%', height: '100%'}}>
                <Switch>
                    <Route exact path='/' component={ HomePage } />
                    <Route path='/college' component={ UniversityList } />
                    <Route path='/collegeDetail/:id' component={ UniversityDetail } />
                    <Route path='/StudentDetail/:userID' render={
                        (props) => (<StudentDetailPage key={props.match.params.userID} {...props} />)
                    } />
                    <Route path='/PersonalCenter' component={ PersonalCenterPage } />
                    {
                        ['login', 'register', 'forgetPwd'].map((name) =>
                            <Route key={name} path={'/' + name} component={ LoginPage } />
                        )
                    }
                </Switch>
            </div>
        </Router>
    );
}
