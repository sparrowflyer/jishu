import React from 'react';
import { Link } from 'react-router-dom';
import { hashHistory } from 'react-router'
import {getUnreadNotificaitonCount} from "../../utils/http"

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            pathName: "",
            notice: 0,
            isShowModal:false,
            showPersonMenu:false,
            showHeaderMenu:false,
        };
        this.loginOut = this.loginOut.bind(this);
        this.getNotice = this.getNotice.bind(this);
        this.showModal = this.showModal.bind(this);
        this.showPersonMenu = this.showPersonMenu.bind(this);
        this.showHeaderMenu = this.showHeaderMenu.bind(this);

    }
    componentDidMount(){
       let pathName = window.location.pathname;
        let userInfo = sessionStorage.getItem("jeeUser");
        this.setState({
            userInfo: userInfo ? JSON.parse(userInfo) : {},
            pathName: pathName
        });
        this.getNotice();
    }
    getNotice(){
        //TODO:获取通知接口不对
        getUnreadNotificaitonCount().then(resp=>{
            if(resp.data.status === "success"){
                this.setState({
                    notice : resp.data.data
                })
            }
        }).catch(err=>{})
    }
    showModal(value){
        this.setState((state) => {
            return {
                ...state,
                isShowModal: value
            }
        });
    }
    loginOut(){
        sessionStorage.removeItem("jeeUser");
        sessionStorage.clear();

        this.setState((state) => {
            return { ...state, userInfo:{}}
        });

        try {
            hashHistory.push('/')
        } catch(e){
            window.location.pathname='/';
        }
    }
    showPersonMenu(){
        // let bool = !this.state.showPersonMenu;
        this.setState({
            showPersonMenu: true
        })
    }
    showHeaderMenu(){
        // let bool = !this.state.showHeaderMenu
        this.setState({
            showHeaderMenu: true
        })
    }
    componentDidUpdate(preProps){
        if(preProps.updateUser !== this.props.updateUser){
            let userInfo = sessionStorage.getItem("jeeUser");
            this.setState({
                userInfo: userInfo ? JSON.parse(userInfo) : {},
            });
        }
    }
    render() {
        let {notice,pathName,isShowModal,showPersonMenu,showHeaderMenu,userInfo} = this.state;
        return (
            <div>
                {/*   大屏header  */}
                <div className="header-wrap">
                    {/* 登陆与否 */}
                    {
                        userInfo.id ? <div className="header-user fr" onClick={this.showPersonMenu}>
                            <img src={"http://" + userInfo.headImage} alt=""/>
                            <span>{userInfo.nickName}</span>
                                {
                                    showPersonMenu && <ul className="header-personal-list">
                                        <li className={pathName==="/PersonalCenter"?"active mb20":"mb20"}>
                                            <Link to={"/PersonalCenter/"+ userInfo.id}>个人中心</Link>
                                        </li>
                                        <li className="mb20">
                                            <Link to={{pathname:"/PersonalCenter/"+ userInfo.id,query:{pageType:'notice'}}}>消息通知
                                                { notice>0 && <span className="header-notice">{notice}</span>}
                                            </Link>
                                        </li>
                                        <li style={{cursor: 'pointer'}} onClick={this.showModal.bind(true)}>退出登录</li>
                                    </ul>
                                }

                        </div> : <Link className="header-btn fr" to="/login">登录/注册</Link>
                    }
                    <ul className="header-menu fr">
                        <li className={pathName==="/" ? "active":""}>
                            <Link to="/">主页</Link>
                        </li>
                        <li className={pathName.indexOf("college")>0 || pathName.indexOf("Student")>0 ? "active":""}>
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

                {/*小屏header*/}

                <div className="header-wrap-small">
                    <div className="header-menu-small" onClick={this.showHeaderMenu}>
                        <div className="header-menu-icon">
                            <img src={require("../../assets/images/分组9@2x.png")} alt=""/>
                        </div>
                        {
                            showHeaderMenu && <ul className="menu-list">
                                <li className={pathName==="/"?"active":""}>
                                    <Link to="/">主页</Link>
                                </li>
                                <li className={pathName.indexOf("college")>0 || pathName.indexOf("Student")>0?"active":""}>
                                    <Link to="/college">择校服务</Link>
                                </li>
                            </ul>
                        }

                    </div>
                    <div className="header-title-small">
                        {/*<img src={utils.resizeIcon("./../assets/images/UNCLEJEE.png")} alt=""/>*/}
                        <img src={require("../../assets/images/UNCLEJEE.png")} alt=""/>
                    </div>
                    {
                        userInfo.id ? <div className="header-user header-menu-small" onClick={this.showPersonMenu}>
                            <img src={"http://" + userInfo.headImage} alt=""/>
                                {
                                    showPersonMenu && <ul className="header-personal-list">
                                        <li className={pathName==="/PersonalCenter"?"active mb10":"mb10"}>
                                            <Link to={"/PersonalCenter/"+ userInfo.id}>个人中心</Link>
                                        </li>
                                        <li className="mb10">
                                            <Link to={{pathname:"/PersonalCenter/"+ userInfo.id,query:{pageType:'notice'}}}>消息通知
                                                {notice>0 && <span className="header-notice">{notice}</span>}
                                            </Link>
                                        </li>
                                        <li onClick={this.showModal.bind(true)}>退出登录</li>
                                    </ul>
                                }
                        </div> : <Link className="header-btn-small" to="/login">登录/注册</Link>
                    }
                </div>
                {/*确认退出登录*/}
                {
                    isShowModal &&  <div className="logout-modal-mask">
                        <div className="logout-modal">
                            <div className="logout-text">确定要退出当前账户吗</div>
                            <div className="logout-btn">
                                <button className="logout-confirm" onClick={this.loginOut}>退出</button>
                                <button className="logout-cancel" onClick={this.showModal.bind(this,false)}>关闭</button>
                            </div>
                        </div>
                        {/*<img src={require("../../assets/images/guanbi1@2x.png")} alt=""/>*/}
                    </div>
                }

            </div>
        );
    }
}