import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/common/Header.js';
import { Footer } from '../../components/common/Footer.js';
import { postJson, getArticles } from '../../utils/server.js';

function Banner() {
    return (
        <section className="banner-section banner-01 background-bg" style={{backgroundImage: 'url(/images/banner/1.jpg)'}}>
            <div className="overlay">
                <div className="section-padding">
                    <div className="container">
                        <div className="banner-texts text-center">
                            <h6 className="sub-title mb-2">叽叔 unclejee</h6>
                            <h2 className="banner-title mb-5">海内外留学生互动平台</h2>
                            <a href="login" className="btn btn-lg mt-2 banner-btn">立即加入！</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

class RecentPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }
    componentDidMount() {
        getArticles(0, 1)
            .then((data) => {
                if (data.status === 'success') {
                    if (data.data && data.data.list && Array.isArray(data.data.list)) {
                        this.setState((state) => {
                            return {
                                ...state,
                                articles: data.data.list
                            }
                        });
                    }
                }
            });
    }
    render() {
        return (
            <section className="popular-courses">
                <div className="section-padding">
                    <div className="container">
                        <div className="top-content">
                            <div className="left-content float-left">
                                <h2 className="section-title">最近更新的博客论坛</h2>
                                <p>你与大咖近在咫尺</p>
                            </div>
                        </div>
                        {
                            this.state.articles.length > 0 ? (
                                    <div id="post-slider" className="post-slider owl-carousel" style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'noWrap', overflow: 'auto'}}>
                                        {
                                            this.state.articles.map((article) => {
                                                return (
                                                    <div className="item" key={article.aid} style={{marginRight: '10px'}}>
                                                        <article className="post">
                                                            <div className="entry-thumbnail radius">
                                                                {article.imagesrc ? <img style={{maxWidth: '370px', height: '270px'}} src={'http://' + article.imagesrc} alt="Post Thumbnail" /> : null}
                                                            </div>
                                                            <div className="entry-content">
                                                                <h3 className="entry-title">
                                                                    <Link to={`/blog/${article.aid}`}>{article.title}</Link>
                                                                </h3>
                                                                <div className="entry-meta">
                                                                <span className="author">
                                                                    <i className="icon-user"></i>
                                                                    <Link to={`/user/${article.user.id}`}>{article.user.nickName}</Link>
                                                                </span>
                                                                    <span className="time">
                                                                    <i className="icon-calendar"></i> {article.createDate}
                                                                </span>
                                                                </div>
                                                            </div>
                                                        </article>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                ) : null
                        }
                    </div>
                </div>
            </section>
        );
    }
}

function Promotion() {
    return (
        <section className="promotion background-bg text-center" style={{backgroundImage: 'url(../images/bg1.jpg)'}}>
            <div className="overlay">
                <div className="section-padding">
                    <div className="container">
                        <h2 className="title">Tons of Courses just <span>$10</span></h2>
                        <h3 className="sub-title">Teacher Appreciation Month</h3>
                        <div id="countdown"></div>
                        <form action="#" className="enrole-form">
                            <input type="text" name="name" className="form-control" placeholder="Name*" required />
                            <input type="email" name="email" className="form-control" placeholder="Email*" required />
                            <input type="submit" name="submit" id="enrole-submit" className="form-control" value="Get Started Now" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

class CourseCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseTypes: []
        };
    }
    componentDidMount() {
        postJson('/getCourseTypes')
            .then((data) => {
                if (data.status === 'success') {
                    this.setState((state) => {
                        return {
                            ...state,
                            courseTypes: data.data || []
                        };
                    });
                }
            });
    }
    render() {
        return (
            <section className="course-category">
                <div className="section-padding">
                    <div className="container">
                        <div className="top-content text-center">
                            <h2 className="section-title">课程模块</h2>
                            <p>正在开设的课程模块</p>
                        </div>
                        <div className="category-items">
                            {
                                this.state.courseTypes.map((courseType, index) => {
                                    return (
                                        <div className="item radius text-center" key={index}>
                                            <div className="item-thumb"><img className="radius" src="/images/category/1.jpg" alt="Item Thumbnail" /></div>
                                            <div className="item-details">
                                                <Link to={{pathname: "/course", state: courseType}}>
                                                    <div className="item-texts">
                                                        <i className="icon-layers"></i><span className="item-title">{courseType}</span>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="btn-container text-center bm8">
                            <Link className="btn btn-lg section-btn" to="/course">查看全部课程</Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

class PopularCourses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        };
    }

    componentDidMount() {
        postJson('/getAvailableCourses', {
            pageStart: 0,
            pageSize: 4,
            needAmount: false
        }).then((data) => {
            if (data.status === 'success') {
                if (data.data && data.data.courses && Array.isArray(data.data.courses)) {
                    this.setState((state) => {
                        return {
                            ...state,
                            courses: data.data.courses
                        };
                    });
                }
            }
        });
    }

    render() {
        return (
            <section className="recent-posts black-bg">
                <div className="section-padding">
                    <div className="container">
                        <div className="top-content">
                            <div className="left-content float-left">
                                <h2 className="section-title">最新课程</h2>
                                <p>正在进行中。。。</p>
                            </div>
                        </div>
                        {
                            this.state.courses.length > 0 ? (
                                    <div className="course-items with-slider">
                                        <div id="course-slider" className="course-slider owl-carousel" style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'noWrap', overflow: 'auto'}}>
                                            {
                                                this.state.courses.map((course) => {
                                                    return (
                                                        <div className="item" key={course.id} style={{marginRight: '10px', width: '270px'}}>
                                                            <div className="item-thumb">
                                                                {course.coverImage ? <img style={{maxWidth: '270px', height: '200px'}} src={'http://' + course.coverImage} alt="Item Thumbnail" /> : null}
                                                                <div className="avatar">
                                                                    {course.authorHead ? <img className="rounded-circle" src={'http://' + course.authorHead} alt="Avatar Image" /> : null}
                                                                </div>
                                                            </div>
                                                            <div className="item-details">
                                                                <h3 className="item-title"><Link to={`/course/${course.id}`}>{course.title}</Link></h3>
                                                                <span className="instructor"><Link to={`/user/${course.authorId}`}>{course.authorName}</Link></span>
                                                                <div className="details-bottom">
                                                                    <div className="course-price float-left">
                                                                        <span className="currency">¥</span>
                                                                        <span className="price">{course.price}</span>
                                                                    </div>
                                                                </div>
                                                                {
                                                                    /*
                                                                     <div className="item-meta">
                                                                     <span><i className="icons icon-people"></i> 129</span>
                                                                     <span><i className="icons icon-clock"></i> 22Hrs</span>
                                                                     <span><i className="icons icon-bubble"></i> 51</span>
                                                                     </div>
                                                                     */
                                                                }
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                ) : null
                        }
                    </div>
                </div>
            </section>
        );
    }
}

function Testimonial() {
    return (
        <section className="testimonial text-center">
            <div className="section-padding">
                <div className="container">
                    <div id="testimonial-slider" className="testimonial-slider carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#testimonial-slider" data-slide-to="0" className="active"></li>
                            <li data-target="#testimonial-slider" data-slide-to="1"></li>
                            <li data-target="#testimonial-slider" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="media">
                                    <img className="rounded-circle mr-3" src="/images/avatar/5.png" alt="Avatar Image" />
                                    <div className="media-body">
                                        <h4 className="name"><a href="#">笑看风清</a></h4>
                                        <span className="designation">学生</span>
                                    </div>
                                </div>
                                <div className="bottom-content">
                                    <span className="title">完美的学习论坛</span>
                                    <p>
                                        叽叔论坛，给予了海外留学生一个展示自己海外生活的一个窗口，也给国内想要出国的学生了解到真实的海外生活的一个社区。
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="media">
                                    <img className="rounded-circle mr-3" src="/images/avatar/6.png" alt="Avatar Image" />
                                    <div className="media-body">
                                        <h4 className="name"><a href="#">Arthur Watson</a></h4>
                                        <span className="designation">老师</span>
                                    </div>
                                </div>
                                <div className="bottom-content">
                                    <span className="title">Efficient interaction</span>
                                    <p>
                                        As an overseas teacher, I can discuss and share with many students in the platform. Guiding students and imparting their own learning experience and methods                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="media">
                                    <img className="rounded-circle mr-3" src="/images/avatar/7.png" alt="Avatar Image" />
                                    <div className="media-body">
                                        <h4 className="name"><a href="#">艾胜</a></h4>
                                        <span className="designation">学生</span>
                                    </div>
                                </div>
                                <div className="bottom-content">
                                    <span className="title">透明化社交</span>
                                    <p>
                                        我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。
                                    </p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#testimonial-slider" role="button" data-slide="prev">
                            <i className="icons icon-arrow-left"></i>
                        </a>
                        <a className="carousel-control-next" href="#testimonial-slider" role="button" data-slide="next">
                            <i className="icons icon-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <RecentPosts />
            <Testimonial />
            {/*<Promotion />*/}
            <PopularCourses />
            <CourseCategory />
            <Footer />
        </div>
    );
}



