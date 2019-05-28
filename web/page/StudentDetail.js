import React from 'react';
import { withRouter } from 'react-router';
import { withAlert } from 'react-alert';
import { Header } from '../component/common/Header.jsx';
import { Avator } from '../component/Avator.js';
import { SubTitle } from '../component/SubTitle.js';
import { Conversation } from '../component/Conversation.js';
import { Evaluation } from '../component/Evaluation.js';
import  { ModalMobile } from '../component/Modal/Mobile.jsx';
import  { ModalWeb } from '../component/Modal/Web.jsx';
import { Footer } from '../component/common/Footer.jsx';
import { getUser, postUrl } from '../utils/http.js';
import { getIterativeValue, isArray } from '../utils/utils.jsx';

let timer = null; //滚动定时timer记录
class StudentDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth,
            evaluations: [],
            indexInEvaluations: 0,
            visible: false,
            userInfo: {},
            loginUserInfo: {},
            scrollNum:0,//评价内容滚动计数
            scrollDirection:'left', //记录滚动方向
            modalType: "Advisory" //弹窗类别 PaySuccess & WillPay & Advisory
        };
        this.getUser = this.getUser.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
        this.getComment = this.getComment.bind(this);
        this.changeModalType = this.changeModalType.bind(this);
        this.close = this.close.bind(this);
    }
    componentDidMount() {
        if (this.props.match.params.userID) {
            let loginUserInfo = '';
            try {
                loginUserInfo = JSON.parse(sessionStorage.getItem('jeeUser'))
            } catch (e) {
                sessionStorage.removeItem('jeeUser');
            }
            this.setState((state) => {
                return { ...state, loginUserInfo}
            });
            this.getUser(this.props.match.params.userID);
            this.getComment(this.props.match.params.userID, 1, 10);
            window.addEventListener('resize', this.updateDimensions);
        } else {
            this.props.history.push('/');
        }
    }
    getUser(userID) {
        let userInfo = {};
        getUser(userID)
            .then(response => {
                let data = response.data;
                if (data.status === 'success') {
                    userInfo = data.data || {};
                } else {
                    console.error(`获取${userID}的个人信息:${data.errorMsg || `${response.status}${response.statusText}`}`);
                }
                this.setState((state) => {
                    return {
                        ...state,
                        userInfo
                    }
                });
            }).catch(error => {
                console.error(`获取个人信息${error}`);
                this.setState((state) => {
                    return {
                        ...state,
                        userInfo
                    }
                });
            });
    }
    knowHim(value) {
        if(!this.state.loginUserInfo){
            this.props.alert.error(<div style={{fontSize: '12px'}}>请先登录！</div>);
            return;
        }
        this.setState(state => {
            return {
                ...state,
                visible: value
            }
        });
        // console.log(this.state.visible)
    }
    getComment(studentId, pageNo, pageAmount) {
        let that = this;
        let comments = [];
        postUrl('/getCommentedPurchaseContacts', {studentId, pageNo, pageAmount})
            .then((response) => {
                let data = response.data;
                if (data.status === 'success') {
                    comments = isArray(data.data) ? data.data : [];
                } else {
                    console.error(`获取评价信息:${data.errorMsg || `${response.status}${response.statusText}`}`);
                }
                that.setState((state) => {
                    return {
                        ...state,
                        evaluations: comments
                    }
                });
                let num = this.state.width > 768 ? 4 : 2;
                if(comments.length > num){
                    timer = setInterval(()=>{
                        let scrD = this.state.scrollDirection;
                        let sco = this.state.scrollNum;
                        if(scrD === 'left') {
                            if (sco === 0 || sco < comments.length) {
                                sco += 1;
                            }
                            if (sco >= comments.length) {
                                sco -= 1;
                                scrD = 'right'
                            }
                         } else {
                                if(sco>0) {
                                    sco -= 1;
                                }
                                else{
                                    sco += 1;
                                    scrD = 'left'
                                }
                         }
                        this.setState({
                            scrollNum: sco,
                            scrollDirection: scrD
                        });
                    },3000)
                }
            }).catch((error) => {
                console.error(`获取评价信息:${error}`);
                that.setState((state) => {
                    return {
                        ...state,
                        evaluations: comments
                    }
                });
            });
    }
    close(value,type){
        this.setState((state) => {
            return {
                ...state,
                visible:value,
                modalType:type
            }
        })
    }
    changeModalType(value){
        this.setState((state) => {
            return {
                ...state,
                modalType:value
            }
        })
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
        clearInterval(timer);
        timer = null;
        window.removeEventListener('resize', this.updateDimensions);
    }

    render() {
        let { visible,modalType,userInfo,loginUserInfo,scrollNum,evaluations } = this.state;
        const spacing = this.state.width > 768 ? [80, 50, 80, 75] : [15, 16, 24, 16];
        let evaItemWidth = this.state.width >768 ? 4.5 : 1.81;
        let evaArrLen = evaluations.length;
        let noRollItem = this.state.width > 768 ? 4 : 2;
        return (
            <div className="container-with-footer">
                <div>
                    <Header userInfo={loginUserInfo}></Header>
                    <Avator parent="StudentDetail" isWeb={this.state.width > 768} userID={this.props.match.params.userID} userInfo={userInfo} knowHim={this.knowHim.bind(this)} isCenter={false} alert={this.props.alert}/>
                    <SubTitle cn="他的话题" en="Topic of conversation" top={spacing[0]} bottom={spacing[1]} />
                    <div className="conversation-container">
                        <Conversation title="专业" desc={getIterativeValue(userInfo, 'userStudentInfo.major')} />
                        <Conversation title="话题" desc={getIterativeValue(userInfo, 'userStudentInfo.topics')} />
                        <Conversation title="荣誉" desc={getIterativeValue(userInfo, 'userStudentInfo.honors')} />
                    </div>
                    <SubTitle cn="他的评价" en="Evaluation" top={spacing[2]} bottom={spacing[3]} />
                    <div className="evaluation-container">
                        <div className="evaluate-scroll" style={{width:evaItemWidth * evaArrLen +'rem',marginLeft: (scrollNum <= evaArrLen - noRollItem) ? -scrollNum * evaItemWidth + 'rem' : -(evaArrLen - noRollItem) * evaItemWidth + 'rem'}}>
                            {
                                //.slice(this.state.indexInEvaluations, (this.state.width > 768 ? 4 : 2))
                                this.state.evaluations.map((evaluation, index) => {
                                        return (
                                            <Evaluation key={index} name={getIterativeValue(evaluation, 'buyer.nickname')} desc={evaluation.comment || ''} professionalScore={evaluation.scoreProfessional || '0.0'} responseScore={evaluation.scoreResponse || '0.0'} attitudeScore={evaluation.scoreAttitude || '0.0'}
                                                        headImage={getIterativeValue(evaluation, 'buyer.headImage')} isActive={index === scrollNum}/>
                                        );
                                    })
                            }
                        </div>
                    </div>
                    {
                        this.state.width <= 768 &&
                            <button className="know-btn" onClick={this.knowHim.bind(this, true)}>认识他</button>
                    }
                    {
                        this.state.width > 768 ?
                            <ModalWeb onClose={this.close} handleChangeType={this.changeModalType} loginUserID={loginUserInfo&&loginUserInfo.id||null} userID={userInfo.id} visible={visible} type={modalType}/>:
                            <ModalMobile onClose={this.close} handleChangeType={this.changeModalType} loginUserID={loginUserInfo&&loginUserInfo.id||null} userID={userInfo.id} visible={visible} type={modalType}/>
                    }
                </div>
                <Footer />
            </div>
        );
    }
}

const StudentDetailPage = withAlert()(withRouter(StudentDetail));
export default StudentDetailPage;