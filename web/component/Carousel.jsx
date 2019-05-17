import React from 'react';
import '../assets/component.css';

export class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.checkItem = this.checkItem.bind(this);
        this.clickNext = this.clickNext.bind(this);
        this.state = {
            screenSize: document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth,
            activeIndex: 2,
            // count:0,//跑动的次数
            // isGo:false,//动画的执行方向
            // timer:null,//定义计时器对象
            // img_list:{},
            // item_wrap:{},
            bannerList:[{
                title:"Efficient interaction",
                time:"2019.04.16-2019.4.20",
                desc:"Guiding students and imparting their own learning experience and methods",
                img:"http://cdn.unclejee.cn/20190128183708_781.jpg"
             },
            {
                title:"Efficient interaction",
                time:"2019.04.16-2019.4.20",
                desc:"Guiding students and imparting their own learning experience and methods",
                img:"http://cdn.unclejee.cn/20190118215849_614.jpg"
            },
            {
                title:"Efficient interaction",
                time:"2019.04.16-2019.4.20",
                desc:"Guiding students and imparting their own learning experience and methods",
                img:"http://cdn.unclejee.cn/20190128183708_781.jpg"
            },
            {
                title:"Efficient interaction",
                time:"2019.04.16-2019.4.20",
                desc:"Guiding students and imparting their own learning experience and methods",
                img:"http://cdn.unclejee.cn/20190118215849_614.jpg"
            }],
        }
    }
    componentDidMount () {
        /*获取ul元素*/
        // let img_list = document.getElementsByClassName("img-list")[0];
        // //获取所有的li图片元素
        // let item_wrap = document.getElementsByClassName("item-wrap");
        // console.log(typeof img_list,img_list, typeof item_wrap,item_wrap);
        // console.log(this.state.screenSize)
        // this.setState({
        //     item_wrap: item_wrap,
        //     img_list:img_list,
        // })
    }
    checkItem(i){
        this.setState({
            activeIndex: i
        });
    }
    clickNext(type){
        let {activeIndex,bannerList} = this.state,
            len = bannerList.length;
        if(type==="next") {
            activeIndex = (activeIndex + 1 >= len) ? 0 : activeIndex + 1;
        } else {
            activeIndex = (activeIndex - 1 < 0) ? len-1 : activeIndex - 1;
        }
        this.setState({
            activeIndex: activeIndex
        })
    }


    render() {
        const {bannerList,activeIndex,screenSize} = this.state;
        let len = bannerList.length;
        const circleBtns = [];
        for(let i=0;i<len;i++){
            circleBtns.push(
                <button key={i} onClick={this.checkItem.bind(this,i)} className={activeIndex===i?"active":""}></button>
            )
        }
        return (
            <div className="carousel-wrap">
                {/* 轮播箭头 */}
                {/*{*/}
                    {/*this.state.screenSize > 1023 ? <p className="next-btn">*/}
                        {/*<img src={require("./../assets/images/r@2x.png")} alt=""/>*/}
                        {/*<img className="active" src={require("./../assets/images/rhover@2x.png")} alt=""/>*/}
                    {/*</p> : */}
                    <p className="arrows next-btn" onClick={this.clickNext.bind(this,"next")}>
                        <img src={require("./../assets/images/r.png")} alt=""/>
                        <img className="active" src={require("./../assets/images/rhover.png")} alt=""/>
                    </p>
                {/*}*/}
                {/*{*/}
                    {/*this.state.screenSize > 1023 ? <p className="pre-btn">*/}
                        {/*<img src={require("./../assets/images/l@2x.png")} alt=""/>*/}
                        {/*<img className="active" src={require("./../assets/images/lhover@2x.png")} alt=""/>*/}
                    {/*</p> : */}
                    <p className = "arrows pre-btn" onClick={this.clickNext.bind(this,"pre")}>
                        <img src={require("./../assets/images/l.png")} alt=""/>
                        <img className="active" src={require("./../assets/images/lhover.png")} alt=""/>
                    </p>
                {/*}*/}
                {/* 轮播图片列表 */}
                <ul className="img-list" style={{width: screenSize*len,left: -activeIndex*screenSize}}>
                    {bannerList.map((item,idx) => {
                        return <li className="item-wrap" style={{width:screenSize}} key={idx}>
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
                    {circleBtns}
                </div>

            </div>
        );
    }
}