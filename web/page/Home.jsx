import React from 'react';
import { Footer } from '../component/common/Footer.jsx';
import { Carousel } from '../component/home/Carousel.jsx';
import { SubTitle } from '../component/SubTitle.js';
import { Header } from '../component/common/Header.jsx';
import { Link } from 'react-router-dom';

const students = [
    {
        name: '张三',
        university: "伯恩茅斯大学",
        img: './image/temp/student1.png',
        desc: '我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。'
    }, {
        name: '里斯本',
        university: '爱丁堡大学',
        img: './image/temp/student2.png',
        desc: '分享分享分享分享分享分享分享'
    }, {
        name: '胡汉',
        university: '凯里顿大学',
        img: './image/temp/student3.png',
        desc: '我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。'
    }, {
        name: '莉丝',
        university: "牛津大学",
        img: './image/temp/student1.png',
        desc: '生活的充实生活的充实生活的充实生活的充实生活的充实生活的充实生活的充实生活的充实生活的充实'
    }, {
        name: '郝池',
        university: '爱丁堡大学',
        img: './image/temp/student2.png',
        desc: '我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。'
    }, {
        name: '黎平',
        university: '凯里顿大学',
        img: './image/temp/student3.png',
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
    }

    render() {
        const {studentList,width} = this.state;
        let idx = width > 768 ? 7 : 5 ;
        let studentArr = studentList.slice(0,idx);
        return (
            <div>
                <Header />
                <Carousel />
                <SubTitle cn="学生展示" en="Student Show" top={20} bottom={20} />

                <div style={{textAlign: 'center'}}>
                    <Link to="/college" className="home-see-more">查看更多</Link>
                </div>
                <Footer />
            </div>
        );
    }
}