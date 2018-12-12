import React from 'react';

export function Header() {
    return (
        <header className="masthead">
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <nav className="navbar navbar-expand-md">
                            <a className="navbar-brand" href="#">
                                <img src="../images/logo.png" alt="Logo" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                            </button>
                            <div className="collapse navbar-collapse" id="main-menu">
                                <ul className="navbar-nav">
                                    <li className="nav-item menu-item-has-children dropdown active">
                                        <a className="nav-link" href="#">主页</a>
                                    </li>
                                    <li className="nav-item menu-item-has-children dropdown">
                                        <a className="nav-link" href="#">课程信息</a>
                                    </li>
                                    <li className="nav-item menu-item-has-children dropdown">
                                        <a className="nav-link" href="#">学生贴吧</a>
                                    </li>
                                    <li className="nav-item menu-item-has-children dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="404.html">404 Error</a>
                                            <a className="dropdown-item" href="about.html">About</a>
                                            <a className="dropdown-item" href="contact.html">Contact</a>
                                            <a className="dropdown-item" href="events.html">Events</a>
                                            <a className="dropdown-item" href="event-details.html">Event Details</a>
                                            <a className="dropdown-item" href="faq.html">FAQ</a>
                                            <a className="dropdown-item" href="login.html">Login</a>
                                            <a className="dropdown-item" href="register.html">Register</a>
                                        </div>
                                    </li>
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
