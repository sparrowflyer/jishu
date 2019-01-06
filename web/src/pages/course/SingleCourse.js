import React from 'react';
import { Header } from '../../components/common/Header.js';
import { BreadCrumb } from '../../components/common/BreadCrumb.js';
import { Footer } from '../../components/common/Footer.js';

export class SingleCourse extends React.Component {
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
            <div>
                <Header activeTitle="course" />
                <BreadCrumb hasSearchBox="true" />
                <section className="courses">
                    <div className="section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <h2 className="course-title">{this.state.course.title}</h2>
                                    <div className="course-meta">
                                    <span className="meta-details">
                                        <img className="rounded-circle float-left" src="../images/avatar/2.png" alt="Avatar" />
                                        <span className="meta-id">Instructor</span>
                                        <a className="name" href="#">{this.state.course.authorName}</a>
                                    </span>
                                    <span className="meta-details">
                                        <span className="meta-id">Category</span>
                                        <span>{this.state.course.type}</span>
                                    </span>
                                    <span className="meta-details">
                                        <span className="meta-id">Reviews</span>
                                        <span className="rating">
                                            <input type="hidden" className="rating-tooltip-manual" data-filled="fas fa-star" data-empty="far fa-star" value="4.5" data-fractions="5"/>
                                            <span>(2,543 Ratings)</span>
                                        </span>
                                    </span>
                                    </div>
                                    <img className="radius" src={this.state.course.coverImage} alt="Course Image" />
                                    <div className="course-single-details">
                                        { this.state.course.detail }
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a className="nav-item nav-link active" id="nav-1" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
                                            <a className="nav-item nav-link" id="nav-2" data-toggle="tab" href="#curriculum" role="tab" aria-controls="curriculum" aria-selected="false">Curriculum</a>
                                            <a className="nav-item nav-link" id="nav-3" data-toggle="tab" href="#instructor" role="tab" aria-controls="instructor" aria-selected="false">Instructor</a>
                                            <a className="nav-item nav-link" id="nav-4" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
                                        </div>
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description">
                                                <h4 className="title">Course description</h4>
                                                <p>
                                                    <strong>
                                                        The office assistant wasthe boss’s man,spineless, and with no understanding. What about if he reported sick? But that would be extremely strained and suspicious as in fifteen years of service Gregor had never once yet been ill
                                                    </strong>
                                                </p>
                                                <p>
                                                    His boss would certainly come round with the doctor from the medical insurance company, accuse his parents of having a lazy son, and accept the doctor’s recommendation not to make any claim as the doctor believed that no-one was ever ill but that many were workshy. And what’s more, would he have been entirely wrong in this case? Gregor did in fact, apart from excessive sleepiness after sleeping for so long, feel completely well and even felt much hungrier than usual.
                                                </p>
                                                <p>
                                                    He was still hurriedly thinking all this through, unable to decide to get out of the bed, when the clock struck quarter to seven. There was a cautious knock at the door near his head. Gregor, somebody called – it was his mother – it’s quarter to seven. Didn’t you want to go somewhere? That gentle voice, Gregor was shocked when he heard his own voice answering, it could hardly be recognised as the voice he had had before
                                                </p>
                                            </div>
                                            <div className="tab-pane fade" id="curriculum" role="tabpanel" aria-labelledby="curriculum">
                                                <h4 className="title">Curriculum for this Course</h4>
                                                <div className="curriculum-details">
                                                    <div className="content-table">
                                                        <span className="title">Getting Started: Itroduction</span>
                                                        <ul className="content-list">
                                                            <li>
                                                                <span className="float-left"><a href="#"><i className="far fa-file"></i> Photoshop Interface - just the useful stuff!</a></span>
                                                                <span className="float-right">1.5MB</span>
                                                            </li>
                                                            <li>
                                                                <span className="float-left"><a href="#"><i className="fa fa-play-circle"></i> User interface explained</a></span>
                                                                <span className="float-right">8:31</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="content-table">
                                                        <span className="title">Paint Brush Tool</span>
                                                        <ul className="content-list">
                                                            <li>
                                                                <span className="float-left"><a href="#"><i className="far fa-file"></i> Photoshop Interface - just the useful stuff!</a></span>
                                                                <span className="float-right">1.5MB</span>
                                                            </li>
                                                            <li>
                                                                <span className="float-left"><a href="#"><i className="fa fa-play-circle"></i> User interface explained</a></span>
                                                                <span className="float-right">8:31</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="content-table">
                                                        <span className="title">Moving, Resizing & Zooming In</span>
                                                        <ul className="content-list">
                                                            <li>
                                                                <span className="float-left"><a href="#"><i className="far fa-file"></i> Photoshop Interface - just the useful stuff!</a></span>
                                                                <span className="float-right">1.5MB</span>
                                                            </li>
                                                            <li>
                                                                <span className="float-left"><a href="#"><i className="fa fa-play-circle"></i> User interface explained</a></span>
                                                                <span className="float-right">754kb</span>
                                                            </li>
                                                            <li>
                                                                <span className="float-left"><a href="#"><i className="fa fa-play-circle"></i> User interface explained</a></span>
                                                                <span className="float-right">8:31</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor">
                                                <div className="author-bio">
                                                    <h3 className="title">About the Instructor</h3>
                                                    <div className="author-contents media">
                                                        <div className="author-avatar float-left"><img className="radius" src="../images/au.jpg" alt="Avatar" /></div>
                                                        <div className="author-details media-body">
                                                            <h3 className="name"><a href="#">Julia Adams</a></h3>
                                                            <span>UX Consultant and Web Design Instructor</span>
                                                            <p>
                                                                There was a painful and uncontrollable squeaking mixed in with it, the words could be made out at first but then there was a sort of echo which made them unclear, leaving the hearer unsure whether he had heard properly or not.
                                                            </p>
                                                            <a href="#" className="load-more">Learn more <i className="fa fa-angle-double-right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews">
                                                <h3 className="title">Student Reviews</h3>
                                                <div className="course-reviews">
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <div className="average-rating text-center">
                                                                <div className="rating">
                                                                    <input type="hidden" className="rating-tooltip-manual" data-filled="fas fa-star" data-empty="far fa-star" value="4.5" data-fractions="5"/>
                                                                </div>
                                                                <span>Average Rating</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" style={{width: '54%'}} aria-valuenow="54" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <div className="rating-icons">
                                                                <i className="far fa-star"></i>
                                                                <i className="far fa-star"></i>
                                                                <i className="far fa-star"></i>
                                                                <i className="far fa-star"></i>
                                                                <i className="far fa-star"></i>
                                                                <span className="rating-value">54%</span>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" style={{width: '30%'}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <div className="rating-icons">
                                                                <i className="far fa-star"></i>
                                                                <i className="far fa-star"></i>
                                                                <i className="far fa-star"></i>
                                                                <i className="far fa-star"></i>
                                                                <i className="far fa-star-o"></i>
                                                                <span className="rating-value">30%</span>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" style={{width: '12%'}} aria-valuenow="12" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <div className="rating-icons">
                                                                <i className="far fa-star"></i>
                                                                <i className="far fa-star"></i>
                                                                <i className="far fa-star"></i>
                                                                <i className="far fa-star-o"></i>
                                                                <i className="far fa-star-o"></i>
                                                                <span className="rating-value">12%</span>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" style={{width: '3%'}} aria-valuenow="3" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <div className="rating-icons">
                                                                <i className="far fa-star"></i>
                                                                <i className="far fa-star"></i>
                                                                <i className="far fa-star-o"></i>
                                                                <i className="far fa-star-o"></i>
                                                                <i className="far fa-star-o"></i>
                                                                <span className="rating-value">3%</span>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" style={{width: '1%'}} aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <div className="rating-icons">
                                                                <i className="far fa-star"></i>
                                                                <i className="far fa-star-o"></i>
                                                                <i className="far fa-star-o"></i>
                                                                <i className="far fa-star-o"></i>
                                                                <i className="far fa-star-o"></i>
                                                                <span className="rating-value">1%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="review-contents">
                                                        <ol className="review-list">
                                                            <li className="review">
                                                                <div className="row">
                                                                    <div className="col-md-5">
                                                                        <div className="media">
                                                                            <img className="rounded-circle author-avatar" src="../images/comments/1.jpg" alt="RAvatar" />
                                                                            <div className="author-details media-body">
                                                                                <span className="time">3 days ago</span>
                                                                                <h3 className="name"><a href="#">Cheryl Burns</a></h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-7">
                                                                        <div className="review-details">
                                                                            <h3 className="title">Awesome Learning Site</h3>
                                                                            <div className="rating">
                                                                                <input type="hidden" className="rating-tooltip-manual" data-filled="fas fa-star" data-empty="far fa-star" value="5" data-fractions="5"/>
                                                                            </div>
                                                                            <p>
                                                                                Gregor had wanted to give a full answer and explain everything but in the circumstances contented himself with saying- I’m getting up now.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="review">
                                                                <div className="row">
                                                                    <div className="col-md-5">
                                                                        <div className="media">
                                                                            <img className="rounded-circle author-avatar" src="../images/comments/2.jpg" alt="RAvatar" />
                                                                            <div className="author-details media-body">
                                                                                <span className="time">3 days ago</span>
                                                                                <h3 className="name"><a href="#">Bobby Newman</a></h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-7">
                                                                        <div className="review-details">
                                                                            <h3 className="title">Great in-depth explanations</h3>
                                                                            <div className="rating">
                                                                                <input type="hidden" className="rating-tooltip-manual" data-filled="fas fa-star" data-empty="far fa-star" value="5" data-fractions="5"/>
                                                                            </div>
                                                                            <p>
                                                                                The change in Gregor’s voice probably could not be noticed outside through the wooden door, as his mother was satisfied with this explanation and shuffled away
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="review">
                                                                <div className="row">
                                                                    <div className="col-md-5">
                                                                        <div className="media">
                                                                            <img className="rounded-circle author-avatar" src="../images/comments/3.jpg" alt="RAvatar" />
                                                                            <div className="author-details media-body">
                                                                                <span className="time">3 days ago</span>
                                                                                <h3 className="name"><a href="#">Philip Bell</a></h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-7">
                                                                        <div className="review-details">
                                                                            <h3 className="title">Really enjoyed this course</h3>
                                                                            <div className="rating">
                                                                                <input type="hidden" className="rating-tooltip-manual" data-filled="fas fa-star" data-empty="far fa-star" value="5" data-fractions="5"/>
                                                                            </div>
                                                                            <p>
                                                                                But this short conversation made the other members of the family aware that Gregor, against their expectations was still at home, and soon his father came knocking at one of the side doors gently but with his fist
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </div>
                                                <div className="btn-container mt-4 text-center">
                                                    <a href="#" className="btn btn-lg">Show more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="related-courses">
                                        <h2 className="section-title">Related Courses</h2>
                                        <div className="course-items">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="item">
                                                        <div className="item-thumb"><img src="../images/popular/1.jpg" alt="Item Thumbnail" /></div>
                                                        <div className="item-details">
                                                            <h3 className="item-title"><a href="course-single-01.html">HTML5, CSS3, Bootstrap Web Design for Beginners</a></h3>
                                                            <span className="instructor"><a href="#">Justin Marks</a></span>
                                                            <div className="details-bottom">
                                                                <div className="course-price float-left"><span className="currency">$</span><span className="price">15.99</span></div>
                                                                <div className="rating float-right">
                                                                    <input type="hidden" className="rating-tooltip-manual" data-filled="fas fa-star" data-empty="far fa-star" value="4.5" data-fractions="5"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="item">
                                                        <div className="item-thumb"><img src="../images/popular/2.jpg" alt="Item Thumbnail" /></div>
                                                        <div className="item-details">
                                                            <h3 className="item-title"><a href="course-single-01.html">Modern JavaScript From The Beginning</a></h3>
                                                            <span className="instructor"><a href="#">Justin Marks</a></span>
                                                            <div className="details-bottom">
                                                                <div className="course-price float-left"><span className="currency">$</span><span className="price">15.99</span></div>
                                                                <div className="rating float-right">
                                                                    <input type="hidden" className="rating-tooltip-manual" data-filled="fas fa-star" data-empty="far fa-star" value="4.5" data-fractions="5"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="item">
                                                        <div className="item-thumb"><img src="../images/popular/3.jpg" alt="Item Thumbnail" /></div>
                                                        <div className="item-details">
                                                            <h3 className="item-title"><a href="course-single-01.html">Learn Your Own Blockchain In JavaScript</a></h3>
                                                            <span className="instructor"><a href="#">Justin Marks</a></span>
                                                            <div className="details-bottom">
                                                                <div className="course-price float-left"><span className="currency">$</span><span className="price">15.99</span></div>
                                                                <div className="rating float-right">
                                                                    <input type="hidden" className="rating-tooltip-manual" data-filled="fas fa-star" data-empty="far fa-star" value="4.5" data-fractions="5"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <aside className="sidebar">
                                        <button className="btn btn-lg enroll-btn">Enroll now</button>
                                        <div className="info">
                                            <ul className="info-list">
                                                <li><span className="price">Free</span></li>
                                                <li><span>13 Hours on-demand video</span></li>
                                                <li><span>11 Lectures</span></li>
                                                <li><span>3 Quizes</span></li>
                                                <li><span>4,873 Students enrolled</span></li>
                                                <li><span>Certificate on Completion</span></li>
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