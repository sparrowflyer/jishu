import React from 'react';
import { withAlert } from 'react-alert';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Header } from '../../components/common/Header.js';
import { BreadCrumb } from '../../components/common/BreadCrumb.js';
import { Footer } from '../../components/common/Footer.js';
import { StandardInnerArticle, getMonth, getDate } from '../../components/ControlInBlog.js';
import { postJson } from '../../utils/server.js';

const marginRight10 = {
    marginRight: '10px'
};

class SingleBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: this.props.location.state,
            releaseCourses: [],
            isMyBlog: false,
            isGood: false,
            isBad: false,
            isCollected: false
        };
        this.setGood = this.setGood.bind(this);
        this.setBad = this.setBad.bind(this);
        this.setCollect = this.setCollect.bind(this);
        this.report = this.report.bind(this);
    }

    setGood() {
        postJson(`/tieba/clickGood?aid=${this.state.blog.aid}`)
            .then((data) => {
                if (data.status === 'success') {
                    this.props.alert.success('点赞成功!');
                } else {
                    this.props.alert.error(data.errorMsg || data.error);
                }
            }).catch((error) => {
                this.props.alert.success('点赞失败!');
            });
    }

    setBad() {
        postJson(`/tieba/clickBad?aid=${this.state.blog.aid}`)
            .then((data) => {
                if (data.status === 'success') {
                    this.props.alert.success('点踩成功!');
                } else {
                    this.props.alert.error(data.errorMsg || data.error);
                }
            }).catch((error) => {
                this.props.alert.success('点踩失败!');
            });
    }

    setCollect() {
        postJson(`/tieba/topArticle?aid=${this.state.blog.aid}`)
            .then((data) => {
                if (data.status === 'success') {
                    this.props.alert.success('收藏成功!');
                } else {
                    this.props.alert.error(data.errorMsg || data.error);
                }
            }).catch((error) => {
                this.props.alert.success('收藏失败!');
            });
    }

    report() {
        postJson(`/tieba/clickCollection?aid=${this.state.blog.aid}`)
            .then((data) => {
                if (data.status === 'success') {
                    this.props.alert.success('举报成功!');
                } else {
                    this.props.alert.error(data.errorMsg || data.error);
                }
            }).catch((error) => {
                this.props.alert.success('举报失败!');
            });
    }

    componentDidMount() {
        let loginUserId;
        try {
            loginUserId = JSON.parse(sessionStorage.getItem('jsUser')).id;
        } catch (e) {
        }
        this.setState((state) => {
           return {
               ...state,
               isMyBlog: loginUserId === this.state.blog.uid
           }
        });
        postJson('/getCreatedCourses', {
            id: this.state.blog.uid
        }).then((data) => {
            if (data.status === 'success') {
                this.setState((state) => {
                    return {
                        ...state,
                        releaseCourses: data.data || []
                    }
                })
            }
        });
    }

    render() {
        return (
            <div>
                <Header activeTitle="blog" />
                <BreadCrumb title="学生贴吧" />
                <section className="blog-posts">
                    <div className="section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <article className={`post type-post ${this.state.blog.imagesrc ? 'format-standard' : 'format-text-only'}`}>
                                        {
                                            this.state.blog.imagesrc ? <StandardInnerArticle imgUrl={'http://' + this.state.blog.imagesrc}/> : null
                                        }
                                        <div className="entry-content media">
                                            <div className="post-date">
                                                <span className="date">{getDate(this.state.blog.createDate)}</span> {getMonth(this.state.blog.createDate)}
                                            </div>
                                            <div className="content-details media-body">
                                                <h3 className="entry-title">
                                                    <Link to={`/blog/${this.state.blog.aid}`}>{this.state.blog.title}</Link>
                                                </h3>
                                                <div className="entry-meta clearfix">
                                                    <span className="author float-left">
                                                        <i className="icon-user"></i>
                                                        <Link to={`/user/${this.state.blog.user.id}`}>{this.state.blog.user.nickName}</Link>
                                                    </span>
                                                    {
                                                        this.state.blog.articleType ?
                                                            <span className="tag float-left">
                                                                <i className="icon-tag"></i>
                                                                <a>{this.state.blog.articleType.value}</a>
                                                            </span> : null
                                                    }
                                                    {
                                                        this.state.isMyBlog ?
                                                            <span className="author float-right" style={{marginRight: '10px'}}>
                                                                <i className="fas fa-edit"></i>
                                                                <Link to={{pathname: `/addBlog`, state: this.state.blog}}>编辑</Link>
                                                            </span> : null
                                                    }
                                                </div>
                                                <div style={{marginTop: '20px'}} dangerouslySetInnerHTML={{__html: this.state.blog.content}}></div>
                                                <div className="content-bottom">
                                                    <div className="tags float-left">
                                                        <a onClick={ this.setGood }><i></i>点赞</a>
                                                        <a onClick={ this.setBad }><i></i>点踩</a>
                                                        <a onClick={ this.setCollect }><i></i>收藏</a>
                                                    </div>
                                                    <div className="share dropdown float-right">
                                                        <button className="dropdown-toggle" type="button" onClick={ this.report }>
                                                            举报 <i></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <div className="comments">
                                        <h2 className="title">Comments</h2>
                                        <ol className="comment-list">
                                            <li className="comment parent">
                                                <div className="comment-body media">
                                                    <img className="rounded-circle author-avatar" src="../images/comments/1.jpg" alt="Comment Authors" />
                                                    <div className="comment-content media-body">
                                                        <span className="time">20-02-2016 at 21:37</span>
                                                        <span className="name"><a href="#">Anthony Doe</a></span>
                                                        <p className="description">
                                                            Gregor had wanted to give a full answer and explain everything but in the circumstances contented himself with saying- I’m getting up now.
                                                        </p>
                                                        <a href="#" className="btn reply-btn">Reply</a>
                                                    </div>
                                                </div>
                                                <ol className="children">
                                                    <li className="comment">
                                                        <div className="comment-body media">
                                                            <img className="rounded-circle author-avatar" src="../images/comments/2.jpg" alt="Comment Authors" />
                                                            <div className="comment-content media-body">
                                                                <span className="time">20-02-2016 at 21:37</span>
                                                                <span className="name"><a href="#">Anthony Doe</a></span>
                                                                <p className="description">
                                                                    The change in Gregor’s voice probably could not be noticed outside through the wooden door, as his mother was satisfied with this explanation and shuffled away
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li className="comment parent">
                                                <div className="comment-body media">
                                                    <img className="rounded-circle author-avatar" src="../images/comments/4.jpg" alt="Comment Authors" />
                                                    <div className="comment-content media-body">
                                                        <span className="time">20-02-2016 at 21:37</span>
                                                        <span className="name"><a href="#">Anthony Doe</a></span>
                                                        <p className="description">
                                                            And yet, once in a while, he renders a head with such character, or a movement with such ease that we wonder whether he had not in him, after all, the making of a real artist.
                                                        </p>
                                                        <a href="#" className="btn reply-btn">Reply</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                        <div className="respond">
                                            <h2 className="title">Add Your Comment</h2>
                                            <form action="#" method="post" className="comment-form">
                                                <textarea id="comment" className="form-control" name="comment" placeholder="Comment" rows="8" required></textarea>
                                                <input className="btn" type="submit" value="Submit Comment" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <aside className="sidebar">
                                        <div className="widget widget_popular_post">
                                            <h2 className="widget-title">Related Blog</h2>
                                            <div className="widget-details">
                                                {
                                                    this.state.releaseCourses.map((course) => {
                                                        return (
                                                            <article className="post type-post media" key={course.id}>
                                                                <div className="entry-thumbnail">
                                                                    <img src={'http://' + course.imagesrc} alt="post"/>
                                                                </div>
                                                                <div className="entry-content media-body">
                                                                    <h3 className="entry-title"><a>{course.title}</a></h3>
                                                                    <div className="entry-meta">
                                                                    <span className="time">
                                                                        <i className="icons icon-calendar"></i>{course.createdTime}
                                                                    </span>
                                                                    </div>
                                                                </div>
                                                            </article>
                                                        );
                                                    })
                                                }
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
}

const SingleBlogWithRouter = withRouter(withAlert(SingleBlog));
export default SingleBlogWithRouter;