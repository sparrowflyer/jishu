import React from 'react';
import { Redirect } from 'react-router-dom';
import { Header } from '../../components/common/Header.js';
import { Footer } from '../../components/common/Footer.js';

function Banner() {
    return (
        <section className="banner-section banner-01 background-bg" data-image-src="/images/banner/1.jpg">
            <div className="overlay">
                <div className="section-padding">
                    <div className="container">
                        <div className="banner-texts text-center">
                            <h6 className="sub-title mb-2">Take the World’s Best Courses</h6>
                            <h2 className="banner-title mb-5">Learn With Us</h2>
                            <a href="#" className="btn btn-lg mt-2 banner-btn">Get started</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function PopularCourses() {
    return (
        <section className="popular-courses">
            <div className="section-padding">
                <div className="container">
                    <div className="top-content">
                        <div className="left-content float-left">
                            <h2 className="section-title">Popular courses</h2>
                            <p>Donec rutrum congue leo eget malesuada</p>
                        </div>
                        <div className="owl-controls float-right"></div>
                    </div>
                    <div className="course-items with-slider">
                        <div id="course-slider" className="course-slider owl-carousel">
                            <div className="item">
                                <div className="item-thumb">
                                    <img src="/images/popular/1.jpg" alt="Item Thumbnail" />
                                    <div className="avatar">
                                        <img className="rounded-circle" src="/images/avatar/1.png" alt="Avatar Image" />
                                    </div>
                                </div>
                                <div className="item-details">
                                    <h3 className="item-title"><a href="course-single-01.html">Python Bootcamp: Go from zero to hero in Python</a></h3>
                                    <span className="instructor"><a href="#">Justin Marks</a></span>
                                    <div className="details-bottom">
                                        <div className="course-price float-left"><span className="currency">$</span><span className="price">15.99</span></div>
                                        <div className="rating float-right">
                                            <input type="hidden" className="rating-tooltip-manual" data-filled="fas fa-star" data-empty="far fa-star" data-fractions="2" />
                                        </div>
                                    </div>
                                    <div className="item-meta">
                                        <span><i className="icons icon-people"></i> 129</span>
                                        <span><i className="icons icon-clock"></i> 22Hrs</span>
                                        <span><i className="icons icon-bubble"></i> 51</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-thumb">
                                    <img src="/images/popular/2.jpg" alt="Item Thumbnail" />
                                    <div className="avatar"><img className="rounded-circle" src="/images/avatar/2.png" alt="Avatar Image" /></div>
                                </div>
                                <div className="item-details">
                                    <h3 className="item-title"><a href="course-single-01.html">The Complete Web Developer Bootcamp</a></h3>
                                    <span className="instructor"><a href="#">Justin Marks</a></span>
                                    <div className="details-bottom">
                                        <div className="course-price float-left"><span className="currency">$</span><span className="price">15.99</span></div>
                                        <div className="rating float-right">
                                            <input type="hidden" className="rating-tooltip-manual" data-filled="fas fa-star" data-empty="far fa-star" data-fractions="2"/>
                                        </div>
                                    </div>
                                    <div className="item-meta">
                                        <span><i className="icons icon-people"></i> 129</span>
                                        <span><i className="icons icon-clock"></i> 22Hrs</span>
                                        <span><i className="icons icon-bubble"></i> 51</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-thumb">
                                    <img src="/images/popular/3.jpg" alt="Item Thumbnail" />
                                    <div className="avatar"><img className="rounded-circle" src="/images/avatar/3.png" alt="Avatar Image" /></div>
                                </div>
                                <div className="item-details">
                                    <h3 className="item-title"><a href="course-single-01.html">Complete Web Developer in 2018: Zero to Mastery</a></h3>
                                    <span className="instructor"><a href="#">Justin Marks</a></span>
                                    <div className="details-bottom">
                                        <div className="course-price float-left"><span className="currency">$</span><span className="price">15.99</span></div>
                                        <div className="rating float-right">
                                            <input type="hidden" className="rating-tooltip-manual" data-filled="fas fa-star" data-empty="far fa-star" data-fractions="2"/>
                                        </div>
                                    </div>
                                    <div className="item-meta">
                                        <span><i className="icons icon-people"></i> 129</span>
                                        <span><i className="icons icon-clock"></i> 22Hrs</span>
                                        <span><i className="icons icon-bubble"></i> 51</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-thumb">
                                    <img src="/images/popular/4.jpg" alt="Item Thumbnail" />
                                    <div className="avatar"><img className="rounded-circle" src="/images/avatar/4.png" alt="Avatar Image" /></div>
                                </div>
                                <div className="item-details">
                                    <h3 className="item-title"><a href="course-single-01.html">Course On: Complete Java Masterclass</a></h3>
                                    <span className="instructor"><a href="#">Justin Marks</a></span>
                                    <div className="details-bottom">
                                        <div className="course-price float-left"><span className="currency">$</span><span className="price">15.99</span></div>
                                        <div className="rating float-right">
                                            <input type="hidden" className="rating-tooltip-manual" data-filled="fas fa-star" data-empty="far fa-star" data-fractions="2"/>
                                        </div>
                                    </div>
                                    <div className="item-meta">
                                        <span><i className="icons icon-people"></i> 129</span>
                                        <span><i className="icons icon-clock"></i> 22Hrs</span>
                                        <span><i className="icons icon-bubble"></i> 51</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-thumb">
                                    <img src="/images/popular/7.jpg" alt="Item Thumbnail" />
                                    <div className="avatar"><img className="rounded-circle" src="/images/avatar/1.png" alt="Avatar Image" /></div>
                                </div>
                                <div className="item-details">
                                    <h3 className="item-title"><a href="course-single-01.html">Complete JavaScript Course 2018: Build Real Projects!</a></h3>
                                    <span className="instructor"><a href="#">Justin Marks</a></span>
                                    <div className="details-bottom">
                                        <div className="course-price float-left"><span className="currency">$</span><span className="price">15.99</span></div>
                                        <div className="rating float-right">
                                            <input type="hidden" className="rating-tooltip-manual" data-filled="fas fa-star" data-empty="far fa-star" data-fractions="2"/>
                                        </div>
                                    </div>
                                    <div className="item-meta">
                                        <span><i className="icons icon-people"></i> 129</span>
                                        <span><i className="icons icon-clock"></i> 22Hrs</span>
                                        <span><i className="icons icon-bubble"></i> 51</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Promotion() {
    return (
        <section className="promotion background-bg text-center" data-image-src="../images/bg1.jpg">
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

function CourseCategory() {
    return (
        <section className="course-category">
            <div className="section-padding">
                <div className="container">
                    <div className="top-content text-center">
                        <h2 className="section-title">Best categories</h2>
                        <p>Donec rutrum congue leo eget malesuada</p>
                    </div>
                    <div className="category-items">
                        <div className="item radius text-center">
                            <div className="item-thumb"><img className="radius" src="/images/category/1.jpg" alt="Item Thumbnail" /></div>
                            <div className="item-details">
                                <a href="#">
                                    <div className="item-texts">
                                        <i className="icon-layers"></i><span className="item-title">Design</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="item radius text-center">
                            <div className="item-thumb"><img className="radius" src="/images/category/2.jpg" alt="Item Thumbnail" /></div>
                            <div className="item-details">
                                <a href="#">
                                    <div className="item-texts">
                                        <i className="icon-chemistry"></i><span className="item-title">Development</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="item radius text-center">
                            <div className="item-thumb"><img className="radius" src="/images/category/3.jpg" alt="Item Thumbnail" /></div>
                            <div className="item-details">
                                <a href="#">
                                    <div className="item-texts">
                                        <i className="icon-puzzle"></i><span className="item-title">IT & Software</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="item radius text-center">
                            <div className="item-thumb"><img className="radius" src="/images/category/4.jpg" alt="Item Thumbnail" /></div>
                            <div className="item-details">
                                <a href="#">
                                    <div className="item-texts">
                                        <i className="icon-briefcase"></i><span className="item-title">Business</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="item radius text-center">
                            <div className="item-thumb"><img className="radius" src="/images/category/5.jpg" alt="Item Thumbnail" /></div>
                            <div className="item-details">
                                <a href="#">
                                    <div className="item-texts">
                                        <i className="icon-handbag"></i><span className="item-title">Marketing</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="item radius text-center">
                            <div className="item-thumb"><img className="radius" src="/images/category/6.jpg" alt="Item Thumbnail" /></div>
                            <div className="item-details">
                                <a href="#">
                                    <div className="item-texts">
                                        <i className="icon-layers"></i><span className="item-title">Lifestyle</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="item radius text-center">
                            <div className="item-thumb"><img className="radius" src="/images/category/7.jpg" alt="Item Thumbnail" /></div>
                            <div className="item-details">
                                <a href="#">
                                    <div className="item-texts">
                                        <i className="icon-chemistry"></i><span className="item-title">Photography</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="item radius text-center">
                            <div className="item-thumb"><img className="radius" src="/images/category/8.jpg" alt="Item Thumbnail" /></div>
                            <div className="item-details">
                                <a href="#">
                                    <div className="item-texts">
                                        <i className="icon-puzzle"></i><span className="item-title">Music</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="item radius text-center">
                            <div className="item-thumb"><img className="radius" src="/images/category/9.jpg" alt="Item Thumbnail" /></div>
                            <div className="item-details">
                                <a href="#">
                                    <div className="item-texts">
                                        <i className="icon-briefcase"></i><span className="item-title">Academics</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="item radius text-center">
                            <div className="item-thumb"><img className="radius" src="/images/category/10.jpg" alt="Item Thumbnail" /></div>
                            <div className="item-details">
                                <a href="#">
                                    <div className="item-texts">
                                        <i className="icon-handbag"></i><span className="item-title">Language</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="btn-container text-center bm8">
                        <a href="#" className="btn btn-lg section-btn">Browse all</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function RecentPosts() {
    return (
        <section className="recent-posts black-bg">
            <div className="section-padding">
                <div className="container">
                    <div className="top-content">
                        <div className="left-content float-left">
                            <h2 className="section-title">Recent Blog Posts</h2>
                            <p>Donec rutrum congue leo eget malesuada</p>
                        </div>
                        <div className="owl-controls float-right"></div>
                    </div>
                    <div id="post-slider" className="post-slider owl-carousel">
                        <div className="item">
                            <article className="post">
                                <div className="entry-thumbnail radius"><img src="/images/posts/1.jpg" alt="Post Thumbnail" /></div>
                                <div className="entry-content">
                                    <h3 className="entry-title"><a href="single.html">WordPress Theme Development Resources</a></h3>
                                    <div className="entry-meta">
                                        <span className="author"><i className="icon-user"></i> <a href="#">Anthony Doe</a></span>
                                        <span className="time"><i className="icon-calendar"></i> 26/05/2018</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="item">
                            <article className="post">
                                <div className="entry-thumbnail radius"><img src="/images/posts/2.jpg" alt="Post Thumbnail" /></div>
                                <div className="entry-content">
                                    <h3 className="entry-title"><a href="single.html">ow To Create A Local Business Directory Site In WordPress</a></h3>
                                    <div className="entry-meta">
                                        <span className="author"><i className="icon-user"></i> <a href="#">Anthony Doe</a></span>
                                        <span className="time"><i className="icon-calendar"></i> 26/05/2018</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="item">
                            <article className="post">
                                <div className="entry-thumbnail radius"><img src="/images/posts/3.jpg" alt="Post Thumbnail" /></div>
                                <div className="entry-content">
                                    <h3 className="entry-title"><a href="single.html">How To Tell If A Site Is WordPress Or Not</a></h3>
                                    <div className="entry-meta">
                                        <span className="author"><i className="icon-user"></i> <a href="#">Anthony Doe</a></span>
                                        <span className="time"><i className="icon-calendar"></i> 26/05/2018</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
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
                                        <h4 className="name"><a href="#">Julia Warren</a></h4>
                                        <span className="designation">Student</span>
                                    </div>
                                </div>
                                <div className="bottom-content">
                                    <span className="title">Awesome Learning Site</span>
                                    <p>
                                        The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="media">
                                    <img className="rounded-circle mr-3" src="/images/avatar/6.png" alt="Avatar Image" />
                                    <div className="media-body">
                                        <h4 className="name"><a href="#">Arthur Watson</a></h4>
                                        <span className="designation">Photographer</span>
                                    </div>
                                </div>
                                <div className="bottom-content">
                                    <span className="title">Awesome Learning Site</span>
                                    <p>
                                        What’s happened to me?” he thought. It wasn’t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="media">
                                    <img className="rounded-circle mr-3" src="/images/avatar/7.png" alt="Avatar Image" />
                                    <div className="media-body">
                                        <h4 className="name"><a href="#">Janet Alvarado</a></h4>
                                        <span className="designation">Student</span>
                                    </div>
                                </div>
                                <div className="bottom-content">
                                    <span className="title">Awesome Learning Site</span>
                                    <p>
                                        A collection of textile samples lay spread out on the table. Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.
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
            <PopularCourses />
            <Promotion />
            <CourseCategory />
            <RecentPosts />
            <Testimonial />
            <Footer />
        </div>
    );
}



