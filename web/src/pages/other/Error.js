import React from 'react';

export function Error({type = 404, description = 'Sorry, we can’t find the page you are looking for'}) {
    return (
        <div className="error-contents text-center">
            <a className="error-logo" href="index.html"><img src="../images/logo.png" alt="Logo" /></a>
            <div className="section-padding gray-bg">
                <h2 className="title">{type}</h2>
                <h3>
                    {description}
                </h3>
                <a href="index.html" className="btn btn-lg mt-4">Back to homepage</a>
            </div>
        </div>
    );
}




