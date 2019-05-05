import React from 'react';
import PropTypes from 'prop-types';

export function SubTitle({cn, en, top, bottom}) {
    top = (top || 0) / 100;
    bottom = (bottom || 0) / 100;
    return (
        <div className="sub-title" style={{marginTop: top + 'rem', marginBottom: bottom + 'rem'}}>
            <div className="sub-title__cn">{cn}</div>
            <div className="sub-title__en">
                {en}
                <div className="sub-title_bottom"></div>
            </div>
        </div>
    );
}

SubTitle.propTypes = {
    cn: PropTypes.string.isRequired,
    en: PropTypes.string.isRequired,
    top: PropTypes.number,
    bottom: PropTypes.number
};
