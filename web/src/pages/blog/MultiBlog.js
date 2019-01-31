import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'rc-pagination';
import { postJson, getArticles, getArticleType } from '../../utils/server.js';
import { Header } from '../../components/common/Header.js';
import { BreadCrumb } from '../../components/common/BreadCrumb.js';
import { Footer } from '../../components/common/Footer.js';
import { StandardInnerArticle, getMonth, getDate } from '../../components/ControlInBlog.js';

export class MultiBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            total: 0,
            articleType: 0,
            articles: [],
            articleTypes: []
        };
        this.changePage = this.changePage.bind(this);
        this.getArticleList = this.getArticleList.bind(this);
    }

    changeArticleType(articleType) {
        this.setState((state) => {
            return {
                ...state,
                articleType
            };
        });
        this.getArticleList(articleType, this.state.currentPage);
    }

    changePage(page) {
        this.setState((state) => {
           return {
               ...state,
               currentPage: page
           }
        });
        this.getArticleList(this.state.articleType, page);
    }

    getArticleList(articleType, currentPage) {
        getArticles(articleType, currentPage)
            .then((data) => {
                if (data.status === 'success') {
                    this.setState((state) => {
                        return {
                            ...state,
                            articles: data.data.list || [],
                            total: data.data.total
                        }
                    });
                }
            });
    }

    componentDidMount() {
        this.getArticleList(this.state.articleType, this.state.currentPage);
        getArticleType()
            .then((data) => {
                if (data.status === 'success') {
                    this.setState((state) => {
                        return {
                            ...state,
                            articleTypes: data.data || []
                        }
                    });
                }
            });
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
                                {
                                    this.state.articles.map((article) => {
                                        var headImage="http://"+article.user.headImage;
                                        var imgUrl='http://' + article.imagesrc;
                                        console.log(imgUrl)
                                        return (
                                            <article key={article.aid} className={`post type-post ${article.imagesrc ? 'format-standard' : 'format-text-only'}`}>

                                                {
                                                article.imagesrc ? <StandardInnerArticle imgUrl={'http://' + article.imagesrc}/> : null
                                                }

                                                <div className="entry-content media">
                                                    <div className="post-date">
                                                        <span className="date">{getMonth(article.createDate)}-{getDate(article.createDate)}</span>
                                                    </div>
                                                    <div className="content-details media-body">
                                                        <h3 className="entry-title">
                                                            <Link to={`/blog/${article.aid}`}>{article.title}</Link>
                                                        </h3>
                                                        <div className="entry-meta">
                                                            <span className="author"><img width="5%" className="rounded-circle mr-3" src={headImage}  alt="Avatar Image" /><Link to={`/user/${article.user.id}`}>作者:{article.user.nickName}</Link></span>
                                                            {
                                                                article.articleType ? <span className="tag"><i className="icon-tag"></i> <a>类型:{article.articleType.value}</a></span> : null
                                                            }
                                                        </div>
                                                        <div className="entry-meta">
                                                            <span className="comments"><i className="far fa-heart"></i> <a>赞:{article.goodCount}</a></span>
                                                            <span className="comments"><i className="far fa-save"></i> <a>收藏:{article.collectCount}</a></span>
                                                            <span className="comments"><i className="icon-bubbles"></i> <a>评论:{article.commentCount}</a></span>
                                                        </div>
                                                        <Link to={`/blog/${article.aid}`} className="btn btn-lg">阅读全文</Link>
                                                    </div>
                                                </div>
                                            </article>
                                        );
                                    })
                                }
                                {
                                    this.state.articles && this.state.articles.length > 0 ?
                                        <Pagination onChange={this.changePage} defaultPageSize={8}
                                                    current={this.state.currentPage} total={this.state.total}/>
                                        : <p>暂无博客信息</p>
                                }
                            </div>
                            <div className="col-md-4">
                                <aside className="sidebar">
                                    {
                                        sessionStorage.getItem('jsUser') ? <Link className="btn btn-lg enroll-btn" style={{width: "100%", marginBottom: "20px"}} to="/addBlog">Add Article</Link> : null
                                    }
                                    <div className="category-list">
                                        <ul>
                                            <li className={`${this.state.articleType ? "" : "active"}`} onClick={this.changeArticleType.bind(this, 0)}><a>所有类型</a></li>
                                            {
                                                this.state.articleTypes.map((articleType) => {
                                                    return (
                                                        <li key={articleType.id} className={`${this.state.articleType === articleType.id ? "active" : ""}`}
                                                            onClick={this.changeArticleType.bind(this, articleType.id)}><a>{articleType.value}</a></li>
                                                    );
                                                })
                                            }
                                        </ul>
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
