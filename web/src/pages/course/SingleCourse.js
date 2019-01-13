import React from 'react';
import { withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import { withAlert } from 'react-alert';
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
            authorInfo: {},
            comment: '',
            jsUserID: ''
        };
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.submitCommentInfo = this.submitCommentInfo.bind(this);
        this.getComments = this.getComments.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }

    handleCommentChange(event) {
        this.setState((state) => {
            return {
                ...state,
                comment: event.target.value
            };
        });
    }

    getComments() {
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

    deleteComment() {
        postJson('/deleteCourseComment', {
            id: this.state.course.id
        }).then((data) => {
            if (data.status === 'success') {
                this.getComments();
            } else {
                this.props.alert.error(data.errorMsg || data.error);
            }
        }).catch((error) => {
            this.props.alert.error('删除评价失败。');
        });
    }

    submitCommentInfo() {
        if (!this.state.jsUserID) {
            this.props.alert.error('请登录再评价。');
            sessionStorage.removeItem('jsUser');
            this.setState((state) => {
                return {
                    ...state,
                    jsUserID: ''
                }
            });
            return;
        }
        postJson('/addCourseComment', {
            "courseId": this.state.course.id,
            "userId": this.state.jsUserID,
            "content": this.state.comment[0]
        }).then((data) => {
            if (data.status === 'success') {
                this.getComments();
            } else {
                this.props.alert.error(data.errorMsg || data.error);
            }
        }).catch((error) => {
            this.props.alert.error('评价失败。');
        });
    }

    componentDidMount() {
        this.setState((state) => {
           return {
               ...state,
               comments: [],
               authorInfo: {},
               jsUserID: ''
           }
        });
        try {
            this.setState((state) => {
               return {
                   ...state,
                   jsUserID: JSON.parse(sessionStorage.getItem('jsUser'))
               }
            });
        } catch(e) {}
        this.getComments();
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
                                        <span className="meta-id">Instructor</span>
                                        <Link className="name" to={`/user/${this.state.course.authorId}`}>{this.state.course.authorName}</Link>
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
                                    <img className="radius" src={this.state.course.coverImage ? 'http://' + this.state.course.coverImage : ''} alt="Course Image" />
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
                                                        <div className="author-avatar float-left">
                                                            <img className="radius" src={this.state.authorInfo.headImage ? 'http://' + this.state.authorInfo.headImage : ''} alt="Avatar" />
                                                        </div>
                                                        <div className="author-details media-body">
                                                            <h3 style={{position: "inherit"}} className="name"><a>{this.state.authorInfo.nickName}</a></h3>
                                                            <p>{this.state.authorInfo.email}</p>
                                                            <Link className="load-more" to={`/user/${this.state.authorInfo.id}`}>Learn more <i className="fa fa-angle-double-right"></i></Link>
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
                                                                                        {
                                                                                            this.state.jsUserID === comment.userId ?
                                                                                                <div className="entry-meta">
                                                                                                    <span style={{float: 'right'}} className="author" onClick={this.deleteComment}>X 删除</span>
                                                                                                </div> : null
                                                                                        }
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
                                                {
                                                    sessionStorage.getItem('jsUser') ?
                                                        <div className="respond">
                                                            <h3 className="title">Add Your Comment</h3>
                                                            <form className="comment-form" onSubmit={ this.submitCommentInfo }>
                                                                <textarea id="comment" className="form-control" name="comment" placeholder="Comment" rows="8"
                                                                          onChange={ this.handleCommentChange } value={ this.state.comment } required>
                                                                </textarea>
                                                                <input className="btn" type="submit" value="Submit Comment" />
                                                            </form>
                                                        </div>
                                                        : null
                                                }
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

const SingleCourseWithRouter = withRouter(withAlert(SingleCourse));
export default SingleCourseWithRouter;