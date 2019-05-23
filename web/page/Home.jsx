import React from 'react';
import { Footer } from '../component/common/Footer.jsx';
import { Carousel } from '../component/Carousel.jsx';
import { SubTitle } from '../component/SubTitle.js';
import { Header } from '../component/common/Header.jsx';
import { Link } from 'react-router-dom';

const students = [
    {
        id: 1,
        name: '张三',
        university: "伯恩茅斯大学",
        img: './image/temp/student1.jpg',
        desc: '我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。'
    }, {
        id: 2,
        name: '里斯本',
        university: '爱丁堡大学',
        img: './image/temp/student2.jpg',
        desc: '分享分享分享分享分享分享分享'
    }, {
        id: 3,
        name: '胡汉',
        university: '凯里顿大学',
        img: './image/temp/student3.jpg',
        desc: '我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。'
    }, {
        id: 4,
        name: '莉丝',
        university: "牛津大学",
        img: './image/temp/student1.jpg',
        desc: '生活的充实生活的充实生活的充实生活的充实生活的充实生活的充实生活的充实生活的充实生活的充实'
    }, {
        id: 5,
        name: '郝池',
        university: '爱丁堡大学',
        img: './image/temp/student2.jpg',
        desc: '我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。'
    }, {
        id: 6,
        name: '黎平',
        university: '凯里顿大学',
        img: './image/temp/student3.jpg',
        desc: '我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。'
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