import React, { Component } from 'react';

function  Advisory () {
    return (<div>
        <div className="l-text mb10">他的承诺</div>
        <ul className="li-style">
            <li className="li-text mb10">可以看到我的方式（手机、微信）</li>
            <li className="li-text mb16">可以看到我的微信</li>
        </ul>
        <div className="l-text mb16">对他提问（最多五个）</div>
        <input placeholder="问题占位符" className="ph-text" type="text"/>
        <div className="ipt-line mb13"></div>
        <div className="add-line mb15">
            <img src={require("../../assets/images/添加@2x.png")} alt=""/>
        </div>
        <div className="l-text mb16">你愿意支付</div>
        <input value="¥30" className="ph-text l-text" type="text"/>
        <div className="ipt-line"></div>
        <div className="ta-center">
            <button className="m-button">去支付</button>
        </div>
    </div>)
}

function WillPay() {
    return (<div>
        <div>
            <label><input type="radio" name="payWay" value=""/>微信支付</label>
            <label><input type="radio" name="payWay" value=""/>支付宝支付</label>
        </div>
        <div className="ta-center mt42">
            <button className="m-button">去支付</button>
        </div>
    </div>)
}

function PaySuccess() {
    return (<div>
        <div>
            <img src={require("../../assets/images/chenggong@2x.png")} alt=""/>
            <div className="ta-center">支付成功</div>
        </div>
        <div className="ta-center mt42">
            <button className="m-button">完成</button>
        </div>
    </div>)
}

export function ModalMobile (type) {

    // render() {
        return <div className="modal-wrapper">
            <div className="modal-contain">
                <div className="modal">
                    <div className="modal-content">
                        { type === "Advisory" ? <Advisory/> : type === "PaySuccess" ? <PaySuccess/> : <WillPay/>}
                    </div>
                </div>
                <div className="close-bottom">
                    <img src={require("../../assets/images/guanbi1@2x.png")} alt=""/>
                </div>
            </div>
            <div className="mask"></div>
        </div>
    // }
}