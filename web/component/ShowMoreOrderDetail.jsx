import React from 'react';
import PropTypes from 'prop-types';

export class ShowMoreOrderDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            width: document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth,
            orderItem:{},
            showMoreModal:false,
            // shoeMoreData: {}
        };
        this.close =this.close.bind(this);
    }
    close(idx){
        this.props.showOrderModal(false);
    }

    render(){
        const {width} = this.state;
        return (
            <div className="order-detail-modal">
                    <div className="order-contain">
                        {
                            width >768 && <div className="order-modal-close-topRight">
                            <img src={require("../assets/images/guanbi1.png")} onClick={this.close} alt=""/>
                        </div>
                        }

                        <div className="flex-row-start">
                            <div className="line-label">买家姓名</div>
                            <div className="line-content">阎杰</div>
                        </div>
                        <div className="order-question-contain">
                            <div className="line-label">买家问题</div>
                            <ul>
                                <li className="order-question">问题占位符问题占位符问题占位符问题占位符</li>
                                <li className="order-question">问题占位符问题占位符问题占位符问题占位符</li>
                                <li className="order-question">问题占位符问题占位符问题占位符问题占位符</li>
                            </ul>
                        </div>
                        <div className="flex-row-start">
                            <div className="line-label">订单金额</div>
                            <div className="line-content">¥52</div>
                        </div>
                        <div className="flex-row-start">
                            <div className="line-label">订单编号</div>
                            <div className="line-content">20190523001</div>
                        </div>
                        <div className="flex-row-start">
                            <div className="line-label">订单时间</div>
                            <div className="line-content">2019.05.23 18:00</div>
                        </div>
                        <button className="order-modal-evaluate">待评价</button>
                    </div>
                {
                    width <=768 &&
                        <div className="order-modal-close-midBottom">
                            <img src={require("../assets/images/guanbi1.png")} alt=""/>
                        </div>
                }
            </div>
        )
    }
}
ShowMoreOrderDetail.propTypes = {
    // parent: PropTypes.oneOf(['PersonalCenter', 'StudentDetail']),
    // isWeb: PropTypes.bool
};