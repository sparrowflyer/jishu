import React from 'react';
import {Footer} from '../component/common/Footer.jsx';
import {Header} from '../component/common/Header.jsx';
import '../assets/style.css';
import { Link } from 'react-router-dom';
import {getUsersBySchool,getSchoolById} from "../utils/http.js" ;
import {getBg} from "../utils/utils.jsx";

export class UniversityDetail extends React.Component {
    constructor(props) {
        super(props);
        this.getUsersBySchool = this.getUsersBySchool.bind(this);
        this.getSchoolById = this.getSchoolById.bind(this);
        this.state = {
            schoolData:{},
            schoolId:"",
            stuList:[],
            id: "",
            pageSize: 1,
            page: 1,
        }
    }
    componentWillMount (){
        // console.log(this.props)
        let id = this.props.match.params.id;
        // let data = JSON.parse(this.props.match.params.data);

       this.setState({
           schoolId: id,
       }) ;
        this.getSchoolById(id);
        this.getUsersBySchool(id,1);
    }
    getSchoolById(id){
        getSchoolById({
            "id": id
        }).then(resp => {
            if(resp.status === 200) {
                console.log("getSchoolById",resp.data);
                this.state.schoolData = resp.data.data;
            }
        })
    }
    getUsersBySchool(schoolId,pageNo){
        //schoolId是学校id，pageNo表示页数，pageAmount表示一页数量，needTotalAmount表示是否需要总数Y或N
        getUsersBySchool({
            "schoolId": schoolId,
            "pageNo": pageNo || 1,
            "pageAmount": 4,
            "needTotalAmount": "Y",
        }).then( response => {
            if(response.status === 200) {
                console.log("getUsersBySchool",response.data)
                this.state.stuList = response.data.data.students;
            }
        })
    }
    //换页
    go(page){
        page = page<1 ? 1 :page;
        if(page === this.state.page){
            return;
        }
        this.setState({page: page});
        this.getUsersBySchool(page);
    }
    render() {
        let {pageSize,schoolData,page,stuList} = this.state;
        const pageNum = [];
        for (let i = 1;i <= pageSize; i++){
            pageNum.push(
                <span onClick={this.go.bind(this,i) } className={this.state.page === i ? "active page-num" : "page-num"} key={i}>{i}</span>
            )
        }
        const studentList = [];
        for (let stu in stuList){
            studentList.push(
                <div className="stu-info fl">
                    <img className="left-pic" src={getBg(stu.headImage)} alt=""/>
                    <div className="right-info">
                        <div className="info-name">{stu.nickName}</div>
                        <div className="info-intro subject">{stu.userStudentInfo.major}</div>
                        <div className="info-intro subject-en">School of Geography & Geosciences</div>
                        <div className="info-intro intro">我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。</div>
                        <div className="info-data fl">
                            <div className="info-name">120</div>
                            <div className="info-intro">粉丝数</div>
                        </div>
                        {/*<div className="fl">*/}
                            {/*<div className="info-name">89%</div>*/}
                            {/*<div className="info-intro">通过率</div>*/}
                        {/*</div>*/}
                        <div className="corner-fraction">4.8</div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <Header></Header>
                <div className="uni-banner">
                    {/*  style={getBg(schoolData.homeImage)}*/}
                    <div className="uni-name">{schoolData.cnName}</div>
                    <div className="uni-ename">{schoolData.enName}</div>
                    <div className="uni-desc">
                        <span className="left-mark jee-quote-left"></span>
                        {/*src={require("./../assets/images/左引号@2x.png")} */}
                        <div className="nui-text">{schoolData.description}</div>
                        <span className="right-mark jee-quote-right"></span>
                        {/*src={require("./../assets/images/右引号@2x.png")} */}
                        <div className="clearfloat"></div>
                    </div>
                </div>
                <div className="stShow-title">
                    学生展示
                    <p className="stShow-subtitle">
                        Students show
                    </p>
                </div>
                <div className="stus-container">
                    {studentList}
                    {/*<div className="stu-info fl">*/}
                        {/*<img className="left-pic" src={getBg(stu.headImage)} alt=""/>*/}
                        {/*<div className="right-info">*/}
                            {/*<div className="info-name">谭敏仪</div>*/}
                            {/*<div className="info-intro subject">地理与地球科学</div>*/}
                            {/*<div className="info-intro subject-en">School of Geography & Geosciences</div>*/}
                            {/*<div className="info-intro intro">我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。</div>*/}
                            {/*<div className="info-data fl">*/}
                                {/*<div className="info-name">120</div>*/}
                                {/*<div className="info-intro">粉丝数</div>*/}
                            {/*</div>*/}
                            {/*<div className="fl">*/}
                                {/*<div className="info-name">89%</div>*/}
                                {/*<div className="info-intro">通过率</div>*/}
                            {/*</div>*/}
                            {/*<div className="corner-fraction">4.8</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="stu-info fl">*/}
                        {/*<img className="left-pic" src={require("./../assets/images/001.jpg")} alt=""/>*/}
                        {/*<div className="right-info">*/}
                            {/*<div className="info-name">谭敏仪</div>*/}
                            {/*<div className="info-intro subject">地理与地球科学</div>*/}
                            {/*<div className="info-intro subject-en">School of Geography & Geosciences</div>*/}
                            {/*<div className="info-intro intro">我们可以随时随地分享我们的生活，就算在海外，因为有了这个平台，我们也能感受到生活的充实。</div>*/}
                            {/*<div className="info-data fl">*/}
                                {/*<div className="info-name">120</div>*/}
                                {/*<div className="info-intro">粉丝数</div>*/}
                            {/*</div>*/}
                            {/*<div className="fl">*/}
                                {/*<div className="info-name">89%</div>*/}
                                {/*<div className="info-intro">t通过率</div>*/}
                            {/*</div>*/}
                            {/*<div className="corner-fraction">4.8</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    <div className="page-feed clearfloat">
                        <span className="page-num page-pre jee-arrow-left" onClick={this.go.bind(this,page-1)}></span>
                        {pageNum}
                        <span className="page-num page-next jee-arrow-right" onClick={this.go.bind(this,page+1)}></span>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )

    }
}