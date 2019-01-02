import React from 'react';
import { Blog, InnerArticle } from '../../components/ControlInBlog.js';
import { Link } from 'react-router-dom';

const articles = [1, 2, 3];
const isSelected = true;

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

                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Back">
                                    <i className="fa fa-angle-left"></i>
                                </a>
                            </li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className={`page-item ${isSelected ? 'active' : ''}`}><a className="page-link" href="#">...</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>

                </div>
            </Blog>
        );
    }
}
