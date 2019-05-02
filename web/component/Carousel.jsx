import React from 'react';
import '../assets/component.css';

export class Carousel extends React.Component {
    render() {
        return (
            <div className="carousel-wrap">
                {/* 轮播箭头 */}
                <p class="next-btn"></p>
                <p class="pre-btn"></p>
                {/* 轮播图片列表 */}
                <ul className="img-list">
                    <li>
                        <img src={require("./../assets/images/maxresdefault.jpg")} alt=""/>
                    </li>
                </ul>
                <div className="circle-btn">
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>

            </div>
        );
    }
}