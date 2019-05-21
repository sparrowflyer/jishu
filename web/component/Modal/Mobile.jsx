import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {purchaseContactCheck} from "../../utils/http";

let timer = null;

export class ModalMobile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // visible: false,
            payType: 0,
            questions:[],
            resQuestions:[],
            money:"¥30",
            alertShow:false,
            alertText:""
        };
        this.goPay = this.goPay.bind(this);
        this.handleType = this.handleType.bind(this);
        this.changeType = this.changeType.bind(this);
        this.addQuestions = this.addQuestions.bind(this);
        this.lessQuestions = this.lessQuestions.bind(this);
        this.setMoney = this.setMoney.bind(this);
        this.setQusetions = this.setQusetions.bind(this);
        this.propsClose= this.propsClose.bind(this);
        this.setAlert= this.setAlert.bind(this);
    }
    propsClose(){
        this.props.onClose(false,"Advisory");
    }
    setAlert(value){
        this.setState({
            alertShow: true,
            alertText: value
        });
        clearTimeout(timer);
        timer = null;
        timer = setTimeout(()=>{
            this.setState({
                alertShow: false,
            });
        },3000);

    }
    goPay(){
        purchaseContactCheck({
            "sellerId": this.props.loginUserID,
            "buyerId": this.props.userID,
        }).then(response =>{
            // console.log(response)
            if(response.data.status === "success"){
                window.location.href= "/jishu/purchaseContact?sellerId="+this.props.userID+"&buyerId="+this.props.loginUserID+"&questions="+this.state.resQuestions.join(",");
            return;
            }
            this.setAlert(response.data.errorMsg);
        }).catch(error=>{
            this.setAlert("无法检测用户支付情况！");
        })
    }
    handleType(e){ //更换支付类型
        this.setState({
            payType:e.target.name
        });
    }
    changeType(value){ //更换弹窗类型
        if(value==="willpay"){
            this.setState({
                resQuestions:this.state.questions,
                questions:[]
            })
        }
        setTimeout(()=>{
            this.props.handleChangeType(value);
        },200)
    }
    setQusetions(e){
        let arr = this.state.questions,index = Number(e.target.name) || 0;
        arr[index] = e.target.value;
        this.setState({
            questions: arr
        });
    }
    addQuestions(){
        let arr = this.state.questions;
        arr[arr.length] = "";
        this.setState({
            questions:arr
        })
    }
    lessQuestions(){
        let arr = this.state.questions;
        arr.pop();
        this.setState({
            questions:arr
        })
    }
    setMoney(e){
        this.setState({
            money:e.target.value
        })
    }
    // componentDidUpdate(preProps) {}
    render() {
        // 通过父组件传递的visile控制显隐
        let {questions,money,alertShow,alertText} = this.state,{type,visible}= this.props;
        let styleObj= {
            height: (type==="Advisory") ? '' :'2.06rem',
            overflow: (type==="Advisory") ? 'auto' :'hidden'
        };
        return visible && <div className="modal-wrapper">
            <div className="modal-contain">
                <div style={styleObj} className="modal">
                    {
                        alertShow &&  <div className="alert-text">{alertText}</div>
                    }
                    <div className="modal-content">
                        {
                            type === "Advisory" ? <div>
                                    <div className="l-text mb10">他的承诺</div>
                                    <ul className="li-style">
                                        <li className="li-text mb10">可以看到我的方式（手机、微信）</li>
                                        <li className="li-text mb16">可以看到我的微信</li>
                                    </ul>
                                    <div className="l-text mb16">对他提问（最多五个）</div>
                                    {questions.length >= 1 &&
                                    <input placeholder="问题占位符" name="0" value={questions[0]} onChange={this.setQusetions}
                                           className="ph-text" type="text"/>
                                    }
                                    <div className="ipt-line mb13"></div>
                                    {
                                        questions.length > 1 && questions.map((item,index)=>{
                                            if(index>0)   return <div className="add-line mb13" key={index}>
                                                <img onClick={this.lessQuestions} className="less-btn" src={require("../../assets/images/guanbi1@2x.png")} alt=""/>
                                                <input placeholder="问题占位符" name={index} value={item} onChange={this.setQusetions} className="ph-text" type="text"/>
                                            </div>
                                        })
                                    }
                                    <div className="add-line mb15">
                                        <img onClick={this.addQuestions} src={require("../../assets/images/添加@2x.png")} alt=""/>
                                    </div>
                                    <div className="l-text mb16">你愿意支付</div>
                                    <input value={money} onChange={this.setMoney} className="ph-text l-text" type="text"/>
                                    <div className="ipt-line"></div>
                                    <div className="ta-center">
                                        <button className="m-button" onClick={this.changeType.bind(this,"WillPay")}>去支付</button>
                                    </div>
                                </div>  :
                                type === "PaySuccess" ? <div className="ta-center">
                                        <div className="paysuc-contain">
                                            <img src={require("../../assets/images/chenggong.png")} alt=""/>
                                            <div className="ta-center">支付成功</div>
                                        </div>
                                        <div className="ta-center">
                                            <button className="m-button" onClick={this.propsClose}>完成</button>
                                        </div>
                                    </div> :
                                    <div className="radio-wrap">
                                        <label className="modal-radio">
                                            <input checked type="radio" name="payWay" onChange={this.handleType} value="0"/>
                                            <div className="radio-style"></div>
                                            {/*<div className="jee-checkmark"></div>*/}
                                            <span>微信支付</span>
                                        </label>
                                        <label className="modal-radio">
                                            <input type="radio" name="payWay" onChange={this.handleType} value="1"/>
                                            <div className="radio-style"></div>
                                            {/*<div className="jee-checkmark"></div>*/}
                                            <span>支付宝支付</span>
                                        </label>
                                        <div className="ta-center">
                                            <button className="m-button" onClick={this.goPay}>去支付</button>
                                        </div>
                                    </div>
                        }
                    </div>
                </div>
                <div className="close-bottom">
                    <img onClick={this.propsClose} src={require("../../assets/images/guanbi1@2x.png")} alt=""/>
                </div>
            </div>
            <div className="mask" onClick={this.propsClose}></div>
        </div>
    }
}

ModalMobile.propTypes = {
    type: PropTypes.string.isRequired
};