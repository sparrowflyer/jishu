import React from 'react';

const uniList = [{name:"爱丁堡大学",ename:"University of Edinburgh",img:"./../assets/images/lhover@2x.png"},
    {name:"爱丁堡大学",ename:"University of Edinburgh",img:"./../assets/images/lhover@2x.png"},
    {name:"爱丁堡大学",ename:"University of Edinburgh",img:"./../assets/images/lhover@2x.png"},
    {name:"爱丁堡大学",ename:"University of Edinburgh",img:"./../assets/images/lhover@2x.png"}],
    pageSize = 5;
export class UniversityList extends React.Component {
    constructor(props) {
        super(props);
        this.resize = this.resize.bind(this);
        this.state = {
            searchBlock: false,
            page:1
        }
    }
    resize (e){
        e.preventDefault();
        this.setState({searchBlock: !this.state.searchBlock});
        console.log("searchBlock",this.state.searchBlock);
    }
    render() {
        const elS = [];
        for( let uni of uniList){
            elS.push(
                <div className="col-l-4 col-s-2">
                    <div className="card">
                        <img src={require("./../assets/images/lhover@2x.png")} alt=""/>
                        <div className="card-name">
                            {uni.name}
                            <div className="card-eName">{uni.ename}</div>
                        </div>
                    </div>
                </div>
            )
        }
        const pageNum = [];
        for (let i = 1;i < pageSize; i++){
            pageNum.push(
                <span className={this.state.page === i ? "active page-num" : "page-num"}>{i}</span>
            )
        }
        return (
            <div>
            {/* 筛选搜索栏 */}
                <div className="filter-wrap">
                    <ul className="nation-list">
                        <li  className="nation-title">国家</li>
                        <li className="nation-item">
                            <img src={require("./../assets/images/diqiu@2x.png")} alt=""/>
                            不限
                        </li>
                        <li className="nation-item active">
                            <img src={require("./../assets/images/us@2x.png")} alt=""/>
                            英国
                        </li>
                        <li className="nation-item">
                            <img src={require("./../assets/images/GB@2x.png")} alt=""/>
                            美国
                        </li>
                        <li className="nation-item">
                            <img src={require("./../assets/images/ca@2x.png")} alt=""/>
                            加拿大
                        </li>
                        <li className="clearfloat"></li>
                    </ul>
                    <div className="search-wrap">
                        <input className={this.state.searchBlock ? 'active': ''} placeholder="输入大学名称搜索" type="text"/>
                        <img onClick={this.resize} src={require("./../assets/images/搜索@2x.png")} alt=""/>
                    </div>
                    {/*<div className="clearfloat"></div>*/}
                </div>
            {/* 学校列表 */}
            <div className="container">{elS}</div>
            {/* 换页签*/}
            <div className="page-feed">
                <span className="page-num page-pre">
                    ﹤
                    {/*<img src={require("./../assets/images/l.png")} alt=""/>*/}
                </span>
                {pageNum}
                <span className="page-num page-next">
                    ﹥
                    {/*<img src={require("./../assets/images/r.png")} alt=""/>*/}
                </span>
            </div>
            </div>
        );
    }
}