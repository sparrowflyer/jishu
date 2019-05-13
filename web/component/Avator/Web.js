import React from 'react';

export function Avator(props) {
    props.headImage && props.
    return (
        <div>
            <div className="avator_bg"></div>
            <div className="avator" style={props.headImage || {backgroundImage: 'htt'}}>
                <span className="avator_note">4.7</span>
            </div>
            <div className="user">
                <div className="user_name">Robert</div>
                <div className="user_know-btn">认识他</div>
                { /* <div className="jee-edit user_edit-icon"></div> */ }
            </div>
            <div className="school">圣安得鲁斯大学</div>
            <div className="desc-container">
                <span className="desc">我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。</span>
            </div>
            <div className="num-container">
                <div className="num-item">
                    <div className="num-item_value">120</div>
                    <div className="num-item_title">粉丝数</div>
                </div>
                <div className="num-item">
                    <div className="num-item_value">10</div>
                    <div className="num-item_title">课程数</div>
                </div>
                <div className="num-item">
                    <div className="num-item_value">88%</div>
                    <div className="num-item_title">通过率</div>
                </div>
            </div>
        </div>
    );
}
