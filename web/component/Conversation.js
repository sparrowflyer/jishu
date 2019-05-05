import React from 'react';
import PropTypes from 'prop-types';

export function Conversation({title, desc}) {
    return (
        <div className="conversation-item" key={title}>
            <div className="conversation-title">{title}</div>
            <div className="conversation-desc">{desc}</div>
        </div>
    );
}

Conversation.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
};
