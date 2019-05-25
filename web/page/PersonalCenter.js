import React from 'react';
import { withRouter } from 'react-router';
import { withAlert } from 'react-alert';
import { Avator } from '../component/Avator.js';
import { Item } from '../component/Item.js';
import { postUrl ,getUnOrder,getDoOrder} from '../utils/http.js';
import {Footer} from '../component/common/Footer.jsx';
import {Header} from '../component/common/Header.jsx';
import {getUser, updateUserHeadImage, uploadImage,getUrl} from "../utils/http";
import Cropper from "react-cropper";
import { isArray } from '../utils/utils.jsx';
import { NoContent } from '../component/NoContent.js';

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
            height: document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight,
            userID: '',
            following: [],
            fans: [],
            userInfo:{},
            activeTab: 3,
            activeOrderType:0, //订单列表active
            activeNoticeType:0, //消息列表active
            noticeType:[], //消息类型
            notices:[],//通知列表
            showDelete: null,
            orders:contents || [],
            selectedImageFile: '',//更新头像 存储
            editImageModalVisible: false, //裁剪框显示
            src:"", //裁剪图src
        };
        this.updateDimensions = this.updateDimensions.bind(this);
        this.getFans = this.getFans.bind(this);
        this.getUncompleteOrder = this.getUncompleteOrder.bind(this);
        this.getCompleteOrder = this.getCompleteOrder.bind(this);
        this.getUser = this.getUser.bind(this);
        this.cancelImg = this.cancelImg.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.updateUserHeadImage = this.updateUserHeadImage.bind(this);
        this.dataURLtoFile = this.dataURLtoFile.bind(this);
        this.getNotificationByTypeId = this.getNotificationByTypeId.bind(this);
        this.getNotificationType = this.getNotificationType.bind(this);
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
            this.getFans(userInfo.id,1,10);
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
    getNotificationType(){  //获取通知消息类型
        getUrl("/getNotificationType".then(resp =>{
            console.log("getNotificationType",resp)
        })).catch(error=>{});
    }
    //  根据类型获取通知消息
    getNotificationByTypeId(id){
        getUrl("/getNotificationByTypeId?typeId=" + id).then(response=>{
            console.log("getNotificationByTypeId",response)
        })
    }
    showDeleteMenu(idx){
        this.setState({
            showDelete: idx === this.state.showDelete ? null : idx
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
                        fans: response.data.data
                    }
                });
            }else{
                this.props.alert.error(<div style={{fontSize: '12px'}}>{response.data.errorMsg || '获取粉丝列表异常！'}</div>);
            }
        }).catch((error) => {
            this.props.alert.error(<div style={{fontSize: '12px'}}>获取粉丝列表异常！</div>);
            console.error('获取粉丝列表：', error);
        });
    }
    getUncompleteOrder(id){
        getUnOrder({id:id||this.state.userID}).then(resp=>{
            console.log("获取未完成订单",resp)
            if(resp.status === 200 && resp.data){
                this.setState({
                    orders: resp.data.data
                })
            }else{
                this.props.alert.error(<div style={{fontSize: '12px'}}>{resp.data.errorMsg || '获取未完成订单异常！'}</div>);
            }

        }).catch(err=>{
            this.props.alert.error(<div style={{fontSize: '12px'}}> 获取未完成订单异常！</div>);
            console.log("获取未完成订单报错",err)
        })
    }
    getCompleteOrder(id){
        getDoOrder({id:id||this.state.userID}).then(resp=>{
            console.log("获取已完成订单",resp)
            if(resp.status === 200 && resp.data){
                this.setState({
                    orders: resp.data.data
                })
            } else {
                this.props.alert.error(<div style={{fontSize: '12px'}}>{resp.data.errorMsg || '获取已完成订单异常！'}</div>);
            }

        }).catch(err=>{
            this.props.alert.error(<div style={{fontSize: '12px'}}>获取已完成订单异常！</div>);
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
                    this.props.alert.error(`获取${userID}的个人信息失败,原因为${data.errorMsg || `${response.status}${response.statusText}`}`);
                }
            }).catch(error => {
            this.props.alert.error('获取个人信息失败！');
            console.error('获取个人信息', error);
        });
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
    checkTab(i){
        this.setState({
            activeTab: i
        });
        switch (i){
            case 0:
                this.getFans(this.state.userID,1,10);
                break;
            case 1:
                console.log(i);
                break;
            case 2:
                this.getNotificationByTypeId(this.state.activeNoticeType);
                break;
            case 3:
                this.state.activeOrderType===0 ? this.getUncompleteOrder():this.getCompleteOrder();
                break;
        }
    }
    checkType(idx,type){
        if(type==="notice"){
            this.setState({
                activeNoticeType: idx
            });
            this.getNotificationByTypeId(idx);
            return;
        }
        this.setState({
            activeOrderType: idx
        });
        idx===0 ? this.getUncompleteOrder():this.getCompleteOrder();
    }
    //更新头像
    handleFileChange(file){
        if (file) {
            this.setState({
                selectedImageFile: file,
            },()=>{
                this.setState({
                    editImageModalVisible: true,
                });
            });
            const fileReader = new FileReader();
            fileReader.onload = (ev) => {
                const dataURL = ev.target.result;
                this.setState({src: dataURL})
            };
            fileReader.readAsDataURL(file);
        }
    }
    cancelImg(){
        this.setState({
            editImageModalVisible: false
        })
    }
    dataURLtoFile(dataurl, filename) {//将base64转换为文件
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    }
    updateUserHeadImage(){ //更新头像
        let imgRes = this.cropper.getCroppedCanvas().toDataURL();
        let imgFile = this.state.selectedImageFile;
        let img = this.dataURLtoFile(imgRes,imgFile.name);
        console.log(img,imgFile)
            // 上传图片
            uploadImage(img).then(res=> {
                if(res.data.data){
                    updateUserHeadImage({
                        id: this.state.userID,
                        headImage: res.data.data
                    }).then(resp=>{
                        console.log("更新头像",resp)
                        if(resp.data.status==="success"){
                            this.props.alert.success(<div style={{fontSize: '12px'}}>头像更新成功！</div>);
                            this.getUser(this.state.userID);
                        }else{
                            this.props.alert.error(<div style={{fontSize: '12px'}}>{resp.data.errorMsg || '头像更新失败！'}</div>);
                        }
                        this.setState({
                            editImageModalVisible: false
                        });
                    }).catch(err=>{
                        this.setState({
                            editImageModalVisible: false
                        });
                        this.props.alert.error(<div style={{fontSize: '12px'}}>{'头像更新失败:' + err}</div>);
                        console.log("更新头像报错",err)
                    })
                }
            }).catch(err=>{
                this.props.alert.error(<div style={{fontSize: '12px'}}>{'图片上传失败:'+err}</div>);
                console.log("上传头像报错",err)
            });
    }

    render() {
        let {editImageModalVisible,src,userInfo,userID,activeTab,activeOrderType,activeNoticeType,orders,fans,following,notices,showDelete} = this.state;
        return (
            <div className="container-with-footer">
                <div>
                    <Header userInfo={userInfo}></Header>
                    <Avator handleFileChange={this.handleFileChange} parent="PersonalCenter" showModal={this.showModal} isCenter={true} updateUserInfo={this.getUser} isWeb={this.state.width > 768} userInfo={userInfo} userID={userID} />
                    <div className="personal-center_tab-title-container">
                        <span className={activeTab===0?'tab-title__selected':'tab-title'} onClick={this.checkTab.bind(this,0)}>粉丝列表</span>
                        <span className={activeTab===1?'tab-title__selected':'tab-title'} onClick={this.checkTab.bind(this,1)}>我的关注</span>
                        <span className={activeTab===2?'tab-title__selected':'tab-title'} onClick={this.checkTab.bind(this,2)}>消息中心</span>
                        <span className={activeTab===3?'tab-title__selected':'tab-title'} onClick={this.checkTab.bind(this,3)}>我的订单</span>
                    </div>
                    {
                        activeTab === 2 &&  <div className="personal-center_small-tabs">
                            <span className={activeNoticeType===0?'tab-title__selected':'tab-title'} onClick={this.checkType.bind(this,0,"notice")}>关注通知</span>
                            <span className={activeNoticeType===1?'tab-title__selected':'tab-title'} onClick={this.checkType.bind(this,1,"notice")}>订单通知</span>
                        </div>
                    }
                    {
                        activeTab === 3 &&  <div className="personal-center_small-tabs">
                            <span className={activeOrderType===0?'tab-title__selected':'tab-title'} onClick={this.checkType.bind(this,0)}>未付款</span>
                            <span className={activeOrderType===1?'tab-title__selected':'tab-title'} onClick={this.checkType.bind(this,1)}>已完成</span>
                        </div>
                    }
                    <div className={activeTab===2?"personal-center-content":"personal-center-content-fan"}>
                        {
                            activeTab===0 && isArray(fans) && fans.map((fan,index)=>{
                                return <div className="personal-center-fan" key={index}>
                                    <img src={fan.img} alt=""/>
                                    <span>{fan.name||"--"}</span>
                                </div>
                            })
                        }
                        {
                            activeTab===1 && isArray(following) && following.map((fol,index)=>{
                                return <div className="personal-center-fan" key={index}>
                                    <img src={fol.img} alt=""/>
                                    <span>{fol.name}</span>
                                </div>
                            })
                        }
                        {
                            activeTab===2
                             && <div className="notice-contain" onClick={this.showDeleteMenu.bind(this,0)}>
                                <div className="notice-person">
                                    <img src='/image/college/uk.png' alt=""/>
                                    <span className="notice-name">Rodrigo</span>
                                    <span className="notice-oper">关注了你</span>
                                </div>
                                <span>2019.05.01 18:00</span>
                                {
                                 showDelete && showDelete===0 && <ul className="notice-delete">
                                        <li>删除</li>
                                        <li>全部删除</li>
                                    </ul>
                                }
                            </div>
                            // && isArray(notices) &&
                            // notices.map((item,index) => {
                            //     return (
                            //         <div className="notice-contain">
                            //             <div className="notive-person">
                            //                 <img src={require("../assets/images/ca.png")} alt=""/>
                            //                 <span>Rodrigo</span>
                            //                 <span>关注了你</span>
                            //             </div>
                            //             <span>2019.05.01 18:00</span>
                            //         </div>
                            //     );
                            // })
                        }
                        {
                            activeTab===3 && isArray(orders) &&
                            contents.map((item,index) => {
                                return (
                                   <div className="order-contain">
                                        <div className="order-title">
                                            <span>20190523001</span>
                                            <span>2019.05.23 18:00</span>
                                        </div>
                                        <div className="order-content">
                                            <div>
                                                <span className="line-label">买家姓名</span>
                                                <span className="line-content">阎杰</span>
                                            </div>
                                            <div className="order-question-contain">
                                                <span className="line-label">买家问题</span>
                                                <ul>
                                                    <li className="order-question">问题占位符问题占位符问题占位符问题占位符</li>
                                                    <li className="order-question">问题占位符问题占位符问题占位符问题占位符</li>
                                                    {/*<li>问题占位符问题占位符问题占位符问题占位符</li>*/}
                                                    <li className="question-forMore">剩余两条内容，点击查看详情</li>
                                                </ul>
                                            </div>
                                            <div className="last-item">
                                                <span className="line-label">订单金额 </span>
                                                <span className="line-content">¥52</span>
                                             </div>
                                        </div>
                                        <button>待评价</button>
                                    </div>
                                );
                            })
                        }
                    </div>
                    {
                        this.state.width > 768 && editImageModalVisible && <div className="class-cropper-modal">
                            <div className="modal-panel">
                                <div className="cropper-container-container">
                                    <div className="cropper-container">
                                        <Cropper
                                            src={src}
                                            className="cropper"
                                            ref={cropper => (this.cropper = cropper)}
                                            viewMode={1}
                                            zoomable={false}
                                            aspectRatio={3/4}
                                            guides={false}
                                            preview=".cropper-preview"
                                        />
                                    </div>
                                    <div className="preview-container">
                                        <div className="cropper-preview" />
                                        <div className="button-row">
                                            <div className="submit-button" onClick={this.updateUserHeadImage}>确认</div>
                                            <div className="cancel-button" onClick={this.cancelImg}>取消</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        this.state.width <= 768 && editImageModalVisible && <div className="mobile-image-upload-model">
                            <div className="cropper-container">
                                <Cropper
                                    // ref='cropper'
                                    src={src}
                                    className="cropper"
                                    ref={cropper => this.cropper = cropper}
                                    aspectRatio={3/4}
                                    guides={false}/>
                            </div>
                            <div className="mobile-cropper-btn-wrap">
                                <div className="submit-button" onClick={this.updateUserHeadImage}>确认</div>
                                <div className="btn-line"></div>
                                <div className="cancel-button" onClick={this.cancelImg}>取消</div>
                            </div>
                        </div>
                    }
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

const PersonalCenterPage = withAlert()(withRouter(PersonalCenter));
export default PersonalCenterPage;