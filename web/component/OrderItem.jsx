import React from 'react';
import PropTypes from 'prop-types';

export class OrderItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            orderItem:{},
            showMoreModal:false,
            // shoeMoreData: {}
        }
        this.showMore =this.showMore.bind(this);
    }
    showMore(idx){
        this.props.clickMore(idx)
    }

    render(){
        return (
            <div className="order-contain">
                <div className="order-title">
                    <span>20190523001</span>
                    <span>2019.05.23 18:00</span>
                </div>
                <div className="order-content">
                    <div className="flex-row-start">
                        <div className="line-label">买家姓名</div>
                        <div className="line-content">阎杰</div>
                    </div>
                    <div className="order-question-contain">
                        <div className="line-label">买家问题</div>
                        <ul>
                            <li className="order-question">问题占位符问题占位符问题占位符问题占位符</li>
                            <li className="order-question">问题占位符问题占位符问题占位符问题占位符</li>
                            <li className="question-forMore" onClick={this.showMore.bind(this,this.props.key)}>剩余两条内容，点击查看详情</li>
                        </ul>
                    </div>
                    <div className="last-item flex-row-start">
                        <div className="line-label">订单金额 </div>
                        <div className="line-content">¥52</div>
                    </div>
                </div>
                <button className="order-evaluate">待评价</button>
                <button className="order-finish">待评价</button>
            </div>
        )
    }
}
OrderItem.propTypes = {
    // parent: PropTypes.oneOf(['PersonalCenter', 'StudentDetail']),
    // isWeb: PropTypes.bool
};