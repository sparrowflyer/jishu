import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { withAlert } from 'react-alert';
import { getEmailVerifyCode, postJson } from '../../utils/server.js'
import { Header } from '../../components/common/Header.js';
import { Footer } from '../../components/common/Footer.js';
import { BreadCrumb } from '../../components/common/BreadCrumb.js';

const legalEmailInput = {
    width: "60%"
};

const legalEmailButton = {
    backgroundColor: "#0d47a1",
    borderColor: "#0d47a1",
    color: "#fff",
    fontWeight: "700",
    margin: ".4em 0 2em;width:40%",
    width: "40%"
};

class ForgetPwd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            emailCode: '',
            sendEmailLoading: false,
            isLoading: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendEmailCode = this.sendEmailCode.bind(this);
        this.submitInfo = this.submitInfo.bind(this);
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

    sendEmailCode() {
        this.setState((state) => {
            return {
                ...state,
                sendEmailLoading: true
            }
        });
        getEmailVerifyCode(this.state.username[0])
            .then((data) => {
                this.setState((state) => {
                    return {
                        ...state,
                        sendEmailLoading: false
                    }
                });
            })
            .catch((error) => {
                this.setState((state) => {
                    return {
                        ...state,
                        sendEmailLoading: false
                    }
                });
            });
    }

    submitInfo() {
        event.preventDefault();
        postJson('/forgetpsd',{
            "email": this.state.username[0],
            "password": this.state.password[0],
            "emailVercode": this.state.emailCode[0]
        }).then((data) => {
            this.setState((state) => {
                return {
                    ...state,
                    emailCode: "",
                    isLoading: false
                }
            });
            if (data.status === 'success') {
                this.props.history.push('/login');
            } else {
                this.props.alert.error(data.errorMsg || data.error);
            }
        }).catch((error) => {
            this.setState((state) => {
                return {
                    ...state,
                    emailCode: "",
                    isLoading: false
                }
            });
            this.props.alert.error('密码重置失败。');
        });
    }

    render() {
        return (
            <div>
                <Header activeTitle="other" />
                <BreadCrumb title="忘记密码" subItem="个人中心" currentItem="忘记密码" />
                <section className="login-register">
                    <div className="section-padding">
                        <div className="container">
                            <div className="contents text-center">
                                <h2 className="section-title">忘记密码</h2>
                                <form className="sign-in-form" id="sign-in-form" onSubmit={ this.submitInfo }>
                                    <p className="form-input">
                                        <input type="text" name="username" id="user_login" placeholder="Username / Email" className="input"
                                               onChange={ this.handleInputChange } value={ this.state.username } required />
                                    </p>
                                    <p className="form-input">
                                        <input type="password" name="password" id="user_pass" placeholder="Password" className="input"
                                               onChange={ this.handleInputChange } value={ this.state.password } required />
                                    </p>
                                    <p className="form-input">
                                        <input type="text" name="emailCode" id="email_code" style={ legalEmailInput } value={ this.state.emailCode }
                                               placeholder="Email Verification Code" onChange={ this.handleInputChange } required />
                                        <input type="button" style={ this.state.sendEmailLoading ? {} : legalEmailButton } value="Send"
                                               disabled={ this.state.sendEmailLoading } onClick={ this.sendEmailCode } />
                                    </p>
                                    <p className="form-input">
                                        <input type="submit" name="wp-submit" id="wp-submit" className="btn"
                                               value={this.state.isLoading ? "Loading..." : "Submit"} disabled={this.state.isLoading} />
                                    </p>
                                </form>
                                <p className="register">
                                    Sign in again? <Link to="/login">Sign in now</Link>
                                </p>
                                <p className="register">
                                    Register a new account? <Link to="/register">Register now</Link>
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

const PwdWithRouter = withRouter(withAlert(ForgetPwd));
export default PwdWithRouter;

