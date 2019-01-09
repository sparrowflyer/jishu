import React from 'react';
import { Header } from '../components/common/Header.js';
import { Footer } from '../components/common/Footer.js';
import { getUserInfo, postJson } from '../utils/server.js';

const page = 1;

export class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nickName: '',
            headImage: '',
            type: '',
            cellPhone: '',
            email: '',
            status: '',
            fans: [],
            ownArticles: [],
            collectedArticles: []
        };
    }

    componentDidMount() {
        let userID = this.props.match.params.userID;
        getUserInfo(userID)
            .then((data) => {
                if (data.status === 'success') {
                    let d = data.data;
                    this.setState((state) => {
                        return {
                            ...state,
                            nickName: d.nickName,
                            headImage: d.headImage,
                            type: d.type,
                            cellPhone: d.cellPhone,
                            email: d.email,
                            status: d.status
                        }
                    });
                }
            });
        postJson('/getFans', {
            ownerId: userID
        }).then((data) => {
            if (data.status === 'success') {
                this.setState((state) => {
                   return {
                       ...state,
                       fans: data.data
                   }
                });
            }
        });
        postJson(`/userAllArticles?uid=${userID}&page=${page}`)
            .then((data) => {
                if (data.status === 'success') {
                    this.setState((state) => {
                        return {
                            ...state,
                            ownArticles: data.data
                        }
                    });
                }
            });
        postJson(`userAllCollectArticles?uid=${userID}&page=${page}`)
            .then((data) => {
                if (data.status === 'success') {
                    this.setState((state) => {
                        return {
                            ...state,
                            collectedArticles: data.data
                        }
                    });
                }
            });
    }

    render() {
        return (
        <div>
            <Header activeTitle="me" />
            <section className="page-name background-bg" data-image-src="../images/breadcrumb.jpg">
                <div className="overlay">
                    <div className="section-padding">
                        <div className="container">
                            <h2 className="section-title">{this.state.nickname}</h2>
                            <span className="designation">{this.state.type}</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="instructor-details">
                <div className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 pr-5">
                                <div className="avatar text-center">
                                    <img src={this.state.headImage} alt="Avatar Image" />
                                </div>
                                <div className="social text-center">
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-pinterest"></i></a>
                                    <a href="#"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="col-md-8 pl-4">
                                <div className="meta">
                                    <ul>
                                        <li><span className="meta-id">Students</span> 56,879</li>
                                        <li><span className="meta-id">Courses</span> 39</li>
                                        <li><span className="meta-id">Reviews</span> 9,201</li>
                                    </ul>
                                </div>
                                <p>
                                    <strong>Phone:</strong> {this.state.cellPhone}
                                </p>
                                <p>
                                    <strong>Email:</strong> {this.state.email}
                                </p>
                                <p>
                                    <strong>Status:</strong> {this.state.status}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="course-single-details">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-1" data-toggle="tab" href="#fan" role="tab" aria-controls="fan" aria-selected="true">粉丝列表</a>
                    <a className="nav-item nav-link" id="nav-2" data-toggle="tab" href="#follow" role="tab" aria-controls="follow" aria-selected="false">关注列表</a>
                    <a className="nav-item nav-link" id="nav-3" data-toggle="tab" href="#releaseCourse" role="tab" aria-controls="releaseCourse" aria-selected="false">发布课程列表</a>
                    <a className="nav-item nav-link" id="nav-4" data-toggle="tab" href="#post" role="tab" aria-controls="post" aria-selected="false">发布帖子列表</a>
                    <a className="nav-item nav-link" id="nav-5" data-toggle="tab" href="#collection" role="tab" aria-controls="collection" aria-selected="false">收藏列表</a>
                </div>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="fan" role="tabpanel" aria-labelledby="fan">
                        {
                            this.state.fans.map((fan) => {

                            })
                        }
                    </div>
                    <div className="tab-pane fade" id="follow" role="tabpanel" aria-labelledby="follow">
                    </div>
                    <div className="tab-pane fade" id="releaseCourse" role="tabpanel" aria-labelledby="releaseCourse">
                    </div>
                    <div className="tab-pane fade" id="post" role="tabpanel" aria-labelledby="post">
                        {
                            this.state.ownArticles.map((article) => {

                            })
                        }
                    </div>
                    <div className="tab-pane fade" id="collection" role="tabpanel" aria-labelledby="collection">
                        {
                            this.state.collectedArticles.map((article) => {

                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        );
    }
}




