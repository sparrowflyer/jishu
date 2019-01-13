import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'rc-pagination';
import { postJson, getArticles } from '../../utils/server.js';
import { Blog, InnerArticle } from '../../components/ControlInBlog.js';

export class MultiBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            total: 0,
            articles: []
        };
        this.changePage = this.changePage.bind(this);
        this.getArticleList = this.getArticleList.bind(this);
    }

    changePage(page) {
        this.setState((state) => {
           return {
               ...state,
               currentPage: page
           }
        });
        this.getArticleList(page);
    }

    getArticleList(currentPage) {
        getArticles(currentPage)
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
        this.getArticleList(this.state.currentPage);
    }

    render() {
        return (
            <Blog>
                <div className="col-md-8">
                    {
                        this.state.articles.map((article) => {
                            return (
                                <InnerArticle key={article.aid} {...article}>
                                    <Link to={{pathname: `/blog/${article.aid}`, state: article}} className="btn btn-lg">Read more</Link>
                                </InnerArticle>
                            );
                        })
                    }
                    <Pagination onChange={this.changePage} defaultPageSize={8}
                                current={this.state.currentPage} total={this.state.total}/>
                </div>
            </Blog>
        );
    }
}
