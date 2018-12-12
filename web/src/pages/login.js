import React from 'react';
import { Form } from '../components/login/form.js';
import { Header } from '../components/common/header.js';
import { Footer } from '../components/common/footer.js';
import { RememberMeInLogin, RememberMeInRegister, RegisterInfoInLogin, RegisterInfoInRegister } from '../components/login/controlInLogin.js';

const words = {
    register: {
        breadcrumbTitle: 'Register',
        breadcrumbItem: 'Register',
        title: 'Register',
        socialTitle: 'Or Sign up using'
    },
    login: {
        breadcrumbTitle: 'Log In',
        breadcrumbItem: 'Login',
        title: 'Log in to your account',
        socialTitle: 'Or login using'
    }
};

const mr5 = {
    marginRight: '5px'
};
const breadcrumbBg = {
    backgroundImage: 'url("../images/breadcrumb.jpg")'
};

export function Login({loginType}) {
    const {breadcrumbTitle, breadcrumbItem, title, socialTitle} = words[loginType];
    const RememberMe = ({loginType}) => {
        return loginType === 'register' ? <RememberMeInRegister /> : <RememberMeInLogin />;
    };
    const RegisterInfo = ({loginType}) => {
        return loginType === 'register' ? <RegisterInfoInRegister /> : <RegisterInfoInLogin />;
    };
    return (
        <div>
            <Header />
            <section className="page-name background-bg" style={breadcrumbBg}>
                <div className="overlay">
                    <div className="section-padding">
                        <div className="container">
                            <h2 className="section-title">{breadcrumbTitle}</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">{breadcrumbItem}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <section className="login-register">
                <div className="section-padding">
                    <div className="container">
                        <div className="contents text-center">
                            <h2 className="section-title">{title}</h2>
                            <Form loginType={loginType}>
                                <RememberMe loginType={loginType} />
                            </Form>
                            <div className="login-social">
                                <h2 className="section-title">{socialTitle}</h2>
                                <button className="btn facebook" style={mr5}><i className="fab fa-facebook"></i> Facebook</button>
                                <button className="btn twitter" style={mr5}><i className="fab fa-twitter"></i> Twitter</button>
                                <button className="btn google" style={mr5}><i className="fab fa-google-plus"></i> Google</button>
                            </div>
                            <RegisterInfo loginType={loginType} />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

