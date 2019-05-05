import React from 'react';
import '../assets/component.css';
import utils from '../utils/utils.jsx';

export class Footer extends React.Component {
    render() {
        return (
            <div className='footer-contain'>
                <ul className='footer-list'>
                    <li>平台介绍</li>
                    <li></li>
                    <li>疑惑解答</li>
                    <li></li>
                    <li>开课申请</li>
                    <li></li>
                    <li>博客规则</li>
                    <li></li>
                    <li>内容规则</li>
                    <li></li>
                    <li>募集课程</li>
                    <li></li>
                    <li>最新博客</li>
                    <li></li>
                    <li>关于我们</li>
                </ul>
                <ul className='footer-contact'>
                    <li>
                        {/*<img src={utils.resizeIcon("../assets/images/dianhua-2.png")} alt=""/>*/}
                        <img className="img-big" src={require("../assets/images/dianhua-2@2x.png")} alt=""/>
                        <img className="img-small" src={require("../assets/images/dianhua-2.png")} alt=""/>
                        +86 137 7713 3446
                    </li>
                    <li></li>
                    <li>
                        {/*<img src={utils.resizeIcon("../assets/images/youxiang.png")} alt=""/>*/}
                        <img className="img-big" src={require("../assets/images/youxiang@2x.png")} alt=""/>
                        <img className="img-small" src={require("../assets/images/youxiang.png")} alt=""/>
                        jishugo@unclejee.cn
                    </li>
                </ul>
                <div className='footer-line'></div>
                <div className='footer-desc'>
                    Copyright &#169; 2018 unclejee.com, All Rights Reserved stat
                </div>
            </div>
        );
    }
}