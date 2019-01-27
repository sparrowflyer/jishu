import React from 'react';
import { Link } from 'react-router-dom';

export function RememberMeInLogin() {
    return (
        <p className="checkbox">
            <input name="rememberme" type="checkbox" className="rememberme float-left" value="Remember Me" />
            记住密码
            <Link to="/pwd" className="float-right" title="Recover Your Lost Password">忘记密码?</Link>
        </p>
    );
}

export function RememberMeInRegister() {
    return (
        <p className="checkbox">
            <input name="rememberme" type="checkbox" className="rememberme float-left" value="Remember Me" />
           点击确认协议 <a title="Terms And Conditions">论坛 & 开课规范</a>
        </p>
    );
}

const mr5 = {
    marginRight: '5px'
};

export function Social({title}) {
    return (
        <div className="login-social">
            <h2 className="section-title">{title}</h2>
            <button className="btn facebook" style={mr5}><i className="fab fa-facebook"></i> Facebook</button>
            <button className="btn twitter" style={mr5}><i className="fab fa-twitter"></i> Twitter</button>
            <button className="btn google" style={mr5}><i className="fab fa-google-plus"></i> Google</button>
        </div>
    );
}