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
            course: {},
            comments: [],
            authorInfo: {},
            comment: '',
            jsUserID: ''
        };
        this.buyCourse = this.buyCourse.bind(this);
        this.handleCommentChange = this.handleCommentChange.bind(this);
        this.submitCommentInfo = this.submitCommentInfo.bind(this);
        this.getComments = this.getComments.bind(this);
    }

    handleCommentChange(event) {
        const value = event.target.value;
        this.setState((state) => {
            return {
                ...state,
                comment: [value]
            };
        });
    }

    getComments(courseID) {
        postJson('/getCourseComments', {
            courseId: courseID
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

    deleteComment(commentID) {
        postJson('/deleteCourseComment', {
            id: commentID
        }).then((data) => {
            if (data.status === 'success') {
                this.getComments(this.state.course.id);
            } else {
                this.props.alert.error(data.errorMsg || data.error);
            }
        }).catch((error) => {
            this.props.alert.error('删除评价失败。');
        });
    }

    submitCommentInfo() {
        event.preventDefault();
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
                this.getComments(this.state.course.id);
                this.setState((state) => {
                    return {
                        ...state,
                        comment: ''
                    }
                });
                this.props.alert.success('添加评价成功!');
            } else {
                this.props.alert.error(data.errorMsg || data.error);
            }
        }).catch((error) => {
            this.props.alert.error('评价失败。');
        });
    }

    componentDidMount() {
        let jsUserID = '';
        try {
            jsUserID = JSON.parse(sessionStorage.getItem('jsUser')).id;
        } catch(e) {}
        this.setState((state) => {
            return {
                ...state,
                jsUserID
            }
        });
        postJson('/getSingleCourse', {
            courseId: this.props.match.params.courseID
        }).then((data) => {
            if (data.status === 'success') {
                let singleCourse = data.data;
                this.setState((state) => {
                    return {
                        ...state,
                        course: singleCourse
                    }
                });
                this.getComments(singleCourse.id);
                getUserInfo(singleCourse.authorId)
                    .then((userData) => {
                        if (userData.status === 'success') {
                            this.setState((state) => {
                                return {
                                    ...state,
                                    authorInfo: userData.data
                                }
                            });
                        }
                    });
            }
        });
    }

    buyCourse() {
        let userID = this.state.jsUserID;
        if (!userID) {
            this.props.alert.error('请登录再购买。');
            sessionStorage.removeItem('jsUser');
            this.setState((state) => {
                return {
                    ...state,
                    jsUserID: ''
                }
            });
            return;
        }
        let courseID = this.state.course.id;
        postJson('/purchaseCourseCheck', {
            "courseId": courseID,
            "buyerId": userID
        }).then((data) => {
            if (data.status === 'success') {
                window.location.href = `/jishu/purchaseCourse?courseId=${courseID}&buyerId=${userID}`;
            } else {
                this.props.alert.error(data.errorMsg || data.error);
            }
        }).catch((error) => {
            this.props.alert.error('无法检测用户支付情况');
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
                                        <span className="meta-id">指导教师</span>
                                        <Link className="name" to={`/user/${this.state.course.authorId}`}>
                                            <img width="15%" className="rounded-circle mr-3" src={"http://" + this.state.course.authorHead} />
                                            {this.state.course.authorName}
                                        </Link>
                                    </span>
                                    <span className="meta-details">
                                        <span className="meta-id">课程类型</span>
                                        <span>{this.state.course.type}</span>
                                    </span>
                                    <span className="meta-details">
                                        <span className="meta-id">当前状态</span>
                                        <span className="rating">{convertToChinese(this.state.course.status)}</span>
                                    </span>
                                    </div>
                                    <img className="radius" src={this.state.course.coverImage ? 'http://' + this.state.course.coverImage : ''} alt="Course Image" />
                                    <div className="course-single-details">
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a className="nav-item nav-link active" id="nav-1" data-toggle="tab" href="#curriculum" role="tab" aria-controls="curriculum" aria-selected="true">开课流程</a>
                                            <a className="nav-item nav-link" id="nav-2" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="false">课程详情</a>
                                            <a className="nav-item nav-link" id="nav-3" data-toggle="tab" href="#instructor" role="tab" aria-controls="instructor" aria-selected="false">指导老师</a>
                                            <a className="nav-item nav-link" id="nav-4" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">学生评价</a>
                                        </div>
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="curriculum" role="tabpanel" aria-labelledby="curriculum">
                                                <h4 className="title">该课程的募集情况</h4>
                                                <div className="curriculum-details">
                                                    <div className="content-table">
                                                        <span className="title">课程募集时间段</span>
                                                        <ul className="content-list">
                                                            <li>
                                                                <span className="float-left" style={ autoWidth }><a href=""><i className="far fa-file"></i> 课程开始募集时间</a></span>
                                                                <span className="float-right">{ this.state.course.courseCollectionStartTime }</span>
                                                            </li>
                                                            <li>
                                                                <span className="float-left" style={ autoWidth }><a href=""><i className="fa fa-play-circle"></i> 课程结束募集时间</a></span>
                                                                <span className="float-right">{ this.state.course.courseCollectionEndTime }</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="content-table">
                                                        <span className="title">开课时间</span>
                                                        <ul className="content-list">
                                                            <li>
                                                                <span className="float-left" style={ autoWidth }><a href=""><i className="far fa-file"></i> 课程开始时间</a></span>
                                                                <span className="float-right">{ this.state.course.courseStartTime }</span>
                                                            </li>
                                                            <li>
                                                                <span className="float-left" style={ autoWidth }><a href=""><i className="fa fa-play-circle"></i> 课程授课时长</a></span>
                                                                <span className="float-right">{ this.state.course.courseDurationTime } 分钟</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="content-table">
                                                        <span className="title">募集进度</span>
                                                        <ul className="content-list">
                                                            <li>
                                                                <span className="float-left" style={ autoWidth }><a href=""><i className="far fa-file"></i> 目标学生数量</a></span>
                                                                <span className="float-right">{ this.state.course.targetStudentAmount }</span>
                                                            </li>
                                                            <li>
                                                                <span className="float-left" style={ autoWidth }><a href=""><i className="fa fa-play-circle"></i> 当前已经报名学生数量</a></span>
                                                                <span className="float-right">{ this.state.course.currentStudentAmount }</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="description" role="tabpanel" aria-labelledby="description">
                                                <h4 className="title">课程详情</h4>
                                                <p>{ this.state.course.detail }</p>
                                            </div>
                                            <div className="tab-pane fade" id="instructor" role="tabpanel" aria-labelledby="instructor">
                                                <div className="author-bio">
                                                    <h3 className="title">关于指导教师</h3>
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
                                                <h3 className="title">学生评价</h3>
                                                <div className="course-reviews">
                                                    <div className="review-contents">
                                                        <ol className="review-list">
                                                            {
                                                                this.state.comments.map((comment) => {
                                                                    var userHead="http://"+comment.userHead;
                                                                    return (
                                                                        <li className="review" key={comment.id}>
                                                                            <div className="row">
                                                                                <div className="col-md-5">
                                                                                    <div className="media">
                                                                                        <img className="rounded-circle author-avatar" src={userHead} alt="RAvatar" />
                                                                                        <div className="author-details media-body">
                                                                                            <span className="time">{getTimeOfNow(comment.createdTime)}</span>
                                                                                            <h3 className="name"><Link to={`/user/${comment.userId}`}>{comment.userName}</Link></h3>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-md-7">
                                                                                    <div className="review-details">
                                                                                        <p>{ comment.content }</p>
                                                                                        {
                                                                                            this.state.jsUserID === comment.userId ?
                                                                                                <div className="entry-meta" style={{textAlign: 'right'}}>
                                                                                                    <span className="btn btn-sm" onClick={this.deleteComment.bind(this, comment.id)}>删除</span>
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
                                                            <h3 className="title">添加评价</h3>
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

                                        <div className="info">
                                            <ul className="info-list">
                                                <li><span className="price">课程价格 {this.state.course.price} 元</span></li>
                                                <li>
                                                    <p>开课时间</p>{this.state.course.courseStartTime}
                                                </li>
                                                <li><span>授课时长: {this.state.course.courseDurationTime} 分钟</span></li>
                                                <li><span>目标人数: {`${this.state.course.currentStudentAmount}/${this.state.course.targetStudentAmount}`}</span></li>
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