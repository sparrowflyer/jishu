import React from 'react';
import {Footer} from '../component/common/Footer.jsx';
import {Header} from '../component/common/Header.jsx';
import {Carousel} from '../component/Carousel.jsx';
import '../assets/style.css';
// import img from "./../assets/images/001.jpg";

export class HomePage extends React.Component {
    render() {
        return (
            <div className='home-contain'>
                <Header></Header>
                <Carousel></Carousel>
                <div>
                    <div className="stShow-title">
                        学生展示
                        <div className="stShow-subtitle">
                            Students show
                        </div>
                    </div>
                    <div className="cards-wrap">
                        <ul className="card-list">
                            <li>
                                <div className="person-pic">
                                    <img src={require("./../assets/images/001.jpg")} alt=""/>
                                    <div className="stu-desc">我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。</div>
                                </div>
                                <div className="person-name">
                                    谭敏仪
                                    <div className="person-uni">伯恩茅斯大学</div>
                                </div>
                            </li>
                            <li>
                                <div className="person-pic">
                                    <img src={require("./../assets/images/001.jpg")} alt=""/>
                                    <div className="stu-desc">我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。</div>
                                </div>
                                <div className="person-name">
                                    谭敏仪
                                    <div className="person-uni">伯恩茅斯大学</div>
                                </div>
                            </li>
                            <li>
                                <div className="person-pic">
                                    <img src={require("./../assets/images/001.jpg")} alt=""/>
                                    <div className="stu-desc">我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。</div>
                                </div>
                                <div className="person-name">
                                    谭敏仪
                                    <div className="person-uni">伯恩茅斯大学</div>
                                </div>
                            </li>
                            <li className="active">
                                <div className="person-pic">
                                    <img src={require("./../assets/images/001.jpg")} alt=""/>
                                    <div className="stu-desc">我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。</div>
                                </div>
                                <div className="person-name">
                                    谭敏仪
                                    <div className="person-uni">伯恩茅斯大学</div>
                                </div>
                            </li>
                            <li>
                                <div className="person-pic">
                                    <img src={require("./../assets/images/001.jpg")} alt=""/>
                                    <div className="stu-desc">我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。</div>
                                </div>
                                <div className="person-name">
                                    谭敏仪
                                    <div className="person-uni">伯恩茅斯大学</div>
                                </div>
                            </li>
                            <li>
                                <div className="person-pic">
                                    <img src={require("./../assets/images/001.jpg")} alt=""/>
                                    <div className="stu-desc">我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。</div>
                                </div>
                                <div className="person-name">
                                    谭敏仪
                                    <div className="person-uni">伯恩茅斯大学</div>
                                </div>
                            </li>
                            <li>
                                <div className="person-pic">
                                    <img src={require("./../assets/images/001.jpg")} alt=""/>
                                    <div className="stu-desc">我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。</div>
                                </div>
                                <div className="person-name">
                                    谭敏仪
                                    <div className="person-uni">伯恩茅斯大学</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="cards-more">查看更多</div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}