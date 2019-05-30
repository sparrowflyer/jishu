import React from 'react';

export class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            // imgList: ['./image/temp/carousel.png', './image/temp/personalCenter_bg.png', './image/temp/studentDetail_bg.png']
            imgList: [ './image/temp/join.jpeg','./image/temp/jianjie2.png','./image/temp/jianjie.jpeg']

        };
        this.timer = null;
        this.createTimer = this.createTimer.bind(this);
        this.removeTimer = this.removeTimer.bind(this);
    }
    createTimer() {
        if (this.timer) { return; }
        this.timer = setInterval(() => {
            let { currentIndex, imgList } = this.state;
            if (++currentIndex >= imgList.length) currentIndex = 0;
            this.setState((state) => {
                return {
                    ...state,
                    currentIndex
                }
            })
        }, 6000);
    }
    removeTimer() {
        clearInterval(this.timer);
        this.timer = null;
    }
    componentDidMount() {
        this.createTimer();
    }
    componentWillUnmount() {
        this.removeTimer();
    }
    selectImage(currentIndex){
        this.setState((state) => {
            return {
                ...state,
                currentIndex
            }
        });
    }
    go(isLeft) {
        let { currentIndex, imgList } = this.state;
        const len = imgList.length;
        if (isLeft) {
            if (--currentIndex < 0) currentIndex = len - 1;
        } else {
            if (++currentIndex >= len) currentIndex = 0;
        }
        this.setState((state) => {
            return {
                ...state,
                currentIndex
            }
        })
    }
    render() {
        return (
            <div className="home-carousel-container" onMouseEnter={this.removeTimer} onMouseLeave={this.createTimer}>
                <div className="home-carousel-image" style={{backgroundImage: `url(${this.state.imgList[this.state.currentIndex]})`}}>
                </div>
                <button className="left-btn" onClick={this.go.bind(this, true)}></button>
                <button className="right-btn" onClick={this.go.bind(this, false)}></button>
                <div className="home-carousel-btns">
                    {
                        this.state.imgList.map((btn, index) => (
                                <button key={index} onClick={this.selectImage.bind(this, index)} className={this.state.currentIndex === index ? 'selected' : ''}></button>
                            )
                        )
                    }
                </div>
            </div>
        )
    }
}