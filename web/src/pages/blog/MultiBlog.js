import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'rc-pagination';
import { Blog, InnerArticle } from '../../components/ControlInBlog.js';

const articles = [1, 2, 3];

export class MultiBlog extends React.Component {
    render() {
        return (
            <Blog>
                <div className="col-md-8">
                    {
                        articles.map((article, index) => {
                            return (
                                <InnerArticle key={index}>
                                    <Link to={`/blog/${index}`} className="btn btn-lg">Read more</Link>
                                </InnerArticle>
                            );
                        })
                    }
                </div>
            </Blog>
        );
    }
}
