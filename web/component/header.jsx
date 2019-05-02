import React from 'react';
import utils from "../utils/utils.jsx";

export class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="header-wrap">
                    <div className="header-btn fr">登录/注册</div>
                    <ul className="header-menu fr">
                        <li className="active">主页</li>
                        <li>课程信息</li>
                        <li>学生博客</li>
                        <li>关于我们</li>
                    </ul>
                    <div className="header-title">
                        {/*<img src={utils.resizeIcon("./../assets/images/UNCLEJEE.png")} alt=""/>*/}
                        <img src={require("./../assets/images/UNCLEJEE@2x.png")} alt=""/>
                    </div>
                </div>
                <div className="header-wrap-small">
                    <div className="header-menu-small">
                        <div className="header-menu-icon">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <ul className="menu-list">
                            <li className="active">主页</li>
                            <li>课程信息</li>
                            <li>学生博客</li>
                            <li>关于我们</li>
                        </ul>
                    </div>
                    <div className="header-title-small">
                        {/*<img src={utils.resizeIcon("./../assets/images/UNCLEJEE.png")} alt=""/>*/}
                        <img src={require("./../assets/images/UNCLEJEE.png")} alt=""/>
                    </div>
                    <div className="header-btn-small">登录/注册</div>
                </div>
            </div>

        );
    }
}