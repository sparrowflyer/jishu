import React from 'react';
import { withRouter } from 'react-router';
import { withAlert } from 'react-alert';
import { Avator } from '../component/Avator.js';
import { Item } from '../component/Item.js';
import { postUrl ,getUnOrder,getDoOrder} from '../utils/http.js';
import  { ModalMobile } from '../component/Modal/Mobile.jsx';
import  { ModalWeb } from '../component/Modal/Web.jsx';
import {Footer} from '../component/common/Footer.jsx';
import {Header} from '../component/common/Header.jsx';
import {getUser} from "../utils/http";

const contents = [0,1,2,3,4],
         fList = [{
            name:"这是个假数据",
            img:"http://cdn.unclejee.cn/20190118215849_614.jpg",
        },{
            name:"这是个假数据",
            img:"http://cdn.unclejee.cn/20190118215849_614.jpg",
        },{
            name:"这是个假数据",
            img:"http://cdn.unclejee.cn/20190118215849_614.jpg",
        },{
            name:"这是个假数据",
            img:"http://cdn.unclejee.cn/20190118215849_614.jpg",
        },{
            name:"这是个假数据",
            img:"http://cdn.unclejee.cn/20190118215849_614.jpg",
        }];

class PersonalCenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth,
            userID: '',
            following: [],
            fans: [],
            userInfo:{},
            visible:false,
            activeTab:2,
            activeType:0,
            orders:[],
        };
        this.showModal = this.showModal.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
        this.getFans = this.getFans.bind(this);
        this.getUncompleteOrder = this.getUncompleteOrder.bind(this);
        this.getCompleteOrder = this.getCompleteOrder.bind(this);
        this.getUser = this.getUser.bind(this);
    }
    componentDidMount() {
        let userInfo = '';
        try {
            userInfo = JSON.parse(sessionStorage.getItem('jeeUser'))
        } catch (e) {
            sessionStorage.removeItem('jeeUser');
        }
        if (userInfo) {
            this.setState((state) => {
               return { ...state, userInfo , userID:userInfo.id}
            });
            this.getUser(userInfo.id);
            window.addEventListener('resize', this.updateDimensions);
        } else {
            this.props.history.push('/');
        }
    }
    updateDimensions() {
        var width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
        this.setState((state) => {
            return { ...state, width };
        });
    }
    getFans(likeStudentId, pageNo, pageAmount) {
        this.setState((state) => {
           return {
               ...state,
               fans: []
           }
        });
        postUrl('/likeStudentUserList', {
            likeStudentId,
            pageNo,
            pageAmount
        }).then((response) => {
            if (response.status === 200) {
                console.log("fans",response);
                this.setState((state) => {
                    return {
                        ...state,
                        fans: response.data
                    }
                });
            }
        }).catch((error) => {
            console.error('获取粉丝列表：', error);
        });
    }
    getUncompleteOrder(id){
        getUnOrder({id:id||this.state.userID}).then(resp=>{
            console.log("获取未完成订单",resp)
            if(resp.status === 200 && resp.data){
                this.setState({
                    orders: resp.data
                })
            }

        }).catch(err=>{
            console.log("获取未完成订单报错",err)
        })
    }
    getCompleteOrder(id){
        getDoOrder({id:id||this.state.userID}).then(resp=>{
            console.log("获取已完成订单",resp)
            if(resp.status === 200 && resp.data){
                this.setState({
                    orders: resp.data
                })
            }
        }).catch(err=>{
            console.log("获取已完成订单报错",err)
        })
    }
    getUser(userID) {
        // if (!userID) return;
        getUser(userID||this.state.userID)
            .then(response => {
                let data = response.data;
                if (data.status === 'success') {
                    this.setState((state) => {
                        return {
                            ...state,
                            userInfo: data.data
                        }
                    });
                    sessionStorage.removeItem("jeeUser");
                    sessionStorage.setItem("jeeUser",JSON.stringify(data.data));
                } else {
                    this.alert.error(`获取${userID}的个人信息失败,原因为${data.errorMsg || `${response.status}${response.statusText}`}`);
                }
            }).catch(error => {
            console.error('获取个人信息', error);
        });
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
    checkTab(i){
        this.setState({
            activeTab: i
        })
        if(i===0){
            this.getFans(this.state.userID,1,10);
        }
    }
    checkType(idx){
        this.setState({
            activeType: idx
        })
        idx===0 ? this.getUncompleteOrder():this.getCompleteOrder();
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
        const {userInfo,userID,visible,activeTab,activeType} = this.state;
        return (
            <div>
                <Header userInfo={userInfo}></Header>
                <Avator parent="PersonalCenter" showModal={this.showModal} isCenter={true} updateUserInfo={this.getUser} isWeb={this.state.width > 768} userInfo={userInfo} userID={userID} />
                <div className="personal-center_tab-title-container">
                    <span className={activeTab===0?'tab-title__selected':'tab-title'} onClick={this.checkTab.bind(this,0)}>粉丝列表</span>
                    <span className={activeTab===1?'tab-title__selected':'tab-title'} onClick={this.checkTab.bind(this,1)}>我的关注</span>
                    <span className={activeTab===2?'tab-title__selected':'tab-title'} onClick={this.checkTab.bind(this,2)}>我的订单</span>
                </div>
                {
                    activeTab === 2 &&  <div className="personal-center_tab-title-container" style={{justifyContent: "flex-start"}}>
                        <span style={{marginRight:".2rem",}} className={activeType===0?'tab-title__selected':'tab-title'} onClick={this.checkType.bind(this,0)}>未完成</span>
                        <span className={activeType===1?'tab-title__selected':'tab-title'} onClick={this.checkType.bind(this,1)}>已完成</span>
                    </div>
                }
                <div className={activeTab===2?"personal-center-content":"personal-center-content-fan"}>
                    {
                        activeTab===0 && fList.map((fan,index)=>{
                            return <div className="personal-center-fan" key={index}>
                                <img src={fan.img} alt=""/>
                                <span>{fan.name||"--"}</span>
                            </div>
                        })
                    }
                    {
                        activeTab===1 && fList.map((fol,index)=>{
                            return <div className="personal-center-fan" key={index}>
                                <img src={fol.img} alt=""/>
                                <span>{fol.name}</span>
                            </div>
                        })
                    }
                    {
                        activeTab===2 &&
                            contents.map((index) => {
                                return (
                                    <Item key={index}/>
                                );
                            })
                    }
                </div>
                {
                    activeTab!==2&&<div className="personal-center-content-fan">

                    </div>
                }

                {
                    this.state.width > 768 ? <ModalWeb visible={visible} type={"Advisory"}/> : <ModalMobile visible={true} type={"Advisory"}/>
                }
                <Footer></Footer>
            </div>
        );
    }
}

const PersonalCenterPage = withAlert()(withRouter(PersonalCenter));
export default PersonalCenterPage;