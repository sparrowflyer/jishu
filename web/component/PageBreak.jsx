import React from 'react';
import PropTypes from 'prop-types';

export function PageBreak(props) {
    let page = props.page;
    function go(e) {
        props.goPage(e.target.key);
    }
   // function goPre(e){
   //      props.goPage(e.target.key)
   //  }
   //  function goNext(e){
   //      props.goPage(e.target.key)
   //  }
    function pageItem() {
        let pageNum = [];
        {
            props.pageArr.map(item=>{
                pageNum.push(
                    <span onClick={go} className={page === item ? "active page-num" : "page-num"} key={item}>{item}</span>
                )
            })
        }
    }
    return (
        <div className="pageBreak-contain">
            {
                props.previous.hasPreviousPage && <span className="page-num page-pre jee-arrow-left"key={props.previous.prePage} onClick={go}></span>
            }
            {pageItem}
            {
                props.next.hasNextPage && <span className="page-num page-next jee-arrow-right" key={props.next.nextPage} onClick={go}></span>
            }
        </div>
    );
}
PageBreak.propTypes = {
    pageTotal: PropTypes.string.isRequired,
    page:PropTypes.number.isRequired
};