import React from 'react';
import {Footer} from '../component/common/Footer.jsx';
import {Header} from '../component/common/Header.jsx';
import { Link } from 'react-router-dom';
import {getUsersBySchool,getSchoolById} from "../utils/http.js" ;
import { isArray } from '../utils/utils.jsx';

export class UniversityDetail extends React.Component {
    constructor(props) {
        super(props);
        this.getUsersBySchool = this.getUsersBySchool.bind(this);
        this.getAverageScore = this.getAverageScore.bind(this);
        this.getSchoolById = this.getSchoolById.bind(this);
        this.go = this.go.bind(this);
        this.state = {
            schoolData: {},
            schoolId: "",
            stuList:[],
            id: "",
            pageSize: 1,
            page: 1,
            img: ""
        }
    }
    componentWillMount (){
      if(this.props.match.params.id) {
          let id ="";
          try{
              id = this.props.match.params.id;
              window.sessionStorage.setItem("schoolId",id);
          }catch(e){
              id = window.sessionStorage.getItem("schoolId");

          }
          this.setState({
              schoolId: id,
          }) ;
          this.getSchoolById(id);
          this.getUsersBySchool(id,1);
      } else {
          this.props.history.push('/college');
      }

    }
    getAverageScore(student) {
        if (!student) return '0.0';
        let nextNameArr = ['scoreResponse', 'scoreAttitude', 'scoreProfessional'];
        return (nextNameArr.reduce((acc, cur) => {
            return (acc + (student[cur] || 0));
        }, 0) / nextNameArr.length).toFixed(1);
    }
    getSchoolById(id){
        getSchoolById({
            "id": id
        }).then(resp => {
            if(resp.status === 200) {
                this.setState({
                    schoolData: resp.data.data
                });
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
                let size = response.data.data && response.data.data.totalAmount && response.data.data.totalAmount/4;
                this.setState({
                    stuList: response.data.data.students,
                    pageSize: Math.ceil(size || 1)
                });
            }
        })
    }
    //换页
    go(page){
        page = page<1 ? 1 :page;
        if(page === this.state.page || page > this.state.pageSize){
            return;
        }
        this.setState({page: page});
        this.getUsersBySchool(page);
    }
    render() {
        let {pageSize, schoolData, page, stuList} = this.state;
        const pageNum = [];
        for (let i = 1;i <= pageSize; i++){
            pageNum.push(
                <span onClick={this.go.bind(this,i)} className={this.state.page === i ? "active page-num" : "page-num"} key={i}>{i}</span>
            )
        }
        return (
            <div className="container-with-footer">
                <div>
                    <Header></Header>
                    <div className="uni-banner" style={{backgroundImage: 'url(' + schoolData.homeImage +')'}}>
                        <div className="headcnt-wrap">
                            <div className="uni-name">{schoolData.cnName}</div>
                            <div className="uni-ename">{schoolData.enName}</div>
                            <div className="uni-desc">
                                <span className="left-mark jee-quote-left"></span>
                                <div className="nui-text">{schoolData.description}</div>
                                <span className="right-mark jee-quote-right"></span>
                                <div className="clearfloat"></div>
                            </div>
                        </div>
                    </div>
                    <div className="stShow-title">
                        学生展示
                        <p className="stShow-subtitle">
                            Students show
                        </p>
                    </div>
                    <div className="stus-container">
                        {
                            isArray(stuList) && stuList.map(stu => {
                                return (
                                    <Link className="stu-info fl" key={stu.id} to={"/StudentDetail/"+stu.id}>
                                        <div className="left-pic" style={{backgroundImage: `url(http://${stu.headImage})`}}></div>
                                        <div className="right-info">
                                            <div className="info-name">{stu.nickName}</div>
                                            <div className="info-intro subject">{(stu.userStudentInfo && stu.userStudentInfo.major)||"--"}</div>
                                            {/*<div className="info-intro subject-en">School of Geography & Geosciences</div>*/}
                                            <div className="info-intro intro">{(stu.userStudentInfo && stu.userStudentInfo.description)||"--"}</div>
                                            <div className="info-data fl">
                                                <div className="info-name">{stu.likeAmount||0}</div>
                                                <div className="info-intro">粉丝数</div>
                                            </div>
                                            {/*<div className="fl">*/}
                                            {/*<div className="info-name">89%</div>*/}
                                            {/*<div className="info-intro">通过率</div>*/}
                                            {/*</div>*/}
                                            <div className="corner-fraction">{this.getAverageScore(stu.userStudentInfo)}</div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                        {
                            isArray(stuList) && stuList.length > 0 &&
                                <div className="page-feed clearfloat">
                                    <span className="page-num page-pre jee-arrow-left" onClick={this.go.bind(this, page-1)}></span>
                                    {pageNum}
                                    <span className="page-num page-next jee-arrow-right" onClick={this.go.bind(this, page+1)}></span>
                                </div>
                        }
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )

    }
}