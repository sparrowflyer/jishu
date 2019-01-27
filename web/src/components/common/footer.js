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
                                              我们希望通过叽叔让更多人了解到客观真实的海外情况，帮助出国意向人群制定科学合理的出行方案，让海外出行更安全、更轻松。                                            </p>
                                            <ul>
                                                <li> <i className="fa fa-phone-square"></i>+86 137 7713 3446</li>
                                                <li> <i className="fa fa-envelope-square"></i><a href="mailto:jishugo@unclejee.cn"> jishugo@unclejee.cn</a></li>
                                            </ul>
                                            <div className="widget-social text-center">
                                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                                <a href=""><i className="fab fa-twitter"></i></a>
                                                <a href=""><i className="fab fa-google-plus-square"></i></a>
                                                <a href=""><i className="fab fa-youtube"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                <div className="widget widget_recnt_news">
                                    <h4>叽叔大事件</h4>
                                    <div className="widget-details">
                                        <article className="post type-post media">
                                            <div className="entry-thumbnail float-left"><img src="/images/footer/1.jpg" alt="Entry Thumbnail" /></div>
                                            <div className="entry-content media-body">
                                                <h3 className="entry-title"><a >叽叔线官方论坛上线：海内外留学生互动平台，使得学生无缝对接</a></h3>
                                                <div className="entry-meta"><span><i className="icon-bubble"></i> 2019-03-01</span></div>
                                            </div>
                                        </article>
                                        <article className="post type-post media">
                                            <div className="entry-thumbnail float-left"><img src="/images/footer/2.jpg" alt="Entry Thumbnail" /></div>
                                            <div className="entry-content media-body">
                                                <h3 className="entry-title"><a >叽叔线下路演：学校包括浙江大学，河南工业大学，北京大学一系列学校</a></h3>
                                                <div className="entry-meta"><span><i className="icon-bubble"></i> 2018-9-7  2018-11-7</span></div>
                                            </div>
                                        </article>
                                        <article className="post type-post media">
                                            <div className="entry-thumbnail float-left"><img src="/images/footer/3.jpg" alt="Entry Thumbnail" /></div>
                                            <div className="entry-content media-body">
                                                <h3 className="entry-title"><a >叽叔团队成立：直击海外教育痛点</a></h3>
                                                <div className="entry-meta"><span><i className="icon-bubble"></i> 2018-6-7</span></div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget_nav_menu">
                                        <h4>产品介绍</h4>
                                        <div className="widget-details">
                                            <ul className="menu">
                                                <li className="menu-item"><a href="faq"><i className="fa fa-angle-double-right"></i> 平台介绍</a></li>
                                                <li className="menu-item"><a href="faq"><i className="fa fa-angle-double-right"></i> 疑惑解答</a></li>
                                                <li className="menu-item"><a href="faq"><i className="fa fa-angle-double-right"></i> 开课申请</a></li>
                                                <li className="menu-item"><a href="faq"><i className="fa fa-angle-double-right"></i> 博客规则</a></li>
                                                <li className="menu-item"><a href="faq"><i className="fa fa-angle-double-right"></i> 内容规则</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget_nav_menu">
                                        <h4>快速导航</h4>
                                        <div className="widget-details">
                                            <ul className="menu">
                                                <li className="menu-item"><a href="course"><i className="fa fa-angle-double-right"></i> 募集课程</a></li>
                                                <li className="menu-item"><a href="blog"><i className="fa fa-angle-double-right"></i> 最新博客</a></li>
                                                <li className="menu-item"><a href="about"><i className="fa fa-angle-double-right"></i> 关于我们</a></li>
                                                <li className="menu-item"><a href="contact"><i className="fa fa-angle-double-right"></i> 联系我们</a></li>
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
                                        <span> Copyright © 2018 <a href="http://www.unclejee.cn" target="_blank" rel="nofollow">Courseware</a>, All rights reservs  </span>
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
