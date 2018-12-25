import React from 'react';
import { Header } from '../components/common/Header.js';
import { BreadCrumb } from '../components/common/BreadCrumb.js';
import { Footer } from '../components/common/Footer.js';

function MyInfo() {
    return (
        <section className="instructor-details">
            <div className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pr-5">
                            <div className="avatar text-center">
                                <img src="../images/speakers/1.jpg" alt="Avatar Image" />
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
                                <strong>
                                    The first thing he wanted to do was to get up in peace without being disturbed, to get dressed, and most of all to have his breakfast
                                </strong>
                            </p>
                            <p>
                                Only then he consider what to do next, as well as he aware that he would not bring his thoughts to any conclusions by lying in bed. He remembered that he had often felt a slight pain in bed, perhaps caused by lying awkwardly, but that had always turned out to be pure imagination and he wondered how his imaginings
                            </p>
                            <p>
                                He did not have the slightest doubt that the change in his voice was nothing more than the first sign of a serious cold, which was an occupational hazard for travelling salesmen
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function OtherInfo() {
    return (
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
                </div>
                <div className="tab-pane fade" id="follow" role="tabpanel" aria-labelledby="follow">
                </div>
                <div className="tab-pane fade" id="releaseCourse" role="tabpanel" aria-labelledby="releaseCourse">
                </div>
                <div className="tab-pane fade" id="post" role="tabpanel" aria-labelledby="post">
                </div>
                <div className="tab-pane fade" id="collection" role="tabpanel" aria-labelledby="collection">
                </div>
            </div>
        </div>
    );
}

export function Me() {
    return (
        <div>
            <Header activeTitle="me" />
            <BreadCrumb title="个人中心" />
            <MyInfo />
            <OtherInfo />
            <Footer />
        </div>
    );
}


