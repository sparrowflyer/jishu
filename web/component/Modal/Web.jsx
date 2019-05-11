import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SubTitle} from "../SubTitle";

function Advisory() {
    return (<div>
        <div className="l-text mb25">他的承诺</div>
        <div className="m-text mb20">如果我同意了你的认识，我承诺</div>
        <ul className="li-style">
            <li className="li-text mb20">可以看到我的方式（手机、微信）</li>
            <li className="li-text mb20">可以看到我的微信</li>
            <li className="li-text mb30">可以看到我的微信</li>
        </ul>
        <div className="l-text mb30">对他提问（最多五个）</div>
        <div className="ipt-wrap">
            <input placeholder="问题占位符" className="ph-text" type="text"/>
        </div>
        <div className="add-line mb30">
            <img src={require("../../assets/images/添加@2x.png")} alt=""/>
        </div>
        <div className="l-text mb20">你愿意支付</div>
        <div className="ipt-wrap">
            <input value="¥30" className="l-text" type="text"/>
        </div>
        <div className="ta-center mt42">
            <button className="m-button">去支付</button>
        </div>
    </div>)
}

function WillPay() {
    return (<div className="radio-wrap">
            <label className="modal-radio">
                <input type="radio" name="payWay" value=""/>
                <div className="radio-style"></div>
                {/*<div className="jee-checkmark"></div>*/}
                <span>微信支付</span>
            </label>
            <label className="modal-radio">
                <input type="radio" name="payWay" value=""/>
                <div className="radio-style"></div>
                {/*<div className="jee-checkmark"></div>*/}
                <span>支付宝支付</span>
            </label>
        <div className="ta-center mt42">
            <button className="m-button">去支付</button>
        </div>
    </div>)
}

function PaySuccess() {
    return (<div className="ta-center">
        <div className="paysuc-contain">
            <div className="jee-success"></div>
            <div className="ta-center">支付成功</div>
        </div>
        <div className="mt42">
            <button className="m-button">完成</button>
        </div>
    </div>)
}

// export class ModalWeb extends React.Component {
export function ModalWeb (type) {
    // render() {
        return <div className="modal-wrapper">
            <div className="modal modal-radio modal-paysuc">
                <div className="close-topRight">
                    <img src={require("../../assets/images/guanbi1.png")} alt=""/>
                </div>
                <div className="modal-content">
                    { type === "Advisory" ? <Advisory/> : type === "PaySuccess" ? <PaySuccess/> : <WillPay/>}
                </div>
            </div>
            <div className="mask"></div>
        </div>
    // }
}

ModalWeb.propTypes = {
    type: PropTypes.string.isRequired
};