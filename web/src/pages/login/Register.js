import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { withAlert } from 'react-alert';
import { getEmailVerifyCode, getVerifyCodeImage, postJson } from '../../utils/server.js';
import { Header } from '../../components/common/Header.js';
import { Footer } from '../../components/common/Footer.js';
import { BreadCrumb } from '../../components/common/BreadCrumb.js';
import { RememberMeInRegister, Social } from '../../components/ControlInLogin.js';

const legalEmailInput = {
    width: "60%"
};

const legalImageInput = {
    maxWidth: "380px"
};

const legalEmailButton = {
    backgroundColor: "#0d47a1",
    borderColor: "#0d47a1",
    color: "#fff",
    fontWeight: "700",
    margin: ".4em 0 2em;width:40%",
    width: "40%"
};

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            emailCode: '',
            pwd: '',
            confirmPwd: '',
            imageCode: '',
            imageUrl: '',
            sendEmailLoading: false,
            isLegalEmail: false,
            isRegisterLoading: false,
            emailMsg: '',
            confirmPwdMsg: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleEmailBlur = this.handleEmailBlur.bind(this);
        this.sendEmailCode = this.sendEmailCode.bind(this);
        this.handlePasswordBlur = this.handlePasswordBlur.bind(this);
        this.submitRegisterInfo = this.submitRegisterInfo.bind(this);
        this.getImageCode = this.getImageCode.bind(this);
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
                    return {
                        ...state,
                        imageUrl: ''
                    }
                });
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

    handlePasswordBlur() {
        if (!this.state.pwd) {
            this.setState((state) => {
                return {
                    ...state,
                    confirmPwdMsg: '密码为必填项。'
                };
            });
            return ;
        }
        if (!this.state.confirmPwd) {
            this.setState((state) => {
                return {
                    ...state,
                    confirmPwdMsg: '密码为必填项。'
                };
            });
            return ;
        }
        if (this.state.pwd[0] !== this.state.confirmPwd[0]) {
            this.setState((state) => {
                return {
                    ...state,
                    confirmPwdMsg: '密码不一致。'
                };
            });
            return ;
        }
        this.setState((state) => {
            return {
                ...state,
                confirmPwdMsg: ''
            };
        });
    }

    handleEmailBlur(event) {
        const value = event.target.value;
        if (!value) {
            this.setState((state) => {
                return { ...state, emailMsg: '邮箱不为空!' };
            });
            return ;
        }
        if (!/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
            this.setState((state) => {
                return { ...state, emailMsg: '邮箱格式不正确!' };
            });
            return ;
        }
        this.setState((state) => {
            return {
                ...state,
                emailMsg: '',
                isLegalEmail: false
            };
        });
        postJson('/existenceEmail', { "email": value })
            .then(data => {
                if (data.status === 'success') {
                    this.setState((state) => {
                        return { ...state, isLegalEmail: true }
                    });
                } else {
                    this.setState((state) => {
                        return { ...state, emailMsg: data.errorMsg || data.error };
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    sendEmailCode() {
        this.setState((state) => {
           return {
               ...state,
               sendEmailLoading: true
           }
        });
        getEmailVerifyCode(this.state.email[0])
            .then((data) => {
                this.setState((state) => {
                    return {
                        ...state,
                        sendEmailLoading: false
                    }
                });
                if (data === 'success') {
                    this.props.alert.success('发送邮箱验证码成功。');
                } else {
                    this.props.alert.error('发送邮箱验证码失败，请重新发送。');
                }
            })
            .catch((error) => {
                this.setState((state) => {
                    return {
                        ...state,
                        sendEmailLoading: false
                    }
                });
                this.props.alert.error('发送邮箱验证码失败。');
            });
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

    submitRegisterInfo(event) {
        event.preventDefault();
        this.setState((state) => {
            return {
                ...state,
                isRegisterLoading: true
            }
        });
        postJson('/regist', {
            "nickName": this.state.username[0],
            "email": this.state.email[0],
            "password": this.state.confirmPwd[0],
            "emailVercode": this.state.emailCode[0],
            "imageVercode": this.state.imageCode[0]
        }).then((data) => {
            this.setState((state) => {
                return {
                    ...state,
                    imageCode: '',
                    emailCode: '',
                    isRegisterLoading: false
                }
            });
            if (data.status === 'success') {
                this.props.history.push('/login');
            } else {
                this.getImageCode();
                this.props.alert.error(data.errorMsg || data.error);
            }
        }).catch((error) => {
            this.setState((state) => {
                return {
                    ...state,
                    imageCode: '',
                    emailCode: '',
                    isRegisterLoading: false
                }
            });
            this.getImageCode();
            this.props.alert.error('注册失败。');
        });
    }

    render() {
        return (
            <div>
                <Header activeTitle="me" />
                <BreadCrumb title="注册" subItem="个人中心" currentItem="注册" />
                <section className="login-register">
                    <div className="section-padding">
                        <div className="container">
                            <div className="contents text-center">
                                <h2 className="section-title">Register</h2>
                                <form className="register-form" id="register-form" onSubmit={ this.submitRegisterInfo }>
                                    <p className="form-input">
                                        <input type="text" name="username" id="user_name" placeholder="Username" className="input"
                                               onChange={ this.handleInputChange } value={ this.state.username } required />
                                    </p>
                                    <p className="form-input">
                                        <input type="email" name="email" id="user_email" placeholder="Email" className="input"
                                               onChange={ this.handleInputChange } onBlur={ this.handleEmailBlur } value={ this.state.email } required />
                                    </p>
                                    {
                                        this.state.emailMsg ? <div className="alert alert-danger" role="alert">{this.state.emailMsg}</div> : null
                                    }
                                    {
                                        this.state.isLegalEmail ?
                                            <p className="form-input">
                                                <input type="text" name="emailCode" id="email_code" style={ legalEmailInput } value={ this.state.emailCode }
                                                       placeholder="Email Verification Code" onChange={ this.handleInputChange } required />
                                                <input type="button" style={ this.state.sendEmailLoading ? {"width": "40%"} : legalEmailButton } value="Send"
                                                       disabled={ this.state.sendEmailLoading } onClick={ this.sendEmailCode } />
                                            </p>
                                            : null
                                    }
                                    <p className="form-input">
                                        <input type="password" name="pwd" id="user_pass" placeholder="Password" className="input"
                                               onChange={ this.handleInputChange } value={ this.state.pwd } required />
                                    </p>
                                    <p className="form-input">
                                        <input type="password" name="confirmPwd" id="confirm_pass" placeholder="Confirm Password" className="input"
                                               onChange={ this.handleInputChange } onBlur={ this.handlePasswordBlur } value={ this.state.confirmPwd } required />
                                    </p>
                                    {
                                        this.state.confirmPwdMsg ? <div className="alert alert-danger" role="alert">{this.state.confirmPwdMsg}</div> : null
                                    }
                                    <p className="form-input">
                                        <input type="text" name="imageCode" id="image_code" style={ legalImageInput } value={ this.state.imageCode }
                                               placeholder="Image Verification Code" onChange={ this.handleInputChange } required />
                                        <img src={this.state.imageUrl} onClick={ () => { this.getImageCode(); } } />
                                    </p>
                                    <RememberMeInRegister />
                                    <p className="form-input">
                                        <input type="submit" name="wp-submit" id="wp-submit" className="btn"
                                               value={this.state.isRegisterLoading ? "Loading..." : "Sign In"} disabled={this.state.isRegisterLoading} />
                                    </p>
                                </form>
                                <Social title="Or Sign up using" />
                                <p className="register">
                                    已经有账号? <Link to="/login">立即登录</Link>
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


const RegisterWithRouter = withRouter(withAlert(Register));
export default RegisterWithRouter;


