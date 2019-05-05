import React from 'react';
import PropTypes from 'prop-types';

export function Evaluation ({ name, desc, score1, score2, score3, isActive }) {
    const itemClass = isActive ? 'evaluation-item__active' : 'evaluation-item',
        avatorClass = isActive ? 'evaluation-item_avator__active' : 'evaluation-item_avator',
        usernameClass = isActive ? 'evaluation-item_username__active' : 'evaluation-item_username',
        descClass = isActive ? 'evaluation-item_desc__active' : 'evaluation-item_desc',
        bottomClass = isActive ? 'evaluation-item_bottom__active' : 'evaluation-item_bottom';
    return (
        <div className={itemClass}>
            <div className={avatorClass}></div>
            <div className={usernameClass}>{name}</div>
            <div className={descClass} title={desc}>{desc}</div>
            <div className={bottomClass}>
                <span className="title">专业
                    <span className="value">&nbsp;{score1}</span>
                </span>
                <span className="title">启发
                    <span className="value">&nbsp;{score2}</span>
                </span>
                <span className="title">态度
                    <span className="value">&nbsp;{score3}</span>
                </span>
            </div>
        </div>
    );
}

Evaluation.propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string,
    score1: PropTypes.number,
    score2: PropTypes.number,
    score3: PropTypes.number
};
