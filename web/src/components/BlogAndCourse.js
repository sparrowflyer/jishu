import React from 'react';

export function Navigator({activePage}) {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Back">
                        <i className="fa fa-angle-left"></i>
                    </a>
                </li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">...</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <i className="fa fa-angle-right"></i>
                    </a>
                </li>
            </ul>
            <p>
                Showing 12 of 17
            </p>
        </nav>
    );
}
