import React from 'react';
import {Footer} from '../component/common/Footer.jsx';
import {Header} from '../component/common/Header.jsx';
import {Carousel} from '../component/Carousel.jsx';
import '../assets/style.css';
import { Link } from 'react-router-dom';

const students = [{
    name:"这是个假数据",
    university: "伯恩茅斯大学",
    img:"http://cdn.unclejee.cn/20190118215849_614.jpg",
    desc:"我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。",
},{
    name:"这是个假数据",
    university: "伯恩茅斯大学",
    img:"http://cdn.unclejee.cn/20190118215849_614.jpg",
    desc:"我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。",
},{
    name:"这是个假数据",
    university: "伯恩茅斯大学",
    img:"http://cdn.unclejee.cn/20190118215849_614.jpg",
    desc:"我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。",
},{
    name:"这是个假数据",
    university: "伯恩茅斯大学",
    img:"http://cdn.unclejee.cn/20190118215849_614.jpg",
    desc:"我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。",
},{
    name:"这是个假数据",
    university: "伯恩茅斯大学",
    img:"http://cdn.unclejee.cn/20190118215849_614.jpg",
    desc:"我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。",
}];

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth,
            studentList: students
        };
    }
    componentDidMount() {}

    render() {
        const {studentList,width} = this.state;
       let idx = width > 768 ? 7 : 5 ;
       let studentArr = studentList.slice(0,idx);
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
                            {studentArr.map(stu => {
                                return <li>
                                    <div className="person-pic">
                                        <img src={stu.img} alt=""/>
                                        <div className="stu-desc">{stu.desc}</div>
                                    </div>
                                    <div className="person-name">
                                        <Link to="/StudentDetail">{stu.name}</Link>
                                        <div className="person-uni"><Link to="/collegeDetail">{stu.university}</Link></div>
                                    </div>
                                 </li>
                            })}
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