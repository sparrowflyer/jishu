import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { getVerifyCodeImage, getSMSCode, getEmailCode, postUrl } from '../utils/http.js';

/*
    错误提示 待完善，抽象
    所有跳转 都要有手势符号
*/
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: '',
            username: '',
            pwd: '',
            verification: '',
            isPwd: true,
            imageUrl: '',
            formError: '',
            nicknameError: '',
            usernameError: '',
            pwdError: '',
            verificationError: '',
            isPwdChecked: false
        };
        this.redirectValue = {
            '/login': {
                submitBtnValue: '登录',
                desc: '没有账号，',
                toPage: '/register',
                toPageName: '注册'
            },
            '/register': {
                submitBtnValue: '注册',
                desc: '已有账号，',
                toPage: '/login',
                toPageName: '登录'
            },
            '/forgetPwd': {
                submitBtnValue: '确认修改密码',
                desc: '放弃修改？',
                toPage: '/login',
                toPageName: '登录'
            }
        };
        this.alertTimer = null;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.changePwdType = this.changePwdType.bind(this);
        this.getImageCode = this.getImageCode.bind(this);
        this.sendVerification = this.sendVerification.bind(this);
        this.openErrorAlert = this.openErrorAlert.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this);
        this.registerSubmit = this.registerSubmit.bind(this);
        this.forgetPwdSubmit = this.forgetPwdSubmit.bind(this);
        this.isEmail = this.isEmail.bind(this);
    }
    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const error = `${name}Error`;
        this.setState((state) => {
            return {
                ...state,
                [name]: value,
                [error]: (value ? '' : '此选项为必填项')
            };
        });
    }
    changePwdType () {
        this.setState((state) => {
           return {
               ...state,
               isPwd: !state.isPwd
           }
        });
    }
    getImageCode() {
        let imageUrl = '';
        getVerifyCodeImage()
            .then((response) => {
                if (response.status === 200) {
                    imageUrl = window.URL.createObjectURL(response.data);
                }
                this.setState((state) => {
                    return { ...state, imageUrl }
                });
            })
            .catch((error) => {
                console.error('获取图像验证码：', error);
                this.setState((state) => {
                    return { ...state, imageUrl };
                });
            });
    }
    sendVerification() {
        if (!this.state.username) {
            this.setState((state) => {
                return {
                    ...state,
                    usernameError: '此选项为必填项'
                };
            });
            return ;
        }
        if (this.isEmail(this.state.username)) {
            getEmailCode(this.state.username)
                .then((response) => {
                    if (response.status === 200) {
                        this.openErrorAlert('成功发送邮箱验证码，请查收');
                    } else {
                        this.openErrorAlert('邮箱验证码发送失败，请重新发送');
                    }
                })
                .catch((error) => {
                    this.openErrorAlert('短信验证码发送失败，请重新发送');
                    console.error('获取邮箱验证码：', error);
                });
        } else {
            getSMSCode(this.state.username)
                .then((response) => {
                    if (response.status === 200) {
                        this.openErrorAlert('成功发送短信验证码，请查收');
                    } else {
                        this.openErrorAlert('短信验证码发送失败，请重新发送');
                    }
                })
                .catch((error) => {
                    this.openErrorAlert('短信验证码发送失败，请重新发送');
                    console.error('获取短信验证码：', error);
                });
        }
    }
    openErrorAlert(content) {
        this.setState((state) => {
            return {
                ...state,
                formError: content
            }
        });
        clearTimeout(this.alertTimer);
        this.alertTimer = setTimeout(() => {
            this.setState((state) => {
                return {
                    ...state,
                    formError: ''
                }
            });
        }, 5000);
    }
    togglePwdChecked() {
        this.setState((state) => {
            return {
                ...state,
                isPwdChecked: !state.isPwdChecked
            }
        })
    }
    loginSubmit(event) {
        event.preventDefault();
        const checkValues = ['username', 'pwd', 'verification'];
        const isFormNotValidate = checkValues.some((value) => {
            if (!this.state[value]) {
                this.setState(state => {
                   return {
                       ...state,
                       [`${value}Error`]: '此选项为必填项'
                   }
                });
                return true;
            }
        });
        if (isFormNotValidate) {
            return;
        }
        if (this.state.isPwdChecked) {
            localStorage.setItem('jeePwd', this.state.pwd);
        } else {
            localStorage.removeItem('jeePwd');
        }
        let params = {
            email: '',
            phoneNumber: '',
            password: this.state.pwd,
            imageVercode: this.state.verification
        };
        params[this.isEmail(this.state.username) ? 'email' : 'phoneNumber'] = this.state.username;
        postUrl('/login', params)
            .then(response => {
                let data = response.data;
                if (data.status === 'success') {
                    sessionStorage.setItem('jeeUser', JSON.stringify(data.data));
                    this.props.history.push('/');
                } else {
                    this.openErrorAlert(`登录失败，原因为${data.errorMsg || `${response.status}${response.statusText}`}`);
                }
            })
            .catch(error => {
                console.error('登录', error);
                this.openErrorAlert('登录失败，请重新登录');
            });
    }
    registerSubmit() {
        event.preventDefault();
        const checkValues = ['nickname', 'username', 'pwd', 'verification'];
        const isFormNotValidate = checkValues.some((value) => {
            if (!this.state[value]) {
                this.setState(state => {
                    return {
                        ...state,
                        [`${value}Error`]: '此选项为必填项'
                    }
                });
                return true;
            }
        });
        if (isFormNotValidate) {
            return;
        }
        let params = {
            nickName: this.state.nickname,
            email: '',
            phoneNumber: '',
            password: this.state.pwd,
            emailVercode: '',
            phoneVercode: ''
        },
            isEmail = this.isEmail(this.state.username);
        params[isEmail ? 'email' : 'phoneNumber'] = this.state.username;
        params[isEmail ? 'emailVercode' : 'phoneVercode'] = this.state.verification;
        postUrl('/regist', params)
            .then(response => {
                let data = response.data;
                if (data.status === 'success') {
                    this.props.history.push('/login');
                } else {
                    this.openErrorAlert(`注册失败，原因为${data.errorMsg || `${response.status}${response.statusText}`}`);
                }
            })
            .catch(error => {
                console.error('注册', error);
                this.openErrorAlert('注册失败，请重新注册');
            });
    }
    forgetPwdSubmit() {
        event.preventDefault();
        const checkValues = ['username', 'pwd', 'verification'];
        const isFormNotValidate = checkValues.some((value) => {
            if (!this.state[value]) {
                this.setState(state => {
                    return {
                        ...state,
                        [`${value}Error`]: '此选项为必填项'
                    }
                });
                return true;
            }
        });
        if (isFormNotValidate) {
            return;
        }
        let params = {
                email: '',
                phoneNumber: '',
                password: this.state.pwd,
                emailVercode: '',
                phoneVercode: ''
            },
            isEmail = this.isEmail(this.state.username);
        params[isEmail ? 'email' : 'phoneNumber'] = this.state.username;
        params[isEmail ? 'emailVercode' : 'phoneVercode'] = this.state.verification;
        postUrl('/forgetpsd', params)
            .then(response => {
                let data = response.data;
                if (data.status === 'success') {
                    this.props.history.push('/login');
                } else {
                    this.openErrorAlert(`修改密码失败，原因为${data.errorMsg || `${response.status}${response.statusText}`}`);
                }
            })
            .catch(error => {
                console.error('修改密码', error);
                this.openErrorAlert('修改密码失败，请重新修改');
            });
    }
    isEmail(unknown) {
        return /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/.test(unknown);
    }
    componentDidMount() {
        if (this.props.match.path === '/login') {
            this.getImageCode();
        }
    }
    render() {
        return (
            <div className="login">
                {
                    this.state.formError &&
                        <div className="form_error">{this.state.formError}</div>
                }
                <form className="login_item" noValidate>
                    <div className="login_item_logo">
                        UNCLEJEE
                    </div>
                    {
                        this.props.match.path === '/register' &&
                            <div className={`login_item_field ${this.state.nickNameError && 'login_item_field_error'}`}>
                                <input type="text" id="nickname" name="nickname" placeholder="用户名" className="login_item_field__full"
                                    onChange={this.handleInputChange} value={this.state.nickname} required />
                            </div>
                    }
                    {
                        this.props.match.path === '/register' &&
                            <div className="login_item_error_msg">{this.state.nicknameError}</div>
                    }
                    <div className={`login_item_field ${this.state.usernameError && 'login_item_field_error'}`}>
                        <input type="text" id="username" name="username" placeholder="邮箱/手机号码"
                               onChange={this.handleInputChange} value={this.state.username} required />
                    </div>
                    <div className="login_item_error_msg">{this.state.usernameError}</div>
                    <div className={`login_item_field ${this.state.pwdError && 'login_item_field_error'}`}>
                        <input type={this.state.isPwd ? 'password' : 'text'} id="pwd" name="pwd" placeholder="密码"
                               onChange={this.handleInputChange} value={this.state.pwd} required />
                        <span className={this.state.isPwd ? 'jee-eye-blocked ml10' : 'jee-eye ml10'}
                              onClick={this.changePwdType}></span>
                    </div>
                    <div className="login_item_error_msg">{this.state.pwdError}</div>
                    <div className={`login_item_field ${this.state.verificationError && 'login_item_field_error'}`}>
                        <input type="text" id="verification" name="verification" placeholder="验证码"
                               onChange={this.handleInputChange} value={this.state.verification} required />
                        {
                            this.props.match.path === '/login' ?
                                <img className="login_item_field_verify ml10" src={this.state.imageUrl}
                                     onClick={() => {this.getImageCode()}} /> :
                                <input type="button" className="login_item_field_verify" style={{textAlign: 'right'}}
                                       value="发送验证码" onClick={() => {this.sendVerification()}} />
                        }
                    </div>
                    <div className="login_item_error_msg">{this.state.verificationError}</div>
                    {
                        this.props.match.path === '/login' &&
                            <div className="login_item_note clearfix">
                                <label className="checkbox-label">
                                    记住密码
                                    <input type="checkbox" checked={this.state.isPwdChecked} onChange={this.togglePwdChecked} />
                                    <span className="checkbox-custom"></span>
                                </label>
                                <Link to="/forgetPwd" className="float-right" style={{color: '#848484', fontSize: '12px'}}>忘记密码?</Link>
                            </div>
                    }
                    {
                        this.props.match.path === '/register' &&
                            <div className="login_item_note">
                                <label className="checkbox-label">
                                    <input type="checkbox" checked />
                                    <span className="checkbox-custom"></span>
                                </label>
                                <span>同意</span>
                                <span className="color-30">&nbsp;论坛&开课规范</span>
                            </div>
                    }
                    <button type="submit" className="login_item_submit-btn" onClick={this[`${this.props.match.path.substring(1)}Submit`]}>
                        {this.redirectValue[this.props.match.path].submitBtnValue}
                        <span className="jee-arrow-right"></span>
                    </button>
                    <div className="login_item_info">
                        {this.redirectValue[this.props.match.path].desc}&nbsp;点击
                        <Link style={{color: '#FFD620'}} to={this.redirectValue[this.props.match.path].toPage}>
                            {this.redirectValue[this.props.match.path].toPageName}
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

const LoginWithRouter = withRouter(Login);
export default LoginWithRouter;
