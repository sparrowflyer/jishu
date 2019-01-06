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
            courses: [
                {
                    "id": 1,
                    "title": "test title",
                    "detail": "test detail",
                    "coverImage": "../images/popular/2.jpg",
                    "authorId": 1,
                    "authorName": "BossLee",
                    "price": 0.01,
                    "courseCollectionStartTime": "2018-12-15 18:00:00",
                    "courseCollectionEndTime": "2018-12-16 19:00:00",
                    "courseStartTime": "2018-12-17 20:00:00",
                    "courseDurationTime": 120,
                    "targetStudentAmount": 100,
                    "currentStudentAmount": 0,
                    "status": "init",
                    "type": "Design",
                    "createdTime": "2018-12-12 23:02:40",
                    "updatedTime": null,
                    "comments": null
                }
            ],
            courseTypes: ["general", "overseas_life"]
        };
    }

    componentDidMount() {
        //this.setState((state) => {
        //    return {
        //        ...state,
        //        courses: [],
        //        courseTypes: []
        //    };
        //});
        //postJson('/getAvailableCourses')
        //    .then((data) => {
        //        if (data.status === 'success') {
        //            this.setState((state) => {
        //                return {
        //                    ...state,
        //                    courses: data.data
        //                };
        //            });
        //        }
        //    });
        //postJson('/getCourseTypes')
        //    .then((data) => {
        //        if (data.status === 'success') {
        //            this.setState((state) => {
        //                return {
        //                    ...state,
        //                    courseTypes: data.data
        //                };
        //            });
        //        }
        //    });
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
                                                                        <a href="#">{course.authorName}</a>
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
                                        <div className="category-list">
                                            <ul>
                                                <li className="active"><a href="#">All Courses</a></li>
                                                <li><a href="#">IT & Software</a></li>
                                                <li><a href="#">Development</a></li>
                                                <li><a href="#">Design</a></li>
                                                <li><a href="#">Business</a></li>
                                                <li><a href="#">Photography</a></li>
                                                <li><a href="#">Marketing</a></li>
                                                <li><a href="#">Arts & Music</a></li>
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