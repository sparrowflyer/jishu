import React from 'react';

const test_tabTitles = ['粉丝列表','我的关注','我的订单','我的课程','我的帖子','我的收藏'];

export class PersonalCenter extends React.Component {
    render() {
        return (
            <div>
                <div className="personal-center_tab-title-container">
                    {
                        test_tabTitles.map((title, index) => {
                            return (
                                <span key={title} className={index === 0 ? 'tab-title__selected' : 'tab-title'}>{title}</span>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
