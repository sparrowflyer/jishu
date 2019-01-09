import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jsUser: null
        };
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        if (sessionStorage.getItem('jsUser')) {
            try {
                this.setState((state) => {
                    return {
                        ...state,
                        jsUser: JSON.parse(sessionStorage.getItem('jsUser'))
                    }
                });
            } catch(e) {
                this.setState((state) => {
                    return {
                        ...state,
                        jsUser: null
                    }
                });
                sessionStorage.removeItem('jsUser');
            }
        } else {
            this.setState((state) => {
                return {
                    ...state,
                    jsUser: null
                }
            });
        }
    }

    logout() {
        sessionStorage.removeItem('jsUser');
        this.props.history.push('/');
        window.location.reload();
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
                                        <span><i className="fas fa-phone"></i> <a href="">(+61) 38376 6284</a></span>
                                        <span><i className="fas fa-envelope"></i> <a href="#">support@courseware.com</a></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="menu-search-form dropdown float-right">
                                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span>Search</span> <i className="fas fa-search"></i>
                                    </a>
                                    <div className="dropdown-menu">
                                        <form action="#" className="menu-search">
                                            <input type="text" className="form-control" placeholder="Search ..." name="s" title="Search here" required />
                                            <input type="submit" className="form-control" />
                                        </form>
                                    </div>
                                </div>
                                <div className="menu-cart dropdown float-right">
                                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Cart <i className="fas fa-shopping-cart"></i>
                                    </a>
                                    <div className="dropdown-menu cart-menu">
                                        <div className="widget_shopping_cart_content">
                                            <div className="cart-top">
                                                <div className="item media">
                                                    <button className="btn close-btn"><i className="icons icon-close"></i></button>
                                                    <div className="item-thumbnail">
                                                        <img src="../images/shop/1.jpg" alt="Item Thimbnail" />
                                                    </div>
                                                    <div className="item-details media-body">
                                                        <div className="rating"><input type="hidden" className="rating-tooltip-manual" data-filled="fas fa-star" data-empty="far fa-star" value="4.5" data-fractions="5"/></div>
                                                        <h4 className="item-title"><a href="#">Product Name Here</a></h4>
                                                        <div className="price">
                                                            <span className="current-price">$15.99</span>
                                                        </div>
                                                        <span className="item-count">3</span>
                                                    </div>
                                                </div>
                                                <div className="item media">
                                                    <button className="btn close-btn"><i className="icons icon-close"></i></button>
                                                    <div className="item-thumbnail">
                                                        <img src="../images/shop/2.jpg" alt="Item Thimbnail" />
                                                    </div>
                                                    <div className="item-details media-body">
                                                        <div className="rating"><input type="hidden" className="rating-tooltip-manual" data-filled="fas fa-star" data-empty="far fa-star" value="4.5" data-fractions="5" /></div>
                                                        <h4 className="item-title"><a href="#">Product Name Here</a></h4>
                                                        <div className="price">
                                                            <span className="current-price">$15.99</span>
                                                        </div>
                                                        <span className="item-count">3</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cart-middle">
                                                <button className="btn float-left"><i className="ti-trash"></i> Empty Cart</button>
                                                <div className="price-total float-right">
                                                    <span>Sub total:</span>
                                                    <div className="price">
                                                        <span className="current-price">$1555.99</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cart-bottom">
                                                <span className="btn float-left"><i className="icons icon-basket-loaded"></i> View Cart</span>
                                                <span className="btn float-right">Checkout</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="user-area dropdown float-right">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        myCourseware
                                    </a>
                                    <div className="user-menu dropdown-menu">
                                        <a className="nav-link" href="#"><i className="fa fa- user"></i>My Profile</a>
                                        <a className="nav-link" href="#"><i className="fa fa- user"></i>Notifications <span className="count">13</span></a>
                                        <a className="nav-link" href="#"><i className="fa fa -cog"></i>Settings</a>
                                        <a className="nav-link" href="#"><i className="fa fa-power -off"></i>Logout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="container">
                        <nav className="navbar navbar-expand-md m-0">
                            <Link className="navbar-brand" to="/"><img src="../images/logo.png" alt="Logo" /></Link>
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
                                        <Link className="nav-link" to="/blog">学生贴吧</Link>
                                    </li>
                                    <li className="nav-item menu-item-has-children dropdown">
                                        <Link to="/about" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            关于我们
                                        </Link>
                                        <div className="dropdown-menu">
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
                                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    个人中心
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
            jsUser: null
        };
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        if (sessionStorage.getItem('jsUser')) {
            try {
                this.setState((state) => {
                    return {
                        ...state,
                        jsUser: JSON.parse(sessionStorage.getItem('jsUser'))
                    }
                });
            } catch(e) {
                this.setState((state) => {
                    return {
                        ...state,
                        jsUser: null
                    }
                });
                sessionStorage.removeItem('jsUser');
            }
        } else {
            this.setState((state) => {
                return {
                    ...state,
                    jsUser: null
                }
            });
        }
    }

    logout() {
        sessionStorage.removeItem('jsUser');
        this.props.history.push('/');
        window.location.reload();
    }

    render() {
        return (
            <header className="masthead">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <nav className="navbar navbar-expand-md">
                                <Link className="navbar-brand" to="/">
                                    <img src="../images/logo.png" alt="Logo" />
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
                                            <Link className="nav-link" to="/blog">学生贴吧</Link>
                                        </li>
                                        <li className={`nav-item menu-item-has-children dropdown ${this.props.activeTitle === 'us' ? "active" : null}`}>
                                            <Link to="/about" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                关于我们
                                            </Link>
                                            <div className="dropdown-menu">
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
                                                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        个人中心
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
                            <div className="menu-search-form dropdown float-right">
                                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-search"></i>
                                </a>
                                <div className="dropdown-menu">
                                    <form action="#" className="menu-search">
                                        <input type="text" className="form-control" placeholder="Search ..." name="s" title="Search here" required />
                                        <input type="submit" className="form-control" />
                                    </form>
                                </div>
                            </div>
                            <div className="menu-cart dropdown float-right">
                                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-shopping-cart"></i>
                                    <span className="count">2</span>
                                </a>
                                <div className="dropdown-menu cart-menu">
                                    <div className="widget_shopping_cart_content">
                                        <div className="cart-top">
                                            <div className="item media">
                                                <button className="btn close-btn"><i className="icons icon-close"></i></button>
                                                <div className="item-thumbnail">
                                                    <img src="../images/shop/1.jpg" alt="Item Thimbnail" />
                                                </div>
                                                <div className="item-details media-body">
                                                    <div className="rating">
                                                        <input type="hidden" className="rating-tooltip-manual" data-filled="fas fa-star" data-empty="far fa-star" value="4.5" data-fractions="5"/>
                                                    </div>
                                                    <h4 className="item-title"><a href="#">Product Name Here</a></h4>
                                                    <div className="price">
                                                        <span className="current-price">$15.99</span>
                                                    </div>
                                                    <span className="item-count">3</span>
                                                </div>
                                            </div>
                                            <div className="item media">
                                                <button className="btn close-btn"><i className="icons icon-close"></i></button>
                                                <div className="item-thumbnail">
                                                    <img src="../images/shop/2.jpg" alt="Item Thimbnail" />
                                                </div>
                                                <div className="item-details media-body">
                                                    <div className="rating">
                                                        <input type="hidden" className="rating-tooltip-manual" data-filled="fas fa-star" data-empty="far fa-star" value="4.5" data-fractions="5"/>
                                                    </div>
                                                    <h4 className="item-title"><a href="#">Product Name Here</a></h4>
                                                    <div className="price">
                                                        <span className="current-price">$15.99</span>
                                                    </div>
                                                    <span className="item-count">3</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart-middle">
                                            <button className="btn float-left"><i className="ti-trash"></i> Empty Cart</button>
                                            <div className="price-total float-right">
                                                <span>Sub total:</span>
                                                <div className="price">
                                                    <span className="current-price">$1555.99</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cart-bottom">
                                            <a href="cart.html" className="btn float-left"><i className="icons icon-basket-loaded"></i> View Cart</a>
                                            <a href="checkout.html" className="btn float-right">Checkout</a>
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

const NormalHeaderWithRouter = withRouter(NormalHeader);
const HomeHeaderWithRouter = withRouter(HomeHeader);


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



