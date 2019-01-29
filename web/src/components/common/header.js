import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { withAlert } from 'react-alert';
import { postJson, setCommentRead } from '../../utils/server.js';

const homeCommentNum = {
    backgroundColor: '#0d47a1',
    borderRadius: '5em',
    color: '#fff',
    fontSize: '11px',
    fontWeight: '700',
    height: '15px',
    width: '15px',
    right: 0,
    top: '13px',
    lineHeight: '15px',
    position: 'absolute',
    textAlign: 'center'
};

class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jsUserID: '',
            jsUser: null,
            unreadComments: []
        };
        this.getComments = this.getComments.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        this.setState((state) => {
            return {
                ...state,
                jsUserID: '',
                jsUser: null
            }
        });
        let jsUser, jsUserID;
        try {
            jsUser = JSON.parse(sessionStorage.getItem('jsUser'));
            jsUserID = jsUser.id;
        } catch(e) {}
        if (jsUser) {
            this.setState((state) => {
                return { ...state, jsUserID, jsUser }
            });
            this.getComments(jsUserID);
        } else {
            sessionStorage.removeItem('jsUser');
        }
    }

    logout() {
        sessionStorage.removeItem('jsUser');
        this.props.history.push('/');
        window.location.reload();
    }

    getComments(userID) {
        postJson('/getUserNotificaitons', {
            userId: userID
        }).then((data) => {
            if (data.status === 'success') {
                let comments = data.data,
                    unreadComments = comments.filter((comment) => {
                        return comment.status === 'unread';
                    });
                this.setState((state) => {
                    return {
                        ...state,
                        unreadComments
                    }
                });
            }
        });
    }

    setCommentRead(commentID) {
        setCommentRead(commentID)
            .then((data) => {
                if (data.status === 'success') {
                    this.getComments(this.state.jsUserID);
                } else {
                    this.props.alert.error(data.errorMsg || data.error);
                }
            }).catch((error) => {
                this.props.alert.error('设置消息已读失败!');
            });
    }

    render() {
        return (
            <header className="masthead">
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="top-contact">
                                    <div className="trggericon"><i className="fas fa-at"></i></div>
                                    <div className="close"><i className="far fa-times-circle"></i></div>
                                    <div className="contacts">
                                        <span><i className="fas fa-phone"></i> <a href="">+86 137 7713 3446</a></span>
                                        <span><i className="fas fa-envelope"></i> <a href="mailto:jishugo@unclejee.cn"> jishugo@unclejee.cn</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">

                                <div className="menu-cart dropdown float-right">
                                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-comment-dots"></i>
                                        {
                                            this.state.unreadComments.length > 0 ?
                                                <span style={homeCommentNum}>{this.state.unreadComments.length}</span> : null
                                        }
                                    </a>
                                    <div className="dropdown-menu cart-menu">
                                        <div className="widget_shopping_cart_content">
                                            <div className="cart-top">
                                                {
                                                    this.state.unreadComments.map((unreadComment) => {
                                                        return (
                                                            <div className="item media" key={unreadComment.id}>
                                                                <button className="btn close-btn" onClick={this.setCommentRead.bind(this, unreadComment.id)}><i className="icons icon-close"></i></button>
                                                                <div className="item-details media-body" style={{marginLeft: '5px'}}>

                                                                    <h4 className="item-title">{unreadComment.title}</h4>
                                                                    <Link to={`${unreadComment.clickUrl}`}>{unreadComment.content}</Link>
                                                                </div>
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="container">
                        <nav className="navbar navbar-expand-md m-0">
                            <Link className="navbar-brand" to="/"><img src="/images/logo.png" alt="Logo" /></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                            </button>
                            <div className="collapse navbar-collapse" id="main-menu">
                                <ul className="navbar-nav">
                                    <li className="nav-item menu-item-has-children dropdown active">
                                        <Link className="nav-link" to="/">主页</Link>
                                    </li>
                                    <li className="nav-item menu-item-has-children dropdown">
                                        <Link className="nav-link" to="/course">课程信息</Link>
                                    </li>
                                    <li className="nav-item menu-item-has-children dropdown">
                                        <Link className="nav-link" to="/blog">学生博客</Link>
                                    </li>

                                    <li className="nav-item menu-item-has-children dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            关于我们
                                        </a>

                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="/about">关于叽叔</Link>
                                            <Link className="dropdown-item" to="/contact">联系我们</Link>
                                            <Link className="dropdown-item" to="/faq">疑问解答</Link>
                                        </div>
                                    </li>
                                    {
                                        this.state.jsUser ?
                                            <li className="nav-item menu-item-has-children dropdown">
                                                <Link to={`/user/${this.state.jsUser.id}`} className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Hello, { this.state.jsUser.nickName }
                                                </Link>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" onClick={ this.logout }>注销</a>
                                                </div>
                                            </li> :
                                            <li className="nav-item menu-item-has-children dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    登录/注册
                                                </a>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item" to="/login">登录</Link>
                                                    <Link className="dropdown-item" to="/register">注册</Link>
                                                </div>
                                            </li>
                                    }
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

class NormalHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jsUserID: '',
            jsUser: null,
            unreadComments: []
        };
        this.getComments = this.getComments.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        this.setState((state) => {
            return {
                ...state,
                jsUserID: '',
                jsUser: null
            }
        });
        let jsUser, jsUserID;
        try {
            jsUser = JSON.parse(sessionStorage.getItem('jsUser'));
            jsUserID = jsUser.id;
        } catch(e) {}
        if (jsUser) {
            this.setState((state) => {
                return { ...state, jsUserID, jsUser }
            });
            this.getComments(jsUserID);
        } else {
            sessionStorage.removeItem('jsUser');
        }
    }

    logout() {
        sessionStorage.removeItem('jsUser');
        this.props.history.push('/');
        window.location.reload();
    }

    getComments(userID) {
        postJson('/getUserNotificaitons', {
            userId: userID
        }).then((data) => {
            if (data.status === 'success') {
                let comments = data.data,
                    unreadComments = comments.filter((comment) => {
                        return comment.status === 'unread';
                    });
                this.setState((state) => {
                    return {
                        ...state,
                        unreadComments
                    }
                });
            }
        });
    }

    setCommentRead(commentID) {
        setCommentRead(commentID)
            .then((data) => {
                if (data.status === 'success') {
                    this.getComments(this.state.jsUserID);
                } else {
                    this.props.alert.error(data.errorMsg || data.error);
                }
            }).catch((error) => {
                this.props.alert.error('设置消息已读失败!');
            });
    }

    render() {
        return (
            <header className="masthead">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <nav className="navbar navbar-expand-md">
                                <Link className="navbar-brand" to="/">
                                    <img src="/images/logo.png" alt="Logo" />
                                </Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                                </button>
                                <div className="collapse navbar-collapse" id="main-menu">
                                    <ul className="navbar-nav">
                                        <li className="nav-item menu-item-has-children dropdown">
                                            <Link className="nav-link" to="/">主页</Link>
                                        </li>
                                        <li className={`nav-item menu-item-has-children dropdown ${this.props.activeTitle === 'course' ? "active" : null}`}>
                                            <Link className="nav-link" to="/course">课程信息</Link>
                                        </li>
                                        <li className={`nav-item menu-item-has-children dropdown ${this.props.activeTitle === 'blog' ? "active" : null}`}>
                                            <Link className="nav-link" to="/blog">学生博客</Link>
                                        </li>
                                        <li className={`nav-item menu-item-has-children dropdown ${this.props.activeTitle === 'us' ? "active" : null}`}>
                                            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                关于我们
                                            </a>
                                            <div className="dropdown-menu">
                                                <Link className="dropdown-item" to="/about">关于叽叔</Link>
                                                <Link className="dropdown-item" to="/contact">联系我们</Link>
                                                <Link className="dropdown-item" to="/faq">疑问解答</Link>
                                            </div>
                                        </li>
                                        {
                                            this.state.jsUser ?
                                                <li className={`nav-item menu-item-has-children dropdown ${this.props.activeTitle === 'me' ? "active" : null}`}>
                                                    <Link to={`/user/${this.state.jsUser.id}`} className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        Hello, {this.state.jsUser.nickName}
                                                    </Link>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" onClick={ this.logout }>注销</a>
                                                    </div>
                                                </li> :
                                                <li className="nav-item menu-item-has-children dropdown">
                                                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        登录/注册
                                                    </a>
                                                    <div className="dropdown-menu">
                                                        <Link className="dropdown-item" to="/login">登录</Link>
                                                        <Link className="dropdown-item" to="/register">注册</Link>
                                                    </div>
                                                </li>
                                        }
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="col-md-2">

                            <div className="menu-cart dropdown float-right">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-comment-dots"></i>
                                    {
                                        this.state.unreadComments.length > 0 ? <span className="count">{this.state.unreadComments.length}</span> : null
                                    }
                                </a>
                                <div className="dropdown-menu cart-menu">
                                    <div className="widget_shopping_cart_content">
                                        <div className="cart-top">
                                            {
                                                this.state.unreadComments.map((unreadComment) => {
                                                    return (
                                                        <div className="item media" key={unreadComment.id}>
                                                            <button className="btn close-btn" onClick={this.setCommentRead.bind(this, unreadComment.id)}><i className="icons icon-close"></i></button>
                                                            <div className="item-details media-body" style={{marginLeft: '5px'}}>
                                                                <h4 className="item-title">{unreadComment.title}</h4>
                                                                <Link to={`${unreadComment.clickUrl}`}>{unreadComment.content}</Link>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

const NormalHeaderWithRouter = withRouter(withAlert(NormalHeader));
const HomeHeaderWithRouter = withRouter(withAlert(HomeHeader));


export function Header({activeTitle}) {
    return (
        <div>
            { activeTitle ? <NormalHeaderWithRouter activeTitle={activeTitle} /> : <HomeHeaderWithRouter /> }
        </div>
    );

}

Header.propTypes = {
    activeTitle: PropTypes.oneOf(['course', 'blog', 'us', 'me'])
};



