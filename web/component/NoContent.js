import React from 'react';

export function NoContent({desc}) {
    return (
        <div className="no-content-container">
            <img src={require('./../assets/images/no_content.png')} className="no-content-img" />
            <p className="no-content-desc">{desc}</p>
        </div>
    );
}
