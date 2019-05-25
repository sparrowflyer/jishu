import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../component/common/Header.jsx';
import { Footer } from '../component/common/Footer.jsx';

export class PayResult extends React.Component {
    constructor(props) {
        super(props);
    }
    static getDescription (type, amount = 0) {
        const resultStatus = {
            failed: '请求失败',
            illegal: '请求非法'
        };
        return resultStatus[type] || `您已成功支付${amount}元`;
    }
    render() {
        return (
            <div className="container-with-footer">
                <Header />
                <div style={{margin: '0 auto', textAlign: 'center'}}>
                    <img src={this.props.match.params.result_status === 'success' ? '/image/success.png' : '/image/fail.png'} />
                    <p className="pay_result-desc">
                        {PayResult.getDescription(this.props.match.params.result_status, this.props.match.params.total_amount)}
                    </p>
                    <Link className="back_home-btn" to="/">返回主页</Link>
                </div>
                <Footer />
            </div>
        );
    }
}