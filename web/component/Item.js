import React from 'react';

export class Item extends React.Component {
    render() {
        return (
            <div className="item-container">
                <div className="image-container">
                    <div className="image-container_bottom">2019.05.01 18:00</div>
                </div>
                <div className="word-container">
                    <div className="word-desc">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</div>
                    <div className="word-note">
                        <span className="jee-thumb-up title"></span>
                        <span className="value">21.2w</span>
                        <span className="jee-star title"></span>
                        <span className="value">602</span>
                        <span className="jee-comment title"></span>
                        <span>87</span>
                    </div>
                </div>
            </div>
        );
    }
}
