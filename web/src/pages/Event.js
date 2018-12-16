import React from 'react';
import { Header } from '../components/common/Header.js';
import { Footer } from '../components/common/Footer.js';
import { BreadCrumb } from '../components/common/BreadCrumb.js';

function MultiEvents() {
    return (
        <div className="row">
            <div className="col-md-6">
                <div className="event media">
                    <div className="event-time media-left">
                        <time datetime="2017-07-28"><span className="date">28</span> July</time>
                    </div>
                    <div className="event-details media-body">
                        <div className="event-thumb radius"><img src="../images/event/3.jpg" alt="Event Thumbnail" /></div>
                        <h2 className="event-title"><a href="event-details.html">Your guide to event planning</a></h2>
                        <div className="event-meta">
                            <span className="time"><i className="icon-clock"></i> 4am - 8pm</span>
                            <span className="place"><i className="icon-location-pin"></i> New York, USA</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="event media">
                    <div className="event-time media-left">
                        <time datetime="2017-07-28"><span className="date">28</span> July</time>
                    </div>
                    <div className="event-details media-body">
                        <div className="event-thumb radius"><img src="../images/event/4.jpg" alt="Event Thumbnail" /></div>
                        <h2 className="event-title"><a href="event-details.html">Selling Sponsorships for Events & Nonprofits</a></h2>
                        <div className="event-meta">
                            <span className="time"><i className="icon-clock"></i> 4am - 8pm</span>
                            <span className="place"><i className="icon-location-pin"></i> New York, USA</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="event media">
                    <div className="event-time media-left">
                        <time datetime="2017-07-28"><span className="date">28</span> July</time>
                    </div>
                    <div className="event-details media-body">
                        <div className="event-thumb radius"><img src="../images/event/5.jpg" alt="Event Thumbnail" /></div>
                        <h2 className="event-title"><a href="event-details.html">IAS 10 - Events After Reporting Date</a></h2>
                        <div className="event-meta">
                            <span className="time"><i className="icon-clock"></i> 4am - 8pm</span>
                            <span className="place"><i className="icon-location-pin"></i> New York, USA</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="event media">
                    <div className="event-time media-left">
                        <time datetime="2017-07-28"><span className="date">28</span> July</time>
                    </div>
                    <div className="event-details media-body">
                        <div className="event-thumb radius"><img src="../images/event/6.jpg" alt="Event Thumbnail" /></div>
                        <h2 className="event-title"><a href="event-details.html">Advice from a Successful Venture Capitalist</a></h2>
                        <div className="event-meta">
                            <span className="time"><i className="icon-clock"></i> 4am - 8pm</span>
                            <span className="place"><i className="icon-location-pin"></i> New York, USA</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="event media">
                    <div className="event-time media-left">
                        <time datetime="2017-07-28"><span className="date">28</span> July</time>
                    </div>
                    <div className="event-details media-body">
                        <div className="event-thumb radius"><img src="../images/event/7.jpg" alt="Event Thumbnail" /></div>
                        <h2 className="event-title"><a href="event-details.html">Fundraising Success: The Complete Development Plan</a></h2>
                        <div className="event-meta">
                            <span className="time"><i className="icon-clock"></i> 4am - 8pm</span>
                            <span className="place"><i className="icon-location-pin"></i> New York, USA</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="event media">
                    <div className="event-time media-left">
                        <time datetime="2017-07-28"><span className="date">28</span> July</time>
                    </div>
                    <div className="event-details media-body">
                        <div className="event-thumb radius"><img src="../images/event/8.jpg" alt="Event Thumbnail" /></div>
                            <h2 className="event-title"><a href="event-details.html">LIVE Streaming Pro: Ultimate Course | From Beginner to Pro</a></h2>
                            <div className="event-meta">
                                <span className="time"><i className="icon-clock"></i> 4am - 8pm</span>
                                <span className="place"><i className="icon-location-pin"></i> New York, USA</span>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    );
}

function SingleEvent() {
    return (
        <div className="row">
            <div className="col-md-8">
                <div className="event-single-contents">
                    <div className="event-banner background-bg text-center" data-image-src="../images/posts/6.jpg">
                        <div className="overlay">
                            <div id="countdown"></div>
                        </div>
                    </div>
                    <h2 className="event-title">Advice from a Successful Venture Capitalist</h2>
                    <p>
                        <strong>The office assistant wasthe boss’s man,spineless, and with no understanding. What about if he reported sick? But that would be extremely strained and suspicious as in fifteen years of service Gregor had never once yet been ill</strong>
                    </p>
                    <p>
                        His boss would certainly come round with the doctor from the medical insurance company, accuse his parents of having a lazy son, and accept the doctor’s recommendation not to make any claim as the doctor believed that no-one was ever ill but that many were workshy. And what’s more, would he have been entirely wrong in this case? Gregor did in fact, apart from excessive sleepiness after sleeping for so long, feel completely well and even felt much hungrier than usual.
                    </p>
                    <p>
                        He was still hurriedly thinking all this through, unable to decide to get out of the bed, when the clock struck quarter to seven. There was a cautious knock at the door near his head. Gregor, somebody called – it was his mother – it’s quarter to seven. Didn’t you want to go somewhere? That gentle voice, Gregor was shocked when he heard his own voice answering, it could hardly be recognised as the voice he had had before
                    </p>
                    <h2>Event Content</h2>
                    <ul>
                        <li>Gregor only needed to hear the visitor’s first words of greeting and he knew who it was the chief clerk himself.</li>
                        <li>Why did Gregor have to be the only one condemned to work for a company where they immediately became highly suspicious at the slightest shortcoming</li>
                        <li>Were all employees, every one of them, louts, was there not one of them who was faithful and devoted who would go so mad with pangs of conscience</li>
                        <li>Was it really not enough to let one of the trainees make enquiries assuming enquiries were even necessary did the chief clerk have to come himself</li>
                        <li>Innocent family that this was so suspicious that only the chief clerk could be trusted to have the wisdom to investigate it</li>
                        <li>Because these thoughts had made him upset than through any proper decision, he swang himself with all his force out of the bed.</li>
                    </ul>
                    <h2>Event Speakers</h2>
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="speaker">
                                <div className="avatar radius"><img src="../images/speakers/1.jpg" alt="Avatar Image" /></div>
                                <div className="speaker-details">
                                    <h3 className="name"><a href="#">Johnny Kennedy</a></h3>
                                    <span className="designation">Web Designer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="speaker">
                                <div className="avatar radius"><img src="../images/speakers/2.jpg" alt="Avatar Image" /></div>
                                <div className="speaker-details">
                                    <h3 className="name"><a href="#">Kathleen Ortiz</a></h3>
                                    <span className="designation">Developer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="speaker">
                                <div className="avatar radius"><img src="../images/speakers/3.jpg" alt="Avatar Image" /></div>
                                <div className="speaker-details">
                                    <h3 className="name"><a href="#">Louis Fox</a></h3>
                                    <span className="designation">UI Designer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="speaker">
                                <div className="avatar radius"><img src="../images/speakers/4.jpg" alt="Avatar Image" /></div>
                                <div className="speaker-details">
                                    <h3 className="name"><a href="#">Lauren Day </a></h3>
                                    <span className="designation">Web Designer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="speaker">
                                <div className="avatar radius"><img src="../images/speakers/5.jpg" alt="Avatar Image" /></div>
                                <div className="speaker-details">
                                    <h3 className="name"><a href="#">Anna Beck</a></h3>
                                    <span className="designation">Developer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="speaker">
                                <div className="avatar radius"><img src="../images/speakers/6.jpg" alt="Avatar Image" /></div>
                                <div className="speaker-details">
                                    <h3 className="name"><a href="#">Ruth Castro</a></h3>
                                    <span className="designation">UI Designer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="speaker">
                                <div className="avatar radius"><img src="../images/speakers/7.jpg" alt="Avatar Image" /></div>
                                    <div className="speaker-details">
                                        <h3 className="name"><a href="#">Harold Wagner</a></h3>
                                        <span className="designation">Web Designer</span>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="speaker">
                                <div className="avatar radius"><img src="../images/speakers/8.jpg" alt="Avatar Image" /></div>
                                    <div className="speaker-details">
                                        <h3 className="name"><a href="#">Samuel Torres</a></h3>
                                        <span className="designation">Developer</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="mt-4">Event Location</h2>
                    <div id="googleMaps" className="google-map-container"></div>
                </div>
            </div>
            <div className="col-md-4">
                <aside className="sidebar">
                    <button className="btn btn-lg enroll-btn">Join the event</button>
                    <div className="widget widget_event_meta">
                        <div className="meta-info">
                            <ul className="info-list">
                                <li><span className="price">Free</span></li>
                                <li><span className="meta-id">Date</span> Aug 20- Aug 22</li>
                                <li><span className="meta-id">Time</span> 11.00am - 04.30.00pm</li>
                                <li><span className="meta-id">Place</span> Paris, France</li>
                                <li><span className="meta-id">Total Seats</span> 250</li>
                                <li>
                                    <span className="meta-id">Share</span>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-google-plus"></i></a>
                                    <a href="#"><i className="fab fa-pinterest"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export function Event() {
    return (
        <div>
            <Header activeTitle="event"/>
            <BreadCrumb title="EVENT" currentItem="Event" />
            <section className="events">
                <div className="section-padding">
                    <div className="container">
                        <SingleEvent />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
