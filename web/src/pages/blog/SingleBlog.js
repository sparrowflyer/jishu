import React from 'react';
import { Blog, InnerArticle } from '../../components/ControlInBlog.js';

export class SingleBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: this.props.location.state
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <Blog>
                <div className="col-md-8">
                    <InnerArticle {...this.state.course}>
                        <div className="content-bottom">
                            <div className="tags float-left">
                                <a href="">HTML5</a>
                                <a href="">University</a>
                                <a href="">Courses</a>
                            </div>
                            <div className="share dropdown float-right">
                                <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    share <i className="fa fa-share-alt"></i>
                                </button>
                                <div className="dropdown-menu">
                                    <a href="" className="twitter"><i className="icons icon-social-twitter"></i></a>
                                    <a href="" className="facebook"><i className="icons icon-social-facebook"></i></a>
                                    <a href="" className="pinterest"><i className="icons icon-social-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </InnerArticle>

                    <div className="post-navigation">
                        <div className="row">
                            <div className="col-md-6">
                                <article className="post type-post">
                                    <div className="entry-thumbnail"><img src="../images/posts/12.jpg" alt="Thumbnail" /></div>
                                    <div className="entry-content">
                                        <h3 className="entry-title"><a href="single.html">WordPress Video Themes 2018 - Make Video Website Easily</a></h3>
                                        <div className="entry-meta">
                                            <span className="comment"><i className="icons icon-bubbles"></i> 13 comments</span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-md-6">
                                <article className="post type-post">
                                    <div className="entry-thumbnail"><img src="../images/posts/13.jpg" alt="Thumbnail" /></div>
                                    <div className="entry-content">
                                        <h3 className="entry-title"><a href="single.html">30+ Free WordPress Themes 2018 - Simple & Fast Loading</a></h3>
                                        <div className="entry-meta">
                                            <span className="comment"><i className="icons icon-bubbles"></i> 13 comments</span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>

                    <div className="author-bio">
                        <h3 className="title">About the author</h3>
                        <div className="author-contents media">
                            <div className="author-avatar float-left"><img className="radius" src="../images/au.jpg" alt="Avatar" /></div>
                            <div className="author-details media-body">
                                <h3 className="name"><a href="#">Julia Adams</a></h3>
                                <p>
                                    There was a painful and uncontrollable squeaking mixed in with it, the words could be made out at first but then there was a sort of echo which made them unclear, leaving the hearer unsure whether he had heard properly or not.
                                </p>
                                <div className="author-social">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="comments">
                        <h2 className="title">25 Comments</h2>
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
                                                <a href="#" className="btn reply-btn">Reply</a>
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
                                <input className="form-control" name="author" type="text" placeholder="Name *" required />
                                <input className="form-control" name="email" type="email" placeholder="Email *" required />
                                <input className="form-control" name="url" type="url" placeholder="URL" />
                                <textarea id="comment" className="form-control" name="comment" placeholder="Comment" rows="8" required></textarea>
                                <input className="btn" type="submit" value="Submit Comment" />
                            </form>
                        </div>

                    </div>
                </div>
            </Blog>
        );
    }
}