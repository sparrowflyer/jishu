import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { withAlert } from 'react-alert';
import { getVerifyCodeImage, postJson } from '../../utils/server.js'
import { Header } from '../../components/common/Header.js';
import { Footer } from '../../components/common/Footer.js';
import { BreadCrumb } from '../../components/common/BreadCrumb.js';
import { RememberMeInLogin, Social } from '../../components/ControlInLogin.js';

const legalImageInput = {
    maxWidth: "380px"
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            imageCode: '',
            imageUrl: '',
            isLoginLoading: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getImageCode = this.getImageCode.bind(this);
        this.submitLoginInfo = this.submitLoginInfo.bind(this);
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState((state) => {
            return {
                ...state,
                [name]: [value]
            };
        });
    }

    submitLoginInfo(event) {
        event.preventDefault();
        this.setState((state) => {
            return {
                ...state,
                isLoginLoading: true
            }
        });
        postJson('/login', {
            "email": this.state.username[0],
            "password": this.state.password[0],
            "imageVercode": this.state.imageCode[0]
        }).then((data) => {
            this.setState((state) => {
                return {
                    ...state,
                    imageCode: '',
                    isLoginLoading: false
                }
            });
            if (data.status === 'success') {
                console.log(data);
                sessionStorage.setItem('jsUserID', "1");
                this.props.history.push('/home');
            } else {
                this.getImageCode();
                this.props.alert.error(data.errorMsg || data.error);
            }
        }).catch((error) => {
            this.setState((state) => {
                return {
                    ...state,
                    imageCode: '',
                    isLoginLoading: false
                }
            });
            this.getImageCode();
            this.props.alert.error('登录失败。');
        });
    }

    getImageCode() {
        getVerifyCodeImage()
            .then(blob => {
                this.setState((state) => {
                    return {
                        ...state,
                        imageUrl: window.URL.createObjectURL(blob)
                    }
                });
            }).catch(error => {
                this.setState((state) => {
                    return { ...state, imageUrl: '' }
                });
            });
    }

    componentDidMount() {
        getVerifyCodeImage()
            .then(blob => {
                this.setState((state) => {
                    return {
                        ...state,
                        imageUrl: window.URL.createObjectURL(blob)
                    }
                });
            }).catch(error => {
                this.setState((state) => {
                    return { ...state, imageUrl: '' }
                });
            });
    }

    render() {
        return (
            <div>
                <Header activeTitle="other" />
                <BreadCrumb title="登录" subItem="个人中心" currentItem="登录" />
                <section className="login-register">
                    <div className="section-padding">
                        <div className="container">
                            <div className="contents text-center">
                                <h2 className="section-title">LOG IN TO YOUR ACCOUNT</h2>
                                <form className="sign-in-form" id="sign-in-form" onSubmit={ this.submitLoginInfo }>
                                    <p className="form-input">
                                        <input type="text" name="username" id="user_login" placeholder="Username / Email" className="input"
                                               onChange={ this.handleInputChange } value={ this.state.username } required />
                                    </p>
                                    <p className="form-input">
                                        <input type="password" name="password" id="user_pass" placeholder="Password" className="input"
                                               onChange={ this.handleInputChange } value={ this.state.password } required />
                                    </p>
                                    <p className="form-input">
                                        <input type="text" name="imageCode" id="image_code" style={ legalImageInput } value={ this.state.imageCode }
                                               placeholder="Image Verification Code" onChange={ this.handleInputChange } required />
                                        <img src={ this.state.imageUrl } onClick={ () => { this.getImageCode(); } } />
                                    </p>
                                    <RememberMeInLogin />
                                    <p className="form-input">
                                        <input type="submit" name="wp-submit" id="wp-submit" className="btn"
                                               value={this.state.isLoginLoading ? "Loading..." : "Sign In"} disabled={this.state.isLoginLoading} />
                                    </p>
                                </form>
                                <Social title="Or login using" />
                                <p className="register">
                                    Don’t have an account? <Link to="/register">Register now</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

const LoginWithRouter = withRouter(withAlert(Login));
export default LoginWithRouter;
