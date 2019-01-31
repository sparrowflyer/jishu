import React from 'react';
import { withAlert } from 'react-alert';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Header } from '../../components/common/Header.js';
import { BreadCrumb } from '../../components/common/BreadCrumb.js';
import { Footer } from '../../components/common/Footer.js';
import { StandardInnerArticleSingle, getMonth, getDate } from '../../components/ControlInBlog.js';
import { postJson, getArticleDetail } from '../../utils/server.js';
const fanStyle = {
    display: "block",
    color: "#6d8591",
    fontSize: "16px",
    lineHeight: "26px",
    margin: "0.5em 0"
};
const marginRight10 = {
    marginRight: '10px'
};

function ChildBlogContent(floors) {
    return (
        <ol className="children">
            {
                floors.map((floor) => {
                    return (
                        <li className="comment" key={floor.fid}>
                            <div className="comment-body media">
                                <img className="rounded-circle author-avatar" style={{maxWidth: '32px'}} src={'http://' + floor.user.headImage} alt="Comment Authors" />
                                <div className="comment-content media-body">
                                    <span className="time">{floor.createDate}</span>
                                    <span className="name"><Link to={`/user/${floor.user.id}`}>{floor.user.nickName}</Link></span>
                                    <p className="description">{floor.content}</p>
                                </div>
                            </div>
                        </li>
                    );
                })
            }
        </ol>
    );
}

function ChildBlog({floors}) {
    let res = null;
    if (Array.isArray(floors) && floors.length > 0) {
        res = ChildBlogContent(floors);
    }
    return res;
}

let floorComment = [];

class SingleBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: this.props.location.state,
            addedComment: '',
            comments: [],
            releaseCourses: [],
            releasePosts:[],
            isMyBlog: false,
            isGood: false,
            isBad: false,
            isCollected: false
        };
        this.getGoodOrNot = this.getGoodOrNot.bind(this);
        this.getBadOrNot = this.getBadOrNot.bind(this);
        this.getCollectedOrNot = this.getCollectedOrNot.bind(this);
        this.setGood = this.setGood.bind(this);
        this.setBad = this.setBad.bind(this);
        this.setCollect = this.setCollect.bind(this);
        this.report = this.report.bind(this);
        this.getArticleDetail = this.getArticleDetail.bind(this);
        this.addComment = this.addComment.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleReply = this.handleReply.bind(this);
    }

    setGood() {
        postJson(`/tieba/clickGood?aid=${this.state.blog.aid}`)
            .then((data) => {
                if (data.status === 'success') {
                    this.getGoodOrNot();
                    this.getBadOrNot();
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
                    this.getGoodOrNot();
                    this.getBadOrNot();
                } else {
                    this.props.alert.error(data.errorMsg || data.error);
                }
            }).catch((error) => {
            this.props.alert.success('点踩失败!');
        });
    }

    setCollect() {
        postJson(`/tieba/clickCollection?aid=${this.state.blog.aid}`)
            .then((data) => {
                if (data.status === 'success') {
                    this.getCollectedOrNot();
                } else {
                    this.props.alert.error(data.errorMsg || data.error);
                }
            }).catch((error) => {
            this.props.alert.success('收藏失败!');
        });
    }

    report() {
        postJson(`/tieba/reportArticle?aid=${this.state.blog.aid}`)
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

    getArticleDetail() {
        if (sessionStorage.getItem('jsUser')) {
            getArticleDetail(this.state.blog.aid)
                .then((data) => {
                    if (data.status === 'success') {
                        this.setState((state) => {
                            return {
                                ...state,
                                comments: data.data.comments
                            }
                        }, () => {
                            floorComment = this.state.comments;
                        });
                    }
                });
        }
    }

    addComment() {
        event.preventDefault();
        postJson('/tieba/addComment', {
            aid: this.state.blog.aid,
            content: this.state.addedComment[0]
        }).then((data) => {
            if (data.status === 'success') {
                this.getArticleDetail();
                this.props.alert.success('添加评价成功!');
            } else {
                this.props.alert.error(data.errorMsg || data.error);
            }
        }).catch((error) => {
            this.props.alert.error('添加评论失败!');
        });
    }

    addFloorComment(cid, index) {
        if (!floorComment[index]) {
            this.props.alert.error('异常: 回复内容不能为空。');
            return ;
        }
        if (!floorComment[index].replyContent) {
            this.props.alert.error('回复内容不能为空!');
            return ;
        }
        event.preventDefault();
        postJson('/tieba/addFloorComment', {
            cid: cid,
            content: floorComment[index].replyContent
        }).then((data) => {
            if (data.status === 'success') {
                this.getArticleDetail();
                this.props.alert.success('添加评价成功!');
            } else {
                this.props.alert.error(data.errorMsg || data.error);
            }
        }).catch((error) => {
            this.props.alert.error('评论失败!');
        });
    }

    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState((state) => {
            return {
                ...state,
                [name]: [value]
            };
        });
    }

    handleReply(event, index) {
        floorComment[index].replyContent = event.target.value;
    }

    getGoodOrNot () {
        postJson(`/tieba/isClickedGood?aid=${this.state.blog.aid}`)
            .then((data) => {
                if (data.status === 'success') {
                    this.setState((state) => {
                        return {
                            ...state,
                            isGood: data.data
                        };
                    });
                }
            });
    }

    getBadOrNot () {
        postJson(`/tieba/isClickedBad?aid=${this.state.blog.aid}`)
            .then((data) => {
                if (data.status === 'success') {
                    this.setState((state) => {
                        return {
                            ...state,
                            isBad: data.data
                        };
                    });
                }
            });
    }

    getCollectedOrNot () {
        postJson(`/tieba/isClickedCollection?aid=${this.state.blog.aid}`)
            .then((data) => {
                if (data.status === 'success') {
                    this.setState((state) => {
                        return {
                            ...state,
                            isCollected: data.data
                        };
                    });
                }
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
        postJson('/userAllArticles', {
            id: this.state.blog.uid
        }).then((data) => {
            if (data.status === 'success') {

                this.setState((state) => {
                    return {
                        ...state,

                        releasePosts: data.data || []
                    }
                })
            }
        });
        this.getArticleDetail();
        this.getGoodOrNot();
        this.getBadOrNot();
        this.getCollectedOrNot();
    }



    render() {
        return (
            <div>
                <Header activeTitle="blog" />
                <BreadCrumb title="学生博客" />
                <section className="blog-posts">
                    <div className="section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <article className={`post type-post ${this.state.blog.imagesrc ? 'format-standard' : 'format-text-only'}`}>
                                        {
                                            this.state.blog.imagesrc ? <StandardInnerArticleSingle imgUrl={'http://' + this.state.blog.imagesrc}/> : null
                                        }
                                        <div className="entry-content media">
                                            <div className="post-date">
                                                <span className="date">{getMonth(this.state.blog.createDate)}-{getDate(this.state.blog.createDate)}</span>
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

                                                        {
                                                            this.state.isGood ? <a id="good"><i></i>已赞</a> : <a id="default" onClick={ this.setGood }><i></i>点赞</a>
                                                        }
                                                        {
                                                            this.state.isBad ? <a id="bad"><i></i>已踩</a> : <a id="default" onClick={ this.setBad }><i></i>点踩</a>
                                                        }
                                                        {
                                                            this.state.isCollected ? <a id="good"><i></i>已收藏</a> : <a id="default" onClick={ this.setCollect }><i></i>收藏</a>
                                                        }
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
                                    {
                                        sessionStorage.getItem('jsUser') ?
                                            <div className="comments">
                                                <h2 className="title">跟帖</h2>
                                                <ol className="comment-list">
                                                    {
                                                        this.state.comments.map((comment, index) => {
                                                            return (
                                                                <li className="comment parent" key={comment.cid}>
                                                                    <div className="comment-body media" style={{marginBottom: '1.5em'}}>
                                                                        <img className="rounded-circle author-avatar" src={'http://' + comment.user.headImage} alt="Comment Authors" />
                                                                        <div className="comment-content media-body">
                                                                            <span className="time">{comment.createDate}</span>
                                                                            <span className="name"><Link to={`/user/${comment.user.id}`}>{comment.user.nickName}</Link></span>
                                                                            <p className="description">{comment.content}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="respond" style={{marginTop: '0'}}>
                                                                        {/*<h6 className="title">reply {comment.user.nickName}</h6>*/}
                                                                        <form method="post" className="comment-form" style={{marginTop: '1em'}}>
                                                                        <textarea className="form-control" placeholder="Comment" rows="3" required
                                                                                  onChange={e => this.handleReply(e, index)}></textarea>
                                                                            <input className="btn reply-btn" type="submit" value="回复" onClick={this.addFloorComment.bind(this, comment.cid, index)} />
                                                                        </form>
                                                                    </div>
                                                                    <ChildBlog floors={comment.floors} />
                                                                </li>
                                                            );
                                                        })
                                                    }
                                                </ol>
                                                <div className="respond">
                                                    <h2 className="title">添加你的观点</h2>
                                                    <form method="post" className="comment-form">
                                                        <textarea id="addedComment" className="form-control" name="addedComment" placeholder="Comment"
                                                                  rows="8" required onChange={ this.handleInputChange } value={ this.state.addedComment }></textarea>
                                                        <input className="btn" type="submit" value="提交观点" onClick={this.addComment} />
                                                    </form>
                                                </div>
                                            </div> : <Link to='/login'>登录查看评价</Link>
                                    }
                                </div>
                                <div className="col-md-4">
                                    <aside className="sidebar">
                                        <div className="widget widget_popular_post">
                                            <h2 className="widget-title">可能感兴趣博客</h2>
                                            <div className="widget-details">
                                                {
                                                    this.state.releasePosts.map((post) => {
                                                        return (


                                                            <article className="post type-post media" key={post.aid}>
                                                                <div className="entry-thumbnail">
                                                                    <img src={'http://' + post.imagesrc} alt="post"/>
                                                                </div>
                                                                <div className="entry-content media-body">
                                                                    <h3 className="entry-title"><Link to={`/blog/${post.aid}`}><a>{post.title}</a></Link></h3>
                                                                    <div className="entry-meta">

                                                                        {/*<span >课程价格：{comment.price}</span>*/}
                                                                        <span className="time">
                                                                          <Link style={fanStyle} key={post.user.id} to={`/user/${post.user.id}`}> <img width="10%" className="rounded-circle mr-3" src={`http://${post.user.headImage}`}  alt="Avatar Image" />{post.user.nickName}</Link>博客创建时间：{post.createDate}
                                                                    </span>



                                                                    </div>
                                                                </div>
                                                            </article>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="widget widget_popular_post">
                                            <h2 className="widget-title">可能感兴趣课程</h2>
                                            <div className="widget-details">
                                                {

                                                    this.state.releaseCourses.map((course) => {

                                                        return (

                                                            <article className="post type-post media" key={course.id}>
                                                                <div className="entry-thumbnail">
                                                                    <img src={'http://' + course.coverImage} alt="post"/>
                                                                </div>
                                                                <div className="entry-content media-body">
                                                                    <h3 className="entry-title"><Link to={`/course/${course.id}`}>{course.title}</Link></h3>
                                                                    <div className="entry-meta">

                                                                    {/*<span >课程价格：{comment.price}</span>*/}
                                                                        <span className="time">
                                                                        课程价格：{course.price}元<br />

                                                                    </span>

                                                                    <span className="time">

                                                                        开课时间：{course.courseStartTime}
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