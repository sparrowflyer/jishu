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
import PwdWithRouter from '../pages/login/ForgetPwd.js';
import SingleBlogWithRouter from '../pages/blog/SingleBlog.js';
import { MultiBlog } from '../pages/blog/MultiBlog.js';
import AddBlogWithRouter from '../pages/blog/AddBlog.js';
import SingleCourseWithRouter from '../pages/course/SingleCourse.js';
import MultiCourseWithRouter from '../pages/course/MultiCourse.js';
import AddCourseWithRouter from '../pages/course/AddCourse.js';
import UserWithRouter from '../pages/User.js';
import { PageError, PayError } from '../pages/other/Error.js';

export function Routers() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route path='/about' component={ About } />
                    <Route path='/contact' component={ Contact } />
                    <Route path='/faq' component={ FAQ } />
                    <Route path='/login' component={ LoginWithRouter } />
                    <Route path='/register' component={ RegisterWithRouter } />
                    <Route path='/pwd' component={ PwdWithRouter } />
                    <Route exact path="/blog" component={ MultiBlog } />
                    <Route path='/blog/:blogID' component={ SingleBlogWithRouter } />
                    <Route path='/addBlog' component={ AddBlogWithRouter } />
                    <Route exact path='/course' component={ MultiCourseWithRouter } />
                    <Route path='/addCourse' component={ AddCourseWithRouter } />
                    <Route path='/course/:courseID' component={ SingleCourseWithRouter } />
                    <Route path='/user/:userID' render={
                        (props) => (<UserWithRouter key={props.match.params.userID} {...props} />)
                    } />
                    <Route path="/payResult/:result_status/:total_amount" component={ PayError } />
                    <Route component={ PageError } />
                </Switch>
            </div>
        </Router>
    );
}