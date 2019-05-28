import React from 'react';
// import PropTypes from 'prop-types';
import {isArray} from "../utils/utils.jsx";

export class OrderItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            orderItem:{},
            showMoreModal:false,
        };
        this.showMore =this.showMore.bind(this);
        this.goEvalaute =this.goEvalaute.bind(this);
    }
    componentDidMount(){}
    showMore(item){
        this.props.showOrderModal(true,item,"MoreDetail");
    }
    goEvalaute(){
        this.props.showOrderModal(true,this.props.data,"OrderEvaluate");
    }

    render(){
        let {data} = this.props;
        let questions = data.questions;
        return (
            <div className="order-contain">
                <div className="order-title">
                    <span>{data.id}</span>
                    <span>{data.createdTime}</span>
                </div>
                <div className="order-content">
                    <div className="flex-row-start">
                        <div className="line-label">买家姓名</div>
                        <div className="line-content">{data.buyerUser && data.buyerUser.nickName}</div>
                    </div>
                    <div className="order-question-contain">
                        <div className="line-label">买家问题</div>
                        <ul>
                            {
                                questions && isArray(questions) && questions.length > 0 &&
                                questions.map((item,index)=>{
                                  return  ((questions.length > 3 && index < 2) || (questions.length<=3)) &&
                                    <li key={index} className="order-question">{item}</li>
                            })
                            }
                            {
                                questions.length > 3 &&
                                <li className="question-forMore"
                                    onClick={this.showMore.bind(this, data)}>剩余内容，点击查看详情</li>
                            }
                        </ul>
                    </div>
                    <div className="last-item flex-row-start">
                        <div className="line-label">订单金额 </div>
                        <div className="line-content">{data.paymentAmount}</div>
                    </div>
                </div>
                {
                    data.status==="payed" ? <button className="order-evaluate" onClick={this.goEvalaute}>待评价</button>:
                        <button className="order-finish">已完成</button>
                }
            </div>
        )
    }
}

OrderItem.propTypes = {
    // data: PropTypes.
};