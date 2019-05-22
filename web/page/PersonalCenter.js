import React from 'react';
import { withRouter } from 'react-router';
import { withAlert } from 'react-alert';
import { Avator } from '../component/Avator.js';
import { Item } from '../component/Item.js';
import { postUrl ,getUnOrder,getDoOrder} from '../utils/http.js';
import {Footer} from '../component/common/Footer.jsx';
import {Header} from '../component/common/Header.jsx';
import {getUser, updateUserHeadImage, uploadImage} from "../utils/http";
import Cropper from "react-cropper";

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
            activeTab:2,
            activeType:0,
            orders:[],
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
                    this.props.alert.error(`获取${userID}的个人信息失败,原因为${data.errorMsg || `${response.status}${response.statusText}`}`);
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
                            // this.props.alert.success(<div style={{fontSize: '12px'}}>头像更新成功！</div>);
                            this.getUser(this.state.userID);
                        }else{
                            // this.props.alert.error(<div style={{fontSize: '12px'}}>{resp.data.errorMsg || '头像更新失败！'}</div>);
                        }
                        this.setState({
                            editImageModalVisible: false
                        });
                    }).catch(err=>{
                        this.setState({
                            editImageModalVisible: false
                        });
                        // this.props.alert.error(<div style={{fontSize: '12px'}}>{'头像更新报错:' + err}</div>);
                        console.log("更新头像报错",err)
                    })
                }
            }).catch(err=>{
                // this.props.alert.error(<div style={{fontSize: '12px'}}>{'图片上传失败:'+err}</div>);
                console.log("上传头像报错",err)
            });
    }

    render() {
        let {editImageModalVisible,src,userInfo,userID,activeTab,activeType,height,orders} = this.state;
        const copperStyle = {
            width: '100%',
            height: height
        }, wrapStyle = {
            height: height,
        };
        return (
            <div>
                <Header userInfo={userInfo}></Header>
                <Avator handleFileChange={this.handleFileChange} parent="PersonalCenter" showModal={this.showModal} isCenter={true} updateUserInfo={this.getUser} isWeb={this.state.width > 768} userInfo={userInfo} userID={userID} />
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
                            orders.map((item,index) => {
                                return (
                                    <Item key={index} item={item}/>
                                );
                            })
                    }
                </div>
                {
                    activeTab!==2&&<div className="personal-center-content-fan">

                    </div>
                }
                {
                    editImageModalVisible &&
                    <div className="personal-center-image-upload" style={{wrapStyle}}>
                        <Cropper
                            // ref='cropper'
                            src={src}
                            style={{copperStyle}}
                            ref={cropper => this.cropper = cropper}
                            aspectRatio={3/4}
                            guides={false}/>
                        <div className="personal-center-btn-wrap">
                            <div className="personal-center-image-submit" onClick={this.updateUserHeadImage}>确认</div>
                            <div className="personal-center-image-cancel" style={{backgroundColor:'#fff',border:'1px solid #0E0E0E'}} onClick={this.cancelImg}>取消</div>
                        </div>
                       </div>

                }
                <Footer></Footer>
            </div>
        );
    }
}

const PersonalCenterPage = withAlert()(withRouter(PersonalCenter));
export default PersonalCenterPage;