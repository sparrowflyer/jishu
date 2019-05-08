import React from 'react';
import { getVerifyCodeImage } from '../utils/http.js';

//所有跳转 都要有手势符号
export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: ''
        };
        this.getImageCode = this.getImageCode.bind(this);
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
    componentDidMount() {
        this.getImageCode();
    }
    render() {
        return (
            <div className="login">
                <form className="login_item">
                    <div className="login_item_logo">
                        UNCLEJEE
                    </div>
                    {
                        /* 错误提示 */
                        /*
                         注册
                         <div className="login_item_field">
                         <input type="text" id="nickname" name="nickname" placeholder="用户名" className="login_item_field__full" />
                         </div>
                         */
                    }
                    <div className="login_item_field">
                        <input type="text" id="username" name="username" placeholder="邮箱/手机号码" />
                    </div>
                    <div className="login_item_field">
                        {
                            /*
                             jee-eye:type->text
                             jee-eye-blocked:type->password
                             修改密码时显示新密码
                             */
                        }
                        <input type="password" id="pwd" name="pwd" placeholder="密码" />
                        <span className="jee-eye-blocked ml10"></span>
                    </div>
                    <div className="login_item_field">
                        <input type="text" id="verification" name="verification" placeholder="验证码" />
                        <img className="login_item_field_verify ml10" src={this.state.imageUrl}
                             onClick={() => {this.getImageCode();}} />
                        {
                            /*
                             <img src="" alt="图形验证码" />
                             <input type="button" value="发送验证码" style="width" />
                             登录：图片 img
                             注册|忘记密码 发送验证码 X秒后可重发 重新发送验证码 button 如果格式不符合要求，不能点击
                             */
                        }
                    </div>
                    {/* 登录 */}
                    <div className="login_item_note clearfix">
                        <label className="checkbox-label">
                            记住密码
                            <input type="checkbox" />
                            <span className="checkbox-custom"></span>
                        </label>
                        <span className="float-right">忘记密码?</span>
                    </div>
                    {
                        /*
                        注册
                         <div className="login_item_note">
                         <label className="checkbox-label">
                         <input type="checkbox" />
                         <span className="checkbox-custom"></span>
                         </label>
                         <span>同意</span>
                         <span className="color-30">&nbsp;论坛&开课规范</span>
                         </div>
                        */
                    }
                    {/*登录 注册 确认修改密码*/}
                    <button type="submit" className="login_item_submit-btn">
                        登录&nbsp;
                        <span className="jee-arrow-right"></span>
                    </button>
                    {
                        /*
                         登录:没有账号，点击注册
                         注册:已有账号，点击登录
                         修改密码：放弃修改？点击登录
                         */
                    }
                    <div className="login_item_info">没有账号？&nbsp;点击<span>注册</span></div>
                </form>
            </div>
        );
    }
}
