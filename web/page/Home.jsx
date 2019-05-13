import React from 'react';
import {Footer} from '../component/common/Footer.jsx';
import {Header} from '../component/common/Header.jsx';
import {Carousel} from '../component/Carousel.jsx';
import '../assets/style.css';
// import img from "./../assets/images/001.jpg";
import { Link } from 'react-router-dom';

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList:[]
        };
    }
    componentDidMount() {
        this.setState({ studentList: [] })
    }

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
                                    {/*谭敏仪*/}
                                    <Link to="/StudentDetail">谭敏仪</Link>
                                    <div className="person-uni"><Link to="/collegeDetail">伯恩茅斯大学</Link></div>
                                </div>
                            </li>
                            <li>
                                <div className="person-pic">
                                    <img src={require("./../assets/images/001.jpg")} alt=""/>
                                    <div className="stu-desc">我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。</div>
                                </div>
                                <div className="person-name">
                                    <Link to="/StudentDetail">谭敏仪</Link>
                                    <div className="person-uni"><Link to="/collegeDetail">伯恩茅斯大学</Link></div>
                                </div>
                            </li>
                            <li>
                                <div className="person-pic">
                                    <img src={require("./../assets/images/001.jpg")} alt=""/>
                                    <div className="stu-desc">我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。</div>
                                </div>
                                <div className="person-name">
                                    <Link to="/StudentDetail">谭敏仪</Link>
                                    <div className="person-uni"><Link to="/collegeDetail">伯恩茅斯大学</Link></div>
                                </div>
                            </li>
                            <li className="active">
                                <div className="person-pic">
                                    <img src={require("./../assets/images/001.jpg")} alt=""/>
                                    <div className="stu-desc">我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。</div>
                                </div>
                                <div className="person-name">
                                    <Link to="/StudentDetail">谭敏仪</Link>
                                    <div className="person-uni"><Link to="/collegeDetail">伯恩茅斯大学</Link></div>
                                </div>
                            </li>
                            <li>
                                <div className="person-pic">
                                    <img src={require("./../assets/images/001.jpg")} alt=""/>
                                    <div className="stu-desc">我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。</div>
                                </div>
                                <div className="person-name">
                                    <Link to="/StudentDetail">谭敏仪</Link>
                                    <div className="person-uni"><Link to="/collegeDetail">伯恩茅斯大学</Link></div>
                                </div>
                            </li>
                            <li>
                                <div className="person-pic">
                                    <img src={require("./../assets/images/001.jpg")} alt=""/>
                                    <div className="stu-desc">我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。</div>
                                </div>
                                <div className="person-name">
                                    <Link to="/StudentDetail">谭敏仪</Link>
                                    <div className="person-uni"><Link to="/collegeDetail">伯恩茅斯大学</Link></div>
                                </div>
                            </li>
                            <li>
                                <div className="person-pic">
                                    <img src={require("./../assets/images/001.jpg")} alt=""/>
                                    <div className="stu-desc">我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。</div>
                                </div>
                                <div className="person-name">
                                    <Link to="/StudentDetail">谭敏仪</Link>
                                    <div className="person-uni">
                                        <Link to="/collegeDetail"><Link to="/collegeDetail">伯恩茅斯大学</Link></Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="ta-center">
                        <button className="cards-more">
                            <Link to="/college">查看更多</Link>
                        </button>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}