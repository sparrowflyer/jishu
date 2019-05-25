import React from 'react';
import PropTypes from 'prop-types';

export class ShowMoreOrderDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            orderItem:{},
            showMoreModal:false,
            // shoeMoreData: {}
        }
    }
    showMore(idx){
        this.setState({
            showMoreModal:true
        })
    }

    render(){
        return (
            <div className="order-contain">
                <div className="order-title">
                    <span>20190523001</span>
                    <span>2019.05.23 18:00</span>
                </div>
                <div className="order-content">
                    <div>
                        <span className="line-label">买家姓名</span>
                        <span className="line-content">阎杰</span>
                    </div>
                    <div className="order-question-contain">
                        <span className="line-label">买家问题</span>
                        <ul>
                            <li className="order-question">问题占位符问题占位符问题占位符问题占位符</li>
                            <li className="order-question">问题占位符问题占位符问题占位符问题占位符</li>
                            <li className="order-question">问题占位符问题占位符问题占位符问题占位符</li>
                            <li className="question-forMore" onClick={this.showMore.bind(this.idx)}>剩余两条内容，点击查看详情</li>
                        </ul>
                    </div>
                    <div className="last-item">
                        <span className="line-label">订单金额 </span>
                        <span className="line-content">¥52</span>
                    </div>
                </div>
                <button>待评价</button>
            </div>
        )
    }
}
ShowMoreOrderDetail.propTypes = {
    parent: PropTypes.oneOf(['PersonalCenter', 'StudentDetail']),
    isWeb: PropTypes.bool
};