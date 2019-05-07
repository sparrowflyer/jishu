import React from 'react';
import {Footer} from '../component/common/Footer.jsx';
import {Header} from '../component/common/Header.jsx';
import '../assets/style.css';
import { Link } from 'react-router-dom';
import BacgroundImg from "./../assets/images/20180202135334633.jpg";

let unibannerBg = {
    backgroundImage: `url(${BacgroundImg})`
};

export class UniversityDetail extends React.Component {
    render() {

        return (
            <div>
                <Header></Header>
                <div className="uni-banner" style={unibannerBg}>
                    <div className="uni-name">圣安德鲁斯大学</div>
                    <div className="uni-ename">The University of St Andrews</div>
                    <div className="uni-desc">
                        <img className="left-mark" src={require("./../assets/images/左引号@2x.png")} alt=""/>
                        <span className="nui-text">
                            圣安德鲁斯大学 （University of St Andrews），始建于1413年，世界百强名校，英国老牌名校，坐落于美丽的高尔夫球发源地——英国苏格兰东海岸古镇圣安德鲁斯，是苏格兰历史最深远的大学，同时也是英语世界中建校历史仅次于牛津剑桥的第三古老的大学。
                        </span>
                        <img className="right-mark" src={require("./../assets/images/右引号@2x.png")} alt=""/>
                        <div className="clearfloat"></div>
                    </div>
                </div>
                <p className="stShow-title">
                    学生展示
                    <div className="stShow-subtitle">
                        Students show
                    </div>
                </p>
                <div className="stus-container">
                    <div className="stu-info fl">
                        <img className="left-pic" src={require("./../assets/images/001.jpg")} alt=""/>
                        <div className="right-info">
                            <div className="info-name">谭敏仪</div>
                            <div className="info-intro subject">地理与地球科学</div>
                            <div className="info-intro subject-en">School of Geography & Geosciences</div>
                            <div className="info-intro intro">我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。</div>
                            <div className="info-data fl">
                                <div className="info-name">120</div>
                                <div className="info-intro">粉丝数</div>
                            </div>
                            <div className="fl">
                                <div className="info-name">89%</div>
                                <div className="info-intro">通过率</div>
                            </div>
                            <div className="corner-fraction">4.8</div>
                        </div>
                    </div>
                    <div className="stu-info fl">
                        <img className="left-pic" src={require("./../assets/images/001.jpg")} alt=""/>
                        <div className="right-info">
                            <div className="info-name">谭敏仪</div>
                            <div className="info-intro subject">地理与地球科学</div>
                            <div className="info-intro subject-en">School of Geography & Geosciences</div>
                            <div className="info-intro intro">我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。</div>
                            <div className="info-data fl">
                                <div className="info-name">120</div>
                                <div className="info-intro">粉丝数</div>
                            </div>
                            <div className="fl">
                                <div className="info-name">89%</div>
                                <div className="info-intro">t通过率</div>
                            </div>
                            <div className="corner-fraction">4.8</div>
                        </div>
                    </div>
                    <div className="clearfloat"></div>
                </div>
                <Footer></Footer>
            </div>
        )

    }
}