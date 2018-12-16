import React from 'react';
import { InputInLogin } from './ControlInLogin.js';

const words = {
    register: {
        formName: 'register-form',
        inputs: [
            {name: 'log', id: 'user_name', placeholder: 'Username', type: 'text'},
            {name: 'email', id: 'user_email', placeholder: 'Email', type: 'email'},
            {name: 'pwd', id: 'user_pass', placeholder: 'Password', type: 'password'},
            {name: 'pwd', id: 'confirm_pass', placeholder: 'Confirm Password', type: 'password'}
        ]
    },
    login: {
        formName: 'sign-in-form',
        inputs: [
            {name: 'log', id: 'user_login', placeholder: 'Username / Email', type: 'text'},
            {name: 'pwd', id: 'user_pass', placeholder: 'Password', type: 'password'}
        ]
    }
};

export function Form({loginType, children}) {
    const {formName, inputs} = words[loginType],
        inputList = inputs.map((input) => {
            return (<InputInLogin {...input} key={input.id} />);
        });

    return (
        <form className={formName} id={formName} action="#" method="post">
            { inputList }
            { children }
            <p className="form-input">
                <input type="submit" name="wp-submit" id="wp-submit" className="btn" value="Sign In"/>
            </p>
        </form>
    );
}
