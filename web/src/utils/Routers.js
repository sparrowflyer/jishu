import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../pages/home/Home.js';
import { Checkout } from '../pages/home/Checkout.js';
import { Cart } from '../pages/home/Cart.js';
import { About } from '../pages/other/About.js';
import { Contact } from '../pages/other/Contact.js';
import { FAQ } from '../pages/other/FAQ.js';
import { Login } from '../pages/other/Login.js';
import RegisterWithRouter from '../pages/other/Register.js';
import { Blog } from '../pages/Blog.js';
import { Course } from '../pages/Course.js';
import { Me } from '../pages/Me.js';
import { Error } from '../pages/other/Error.js';

export function Routers() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/checkout' component={Checkout} />
                    <Route path='/cart' component={Cart} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/faq' component={FAQ} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={ RegisterWithRouter } />
                    <Route path='/blog' component={Blog} />
                    <Route path='/course' component={Course} />
                    <Route path='/me' component={Me} />
                    <Route component={Error} />
                </Switch>
            </div>
        </Router>
    );
}