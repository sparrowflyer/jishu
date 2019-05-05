import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from '../page/Home.jsx';
import { UniversityList } from '../page/UniversityList.jsx';
import { Login } from '../page/Login.js';

export function Routers() {
    return (
        <Router>
            <div style={{width: '100%', height: '100%'}}>
                <Switch>
                    <Route exact path='/' component={ HomePage } />
                    <Route path='/college' component={ UniversityList } />
                    <Route path='/login' component={ Login } />
                </Switch>
            </div>
        </Router>
    );
}
