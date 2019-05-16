import React from 'react';
import '../assets/component.css';

export class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.resize = this.resize.bind(this);
        this.state = {
            width: document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth,
            screenSize: "1024",
            activeIndex: 2,
            bannerList:[{
                title:"Efficient interaction",
                time:"2019.04.16-2019.4.20",
                desc:"Guiding students and imparting their own learning experience and methods",
                img:"http://cdn.unclejee.cn/20190128183708_781.jpg"
            }],
        }
    }
    resize (){
       this.setState({screenSize: document.body.style.width});
       console.log("screenSize",this.state.screenSize);
    }
    checkItem(i){
        this.setState({
            activeIndex: i
        });
    }

    render() {
        const {bannerList,activeIndex,width} = this.state;
        let len = bannerList.length;
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
                <ul className="img-list" style={"width:" + width * len + "px"}>
                    {bannerList.forEach((item,idx) => {
                        return <li className="item-wrap" key={idx}>
                            <div className="itemBg-wrap">
                                <img src={item.img} alt=""/>
                            </div>
                            <div className="itemCnt-wrap">
                                <div className="item-title">{item.title}</div>
                                <div className="item-time">{item.time}</div>
                                <div className="item-desc">{item.desc}</div>
                            </div>

                        </li>
                    })
                    }
                </ul>
                <div className="circle-btn">
                    {imgList.forEach((item,idx) => {
                        <button onClick={this.checkItem(idx)} className={activeIndex===idx?"active":""}></button>
                    })}
                </div>

            </div>
        );
    }
}