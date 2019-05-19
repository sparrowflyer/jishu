import React from 'react';
import PropTypes from 'prop-types';
import { getUser } from '../utils/http.js';
import { getBg, getIterativeValue } from '../utils/utils.jsx';

export class Avator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avator: null,
            // userInfo: {},
            canEdit:false,
            imgFile: '',
            renderState:'',
        };
        this.getUser = this.getUser.bind(this);
        this.getAverageScore = this.getAverageScore.bind(this);
        this.onChangeImg = this.onChangeImg.bind(this);
        this.editInfo = this.editInfo.bind(this);
    }
    getUser(userID) {
        if (!userID) return;
        getUser(userID)
            .then(response => {
                let data = response.data;
                if (data.status === 'success') {
                    this.setState((state) => {
                        return {
                            ...state,
                            avator: data.data
                        }
                    });
                } else {
                    this.props.alert.error(`获取${userID}的个人信息失败,原因为${data.errorMsg || `${response.status}${response.statusText}`}`);
                }
            }).catch(error => {
                console.error('获取个人信息', error);
            });
    }
    editInfo(){
        this.setState((state) => {
            return {
                ...state,
                canEdit:true
            }
        });
    }
    onChangeImg(){ //选择上传图片
        this.previewImg();
    }
    previewImg() {//本地预览
        const that = this;
        const file = this.state.imgFile;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            that.setState({ renderState: "upload", imgSrc: this.result })
        }
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
    }
    render(){
        return (
            <div>
                <div className="avator_bg"></div>
                <div className="avator">
                    <img className="avator-img" src={"http://" + this.props.userInfo.headImage} alt=""/>
                    {
                        this.state.canEdit && <div className="avator-edit" onClick={this.onChangeImg}>
                            <input type="file" ref="fileInput" onChange={this.onChangeImg}/>
                            更新照片
                        </div> 
                    }
                    {/*<FileInput btnValue={"更新照片"} className={"avator-edit"} onChange={this.onChangeImg} multiple={false} />*/}
                    {/*style={getBg(this.state.avator.headImage)}*/}
                    {
                        this.props.parent === 'StudentDetail' &&
                            <span className="avator_note">{this.getAverageScore(this.props.userInfo.userStudentInfo)}</span>
                    }
                </div>
                <div className="user">
                    <div className="user_name">{this.props.userInfo.nickName || ''}</div>
                    {
                        !this.props.isCenter &&
                            <div className="user_know-btn">认识他</div>
                    }
                    {
                        this.props.parent === 'PersonalCenter' &&
                            <div className="jee-edit user_edit-icon" onClick={this.editInfo}></div>
                    }
                </div>
                <div className="school">{getIterativeValue(this.props.userInfo, 'school.cnNameisExistInVariable')}</div>
                {
                    this.props.isWeb &&
                        <div className="desc-container">
                            <span className="desc">{this.props.userInfo.comment || "暂无个人简介"}</span>
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

Avator.PropTypes = {
    parent: PropTypes.oneOf(['PersonalCenter', 'StudentDetail']),
    isWeb: PropTypes.bool
};
