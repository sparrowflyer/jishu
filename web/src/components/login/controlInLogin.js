import React from 'react';

export function InputInLogin({name, id, placeholder, type}) {
    return (
        <p className="form-input">
            <input type={type} name={name} id={id} placeholder={placeholder} className="input" value="" required="" />
        </p>
    );
}

export function RememberMeInLogin() {
    return (
        <p className="checkbox">
            <input name="rememberme" type="checkbox" className="rememberme float-left" value="Remember Me" />
            Remember Me
            <a href="#" className="float-right" title="Recover Your Lost Password">Forgot password?</a>
        </p>
    );
}

export function RememberMeInRegister() {
    return (
        <p className="checkbox">
            <input name="rememberme" type="checkbox" className="rememberme float-left" value="Remember Me" />
            By clicking I agree to the
            <a href="#" title="Terms And Conditions">Terms & Conditions</a>
        </p>
    );
}

export function RegisterInfoInLogin({href}) {
    return (
        <p className="register">
            Don’t have an account? <a href="#">Register now</a>
        </p>
    );
}

export function RegisterInfoInRegister({href}) {
    return (
        <p className="register">
            Already have an account? <a href="#">Sign in now</a>
        </p>
    );
}