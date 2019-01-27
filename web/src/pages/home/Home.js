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

function RecentPosts() {
    return (
        <section className="popular-courses">
            <div className="section-padding">
                <div className="container">
                    <div className="top-content">
                        <div className="left-content float-left">
                            <h2 className="section-title">最近更新的博客论坛</h2>
                            <p>你与大咖近在咫尺</p>
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
                        <h2 className="section-title">课程模块</h2>
                        <p>正在开设的课程模块</p>
                    </div>
                    <div className="category-items">
                        <div className="item radius text-center">
                            <div className="item-thumb"><img className="radius" src="/images/category/1.jpg" alt="Item Thumbnail" /></div>
                            <div className="item-details">
                                <a href="#">
                                    <div className="item-texts">
                                        <i className="icon-layers"></i><span className="item-title">技能</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/*<div className="item radius text-center">*/}
                            {/*<div className="item-thumb"><img className="radius" src="/images/category/2.jpg" alt="Item Thumbnail" /></div>*/}
                            {/*<div className="item-details">*/}
                                {/*<a href="#">*/}
                                    {/*<div className="item-texts">*/}
                                        {/*<i className="icon-chemistry"></i><span className="item-title">Development</span>*/}
                                    {/*</div>*/}
                                {/*</a>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="item radius text-center">*/}
                            {/*<div className="item-thumb"><img className="radius" src="/images/category/3.jpg" alt="Item Thumbnail" /></div>*/}
                            {/*<div className="item-details">*/}
                                {/*<a href="#">*/}
                                    {/*<div className="item-texts">*/}
                                        {/*<i className="icon-puzzle"></i><span className="item-title">IT & Software</span>*/}
                                    {/*</div>*/}
                                {/*</a>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="item radius text-center">*/}
                            {/*<div className="item-thumb"><img className="radius" src="/images/category/4.jpg" alt="Item Thumbnail" /></div>*/}
                            {/*<div className="item-details">*/}
                                {/*<a href="#">*/}
                                    {/*<div className="item-texts">*/}
                                        {/*<i className="icon-briefcase"></i><span className="item-title">商业</span>*/}
                                    {/*</div>*/}
                                {/*</a>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="item radius text-center">*/}
                            {/*<div className="item-thumb"><img className="radius" src="/images/category/5.jpg" alt="Item Thumbnail" /></div>*/}
                            {/*<div className="item-details">*/}
                                {/*<a href="#">*/}
                                    {/*<div className="item-texts">*/}
                                        {/*<i className="icon-handbag"></i><span className="item-title">Marketing</span>*/}
                                    {/*</div>*/}
                                {/*</a>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        <div className="item radius text-center">
                            <div className="item-thumb"><img className="radius" src="/images/category/6.jpg" alt="Item Thumbnail" /></div>
                            <div className="item-details">
                                <a href="#">
                                    <div className="item-texts">
                                        <i className="icon-layers"></i><span className="item-title">生活</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="item radius text-center">
                            <div className="item-thumb"><img className="radius" src="/images/category/7.jpg" alt="Item Thumbnail" /></div>
                            <div className="item-details">
                                <a href="#">
                                    <div className="item-texts">
                                        <i className="icon-chemistry"></i><span className="item-title">摄影</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="item radius text-center">
                            <div className="item-thumb"><img className="radius" src="/images/category/8.jpg" alt="Item Thumbnail" /></div>
                            <div className="item-details">
                                <a href="#">
                                    <div className="item-texts">
                                        <i className="icon-puzzle"></i><span className="item-title">音乐</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/*<div className="item radius text-center">*/}
                            {/*<div className="item-thumb"><img className="radius" src="/images/category/9.jpg" alt="Item Thumbnail" /></div>*/}
                            {/*<div className="item-details">*/}
                                {/*<a href="#">*/}
                                    {/*<div className="item-texts">*/}
                                        {/*<i className="icon-briefcase"></i><span className="item-title">Academics</span>*/}
                                    {/*</div>*/}
                                {/*</a>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        <div className="item radius text-center">
                            <div className="item-thumb"><img className="radius" src="/images/category/10.jpg" alt="Item Thumbnail" /></div>
                            <div className="item-details">
                                <a href="#">
                                    <div className="item-texts">
                                        <i className="icon-handbag"></i><span className="item-title">语言</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="btn-container text-center bm8">
                        <a href="course" className="btn btn-lg section-btn">查看全部课程</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function PopularCourses() {
    return (
        <section className="recent-posts black-bg">
            <div className="section-padding">
                <div className="container">
                    <div className="top-content">
                        <div className="left-content float-left">
                            <h2 className="section-title">最新课程</h2>
                            <p>正在进行中。。。</p>
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



