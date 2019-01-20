import React from 'react';
import { Link } from 'react-router-dom';

export function PageError({type = 404, description = 'Sorry, we can’t find the page you are looking for'}) {
    return (
        <div className="error-contents text-center">
            <Link className="error-logo" to="/">
                <img src="/images/logo.png" alt="Logo" />
            </Link>
            <div className="section-padding gray-bg">
                <h2 className="title">{type}</h2>
                <h3>
                    {description}
                </h3>
                <Link className="btn btn-lg mt-4" to="/">Back to homepage</Link>
            </div>
        </div>
    );
}

const returnType = (type) => {
    let res = type;
    if (res !== 'success') {
        res = 'fail';
    }
    return res.toUpperCase();
};

const returnDesc = (type, amount = 0) => {
    const resultStatus = {
        failed: '请求失败',
        illegal: '请求非法'
    };
    return resultStatus[type] || `您已成功支付${amount}元`;
};

export class PayError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.match.params && this.props.match.params.result_status,
            amount: this.props.match.params && this.props.match.params.total_amount
        };
    }

    render() {
        return (
            <div className="error-contents text-center">
                <img src="/images/logo.png" alt="Logo" />
                <div className="error-contents text-center">
                    <div className="section-padding gray-bg">
                        <h2 className="title">{returnType(this.state.type)}</h2>
                        <h3>
                            {returnDesc(this.state.type, this.state.amount)}
                        </h3>
                        <Link className="btn btn-lg mt-4" to="/">Back to homepage</Link>
                    </div>
                </div>
            </div>
        );
    }
}



