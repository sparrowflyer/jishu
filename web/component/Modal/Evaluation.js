import React from 'react';
import { postUrl } from '../../utils/http.js';

export class Evaluation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profession: 0,
            inspire: 0,
            attitude: 0,
            desc: ''
        };
        this.evaluate = this.evaluate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    evaluate() {
        //提示信息 props
        postUrl('/commentPurchaseContact', {
            purchaseContactId: '', //订单 props传递
            scoreResponse: this.state.inspire,
            scoreAttitude: this.state.attitude,
            scoreProfessional: this.state.profession,
            comment: this.state.desc
        }).then((response) => {
            let data = response.data;
            if (data.status === 'success') {
                //关闭弹出框
            } else {

            }
        }).catch((error) => {
            console.error(error);
        });
    }
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState((state) => {
            return {
                ...state,
                [name]: value
            }
        })
    }
    render() {
        return (
            <div className="evaluation-dialog-container">
                <div className="evaluation-dialog-title">请您对我的本次服务进行评价</div>
                <div className="star-rating first-star-rating">
                    <span>专业</span>
                    <fieldset>
                        <input type="radio" id="profession5" name="profession" value="5" onChange={this.handleChange}/><label htmlFor="profession5" title="卓越">五星</label>
                        <input type="radio" id="profession4" name="profession" value="4" onChange={this.handleChange}/><label htmlFor="profession4" title="优秀">四星</label>
                        <input type="radio" id="profession3" name="profession" value="3" onChange={this.handleChange}/><label htmlFor="profession3" title="良好">三星</label>
                        <input type="radio" id="profession2" name="profession" value="2" onChange={this.handleChange}/><label htmlFor="profession2" title="中等">二星</label>
                        <input type="radio" id="profession1" name="profession" value="1" onChange={this.handleChange}/><label htmlFor="profession1" title="很差">一星</label>
                    </fieldset>
                    <span>分</span>
                </div>
                <div className="star-rating other-star-rating">
                    <span>启发</span>
                    <fieldset>
                        <input type="radio" id="inspire5" name="inspire" value="5" onChange={this.handleChange}/><label htmlFor="inspire5" title="卓越">五星</label>
                        <input type="radio" id="inspire4" name="inspire" value="4" onChange={this.handleChange}/><label htmlFor="inspire4" title="优秀">四星</label>
                        <input type="radio" id="inspire3" name="inspire" value="3" onChange={this.handleChange}/><label htmlFor="inspire3" title="良好">三星</label>
                        <input type="radio" id="inspire2" name="inspire" value="2" onChange={this.handleChange}/><label htmlFor="inspire2" title="中等">二星</label>
                        <input type="radio" id="inspire1" name="inspire" value="1" onChange={this.handleChange}/><label htmlFor="inspire1" title="很差">一星</label>
                    </fieldset>
                    <span>分</span>
                </div>
                <div className="star-rating last-star-rating">
                    <span>态度</span>
                    <fieldset>
                        <input type="radio" id="attitude5" name="attitude" value="5" onChange={this.handleChange}/><label htmlFor="attitude5" title="卓越">五星</label>
                        <input type="radio" id="attitude4" name="attitude" value="4" onChange={this.handleChange}/><label htmlFor="attitude4" title="优秀">四星</label>
                        <input type="radio" id="attitude3" name="attitude" value="3" onChange={this.handleChange}/><label htmlFor="attitude3" title="良好">三星</label>
                        <input type="radio" id="attitude2" name="attitude" value="2" onChange={this.handleChange}/><label htmlFor="attitude2" title="中等">二星</label>
                        <input type="radio" id="attitude1" name="attitude" value="1" onChange={this.handleChange}/><label htmlFor="attitude1" title="很差">一星</label>
                    </fieldset>
                    <span>分</span>
                </div>
                <textarea placeholder="请输入你想说的话" className="evaluation-dialog-textarea" name="desc" onChange={this.handleChange} value={this.state.desc}></textarea>
                <div className="evaluation-dialog-btn-container">
                    <input type="button" value="完成" className="evaluation-dialog-btn" onClick={this.evaluate} />
                </div>
            </div>
        );
    }
}
