import React from 'react';
import { Header } from '../../components/common/Header.js';
import { Footer } from '../../components/common/Footer.js';
import { BreadCrumb } from '../../components/common/BreadCrumb.js';
import { Subscribe } from '../../components/Subscribe.js';

function ContactContent() {
    return (
        <section className="contact text-center">
            <div className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="item">
                                <div className="item-icon">
                                    <i className="icon icon-call-out"></i>
                                </div>
                                <h3 className="item-title">Phone</h3>
                                <span>(+61) 38376 6284</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="item">
                                <div className="item-icon">
                                    <i className="icon icon-location-pin"></i>
                                </div>
                                <h3 className="item-title">Address</h3>
                                <span>12 King Street, Melbourne 3000, AUstralia</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="item">
                                <div className="item-icon">
                                    <i className="icon icon-envelope-open"></i>
                                </div>
                                <h3 className="item-title">Email</h3>
                                <span><a href="#">contact_us@courseware.com</a></span>
                            </div>
                        </div>
                    </div>
                    <form action="email.php" className="wpcf7-form" method="post">
                        <input type="text" className="form-control" name="name" placeholder="Your Name*" required />
                        <input type="email" className="form-control" name="email" placeholder="Your Email*" required />
                        <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                        <textarea name="message" className="form-control" cols="30" rows="7" placeholder="Your Message"></textarea>
                        <input type="submit" className="btn" value="Send Message" />
                    </form>
                    <div id="googleMaps" className="google-map-container"></div>
                </div>
            </div>
        </section>
    );
}

export function Contact() {
    return (
        <div>
            <Header activeTitle="us"/>
            <BreadCrumb title="联系我们" subItem="关于我们" />
            <ContactContent />
            <Subscribe />
            <Footer />
        </div>
    );
}
