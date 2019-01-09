import React from 'react';
import { Link } from 'react-router-dom';

export function Error({type = 404, description = 'Sorry, we can’t find the page you are looking for'}) {
    return (
        <div className="error-contents text-center">
            <Link className="error-logo" to="/">
                <img src="../images/logo.png" alt="Logo" />
            </Link>
            <div className="section-padding gray-bg">
                <h2 className="title">{type}</h2>
                <h3>
                    {description}
                </h3>
                <Link className="btn btn-lg mt-4" to="/">Back to homepage</Link>
            </div>
        </div>
    );
}




