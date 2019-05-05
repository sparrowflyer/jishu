import React from 'react';
import { Avator as AvatorWeb } from '../component/Avator/Web.js';
import { Avator as AvatorMobile } from '../component/Avator/Mobile.js';
import { Item } from '../component/Item.js';

const test_tabTitles = ['粉丝列表','我的关注','我的订单','我的课程','我的帖子','我的收藏'];
const contents = [0,1,2,3,4];

export class PersonalCenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    updateDimensions() {
        var width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
        this.setState({ width });
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
    render() {
        return (
            <div>
                { this.state.width > 768 ? <AvatorWeb /> : <AvatorMobile /> }
                <div className="personal-center_tab-title-container">
                    {
                        test_tabTitles.map((title, index) => {
                            return (
                                <span key={title} className={index === 0 ? 'tab-title__selected' : 'tab-title'}>{title}</span>
                            );
                        })
                    }
                </div>
                <div className="personal-center-content">
                    {
                        contents.map((content, index) => {
                            return (
                                <Item key={index} />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
