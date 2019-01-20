import React from 'react';

export function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-top light-black">
                <div className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="widget widget_about_us">
                                    <img className="footer-logo" src="/images/logo2.png" alt="Site Logo" />
                                        <div className="widget-details">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            </p>
                                            <ul>
                                                <li> <i className="fa fa-phone-square"></i> 088 12345 67890</li>
                                                <li> <i className="fa fa-envelope-square"></i><a href="#"> info@courseware.com</a></li>
                                            </ul>
                                            <div className="widget-social text-center">
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-google-plus-square"></i></a>
                                                <a href="#"><i className="fab fa-youtube"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget_nav_menu">
                                        <h4>Quick Links</h4>
                                        <div className="widget-details">
                                            <ul className="menu">
                                                <li className="menu-item"><a href="#"><i className="fa fa-angle-double-right"></i> Courses</a></li>
                                                <li className="menu-item"><a href="#"><i className="fa fa-angle-double-right"></i> Events</a></li>
                                                <li className="menu-item"><a href="#"><i className="fa fa-angle-double-right"></i> About Us</a></li>
                                                <li className="menu-item"><a href="#"><i className="fa fa-angle-double-right"></i> Gallery</a></li>
                                                <li className="menu-item"><a href="#"><i className="fa fa-angle-double-right"></i> Become a Teacher</a></li>
                                                <li className="menu-item"><a href="#"><i className="fa fa-angle-double-right"></i> Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget_recnt_news">
                                        <h4>News</h4>
                                        <div className="widget-details">
                                            <article className="post type-post media">
                                                <div className="entry-thumbnail float-left"><img src="/images/footer/1.jpg" alt="Entry Thumbnail" /></div>
                                                <div className="entry-content media-body">
                                                    <h3 className="entry-title"><a href="#">Guide to WordPress Custom Post Type</a></h3>
                                                    <div className="entry-meta"><span><i className="icon-bubble"></i> 23 Comments</span></div>
                                                </div>
                                            </article>
                                            <article className="post type-post media">
                                                <div className="entry-thumbnail float-left"><img src="/images/footer/2.jpg" alt="Entry Thumbnail" /></div>
                                                <div className="entry-content media-body">
                                                    <h3 className="entry-title"><a href="#">SEO friendly WordPress and Squarespace</a></h3>
                                                    <div className="entry-meta"><span><i className="icon-bubble"></i> 23 Comments</span></div>
                                                </div>
                                            </article>
                                            <article className="post type-post media">
                                                <div className="entry-thumbnail float-left"><img src="/images/footer/3.jpg" alt="Entry Thumbnail" /></div>
                                                <div className="entry-content media-body">
                                                    <h3 className="entry-title"><a href="#">David Braun: Chief Monster of Web Design</a></h3>
                                                    <div className="entry-meta"><span><i className="icon-bubble"></i> 23 Comments</span></div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget_nav_menu">
                                        <h4>Support</h4>
                                        <div className="widget-details">
                                            <ul className="menu">
                                                <li className="menu-item"><a href="#"><i className="fa fa-angle-double-right"></i> FAQ</a></li>
                                                <li className="menu-item"><a href="#"><i className="fa fa-angle-double-right"></i> Documentation</a></li>
                                                <li className="menu-item"><a href="#"><i className="fa fa-angle-double-right"></i> Forums</a></li>
                                                <li className="menu-item"><a href="#"><i className="fa fa-angle-double-right"></i> Career</a></li>
                                                <li className="menu-item"><a href="#"><i className="fa fa-angle-double-right"></i> Community</a></li>
                                                <li className="menu-item"><a href="#"><i className="fa fa-angle-double-right"></i> Management</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom black-bg">
                    <div className="section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="copy-right float-left">
                                        <span> Copyright © 2018 <a href="http://www.bootstrapmb.com" target="_blank" rel="nofollow">Courseware</a>, All rights reservs  </span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <ul className="menu float-right">
                                        <li className="menu-item"><a href="#"> Privacy</a></li>
                                        <li className="menu-item"><a href="#"> Terms</a></li>
                                        <li className="menu-item"><a href="#"> Sitemap</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    );
}
