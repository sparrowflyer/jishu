import React from 'react';
import PropTypes from 'prop-types';
import { getUser } from '../utils/http.js';
import { getBg, getIterativeValue } from '../utils/utils.jsx';

export class Avator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avator: null
        };
        this.getUser = this.getUser.bind(this);
        this.getAverageScore = this.getAverageScore.bind(this);
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
    getAverageScore(student) {
        if (!student) return '0.0';
        let nextNameArr = ['scoreResponse', 'scoreAttitude', 'scoreProfessional'];
        return (nextNameArr.reduce((acc, cur) => {
            return (acc + (student[cur] || 0));
        }, 0) / nextNameArr.length).toFixed(1);
    }
    componentDidUpdate(prevProps) {
        if (this.props.userID !== prevProps.userID) {
            getUser(props.userID);
        }
    }
    render() {
        return (
            <div>
                <div className="avator_bg"></div>
                <div className="avator" style={getBg(this.state.avator.headImage)}>
                    {
                        props.parent === 'StudentDetail' &&
                            <span className="avator_note">{this.getAverageScore(this.state.avator.userStudentInfo)}</span>
                    }
                </div>
                <div className="user">
                    <div className="user_name">{this.state.avator.nickName || ''}</div>
                    {
                        props.isWeb &&
                            <div className="user_know-btn">认识他</div>
                    }
                    {
                        props.parent === 'PersonalCenter' &&
                            <div className="jee-edit user_edit-icon"></div>
                    }
                </div>
                <div className="school">{getIterativeValue(this.state.avator, 'school.cnNameisExistInVariable')}</div>
                {
                    props.isWeb &&
                        <div className="desc-container">
                            <span className="desc">{getIterativeValue(this.state.avator, 'userStudentInfo.description')}</span>
                        </div>
                }
                <div className="num-container">
                    <div className="num-item">
                        <div className="num-item_value">{this.state.avator.likeAmount || 0}</div>
                        <div className="num-item_title">粉丝数</div>
                    </div>
                    <div className="num-item">
                        <div className="num-item_value">{this.state.avator.courseAmount || 0}</div>
                        <div className="num-item_title">课程数</div>
                    </div>
                </div>
                {
                    props.isWeb ||
                        <div className="desc-container">
                            <span className="desc">{getIterativeValue(this.state.avator, 'userStudentInfo.description')}</span>
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
