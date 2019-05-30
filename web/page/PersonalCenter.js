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
import {OrderDetailOrEvaluate} from '../component/Modal/OrderDetailOrEvaluate.jsx'
import {PageBreak} from "../component/PageBreak.jsx";


const contents = [0,1,2,3,4];
const centerTabs = ['粉丝列表','关注列表','消息中心','我的订单'];

class PersonalCenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth,
            height: document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight,
            userID: null, //个人中心用户id
            count:0, // 触发header头像信息等更新用
            isMine:false, //是否本人的个人中心
            following: [],
            fans: [],
            userInfo:{},
            activeTab: 0,
            activeOrderType:0, //订单列表active
            activeNoticeType:0, //消息列表active
            noticeType:[], //消息类型
            notices:{},//通知数据
            // showDelete: null,
            completeOrder:{}, //已完成订单
            unCompleteOrder:{}, //未完成订单
            selectedImageFile: '',//更新头像 存储
            editImageModalVisible: false, //裁剪框显示
            src:"", //裁剪图src
            orderModalData:{},//订单详情弹出框数据
            showOrderModal:false,//订单弹窗展示与否
            OrderModalType: "MoreDetail", //订单弹窗类别 OrderEvaluate
            isMyCenter: "myPersonalCenter",//是否自己的个人中心 myPersonalCenter & otherPersonalCenter
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
        // this.deleteNotice = this.deleteNotice.bind(this);
        // this.deleteNoticeAll = this.deleteNoticeAll.bind(this);
        this.goPage = this.goPage.bind(this);
        this.changeOrderModal =this.changeOrderModal.bind(this);
        this.showAlert = this.showAlert.bind(this);
        this.getFollowing = this.getFollowing.bind(this);
        this.orderDataDispose = this.orderDataDispose.bind(this);
        this.noticeRead = this.noticeRead.bind(this);
        this.confirmOrder = this.confirmOrder.bind(this);
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
                isMine: userInfo && (userInfo.id+'') === userID,
                isMyCenter: userInfo && (userInfo.id+'') === userID ? "myPersonalCenter" : "otherPersonalCenter"
            });
            this.getUser(userID);
            this.getFans(userID, 1, 10);
            // this.getNotificationType();
            this.getNotificationByTypeId(this.state.activeNoticeType===0 ? 1:6);
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
    getNotificationByTypeId(id,page,pageSize){
        let res = [];
        postUrl("/getNotificationByTypeId",{
            "typeId":id,
            "page":page || this.state.notices.page || 1,
            "pageSize":pageSize || this.state.notices.pageSize || 8
        })
            .then((response)=>{
                let data = response.data;
                if(response.status === 200 && data.status === 'success' && isArray(data.data.list)){
                    data.data.list.map(item=>{
                        // if (item.status === "unread") {
                        if(item.content && !isArray(item.content)){
                            item.content = JSON.parse(item.content);
                        }
                        res.push(item);
                        // }
                    });
                }
                data.data.list = res;
                console.log('消息通知',res);
                this.setState((state) => {
                    return {
                        ...state,
                        notices: data.data
                    }
                })
            }).catch((error) => {
                this.setState((state) => {
                    return {
                        ...state,
                        notices: {}
                    }
                });
                console.error('消息列表', error)
            });
    }
    //通知已读标记
    noticeRead(item,index){
         getUrl('/setUserNotificaitonAsRead?id='+item.id).then(response=>{
            if(response.status === 200){
                let data = this.state.notices;
                if(!data){
                    return;
                }
                data.list[index].status = 'read';
                this.setState({
                    notices: data
                })
            }
            console.log('消息标注',response);
        }).catch(error=>{
            console.log('消息标注',error);
        })
    }
    // 获取未完成订单
    getUncompleteOrder(id,page,pageSize){
        getUnOrder({
            "userId": id || Number(this.state.userID),
            "page": page || this.state.unCompleteOrder.page || 1,
            "pageSize":pageSize || this.state.unCompleteOrder.pageSize || 8
        }).then(resp=>{
            console.log("获取未完成订单",resp);
            if(resp.status === 200 && resp.data){
                let obj = resp.data.data;
                obj.list = this.orderDataDispose(obj.list);
                this.setState({
                    unCompleteOrder: obj
                })
            }else{
                this.props.alert.error(<div style={{fontSize: '12px'}}>{resp.data.errorMsg || '获取未完成订单异常！'}</div>);
            }

        }).catch(err=>{
            this.props.alert.error(<div style={{fontSize: '12px'}}> 获取未完成订单异常！</div>);
            console.log("获取未完成订单报错",err)
        })
    }
    //获取已完成订单
    getCompleteOrder(id,page,pageSize){
        getDoOrder({
            "userId": id || Number(this.state.userID),
            "page": page || this.state.completeOrder.page || 1,
            "pageSize":pageSize || this.state.completeOrder.pageSize || 8
        }).then(resp=>{
            console.log("获取已完成订单",resp);
            if(resp.status === 200 && resp.data){
                let obj = resp.data.data;
                obj.list = this.orderDataDispose(obj.list);
                this.setState({
                    completeOrder: obj
                })
            } else {
                this.props.alert.error(<div style={{fontSize: '12px'}}>{resp.data.errorMsg || '获取已完成订单异常！'}</div>);
            }

        }).catch(err=>{
            this.props.alert.error(<div style={{fontSize: '12px'}}>获取已完成订单异常！</div>);
            console.log("获取已完成订单报错",err)
        })
    }
    //订单列表数据处理
    orderDataDispose(data){
        if(isArray(data)){
            let centerID = this.state.userID;
            let buyTextObj={
                'payed':"已付款",
                'serviced':'待评价',
                'commented':'已完成'
            },
            sellerTextObj={
                'payed':"待确认",
                'serviced':'已完成',
                'commented':'已完成'
            };
            data.map((item,index)=>{
                if(item.questions !== ""){
                    item.questions = item.questions.split(",");
                } else {
                    item.questions = [];
                }
                if(Number(centerID) === item.buyerUser.id){ //判断自己是否买家
                    item.btnText = buyTextObj[item.status];
                } else {
                    item.btnText = sellerTextObj[item.status];
                }
            });
            return data;
        }
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
                    // sessionStorage.removeItem("jeeUser");
                    // sessionStorage.setItem("jeeUser",JSON.stringify(data.data));
                } else {
                    this.props.alert.error(<div style={{fontSize: '12px'}}>{`获取${userID}的个人信息失败,原因为${data.errorMsg || `${response.status}${response.statusText}`}`}</div>);
                }
                this.setState({
                    count: this.state.count++
                }); //更新用户数据
            }).catch(error => {
            this.props.alert.error(<div style={{fontSize: '12px'}}>'获取个人信息失败！'</div>);
            console.error('获取个人信息', error);
        });
    }
    getFollowing(studentId, pageNo, pageAmount) {
        postUrl('/studentLikeUserList', {
            studentId,
            pageNo,
            pageAmount
        }).then((response) => {
            let data = response.data;
            if (response.status === 200 && data.status === 'success') {
                this.setState((state) => {
                   return {
                       ...state,
                       following: isArray(data.data) ? data.data : []
                   }
                });
            } else {
                this.props.alert.error(<div style={{fontSize: '12px'}}>{`获取我的关注失败,原因为${data.errorMsg || `${response.status}${response.statusText}`}`}</div>);
            }
        }).catch((error) => {
            console.error('获取关注列表', error);
            this.props.alert.error(<div style={{fontSize: '12px'}}>获取我的关注失败!</div>);
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
                this.getFollowing(this.state.userID, 1, 10);
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
    showOrderModal(value,item,type){
        this.setState({
            orderModalData: !value ? {}:item
        });
        this.setState({
            showOrderModal: value,
            OrderModalType: type
        });
    }
    //卖家确认订单
    confirmOrder(data){
        let that = this;
        postUrl("/completedPerchaseContactOrder",
            {"id":data.id,
            "buyerId":data.buyerId,
            "sellerId":data.sellerId}).then(response=>{
            console.log('卖家确认订单1',response);
                if(response.status === 200 && response.data.status === 'success'){
                    console.log('卖家确认订单2',response);
                    that.props.alert.success(<div style={{fontSize: '12px'}}>确认订单已完成！</div>);
                    let orderList = this.state.unCompleteOrder;
                    orderList.list.map((item,index)=>{
                        if(item.id===data.id){
                            orderList.list.splice(index,1);
                            this.setState({
                                unCompleteOrder:orderList
                            });
                            return;
                        }
                    });
                    that.getCompleteOrder();
                    return;
                }
            console.log('卖家确认订单3',response);
            that.props.alert.error(<div style={{fontSize: '12px'}}>确认订单完成失败!</div>);
            }).catch(error=>{
            that.props.alert.error(<div style={{fontSize: '12px'}}>{'确认订单完成失败:'+error}</div>);
            console.log('卖家确认订单已完成失败',error)
        })
    }
    //跳转别人的个人中心
    toPersonalCenter(id){
        if(!id)return;
        this.props.history.push('/personalCenter/'+id);
    }
    //跳转页面-订单
    goPage(value){
        if(this.state.activeTab===3){  //订单换页
            console.log("gopage-Orders",value);

            if(this.state.activeOrderType === 0){
                this.getUncompleteOrder(Number(this.state.userID),value);

            }else {
                this.getCompleteOrder(Number(this.state.userID),value);
            }
        } else if(this.state.activeTab===2){ //通知换页
            console.log("gopage-notices",value);
         let id = this.state.activeNoticeType===0 ? 1 : 6;
         this.getNotificationByTypeId(id,value);
        }
    }
    changeOrderModal(value){
        this.setState({
            OrderModalType:value
        })
    }
    showAlert(type,value){
        if(type==='success') {
            this.props.alert.success(<div style={{fontSize:'.12rem'}}>{value}</div>);
        } else {
            this.props.alert.show(<div style={{fontSize:'.12rem'}}>{value}</div>);
        }
    }
    render() {
        let {isMyCenter,OrderModalType,count,isMine,orderModalData,editImageModalVisible,src,userInfo,userID,activeTab,activeOrderType,activeNoticeType,unCompleteOrder,completeOrder,fans,following,notices,showOrderModal} = this.state;
        return (
            <div className="container-with-footer">
                <div>
                    <Header updateUser={count}></Header>
                    <Avator isMine={isMine} handleFileChange={this.handleFileChange} parent={isMyCenter} showModal={this.showModal} updateUserInfo={this.getUser} isWeb={this.state.width > 768} userInfo={userInfo} userID={userID} />
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
                            <span className={activeOrderType===0?'tab-title__selected':'tab-title'} onClick={this.checkType.bind(this,0)}>未完成</span>
                            <span className={activeOrderType===1?'tab-title__selected':'tab-title'} onClick={this.checkType.bind(this,1)}>已完成</span>
                        </div>
                    }
                    <div className={(activeTab===2&&activeNoticeType===0)?"personal-center-content":"personal-center-content-fan"}>
                        {
                            activeTab===0 && isArray(fans) && fans.map((fan,index)=>{
                                return <div className="personal-center-fan" key={index}>
                                    {/*<div onClick={this.toPersonalCenter.bind(this,fan.id)} className="personal-fan-head" style={{backgroundImage:'url(http://' + fan.headImage +')'}}></div>*/}
                                    <img onClick={this.toPersonalCenter.bind(this,fan.id)} src={"http://" + fan.headImage} alt=""/>
                                    <span onClick={this.toPersonalCenter.bind(this,fan.id)}>{fan.nickName||" "}</span>
                                </div>
                            })
                        }
                        {
                            activeTab===1 && following.map((fol, index)=>{
                                return <div className="personal-center-fan" key={index}>
                                    {/*<div onClick={this.toPersonalCenter.bind(this,fol.id)} className="personal-fan-head" style={{backgroundImage:'url(http://' + fol.headImage +')'}}></div>*/}
                                    <img onClick={this.toPersonalCenter.bind(this,fol.id)} src={"http://" + fol.headImage} />
                                    <span onClick={this.toPersonalCenter.bind(this,fol.id)}>{fol.nickName}</span>
                                </div>
                            })
                        }
                        {
                          isMine && activeTab===2 && isArray(notices.list) &&
                            notices.list.map((item,index) => {
                                return (
                                 <div className="notice-contain" key={index} onClick={this.noticeRead.bind(this,item,index)}>
                                     <div className="notice-person">
                                         {
                                             item.status === 'unread' && <span className="notice-unread"></span>
                                         }
                                         <img  onClick={this.toPersonalCenter.bind(this,item.content.userId)} src={'http://' + item.content.userImg} alt=""/>
                                         <span className="notice-name" title={item.content.userName} onClick={this.toPersonalCenter.bind(this,item.content.userId)}>{item.content.userName}</span>
                                         <span className="notice-oper" title={item.content.content}>{item.content.content}</span>
                                     </div>
                                     <span title={item.createdTime}>{item.createdTime}</span>
                                     {/*{*/}
                                         {/*showDelete===index && <ul className="notice-delete">*/}
                                             {/*<li onClick={this.deleteNotice.bind(this,item,index)}>删除</li>*/}
                                             {/*<li onClick={this.deleteNoticeAll}>全部删除</li>*/}
                                         {/*</ul>*/}
                                     {/*}*/}
                                  </div>

                                );
                            })
                        }
                        {/*未完成订单*/}
                        {
                          isMine && activeTab===3 && activeOrderType===0 && unCompleteOrder && unCompleteOrder.list && isArray(unCompleteOrder.list) &&
                          unCompleteOrder.list.map((item,index) => {
                                return (
                                   <OrderItem data={item} key={index} confirmOrder={this.confirmOrder} showOrderModal={this.showOrderModal}></OrderItem>
                                );
                            })
                        }
                        {/*已完成订单*/}
                        {
                            isMine && activeTab===3 && activeOrderType===1 && completeOrder && completeOrder.list && isArray(completeOrder.list) &&
                            completeOrder.list.map((item,index) => {
                                return (
                                    <OrderItem data={item} key={index} confirmOrder={this.confirmOrder} showOrderModal={this.showOrderModal}></OrderItem>
                                );
                            })
                        }

                    </div>
                    {/* 订单分页start*/}
                    {
                        isMine && activeTab===3  && activeOrderType===0  && unCompleteOrder && unCompleteOrder.pages > 1 && <PageBreak previous={{hasPreviousPage:unCompleteOrder.hasPreviousPage,prePage:unCompleteOrder.prePage}} next={{hasNextPage:unCompleteOrder.hasNextPage,nextPage:unCompleteOrder.nextPage}} pageArr={unCompleteOrder.navigatepageNums} go={this.goPage} page={unCompleteOrder.pageNum}></PageBreak>
                    }
                    {
                        isMine && activeTab===3  && activeOrderType===1  && completeOrder && completeOrder.pages > 1 && <PageBreak previous={{hasPreviousPage:completeOrder.hasPreviousPage,prePage:completeOrder.prePage}} next={{hasNextPage:completeOrder.hasNextPage,nextPage:completeOrder.nextPage}} pageArr={completeOrder.navigatepageNums} go={this.goPage} page={completeOrder.pageNum}></PageBreak>
                     }
                     {/*订单分页end*/}
                    {
                        isMine && activeTab===2 && notices && notices.pages > 1 && <PageBreak previous={{hasPreviousPage:notices.hasPreviousPage,prePage:notices.prePage}} next={{hasNextPage:notices.hasNextPage,nextPage:notices.nextPage}} pageArr={notices.navigatepageNums} go={this.goPage} page={notices.pageNum}></PageBreak>
                    }
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
                { orderModalData && showOrderModal && <OrderDetailOrEvaluate showAlert={this.showAlert} type={OrderModalType} ChangeOrderModalType={this.changeOrderModal} data={orderModalData} showOrderModal={this.showOrderModal} confirmOrder={this.confirmOrder}></OrderDetailOrEvaluate>}
                <Footer></Footer>
            </div>
        );
    }
}

const PersonalCenterPage = withAlert()(withRouter(PersonalCenter));
export default PersonalCenterPage;