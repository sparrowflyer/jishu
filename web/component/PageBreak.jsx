import React from 'react';
import PropTypes from 'prop-types';

export function PageBreak(props) {
    let page = props.page;
    function go(value) {
        console.log(value);
        props.go(value);
    }
    function pageItem() {
        let pageNum = [];
        {
            props.pageArr.map(item=>{
                pageNum.push(
                    <span onClick={()=>go(item)} className={page === item ? "active page-num" : "page-num"} key={item}>{item}</span>
                )
            })
        }
    }
    return (
        <div className="pageBreak-contain">
            {
                props.previous.hasPreviousPage && <span className="page-num page-pre jee-arrow-left"key={props.previous.prePage} onClick={()=>go(props.previous.prePage)}></span>
            }
            {pageItem}
            {
                props.next.hasNextPage && <span className="page-num page-next jee-arrow-right" key={props.next.nextPage} onClick={()=>go(props.next.nextPage)}></span>
            }
        </div>
    );
}
PageBreak.propTypes = {
    pageTotal: PropTypes.string.isRequired,
    page:PropTypes.number.isRequired
};