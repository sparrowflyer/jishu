import React from 'react';
import {Footer} from '../component/common/Footer.jsx';
import {Header} from '../component/common/Header.jsx';
import '../assets/style.css';
import { Link } from 'react-router-dom';
import { getCountryList, getSchools} from '../utils/http.js';
import { isArray } from '../utils/utils.jsx';
import { NoContent } from '../component/NoContent.js';

// const uniList = [{name:"爱丁堡大学",ename:"University of Edinburgh",img:"./../assets/images/lhover@2x.png"},
//     {name:"爱丁堡大学",ename:"University of Edinburgh",img:"./../assets/images/lhover@2x.png"},
//     {name:"爱丁堡大学",ename:"University of Edinburgh",img:"./../assets/images/lhover@2x.png"},
//     {name:"爱丁堡大学",ename:"University of Edinburgh",img:"./../assets/images/lhover@2x.png"}],
//     pageSize = 5;
export class UniversityList extends React.Component {
    constructor(props) {
        super(props);
        this.resize = this.resize.bind(this);
        this.getUniversityList = this.getUniversityList.bind(this);
        this.changeCountry = this.changeCountry.bind(this);
        this.go = this.go.bind(this);
        this.searchSchool = this.searchSchool.bind(this);
        this.state = {
            searchBlock: false,
            page:1,
            pageSize: 1,
            // countryList:[],
            uniList:[],
            country: "",
            searchValue:"",//搜索框内容
        }
    }
    //获取国家列表
    // getCountryList(){
    //     getCountryList().then( response => {
    //         if(response.status === 200){
    //             console.log("getCountryList",response);
    //             this.setState({countryList: response.data.data});
    //         }
    //     })
    // }

    getUniversityList(page,country,school){
        const params = { 
            "country": country === "none" ? "" : !country ? this.state.country : country,
            "pageNo": page || 1,
            "pageAmount": 12,
            "schoolNamePart": school || this.state.searchValue,
            "needTotalAmount": "Y"
             };

        getSchools(params).then( resp => {
                if(resp.status === 200){
                    // if(school) this.setState({
                    //     searchValue:""
                    // });
                    console.log("getSchools",resp);
                    let page = resp.data.data && resp.data.data.totalAmount && resp.data.data.totalAmount /12;
                    this.setState({
                        uniList: resp.data.data ? resp.data.data.schools : [],
                        pageSize: Math.ceil(page || 1)
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
        this.getUniversityList(page);
    }
    //大学搜索
    searchSchool(event){
        let value = event.target.value;
        // setTimeout(()=>{
            this.setState({searchValue: value,page:1});
            this.getUniversityList(1,"", value);
        // },1000);
    }
    componentDidMount() {
        console.log("componentDidMount")
        // this.getCountryList();
        this.getUniversityList();
    }

    //国家切换
    changeCountry (coun){
        let c = coun === "none" ? "" : coun;
        if(c === this.state.country) {
            return;
        }
        this.setState({country:c,page:1});
        this.getUniversityList(1,coun);
    }

    resize (e){
        e.preventDefault();
        this.setState({searchBlock: !this.state.searchBlock});
        console.log("searchBlock",this.state.searchBlock);
    }
    render() {
         let { page,pageSize,uniList,country} = this.state;
        const pageNum = [];
        for (let i = 1;i <= pageSize; i++){
            pageNum.push(
                <span onClick={this.go.bind(this,i) } className={this.state.page === i ? "active page-num" : "page-num"} key={i}>{i}</span>
            )
        }
        return (
            <div>
                <Header></Header>
            {/* 筛选搜索栏 */}
                <div className="filter-wrap">
                    <ul className="nation-list">
                        <li  className="nation-title">国家</li>
                        <li className={country==='' ? "nation-item active" : "nation-item"} onClick={this.changeCountry.bind(this,"none")}>
                            <img src={require("./../assets/images/diqiu@2x.png")} alt=""/>
                            不限
                        </li>
                        {/*{countryList.map((item,index) => {*/}
                            {/*return (*/}
                                {/*<li  className={country===item.name ? "nation-item active" : "nation-item"} key={index}>*/}
                                    {/*<img src={item.logo} alt=""/>*/}
                                    {/*{item.name}*/}
                                {/*</li>*/}
                            {/*)*/}
                        {/*})}*/}
                        <li className={country==='英国' ? "nation-item active" : "nation-item"} onClick={this.changeCountry.bind(this,"英国")}>
                            <img src={require("./../assets/images/GB@2x.png")} alt=""/>
                            英国
                        </li>
                        {/*<li className="nation-item" onClick={this.changeCountry("美国")}>*/}
                            {/*<img src={require("./../assets/images/GB@2x.png")} alt=""/>*/}
                            {/*美国*/}
                        {/*</li>*/}
                        {/*<li className="nation-item" onClick={this.changeCountry("加拿大")}>*/}
                            {/*<img src={require("./../assets/images/ca@2x.png")} alt=""/>*/}
                            {/*加拿大*/}
                        {/*</li>*/}
                        <li className="clearfloat"></li>
                    </ul>
                    <div className="search-wrap">
                        <input className={this.state.searchBlock ? 'active': ''} onChange={this.searchSchool} value={this.state.searchValue} placeholder="输入大学名称搜索" type="text"/>
                        <img onClick={this.resize} src={require("./../assets/images/搜索@2x.png")} alt=""/>
                    </div>
                    {/*<div className="clearfloat"></div>*/}
                </div>
                {/* 学校列表 */}
                {
                    isArray(uniList) && uniList.length > 0 &&
                        <div className="container">
                            {
                                uniList.map((uni) => {
                                    return (
                                        <div className="col-l-4 col-s-2" key={uni.id}>
                                            <Link to={`/collegeDetail/${uni.id}`} className="card">
                                                <img src={uni.iconImage} alt=""/>
                                                <div className="card-name">
                                                    {uni.cnName}
                                                    <div className="card-eName">{uni.enName}</div>
                                                </div>
                                            </Link>
                                        </div>
                                    );
                                })
                            }
                        </div>
                }
                {/* 换页签*/}
                {
                    isArray(uniList) && uniList.length > 0 ?
                        <div className="page-feed">
                            <span className="page-num page-pre jee-arrow-left" onClick={this.go.bind(this,page-1)}></span>
                                {pageNum}
                            <span className="page-num page-next jee-arrow-right" onClick={this.go.bind(this,page+1)}></span>
                        </div> : <div style={{paddingTop: '30px', paddingBottom: '20px'}}><NoContent desc="暂无数据" /></div>
                }
                <Footer></Footer>
            </div>
        );
    }
}