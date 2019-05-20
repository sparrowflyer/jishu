import React from 'react';
import PropTypes from 'prop-types';
import { getUser,updateUserHeadImage,updateUserComment,updateUserNickname,uploadImage } from '../utils/http.js';
import { getIterativeValue } from '../utils/utils.jsx';

export class Avator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // avator: null,
            canEdit:false,
            imgFile: '',
            editName:'',
            editComment:'',
            renderState:'',
        };
        this.getAverageScore = this.getAverageScore.bind(this);
        this.onChangeImg = this.onChangeImg.bind(this);
        this.editInfo = this.editInfo.bind(this);
        this.updateUserHeadImage = this.updateUserHeadImage.bind(this);
        this.updateUserComment = this.updateUserComment.bind(this);
        this.updateUserNickname = this.updateUserNickname.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
    }
    editInfo(bool){
        let {imgFile,editName,editComment} = this.state;
        this.setState((state) => {
            return {
                ...state,
                canEdit: !bool
            }
        });
        if(bool){
            imgFile && this.updateUserHeadImage(imgFile);
            editName && this.updateUserNickname(editName);
            editComment && this.updateUserComment(editComment);
            // this.props.updateUserInfo();
        }
    }
    onChangeImg(e){ //选择上传图片
        let file = e.target.files[0];
        this.setState((state) => {
            return {
                ...state,
                imgFile: file
            }
        });
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
    updateUserHeadImage(img){ //更新头像
        if(img){
            // let url=null;
            uploadImage(img).then(res=> {
                if(res.data.data){
                    // url=res.data;
                    updateUserHeadImage({
                        id: this.props.userID,
                        headImage: res.data.data
                    }).then(resp=>{
                        console.log("更新头像",resp)
                        if(resp.data.status==="success"){
                            this.props.updateUserInfo();
                        }
                    }).catch(err=>{
                        console.log("更新头像报错",err)
                    })
                }
            }).catch(err=>{console.log("上传头像报错",err)});
        }

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
        return (
            <div>
                <div className="avator_bg"></div>
                <div className="avator" style={{backgroundImage: 'url(http://' + this.props.userInfo.headImage +')'}}>
                    {
                        this.state.canEdit && <div className="avator-edit" onClick={this.onChangeImg}>
                            <input type="file" ref="fileInput" onChange={this.onChangeImg.bind(this)}/>
                           <div>更新照片</div>
                        </div> 
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
                        (this.state.canEdit ? <div className="user_edit-icon tab-title__selected" onClick={this.editInfo.bind(this,true)}>确认修改</div>:
                            <div className="jee-edit user_edit-icon" onClick={this.editInfo.bind(this,false)}></div>)

                    }
                </div>
                <div className="school">{getIterativeValue(this.props.userInfo, 'school.cnNameisExistInVariable')}</div>
                {
                    this.props.isWeb &&
                        <div className="desc-container">
                            {
                                this.state.canEdit ? <input type="text" defaultValue={this.props.userInfo.comment} onChange={this.onChangeComment.bind(this)}/> :
                                <span className="desc">{this.props.userInfo.comment || "暂无签名"}</span>
                            }
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
                            <span className="desc">{getIterativeValue(this.props.userInfo, 'userStudentInfo.description')}</span>
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
