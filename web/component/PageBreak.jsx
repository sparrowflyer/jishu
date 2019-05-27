import React from 'react';
import PropTypes from 'prop-types';

export function PageBreak(props) {
    let page = props.page;
    function go(e) {
        props.goPage(e.target.key);
    }
   function goPre(){
        props.goPage(props.page-1)
    }
    function goNext(){
        props.goPage(props.page+1)
    }
    function pageItem() {
        let pageNum = [];
        {
            for (let i = 1;i <= props.pageTotal; i++){
                pageNum.push(
                    <span onClick={go} className={page === i ? "active page-num" : "page-num"} key={i}>{i}</span>
                )
            }
        }
    }
    return (
        <div className="pageBreak-contain">
            <span className="page-num page-pre jee-arrow-left" onClick={goPre}></span>
            {pageItem}
            <span className="page-num page-next jee-arrow-right" onClick={goNext}></span>
        </div>
    );
}
PageBreak.propTypes = {
    pageTotal: PropTypes.string.isRequired,
    page:PropTypes.number.isRequired
};