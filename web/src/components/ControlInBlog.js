import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './common/Header.js';
import { BreadCrumb } from './common/BreadCrumb.js';
import { Footer } from './common/Footer.js';

//className: format-slider
function SliderInnerArticle({id, imgs}) {
    return (
        <div className="entry-thumbnail radius">
            <div id={`post-slider-${id}`} className="post-slider-02 carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    {
                        imgs.forEach((imgUrl, index) => {
                            return (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <img className="radius" src={imgUrl} alt="Entry Thumbnail" />
                                </div>
                            );
                        })
                    }
                </div>
                <a className="carousel-control-prev" href={`#post-slider-${id}`} role="button" data-slide="prev">
                    <span className="fa fa-angle-left" aria-hidden="true"></span>
                </a>
                <a className="carousel-control-next" href={`#post-slider-${id}`} role="button" data-slide="next">
                    <span className="fa fa-angle-right" aria-hidden="true"></span>
                </a>
            </div>
        </div>
    );
}

//format-audio
function AudioInnerArticle({url}) {
    return (
        <div className="entry-thumbnail radius">
            <iframe src={url}></iframe>
        </div>
    );
}

//format-link
function LinkInnerArticle({children, url = ''}) {
    return (
        <div className="entry-thumbnail radius">
            <Link to={url}>
                {children}
            </Link>
        </div>
    );
}

//format-video
function VideoInnerArticle({imgUrl, videoUrl}) {
    return (
        <div className="entry-thumbnail radius">
            <img src={imgUrl} alt="Post Thumbnail" />
            <a href={videoUrl} className="popup-video"><i className="fa fa-play-circle-o"></i></a>
        </div>
    );
}

//format-standard
export function StandardInnerArticle({imgUrl}) {
    return (
        <div className="entry-thumbnail radius">
            <img width="70%" src={imgUrl} alt="Post Thumbnail" />
        </div>
    );
}

export function getMonth(dateStr) {
    let date = new Date(dateStr);
    if ('' + date === 'Invalid Date') {
        return '';
    }
    return date.getMonth() + 1;
}

export function getDate(dateStr) {
    let date = new Date(dateStr);
    if ('' + date === 'Invalid Date') {
        return '';
    }
    return date.getDate();
}


