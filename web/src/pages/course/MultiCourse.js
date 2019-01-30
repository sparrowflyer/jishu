import React from 'react';
import { withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import { withAlert } from 'react-alert';
import Pagination from 'rc-pagination';
import { Header } from '../../components/common/Header.js';
import { BreadCrumb } from '../../components/common/BreadCrumb.js';
import { Footer } from '../../components/common/Footer.js';
import { postJson } from '../../utils/server.js';

class MultiCourse extends React.Component {
    constructor(props) {
        super(props);
        let courseState = this.props.location.state;
        this.state = {
            courses: [],
            courseTypes: [],
            courseType: courseState || '',
            currentPage: 1,
            totalCourses: 0
        };
        this.changePage = this.changePage.bind(this);
    }

    getCourses(courseType, currentPage) {
        let param = {
            pageStart: (currentPage - 1) * 10,
            pageSize: 10,
            needAmount: true
        };
        if (courseType) {
            param = { ...param, type: courseType }
        }
        postJson('/getAvailableCourses', param).then((data) => {
            if (data.status === 'success') {
                this.setState((state) => {
                    return {
                        ...state,
                        courses: data.data.courses,
                        totalCourses: data.data.totalSize
                    };
                });
            }
        });
    }

    changePage(page) {
        this.setState((state) => {
            return {
                ...state,
                currentPage: page
            }
        });
        this.getCourses(this.state.courseType, page);
    }

    changeCourseType(courseType) {
        this.setState((state) => {
           return {
               ...state,
               courseType: courseType
           };
        });
        this.getCourses(courseType, this.state.currentPage);
    }

    buyCourse(courseID) {
        let userID = '';
        try {
            userID = JSON.parse(sessionStorage.getItem('jsUser')).id;
        } catch(e) {}
        if (!userID) {
            this.props.alert.error('请先登录。');
            return ;
        }
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

    componentDidMount() {
        this.setState((state) => {
            return {
                ...state,
                courses: [],
                currentPage: 1
            };
        });
        this.getCourses(this.state.courseType, 1);
        postJson('/getCourseTypes')
            .then((data) => {
                if (data.status === 'success') {
                    this.setState((state) => {
                        return {
                            ...state,
                            courseTypes: data.data
                        };
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
                                    <div className="course-items" style={{marginBottom: '20px'}}>
                                        <div className="row">
                                            {
                                                this.state.courses.map((course) => {
                                                    return (
                                                        <div className="col-lg-4 col-md-6" key={course.id}>
                                                            <div className="item">
                                                                <div className="item-thumb">
                                                                    <img style={{width: '100%', height: '228px'}} src={course.coverImage ? 'http://' + course.coverImage : ''} alt="Item Thumbnail" />
                                                                </div>
                                                                <div className="item-details">
                                                                    <h3 className="item-title">
                                                                        <Link to={{pathname: `/course/${course.id}`, state: course}}>{course.title}</Link>
                                                                    </h3>
                                                                    <span className="instructor">
                                                                        <Link to={`/user/${course.authorId}`}>
                                                                            <img width="30" className="rounded-circle" src={course.authorHead ? 'http://' + course.authorHead : ''} alt="Avatar Image" />
                                                                            {course.authorName}
                                                                        </Link>
                                                                    </span>
                                                                    <p><strong>开课时间:</strong> {course.courseStartTime}</p>
                                                                    <div className="details-bottom">
                                                                        <div className="course-price float-left">
                                                                            <span className="currency">¥</span>
                                                                            <span className="price">{course.price}</span>
                                                                        </div>
                                                                        <div className="rating float-right">
                                                                            目标人数:<span className="label label-default">{ course.targetStudentAmount - course.currentStudentAmount }</span>
                                                                        </div>
                                                                    </div>
                                                                    <div style={{overflow: "hidden"}}>
                                                                        <span onClick={ this.buyCourse.bind(this, course.id)}  className="btn btn-sm">购买</span>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                    {
                                        this.state.courses && this.state.courses.length > 0 ?
                                            <Pagination onChange={this.changePage}
                                                        defaultPageSize={10} current={this.state.currentPage}
                                                        total={this.state.totalCourses}/>
                                            : <p>暂无课程信息</p>
                                    }
                                </div>
                                <div className="col-md-4">
                                    <aside className="sidebar">
                                        {
                                            sessionStorage.getItem('jsUser') ? <Link className="btn btn-lg enroll-btn" to="/addCourse">Add Course</Link> : null
                                        }
                                        <div className="category-list">
                                            <ul>
                                                <li className={`${this.state.courseType ? "" : "active"}`} onClick={this.changeCourseType.bind(this, '')}><a>所有课程</a></li>
                                                {
                                                    this.state.courseTypes.map((courseType) => {
                                                        return (
                                                            <li key={courseType} className={`${this.state.courseType === courseType ? "active" : ""}`}
                                                                onClick={this.changeCourseType.bind(this, courseType)}><a>{courseType}</a></li>
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

const MultiCourseWithRouter = withRouter(withAlert(MultiCourse));
export default MultiCourseWithRouter;