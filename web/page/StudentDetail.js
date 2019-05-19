import React from 'react';
import { withRouter } from 'react-router';
import { Header } from '../component/common/Header.jsx';
import { Avator } from '../component/Avator.js';
import { SubTitle } from '../component/SubTitle.js';
import { Conversation } from '../component/Conversation.js';
import { Evaluation } from '../component/Evaluation.js';
import  { ModalMobile } from '../component/Modal/Mobile.jsx';
import  { ModalWeb } from '../component/Modal/Web.jsx';
import { getUser, postUrl } from '../utils/http.js';
import { getIterativeValue } from '../utils/utils.jsx';

class StudentDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth,
            evaluations: [],
            visible: false,
            userInfo: {}
        };
        this.getUser = this.getUser.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
        this.getComment = this.getComment.bind(this);
    }
    componentDidMount() {
        if (this.props.match.params.userID) {
            window.addEventListener('resize', this.updateDimensions);
            this.getUser(this.props.match.params.userID);
        } else {
            this.props.history.push('/');
        }
    }
    getUser(userID) {
        getUser(userID)
            .then(response => {
                let data = response.data;
                if (data.status === 'success') {
                    this.setState((state) => {
                        return {
                            ...state,
                            userInfo: data.data
                        }
                    });
                } else {
                    this.alert.error(`获取${userID}的个人信息失败,原因为${data.errorMsg || `${response.status}${response.statusText}`}`);
                }
            }).catch(error => {
                console.error('获取个人信息', error);
            });
    }
    knowHim() {
        console.log('Hello');
        this.setState((state) => {
            return {
                ...state,
                visible: true
            }
        });
    }
    getComment(studentId, pageNo, pageAmount) {
        postUrl('/getCommentedPurchaseContacts', {studentId, pageNo, pageAmount})
            .then((response) => {

            }).catch((error) => {
                console.error('获取评价信息:', error);
            });
    }
    updateDimensions() {
        var width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
        this.setState(state => {
            return {
                ...state,
                width
            }
        });
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    showModal() {
        this.setState(state => {
            return {
                ...state,
                visible: true
            }
        })
    }

    render() {
        const { visible } = this.state;
        const spacing = this.state.width > 768 ? [80, 50, 80, 75] : [15, 16, 24, 16];
        return (
            <div>
                <Header userInfo={this.state.userInfo}></Header>
                <Avator parent="StudentDetail" isWeb={this.state.width > 768} userID={this.props.match.params.userID} userInfo={this.state.userInfo} knowHim={this.knowHim.bind(this)}/>
                <SubTitle cn="他的话题" en="Topic of conversation" top={spacing[0]} bottom={spacing[1]} />
                <div className="conversation-container">
                    <Conversation title="专业" desc={getIterativeValue(this.state.userInfo, 'userStudentInfo.major')} />
                    <Conversation title="话题" desc={getIterativeValue(this.state.userInfo, 'userStudentInfo.topics')} />
                    <Conversation title="荣誉" desc={getIterativeValue(this.state.userInfo, 'userStudentInfo.honors')} />
                </div>
                <SubTitle cn="他的评价" en="Evaluation" top={spacing[2]} bottom={spacing[3]} />
                <div className="evaluation-container">
                    {
                        this.state.evaluations.map((evaluation, index) => {
                            return (
                                <Evaluation key={evaluation.name} {...evaluation} isActive={index === 1}/>
                            );
                        })
                    }
                </div>
                {
                    this.state.width <= 768
                        && <button className="know-btn" onClick={this.knowHim}>认识他</button>
                }
                {
                    this.state.width > 768 ? <ModalWeb visible={this.state.visible} type={"PaySuccess"}/> : <ModalMobile visible={visible} type={"PaySuccess"}/>
                }
            </div>
        );
    }
}

const StudentDetailPage = withRouter(StudentDetail);
export default StudentDetailPage;