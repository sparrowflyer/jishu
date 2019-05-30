import React from 'react';
import { Footer } from '../component/common/Footer.jsx';
import { Carousel } from '../component/Carousel.jsx';
import { SubTitle } from '../component/SubTitle.js';
import { Header } from '../component/common/Header.jsx';
import { Link } from 'react-router-dom';

const students = [
    {
        id: 32,
        name: '李孚',
        university: "墨尔本大学",
        img: 'http://cdn.unclejee.cn/20190526222144_229.jpg',
        desc: '自己DIY拿下爱大、曼大、墨大等20所院校offer'
    }, {
        id: 27,
        name: '杨Z',
        university: '伦敦大学学院',
        img: 'http://cdn.unclejee.cn/20190526230610_102.jpeg',
        desc: '五年英国留学，熟悉英及英属地各大名牌院校，了解英国和欧洲'
    }, {
        id: 34,
        name: '夏同学',
        university: '贝尔法斯特大学',
        img: 'http://cdn.unclejee.cn/20190527170053_789.jpg',
        desc: '英国留学及申请经验，欧洲多国自由行旅游分享及规划'
    }, {
        id: 33,
        name: 'William Wen',
        university: "卡斯商学院",
        img: 'http://cdn.unclejee.cn/20190118215849_614.jpg',
        desc: '近六年英国留学经历，熟知英国各大名牌院校申请流程。熟悉曼彻斯特与伦敦两个城市。'
    }, {
        id: 18,
        name: '米歇尔',
        university: '牛津大学',
        img: 'http://cdn.unclejee.cn/20190526142642_613.jpg',
        desc: '爱音乐，爱唱歌，对各种乐器都有兴趣'
    }, {
        id: 22,
        name: 'Cheryl_Yang',
        university: '牛津大学',
        img: 'http://cdn.unclejee.cn/20190527233301_603.jpg',
        desc: '社会科学，应用数学，道教修养，理论物理，以及各种奇奇怪怪的哲学问题'
    }
];

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth,
            studentList: students
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateDimensions() {
        var width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
        this.setState((state) => {
            return { ...state, width };
        });
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    render() {
        const studentTitleSpacing = this.state.width > 768 ? 60 : 20;
        return (
            <div className="container-with-footer">
                <div>
                    <Header />
                    <Carousel />
                    <SubTitle cn="学生展示" en="Student Show" top={studentTitleSpacing} bottom={studentTitleSpacing} />
                    <div className="home-students">
                        {
                            this.state.studentList.slice(0, (this.state.width >768 ? 6 : 4))
                                .map((student) => {
                                    return (
                                        <div className="home-student-container" key={student.id}>
                                            <Link
                                                className="student-image"
                                                style={{backgroundImage: 'url(' + student.img +')'}}
                                                to={'/StudentDetail/' + student.id}>
                                                <div className="student-desc">{student.desc}</div>
                                            </Link>
                                            <Link className="student-name" to={'/StudentDetail/' + student.id}>{student.name}</Link>
                                            <Link className="student-college" to={'/StudentDetail/' + student.id}>{student.university}</Link>
                                        </div>
                                    );
                                })
                        }
                    </div>
                    <div className="home-see-more-container">
                        <Link to="/college" className="home-see-more">查看更多</Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}