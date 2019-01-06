import React from 'react';
import { Header } from '../../components/common/Header.js';
import { BreadCrumb } from '../../components/common/BreadCrumb.js';
import { Footer } from '../../components/common/Footer.js';
import { postJson } from '../../utils/server.js';

const autoWidth = {
    width: 'auto'
};

export class SingleCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: this.props.location.state,
            comments: []
        };
    }

    componentDidMount() {
        this.setState((state) => {
           return {
               ...state,
               comments: []
           }
        });
        postJson('/getCourseComments', {
            courseId: this.state.course.id
        }).then((data) => {
            if (data.status === 'success') {
                this.setState((state) => {
                    return {
                        ...state,
                        comments: data.data
                    }
                });
            }
        });
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
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a className="nav-item nav-link active" id="nav-1" data-toggle="tab" href="#curriculum" role="tab" aria-controls="curriculum" aria-selected="true">Curriculum</a>
                                            <a className="nav-item nav-link" id="nav-2" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="false">Description</a>
                                            <a className="nav-item nav-link" id="nav-3" data-toggle="tab" href="#instructor" role="tab" aria-controls="instructor" aria-selected="false">Instructor</a>
                                            <a className="nav-item nav-link" id="nav-4" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
                                        </div>
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="curriculum" role="tabpanel" aria-labelledby="curriculum">
                                                <h4 className="title">Curriculum for this Course</h4>
                                                <div className="curriculum-details">
                                                    <div className="content-table">
                                                        <span className="title">Course Collection Time</span>
                                                        <ul className="content-list">
                                                            <li>
                                                                <span className="float-left" style={ autoWidth }><a href=""><i className="far fa-file"></i> Course Collection Start Time</a></span>
                                                                <span className="float-right">{ this.state.course.courseCollectionStartTime }</span>
                                                            </li>
                                                            <li>
                                                                <span className="float-left" style={ autoWidth }><a href=""><i className="fa fa-play-circle"></i> Course Collection End Time</a></span>
                                                                <span className="float-right">{ this.state.course.courseCollectionEndTime }</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="content-table">
                                                        <span className="title">Course Time</span>
                                                        <ul className="content-list">
                                                            <li>
                                                                <span className="float-left" style={ autoWidth }><a href=""><i className="far fa-file"></i> Course Start Time</a></span>
                                                                <span className="float-right">{ this.state.course.courseStartTime }</span>
                                                            </li>
                                                            <li>
                                                                <span className="float-left" style={ autoWidth }><a href=""><i className="fa fa-play-circle"></i> Course Duration Time</a></span>
                                                                <span className="float-right">{ this.state.course.courseDurationTime } min</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="content-table">
                                                        <span className="title">Student Amount</span>
                                                        <ul className="content-list">
                                                            <li>
                                                                <span className="float-left" style={ autoWidth }><a href=""><i className="far fa-file"></i> Target Student Amount</a></span>
                                                                <span className="float-right">{ this.state.course.targetStudentAmount }</span>
                                                            </li>
                                                            <li>
                                                                <span className="float-left" style={ autoWidth }><a href=""><i className="fa fa-play-circle"></i> Current Student Amount</a></span>
                                                                <span className="float-right">{ this.state.course.currentStudentAmount }</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="description" role="tabpanel" aria-labelledby="description">
                                                <h4 className="title">Course Description</h4>
                                                <p>
                                                    { this.state.course.detail }
                                                </p>
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
                                                    <div className="review-contents">
                                                        <ol className="review-list">
                                                            {
                                                                this.state.comments.map((comment) => {
                                                                    return (
                                                                        <li className="review" key={comment.id}>
                                                                            <div className="row">
                                                                                <div className="col-md-5">
                                                                                    <div className="media">
                                                                                        <img className="rounded-circle author-avatar" src="../images/comments/1.jpg" alt="RAvatar" />
                                                                                        <div className="author-details media-body">
                                                                                            <span className="time">3 days ago</span>
                                                                                            <h3 className="name"><a href="">{comment.username}</a></h3>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-7">
                                                                                    <div className="review-details">
                                                                                        <h3 className="title">{comment.username} Comment</h3>
                                                                                        <p>
                                                                                            { comment.content }
                                                                                        </p>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    );
                                                                })
                                                            }
                                                        </ol>
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