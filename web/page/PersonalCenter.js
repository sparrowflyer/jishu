import React from 'react';
import { withRouter } from 'react-router';
import { withAlert } from 'react-alert';
import { Avator } from '../component/Avator.js';
import { postUrl ,getUnOrder,getDoOrder} from '../utils/http.js';
import {Footer} from '../component/common/Footer.jsx';
import {Header} from '../component/common/Header.jsx';
import {getUser, updateUserHeadImage, uploadImage,getUrl} from "../utils/http";
import Cropper from "react-cropper";
import { isArray } from '../utils/utils.jsx';
import {OrderItem} from '../component/OrderItem.jsx';
import {ShowMoreOrderDetail} from '../component/Modal/ShowMoreOrderDetail.jsx'
import {PageBreak} from "../component/PageBreak.jsx";


const contents = [0,1,2,3,4];
const centerTabs = ['粉丝列表','我的关注','消息中心','我的订单'];

class PersonalCenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth,
            height: document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight,
            userID: '',
            count:0, // 触发header头像信息等更新用
            isMine:false, //是否本人的个人中心
            following: [],
            fans: [],
            userInfo:{},
            activeTab: 0,
            activeOrderType:0, //订单列表active
            activeNoticeType:0, //消息列表active
            noticeType:[], //消息类型
            notices:[],//通知列表
            showDelete: null,
            orderObject:{},
            selectedImageFile: '',//更新头像 存储
            editImageModalVisible: false, //裁剪框显示
            src:"", //裁剪图src
            orderModalData:{},//订单详情弹出框数据
            showOrderModal:false,//订单弹窗展示与否
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
        this.showOrderModal = this.showOrderModal.bind(this);
        this.toPersonalCenter = this.toPersonalCenter.bind(this);
        this.deleteNotice = this.deleteNotice.bind(this);
        this.deleteNoticeAll = this.deleteNoticeAll.bind(this);
    }
    componentDidMount() {
        if(this.props.match.params.userID) {
            console.log(this.props.location.query)
            let pageType = this.props.location.query && this.props.location.query.pageType;
            let userID = this.props.match.params.userID;
            let userInfo = '';
            try {
                userInfo = JSON.parse(sessionStorage.getItem('jeeUser'))
            } catch (e) {
                sessionStorage.removeItem('jeeUser');
            }
            this.setState({
                userID: userID,
                activeTab: pageType === "notice" ? 2 : 0,
                isMine: userInfo && (userInfo.id+'') === userID
            });
            this.getUser(userID);
            this.getFans(userID, 1, 10);
            // this.getNotificationType();
            this.getNotificationByTypeId(1);
            window.addEventListener('resize', this.updateDimensions);
        } else {
            this.props.history.push('/');
        }
    }
    updateDimensions() {
        let width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
        this.setState((state) => {
            return { ...state, width };
        });
    }
    getNotificationType(){  //获取通知消息类型
        getUrl("/getNotificationType").then(resp =>{
            if(resp.status === 200){
                this.setState({
                    noticeType: resp.data.data
                })
            }
            console.log("getNotificationType",resp)
        }).catch(error=>{});
    }
    //  根据类型获取通知消息  关注通知接口 /getNotificationByTypeId?typeId=1  订单通知接口 /getNotificationByTypeId?typeId=6
    getNotificationByTypeId(id){
        getUrl("/getNotificationByTypeId?typeId=" + id).then(response=>{
            if(response.status === 200){
                let data = response.data.data;
               data.length > 0 && data.map(item=>{
                    item.content = JSON.parse(item.content)
                });
                this.setState({
                    notices: data
                })
            }
            console.log("getNotificationByTypeId",response)
        })
    }
    showDeleteMenu(item,idx){
        this.setState({
            showDelete: idx === this.state.showDelete ? null : idx
        });
    }
    deleteNotice(item,idx){
        getUrl('/setUserNotificaitonAsRead?id='+item.id).then(response=>{
            if(response.status === 200){
                let data = this.state.notices;
                if(!data){
                    return;
                }
                data.splice(idx,1);
                this.setState({
                    notices: data
                })
            }
            console.log('消息标注',response);
        }).catch(error=>{
            console.log('消息标注',error);
        })
    }
    deleteNoticeAll(){
        this.setState({
            notices:{}
        });
        let data = this.state.notices;
        data.map((item,index)=>{
            this.deleteNotice(item,index);
        })
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
    getUncompleteOrder(id,page,pageSize){
        getUnOrder({
            "userId": id || Number(this.state.userID),
            "page": page || this.state.orderObject.page || 1,
            "pageSize":pageSize || this.state.orderObject.pageSize || 8
        }).then(resp=>{
            console.log("获取未完成订单",resp);
            if(resp.status === 200 && resp.data){
                this.setState({
                    orderObject: resp.data.data
                })
            }else{
                this.props.alert.error(<div style={{fontSize: '12px'}}>{resp.data.errorMsg || '获取未完成订单异常！'}</div>);
            }

        }).catch(err=>{
            this.props.alert.error(<div style={{fontSize: '12px'}}> 获取未完成订单异常！</div>);
            console.log("获取未完成订单报错",err)
        })
    }
    getCompleteOrder(id, page, pageSize){
        getDoOrder({
            "userId": id || NUmber(this.state.userID),
            "page": page || this.state.orderObject.page || 1,
            "pageSize":pageSize || this.state.orderObject.pageSize || 8
        }).then(resp=>{
            console.log("获取已完成订单",resp);
            if(resp.status === 200 && resp.data){
                this.setState({
                    orderObject: resp.data.data
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
                this.setState({
                    count: this.state.count++
                }); //更新用户数据
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
                this.getNotificationByTypeId(this.state.activeNoticeType === 0 ? 1:6);
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
            this.getNotificationByTypeId(idx===0 ? 1:6);
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
    //展示订单弹窗
    showOrderModal(value){
        if(!value){
            this.setState({
                orderModalData: {}
            })
        }
        this.setState({
            showOrderModal: value
        })
    }
    //跳转别人的个人中心
    toPersonalCenter(id){
        this.props.history.push('/personalCenter/'+id);
    }

    //跳转页面-订单
    goPage(value){
        let object = Object.assign({},this.state.orderObject,{pageNum:value});
        this.setState({
            orderObject: object
        });

    }
    render() {
        let {count,isMine,orderModalData,editImageModalVisible,src,userInfo,userID,activeTab,activeOrderType,activeNoticeType,orderObject,fans,following,notices,showDelete,showOrderModal} = this.state;
        return (
            <div className="container-with-footer">
                <div>
                    <Header updateUser={count}></Header>
                    <Avator isMine={isMine} handleFileChange={this.handleFileChange} parent="PersonalCenter" showModal={this.showModal} isCenter={true} updateUserInfo={this.getUser} isWeb={this.state.width > 768} userInfo={userInfo} userID={userID} />
                    <div className="personal-center_tab-title-container">
                        {
                            centerTabs.map((item,index) => {
                                if(!isMine && index > 1) return null;
                                return <span key={index} className={activeTab===index?'tab-title__selected':'tab-title'} onClick={this.checkTab.bind(this,index)}>{item}</span>
                            })
                        }
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
                    <div className={(activeTab===2&&activeOrderType===0)?"personal-center-content":"personal-center-content-fan"}>
                        {
                            activeTab===0 && isArray(fans) && fans.map((fan,index)=>{
                                return <div className="personal-center-fan" key={index}>
                                    <img onClick={this.toPersonalCenter.bind(this,fan.id)} src={"http://" + fan.headImage} alt=""/>
                                    <span onClick={this.toPersonalCenter.bind(this,fan.id)}>{fan.nickName||" "}</span>
                                </div>
                            })
                        }
                        {
                            activeTab===1 && isArray(following) && following.map((fol,index)=>{
                                return <div className="personal-center-fan" key={index}>
                                   <img onClick={this.toPersonalCenter.bind(this,fol.id)} src={"http://" + fol.headImage} alt=""/>
                                    <span onClick={this.toPersonalCenter.bind(this,fol.id)}>{fol.name}</span>
                                </div>
                            })
                        }
                        {
                          isMine && activeTab===2 && isArray(notices) &&
                            notices.map((item,index) => {
                                return (
                                 <div className="notice-contain" key={index} onClick={this.showDeleteMenu.bind(this,item,index)}>
                                     <div className="notice-person">
                                         <img  onClick={this.toPersonalCenter.bind(this,item.id)} src={'http://' + item.content.userImg} alt=""/>
                                         <span className="notice-name" title={item.content.userName} onClick={this.toPersonalCenter.bind(this,item.id)}>{item.content.userName}</span>
                                         <span className="notice-oper" title={item.content.content}>{item.content.content}</span>
                                     </div>
                                     <span title={item.createdTime}>{item.createdTime}</span>
                                     {
                                         showDelete && showDelete===index && <ul className="notice-delete">
                                             <li onClick={this.deleteNotice.bind(this,item,index)}>删除</li>
                                             <li onClick={this.deleteNoticeAll}>全部删除</li>
                                         </ul>
                                     }
                                  </div>

                                );
                            })
                        }

                        {/*{*/}
                            {/*isMine &&  activeTab === 2 &&*/}
                                {/*contents.map((item,index)=>{*/}
                                    {/*<div className="notice-contain" key={index} onClick={this.showDeleteMenu.bind(this,index)}>*/}
                                        {/*<div className="notice-person">*/}
                                            {/*<img src={require("../assets/images/search.png")} alt=""/>*/}
                                            {/*<span>Rodrigo</span>*/}
                                            {/*<span>关注了你</span>*/}
                                        {/*</div>*/}
                                        {/*<span>2019.05.01 18:00</span>*/}
                                        {/*{*/}
                                            {/*showDelete && showDelete===index && <ul className="notice-delete">*/}
                                                {/*<li>删除</li>*/}
                                                {/*<li>全部删除</li>*/}
                                            {/*</ul>*/}
                                        {/*}*/}
                                    {/*</div>*/}
                                {/*})*/}
                        {/*}*/}

                        {
                          isMine && activeTab===3 && orderObject && orderObject.list && isArray(orderObject.list) &&
                            contents.map((item,index) => {
                                return (
                                   <OrderItem data={item} key={index} clickMore={this.showOrderModal.bind(this,true)}></OrderItem>
                                );
                            })
                        }
                        {
                            isMine && orderObject && orderObject.pageSize > 0 && <PageBreak pageTotal={orderObject.pages} go={this.goPage} page={orderObject.pageNum}></PageBreak>
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
                { orderModalData && showOrderModal && <ShowMoreOrderDetail data={orderModalData} showOrderModal={this.showOrderModal}></ShowMoreOrderDetail>}
                <Footer></Footer>
            </div>
        );
    }
}

const PersonalCenterPage = withAlert()(withRouter(PersonalCenter));
export default PersonalCenterPage;