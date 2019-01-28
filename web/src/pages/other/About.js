import React from 'react';
import { Header } from '../../components/common/Header.js';
import { Footer } from '../../components/common/Footer.js';
import { BreadCrumb } from '../../components/common/BreadCrumb.js';
import { Subscribe } from '../../components/Subscribe.js';

function AboutUs() {
    return (
        <section className="about-us text-center">
            <div className="section-padding">
                <div className="container">
                    <div className="top-content">
                        <h2 className="section-title">Our history</h2>
                        <p>
                            Something’s fallen down in there
                        </p>
                    </div>
                    <p>
                        <strong>
                            Hisfall wassoftened a little by the carpet, and Gregor’s back was also more elastic than he had thought, which made the sound muffled and not too noticeable. He had not held his head  and hit it as he fell annoyed and in pain.
                        </strong>
                    </p>
                    <p>
                        Something’sfallen down in there,said the chief clerk in the room on the left. Gregor tried to imagine whether something of the sort that had happened to him today could ever happen to the chief clerk too, you had to concede that it was possible. But as if in gruff reply to this question, the chief clerk’s firm footsteps in his highly polished boots could now be heard in the adjoining room. From the room on his right, Gregor’s sister whispered to him to let him know- Gregor, the chief clerk is here. Yes, I know said Gregor to himself but without daring to raise his voice loud enough for his sister to hear him.
                    </p>
                    <img src="/images/about.jpg" alt="About Image" />
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="section-title">Our mission</h2>
                            <p>
                                <strong>
                                    Gregor said his father now from the room to his left, the chief clerk has come round and wants to know why you didn’t leave on the early train.
                                </strong>
                            </p>
                            <p>
                                We don’t know what to say to him. And anyway, he wants to speak to you. So please open up this door. I’m sure he’ll be good enough to forgive the untidiness of your room. Then the chief clerk called - Good morning, Mr. Samsa, he isn’t well while his father continued to speak through the door. Why else would Gregor have missed a train! The lad only ever thinks about the business.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h2 className="section-title">Our visioin</h2>
                            <p>
                                <strong>
                                    It nearly makes me cross the way he never goes out in the evenings. He’s been in town for a week now but stayed home every evening
                                </strong>
                            </p>
                            <p>
                                He sits with us in the kitchen and just reads the paper or train timetables. His idea of relaxation is working with his fretsaw. He’s made a little frame, it only took him two or three evenings, you’ll be amazed how nice it is. It’s hanging up in his room, you’ll see it as soon as Gregor opens the door. Anyway, I’m glad you’re here, we wouldn’t have been able to get Gregor to open the door by ourselves.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Facts() {
    return (
        <section className="facts facts-02 background-bg" style={{backgroundImage: 'url(../images/ab-bg.jpg)'}}>
            <div className="overlay">
                <div className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="item media">
                                    <div className="item-icon mr-3"><i className="icons icon-book-open"></i></div>
                                    <div className="item-details">
                                        <span className="count">765</span>
                                        <h3 className="item-title">Courses Published</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="item media">
                                    <div className="item-icon mr-3"><i className="icons icon-eyeglass"></i></div>
                                    <div className="item-details">
                                        <span className="count">249</span>
                                        <h3 className="item-title">Expert Instructors</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="item media">
                                    <div className="item-icon mr-3"><i className="icons icon-people"></i></div>
                                    <div className="item-details">
                                        <span className="count">8348</span>
                                        <h3 className="item-title">Happy Learners</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="item media">
                                    <div className="item-icon mr-3"><i className="icons icon-trophy"></i></div>
                                    <div className="item-details">
                                        <span className="count">99</span>
                                        <h3 className="item-title">Awards Achieved</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Team() {
    return (
        <section className="team text-center">
            <div className="section-padding">
                <div className="container">
                    <div className="top-content">
                        <h2 className="section-title">Our team</h2>
                        <p>
                            Donec rutrum congue leo eget malesuada
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="member">
                                <div className="member-avatar">
                                    <img src="/images/member/1.png" alt="Member Avatar" />
                                    <div className="member-social">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-tumblr"></i></a>
                                        <a href="#"><i className="fab fa-pinterest"></i></a>
                                    </div>
                                </div>
                                <div className="member-details">
                                    <h4 className="name"><a href="#">Raymond Herrera</a></h4>
                                    <span className="designation">Mentor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="member">
                                <div className="member-avatar">
                                    <img src="/images/member/2.png" alt="Member Avatar" />
                                    <div className="member-social">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-tumblr"></i></a>
                                        <a href="#"><i className="fab fa-pinterest"></i></a>
                                    </div>
                                </div>
                                <div className="member-details">
                                    <h4 className="name"><a href="#">Aaron Palmer</a></h4>
                                    <span className="designation">Designer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="member">
                                <div className="member-avatar">
                                    <img src="/images/member/3.png" alt="Member Avatar" />
                                    <div className="member-social">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-tumblr"></i></a>
                                        <a href="#"><i className="fab fa-pinterest"></i></a>
                                    </div>
                                </div>
                                <div className="member-details">
                                    <h4 className="name"><a href="#">John Walsh</a></h4>
                                    <span className="designation">Developer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="member">
                                <div className="member-avatar">
                                    <img src="/images/member/4.png" alt="Member Avatar" />
                                    <div className="member-social">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-tumblr"></i></a>
                                        <a href="#"><i className="fab fa-pinterest"></i></a>
                                    </div>
                                </div>
                                <div className="member-details">
                                    <h4 className="name"><a href="#">Joshua Kim</a></h4>
                                    <span className="designation">Mentor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="member">
                                <div className="member-avatar">
                                    <img src="/images/member/5.png" alt="Member Avatar" />
                                    <div className="member-social">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-tumblr"></i></a>
                                        <a href="#"><i className="fab fa-pinterest"></i></a>
                                    </div>
                                </div>
                                <div className="member-details">
                                    <h4 className="name"><a href="#">John Parker</a></h4>
                                    <span className="designation">Photographer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="member">
                                <div className="member-avatar">
                                    <img src="/images/member/6.png" alt="Member Avatar" />
                                    <div className="member-social">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-tumblr"></i></a>
                                        <a href="#"><i className="fab fa-pinterest"></i></a>
                                    </div>
                                </div>
                                <div className="member-details">
                                    <h4 className="name"><a href="#">Jerry Harper</a></h4>
                                    <span className="designation">Mentor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="member">
                                <div className="member-avatar">
                                <img src="/images/member/7.png" alt="Member Avatar" />
                                    <div className="member-social">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-tumblr"></i></a>
                                        <a href="#"><i className="fab fa-pinterest"></i></a>
                                    </div>
                                </div>
                                <div className="member-details">
                                    <h4 className="name"><a href="#">Benjamin Ortiz</a></h4>
                                    <span className="designation">Designer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="member">
                                <div className="member-avatar">
                                <img src="/images/member/8.png" alt="Member Avatar" />
                                    <div className="member-social">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-tumblr"></i></a>
                                        <a href="#"><i className="fab fa-pinterest"></i></a>
                                    </div>
                                </div>
                                <div className="member-details">
                                    <h4 className="name"><a href="#">Ryan Jensen</a></h4>
                                    <span className="designation">Developer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
                       
            
export function About() {
    return (
        <div>
            <Header activeTitle="us"/>
            <BreadCrumb title="关于我们" />
            <AboutUs />
            <Facts />
            <Team />
            <Subscribe />
            <Footer />
        </div>
    );
}
