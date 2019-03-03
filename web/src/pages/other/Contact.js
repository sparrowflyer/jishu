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
                                <h3 className="item-title">电话</h3>
                                <span> +86 137 7713 3446</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="item">
                                <div className="item-icon">
                                    <i className="icon icon-location-pin"></i>
                                </div>
                                <h3 className="item-title">地址</h3>
                                <span>浙江省杭州市西湖区黄姑山路29号颐高创业大厦</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="item">
                                <div className="item-icon">
                                    <i className="icon icon-envelope-open"></i>
                                </div>
                                <h3 className="item-title">Email</h3>
                                <span><a href="#">jishugo@unclejee.cn</a></span>
                            </div>
                        </div>
                    </div>


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
