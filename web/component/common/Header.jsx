import React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
        };
    }
    componentDidMount() {
        let user = localStorage.getItem("jeeUser") || sessionStorage.getItem("jeeUser");
        if(!user)return;
        this.setState({
            userInfo: JSON.parse(user)
        })
    }
    render() {
        const {userInfo} = this.state;
        return (
            <div>
                <div className="header-wrap">
                    {/* 登陆与否 */}
                    {
                        userInfo ? <Link className="header-user fr" to="/PersonalCenter">
                            <img src={"http://" + userInfo.headImage} alt=""/>
                            <span>{userInfo.nickName}</span>
                        </Link> : <div className="header-btn fr" to="/login">登录/注册</div>
                    }
                    <ul className="header-menu fr">
                        <li className="active">
                            <Link to="/">主页</Link>
                        </li>
                        <li>
                            <Link to="/college">择校服务</Link>
                        </li>
                        {
                            /*
                             <li>课程信息</li>
                             <li>学生博客</li>
                             <li>关于我们</li>
                            */
                        }
                    </ul>
                    <div className="header-title">
                        {/*<img src={utils.resizeIcon("./../assets/images/UNCLEJEE.png")} alt=""/>*/}
                        <img src={require("../../assets/images/UNCLEJEE@2x.png")} alt=""/>
                    </div>
                </div>
                <div className="header-wrap-small">
                    <div className="header-menu-small">
                        <div className="header-menu-icon">
                            {/*<div></div>*/}
                            {/*<div></div>*/}
                            {/*<div></div>*/}
                            <img src={require("../../assets/images/分组9@2x.png")} alt=""/>
                        </div>
                        <ul className="menu-list">
                            <li className="active">
                                <Link to="/">主页</Link>
                            </li>
                            <li>
                                <Link to="/college">择校服务</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header-title-small">
                        {/*<img src={utils.resizeIcon("./../assets/images/UNCLEJEE.png")} alt=""/>*/}
                        <img src={require("../../assets/images/UNCLEJEE.png")} alt=""/>
                    </div>
                    {/*<div className="header-btn-small">登录/注册</div>*/}
                    <div className="header-user">
                        <img src={require("../../assets/images/GB.png")} alt=""/>
                    </div>
                </div>
            </div>

        );
    }
}