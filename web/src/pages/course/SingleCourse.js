import React from 'react';
import { Header } from '../../components/common/Header.js';
import { BreadCrumb } from '../../components/common/BreadCrumb.js';
import { Footer } from '../../components/common/Footer.js';
import { getTimeOfNow } from '../../utils/time.js';
import { postJson, getUserInfo } from '../../utils/server.js';

const autoWidth = {
    width: 'auto'
};

function convertToChinese(status) {
    const statusWords = {
        'init': '等待募集',
        'collecting': '募集中',
        'collected': '等待讲课',
        'teaching': '讲课中',
        'ended': '讲课结束'
    };
    return statusWords[status] || '';
}

export class SingleCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: this.props.location.state,
            comments: [],
            authorInfo: {}
        };
    }

    componentDidMount() {
        this.setState((state) => {
           return {
               ...state,
               comments: [],
               authorInfo: {}
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
        getUserInfo(this.state.course.authorId)
            .then((data) => {
                if (data.status === 'success') {
                    this.setState((state) => {
                       return {
                           ...state,
                           authorInfo: data.data
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
                                        <span className="meta-id">Status</span>
                                        <span className="rating">{convertToChinese(this.state.course.status)}</span>
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
                                                <p>{ this.state.course.detail }</p>
                                            </div>
                                            <div className="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor">
                                                <div className="author-bio">
                                                    <h3 className="title">About the Instructor</h3>
                                                    <div className="author-contents media">
                                                        <div className="author-avatar float-left"><img className="radius" src={this.state.authorInfo.headImage} alt="Avatar" /></div>
                                                        <div className="author-details media-body">
                                                            <h3 style={{position: "inherit"}} className="name"><a>{this.state.authorInfo.nickName}</a></h3>
                                                            <p>{this.state.authorInfo.email}</p>
                                                            <a className="load-more">Learn more <i className="fa fa-angle-double-right"></i></a>
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
                                                                                            <span className="time">{getTimeOfNow(comment.createdTime)}</span>
                                                                                            <h3 className="name"><a href="">{comment.userName}</a></h3>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-7">
                                                                                    <div className="review-details">
                                                                                        <p>{ comment.content }</p>
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
                                                <div className="respond">
                                                    <h3 className="title">Add Your Comment</h3>
                                                    <form action="#" method="post" className="comment-form">
                                                        <textarea id="comment" className="form-control" name="comment" placeholder="Comment" rows="8" required></textarea>
                                                        <input className="btn" type="submit" value="Submit Comment" />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <aside className="sidebar">
                                        <button className="btn btn-lg enroll-btn">BUY</button>
                                        <div className="info">
                                            <ul className="info-list">
                                                <li><span className="price">Price: {this.state.course.price}</span></li>
                                                <li>
                                                    <p>Start Time</p>{this.state.course.courseStartTime}
                                                </li>
                                                <li><span>Duration Time: {this.state.course.courseDurationTime}</span></li>
                                                <li><span>Student Amount: {`${this.state.course.currentStudentAmount}/${this.state.course.targetStudentAmount}`}</span></li>
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