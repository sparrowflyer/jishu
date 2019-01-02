import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../pages/home/Home.js';
import { Checkout } from '../pages/home/Checkout.js';
import { Cart } from '../pages/home/Cart.js';
import { About } from '../pages/other/About.js';
import { Contact } from '../pages/other/Contact.js';
import { FAQ } from '../pages/other/FAQ.js';
import LoginWithRouter from '../pages/login/Login.js';
import RegisterWithRouter from '../pages/login/Register.js';
import { SingleBlog } from '../pages/blog/Single.js';
import { MultiBlog } from '../pages/blog/Multi.js';
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
                    <Route path='/login' component={ LoginWithRouter } />
                    <Route path='/register' component={ RegisterWithRouter } />
                    <Route exact path="/blog" component={ MultiBlog } />
                    <Route path='/blog/:blogID' component={ SingleBlog } />
                    <Route path='/course' component={Course} />
                    <Route path='/me' component={Me} />
                    <Route component={Error} />
                </Switch>
            </div>
        </Router>
    );
}