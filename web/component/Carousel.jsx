import React from 'react';
import '../assets/component.css';

export class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.resize = this.resize.bind(this);
        this.state = {
            screenSize: "1024"
        }
    }
    resize (){
       this.setState({screenSize: document.body.style.width});
       console.log("screenSize",this.state.screenSize);
    }

    render() {
        return (
            <div className="carousel-wrap">
                {/* 轮播箭头 */}
                {
                    this.state.screenSize > 1023 ? <p className="next-btn">
                        <img src={require("./../assets/images/r@2x.png")} alt=""/>
                        <img className="active" src={require("./../assets/images/rhover@2x.png")} alt=""/>
                    </p> : <p className="next-btn">
                        <img src={require("./../assets/images/r.png")} alt=""/>
                        <img className="active" src={require("./../assets/images/rhover.png")} alt=""/>
                    </p>
                }
                {
                    this.state.screenSize > 1023 ? <p className="pre-btn">
                        <img src={require("./../assets/images/l@2x.png")} alt=""/>
                        <img className="active" src={require("./../assets/images/lhover@2x.png")} alt=""/>
                    </p> : <p className = "pre-btn">
                        <img src={require("./../assets/images/l.png")} alt=""/>
                        <img className="active" src={require("./../assets/images/lhover.png")} alt=""/>
                    </p>
                }
                {/* 轮播图片列表 */}
                <ul className="img-list">
                    <li>
                        <img src={require("./../assets/images/20180202135334633.jpg")} alt=""/>
                    </li>
                </ul>
                <div className="circle-btn">
                    <button></button>
                    <button></button>
                    <button className="active"></button>
                    <button></button>
                    <button></button>
                </div>

            </div>
        );
    }
}