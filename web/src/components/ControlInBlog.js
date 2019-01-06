import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './common/Header.js';
import { BreadCrumb } from './common/BreadCrumb.js';
import { Footer } from './common/Footer.js';

//className: format-slider
function SliderInnerArticle({id, imgs}) {
    return (
        <div className="entry-thumbnail radius">
            <div id={`post-slider-${id}`} className="post-slider-02 carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    {
                        imgs.forEach((imgUrl, index) => {
                            return (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <img className="radius" src={imgUrl} alt="Entry Thumbnail" />
                                </div>
                            );
                        })
                    }
                </div>
                <a className="carousel-control-prev" href={`#post-slider-${id}`} role="button" data-slide="prev">
                    <span className="fa fa-angle-left" aria-hidden="true"></span>
                </a>
                <a className="carousel-control-next" href={`#post-slider-${id}`} role="button" data-slide="next">
                    <span className="fa fa-angle-right" aria-hidden="true"></span>
                </a>
            </div>
        </div>
    );
}

//format-audio
function AudioInnerArticle({url}) {
    return (
        <div className="entry-thumbnail radius">
            <iframe src={url}></iframe>
        </div>
    );
}

//format-link
function LinkInnerArticle({children, url = ''}) {
    return (
        <div className="entry-thumbnail radius">
            <Link to={url}>
                {children}
            </Link>
        </div>
    );
}

//format-video
function VideoInnerArticle({imgUrl, videoUrl}) {
    return (
        <div className="entry-thumbnail radius">
            <img src={imgUrl} alt="Post Thumbnail" />
            <a href={videoUrl} className="popup-video"><i className="fa fa-play-circle-o"></i></a>
        </div>
    );
}

//format-standard
function StandardInnerArticle({imgUrl}) {
    return (
        <div className="entry-thumbnail radius">
            <img src={imgUrl} alt="Post Thumbnail" />
        </div>
    );
}

const test = {
    imgUrl: "../images/posts/6.jpg",
    time: {
        date: '12',
        month: 'July'
    },
    blog: {
        id: 1,
        title: 'Blog Title',
        author: 'Author',
        commentNum: 13,
        content: '<span>Hello World!</span>'
    }
};

export class InnerArticle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <article className={`post type-post ${test.imgUrl ? 'format-standard' : 'format-text-only'}`}>
                {
                    test.imgUrl ? <StandardInnerArticle imgUrl={test.imgUrl}/> : null
                }
                <div className="entry-content media">
                    <div className="post-date">
                        <span className="date">{test.time.date}</span> {test.time.month}
                    </div>
                    <div className="content-details media-body">
                        <h3 className="entry-title">
                            <Link to={`/blog/${test.blog.id}`}>{test.blog.title}</Link>
                        </h3>
                        <div className="entry-meta">
                            <span className="author"><i className="icon-user"></i> <a href="">{test.blog.author}</a></span>
                            <span className="tag"><i className="icon-tag"></i> <a href="">News</a></span>
                            <span className="comments"><i className="icon-bubbles"></i> <a href="">{test.blog.commentNum} comments</a></span>
                        </div>
                        <div dangerouslySetInnerHTML={{__html: test.blog.content}}></div>
                        { this.props.children }
                    </div>
                </div>
            </article>
        );
    }
}

export function Blog({children}) {
    return (
        <div>
            <Header activeTitle="blog" />
            <BreadCrumb title="学生贴吧" />
            <section className="blog-posts">
                <div className="section-padding">
                    <div className="container">
                        <div className="row">
                            { children }
                            <div className="col-md-4">
                                <aside className="sidebar">
                                    <div className="widget widget_search">
                                        <div className="widget-details">
                                            <form method="get" className="search-form" action="#">
                                                <input type="text" className="form-control" placeholder="Search ..." name="s" title="Search here" required />
                                                <input type="submit" className="form-control" />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="widget widget_categories">
                                        <h2 className="widget-title">Categories</h2>
                                        <div className="widget-details">
                                            <ul>
                                                <li><a href="#">News</a></li>
                                                <li><a href="#">Photography</a></li>
                                                <li><a href="#">WordPress</a></li>
                                                <li><a href="#">Learning Press</a></li>
                                                <li><a href="#">HTML5</a></li>
                                                <li><a href="#">Blog</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget widget_popular_post">
                                        <h2 className="widget-title">Popular Posts</h2>
                                        <div className="widget-details">
                                            <article className="post type-post media">
                                                <div className="entry-thumbnail">
                                                    <img src="../images/widget/1.jpg" alt="post"/>
                                                </div>
                                                <div className="entry-content media-body">
                                                    <h3 className="entry-title"><a href="#">WordPress Theme Development Resources</a></h3>
                                                    <div className="entry-meta">
                                                        <span className="time">
                                                            <i className="icons icon-calendar"></i>28 July, 2018
                                                        </span>
                                                    </div>
                                                </div>
                                            </article>
                                            <article className="post type-post media">
                                                <div className="entry-thumbnail">
                                                    <img src="../images/widget/2.jpg" alt="post"/>
                                                </div>
                                                <div className="entry-content media-body">
                                                    <h3 className="entry-title"><a href="#">How To Tell If A Site Is WordPress Or Not</a></h3>
                                                    <div className="entry-meta">
                                                        <span className="time"><i className="icons icon-calendar"></i>28 July, 2018</span>
                                                    </div>
                                                </div>
                                            </article>
                                            <article className="post type-post media">
                                                <div className="entry-thumbnail">
                                                    <img src="../images/widget/3.jpg" alt="post"/>
                                                </div>
                                                <div className="entry-content media-body">
                                                    <h3 className="entry-title"><a href="#">WordPress Themes 2018 : Responsive and Creative Design</a></h3>
                                                    <div className="entry-meta">
                                                        <span className="time"><i className="icons icon-calendar"></i>28 July, 2018</span>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                    <div className="widget widget_tag_cloud">
                                        <h2 className="widget-title">Tags Cloud</h2>
                                        <div className="widget-details">
                                            <div className="tagcloud">
                                                <a href="#">Theme</a>
                                                <a href="#">Template</a>
                                                <a href="#">Learning Press</a>
                                                <a href="#">WordPress</a>
                                                <a href="#">News</a>
                                                <a href="#">Development</a>
                                                <a href="#">HTML5</a>
                                                <a href="#">University</a>
                                                <a href="#">Courses</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget widget_instagram">
                                        <h2 className="widget-title">Instagram</h2>
                                        <div className="widget-details">
                                            <ul>
                                                <li><a href="#"><img src="../images/insta/1.jpg" alt="flicker" /></a></li>
                                                <li><a href="#"><img src="../images/insta/2.jpg" alt="flicker" /></a></li>
                                                <li><a href="#"><img src="../images/insta/3.jpg" alt="flicker" /></a></li>
                                                <li><a href="#"><img src="../images/insta/4.jpg" alt="flicker" /></a></li>
                                                <li><a href="#"><img src="../images/insta/5.jpg" alt="flicker" /></a></li>
                                                <li><a href="#"><img src="../images/insta/6.jpg" alt="flicker" /></a></li>
                                                <li><a href="#"><img src="../images/insta/7.jpg" alt="flicker" /></a></li>
                                                <li><a href="#"><img src="../images/insta/8.jpg" alt="flicker" /></a></li>
                                                <li><a href="#"><img src="../images/insta/9.jpg" alt="flicker" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget widget_archive">
                                        <h2 className="widget-title">Archive</h2>
                                        <div className="widget-details">
                                            <ul>
                                                <li><a href="#">January 2018</a></li>
                                                <li><a href="#">February 2018</a></li>
                                                <li><a href="#">March 2018</a></li>
                                                <li><a href="#">April 2018</a></li>
                                                <li><a href="#">May 2018</a></li>
                                                <li><a href="#">June 2018</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

