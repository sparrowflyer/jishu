import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/common/Header.js';
import { BreadCrumb } from '../../components/common/BreadCrumb.js';
import { Footer } from '../../components/common/Footer.js';
import { Navigator } from '../../components/BlogAndCourse.js';
import { postJson } from '../../utils/server.js';

export class MultiCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            courseTypes: []
        };
    }

    componentDidMount() {
        this.setState((state) => {
            return {
                ...state,
                courses: [],
                courseTypes: []
            };
        });
        postJson('/getAvailableCourses', {
            //"type": "",
            "pageStart": 0,
            "pageSize": 10,
            "needAmount": false
        }).then((data) => {
            if (data.status === 'success') {
                this.setState((state) => {
                    return {
                        ...state,
                        courses: data.data.courses
                    };
                });
            }
        });
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
                                    <div className="course-items">
                                        <div className="row">
                                            {
                                                this.state.courses.map((course) => {
                                                    return (
                                                        <div className="col-lg-4 col-md-6" key={course.id}>
                                                            <div className="item">
                                                                <div className="item-thumb"><img src={course.coverImage} alt="Item Thumbnail" /></div>
                                                                <div className="item-details">
                                                                    <h3 className="item-title">
                                                                        <Link to={{pathname: `/course/${course.id}`, state: course}}>{course.title}</Link>
                                                                    </h3>
                                                                    <span className="instructor">
                                                                        <a>{course.authorName}</a>
                                                                    </span>
                                                                    <div className="details-bottom">
                                                                        <div className="course-price float-left">
                                                                            <span className="currency">¥</span>
                                                                            <span className="price">{course.price}</span>
                                                                        </div>
                                                                        <div className="rating float-right">
                                                                            Left:<span className="label label-default">{ course.targetStudentAmount - course.currentStudentAmount }</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                        <Navigator />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <aside className="sidebar">
                                        <Link className="btn btn-lg enroll-btn" to="/addCourse">Add Course</Link>
                                        <div className="category-list">
                                            <ul>
                                                <li className="active"><a>All Courses</a></li>
                                                {
                                                    this.state.courseTypes.map((courseType) => {
                                                        return (
                                                            <li key={courseType}><a>{courseType}</a></li>
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