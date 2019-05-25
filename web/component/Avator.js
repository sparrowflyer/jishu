import React from 'react';
import PropTypes from 'prop-types';
import { useAlert } from 'react-alert';
import { getUser,updateUserHeadImage,updateUserComment,updateUserNickname,uploadImage } from '../utils/http.js';
import { getIterativeValue } from '../utils/utils.jsx';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
// const MAX_FILE_SIZE = 2 * 1024;
export class Avator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           // avator: null,
            canEdit:false,
            editName:'',
            editComment:'',
            renderState:'',
        };
        this.getAverageScore = this.getAverageScore.bind(this);
        this.editInfo = this.editInfo.bind(this);
        this.updateUserComment = this.updateUserComment.bind(this);
        this.updateUserNickname = this.updateUserNickname.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.onChangeImgFile = this.onChangeImgFile.bind(this);

    }
    onChangeImgFile(e){
        const file = e.target.files[0];
        this.props.handleFileChange(file);
        e.target.value = '';
    }
    editInfo(bool){
        let {editName,editComment} = this.state;
        this.setState((state) => {
            return {
                ...state,
                canEdit: !bool
            }
        });
        if(bool){
            editName && this.updateUserNickname(editName);
            editComment && this.updateUserComment(editComment);
            // this.props.updateUserInfo();
        }
    }
    onChangeName(e){
        // let value = e.target.value;
        this.setState({
            editName: e.target.value
        })
        // this.updateUserNickname(value);
    }
    onChangeComment(e){
        this.setState({
            editComment:e.target.value
        })
    }
    updateUserComment(cnt){ //更新签名
        updateUserComment({
            id: this.props.userID,
            comment: cnt
        }).then(response=>{
            console.log("更新签名",response)
            if(response.data.status==="success"){
                this.props.updateUserInfo();
            }
        }).catch(err=>{
            console.log("更新签名报错",err)
        })
    }
    updateUserNickname(name){ //更新昵称
        updateUserNickname({
            id: this.props.userID,
            nickName: name
        }).then(response=>{
            console.log("更新昵称",response)
            if(response.data.status==="success"){
                this.props.updateUserInfo();
            }
        }).catch(err=>{
            console.log("更新昵称报错",err)
        })
    }
    getAverageScore(student) {
        if (!student) return '0.0';
        let nextNameArr = ['scoreResponse', 'scoreAttitude', 'scoreProfessional'];
        return (nextNameArr.reduce((acc, cur) => {
            return (acc + (student[cur] || 0));
        }, 0) / nextNameArr.length).toFixed(1);
    }
    componentDidUpdate(prevProps) {
        // console.log("Avator",this.props)
        if (this.props.userID !== prevProps.userID) {
            getUser(this.props.userID);
        }
        // if(this.props.userInfo !== prevProps.userInfo){
        //     sessionStorage.setItem()
        // }
    }

    render(){
        const iptStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 9999,
            opacity: 0,
        };
        const avatorPageBg = (this.props.parent === 'PersonalCenter' ? '../static/image/temp/personalCenter_bg.png' : '../static/image/temp/studentDetail_bg.png');
        return (
            <div>
                <div className="avator_bg" style={{backgroundImage: 'url(' + avatorPageBg +')'}}></div>
                <div className="avator" style={{backgroundImage: 'url(http://' + this.props.userInfo.headImage +')'}}>
                    {
                        this.state.canEdit && <label className="add-img-btn">
                            <span className="pic-edit">更换图片</span>
                            <input style={iptStyle} type="file" accept="image/jpeg,image/jpg,image/png"
                                   onChange={this.onChangeImgFile}/>
                        </label>
                    }
                    {
                        this.props.parent === 'StudentDetail' &&
                            <span className="avator_note">{this.getAverageScore(this.props.userInfo.userStudentInfo)}</span>
                    }
                </div>
                <div className="user">
                    {
                        this.state.canEdit ? <div className="user_name">
                            <input type="text" defaultValue={this.props.userInfo.nickName} onChange={this.onChangeName.bind(this)}/>
                        </div> : <div className="user_name">{this.props.userInfo.nickName || ''}</div>
                    }
                    {
                        !this.props.isCenter && this.props.isWeb &&
                            <div className="user_know-btn" onClick={this.props.knowHim}>认识他</div>
                    }
                    {
                        this.props.parent === 'PersonalCenter' &&
                        (this.state.canEdit ? <div className="user-info-edit-confirm" onClick={this.editInfo.bind(this,true)}>保存</div>:
                            <div className="jee-edit user_edit-icon" onClick={this.editInfo.bind(this,false)}></div>)

                    }
                </div>
                <div className="school">{getIterativeValue(this.props.userInfo, 'school.cnNameisExistInVariable')}</div>
                {
                    this.props.isWeb &&
                        <div className="desc-container">
                            {/*<div className="user-desc">*/}
                                <span className="jee-quote-left"></span>
                            {
                                this.state.canEdit ?
                                    <textarea type="text" rows="1" onChange={this.onChangeComment.bind(this)}>{this.props.userInfo.comment}</textarea>
                                     :
                                <span>{this.props.userInfo.comment || "暂无签名"}</span>
                            }
                                <span className="jee-quote-right"></span>
                            {/*</div>*/}
                            {/*{getIterativeValue(this.props.userInfo, 'userStudentInfo.description')}*/}
                        </div>
                }
                <div className="num-container">
                    <div className="num-item">
                        <div className="num-item_value">{this.props.userInfo.likeAmount || 0}</div>
                        <div className="num-item_title">粉丝数</div>
                    </div>
                    <div className="num-item">
                        <div className="num-item_value">{this.props.userInfo.courseAmount || 0}</div>
                        <div className="num-item_title">课程数</div>
                    </div>
                </div>
                {
                    this.props.isWeb ||
                        <div className="desc-container">
                            {/*<div className="user-desc">*/}
                                <span className="jee-quote-left"></span>
                                {
                                    this.state.canEdit ?
                                        <textarea type="text" onChange={this.onChangeComment.bind(this)}>{this.props.userInfo.comment}</textarea>
                                        :
                                        <span>{this.props.userInfo.comment || "暂无签名"}</span>
                                }
                                <span className="jee-quote-right"></span>
                            {/*</div>*/}
                        </div>
                }
            </div>
        );
    }
}

Avator.propTypes = {
    parent: PropTypes.oneOf(['PersonalCenter', 'StudentDetail']),
    isWeb: PropTypes.bool
};
