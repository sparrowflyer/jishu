import React from 'react';
import PropTypes from 'prop-types';

export function PageBreak(props) {
    let page = props.page;
    function go(index) {
        props.goPage(index);
    }
    function pageItem() {
        let pageNum = [];
        {
            for (let i = 1;i <= props.pageTotal; i++){
                pageNum.push(
                    <span onClick={go(i) } className={this.state.page === i ? "active page-num" : "page-num"} key={i}>{i}</span>
                )
            }
        }
    }
    return (
        <div>
            <span className="page-num page-pre jee-arrow-left" onClick={go(page-1)}></span>
            {pageItem}
            <span className="page-num page-next jee-arrow-right" onClick={go(page+1)}></span>
        </div>
    );
}
PageBreak.propTypes = {
    pageTotal: PropTypes.string.isRequired,
    page:PropTypes.number.isRequired
};