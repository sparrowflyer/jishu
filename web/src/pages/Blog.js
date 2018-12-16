import React from 'react';
import { Header } from '../components/common/Header.js';
import { BreadCrumb } from '../components/common/BreadCrumb.js';
import { Footer } from '../components/common/Footer.js';

function MultiBlog() {
    return (
    <div className="col-md-8">
        <article className="post type-post format-slider">
            <div className="entry-thumbnail radius">
                <div id="post-slider-02" className="post-slider-02 carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="radius" src="../images/posts/6.jpg" alt="Entry Thumbnail" />
                        </div>
                        <div className="carousel-item">
                            <img className="radius" src="../images/posts/7.jpg" alt="Entry Thumbnail" />
                        </div>
                        <div className="carousel-item">
                            <img className="radius" src="../images/posts/8.jpg" alt="Entry Thumbnail" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#post-slider-02" role="button" data-slide="prev">
                        <span className="fa fa-angle-left" aria-hidden="true"></span>
                    </a>
                    <a className="carousel-control-next" href="#post-slider-02" role="button" data-slide="next">
                        <span className="fa fa-angle-right" aria-hidden="true"></span>
                    </a>
                </div>
            </div>
            <div className="entry-content media">
                <div className="post-date">
                    <time datetime="2018-05-28"><span className="date">28</span> July</time>
                </div>
                <div className="content-details media-body">
                    <h3 className="entry-title"><a href="single.html">How To Choose Niche For Your Business Directory</a></h3>
                    <div className="entry-meta">
                        <span className="author"><i className="icon-user"></i> <a href="#">Anthony Doe</a></span>
                        <span className="tag"><i className="icon-tag"></i> <a href="#">News</a></span>
                        <span className="comments"><i className="icon-bubbles"></i> <a href="#">13 comments</a></span>
                    </div>
                    <p>
                        It was a simple matter to throw off the covers; he only had to blow himself up a little and they fell off by themselves. But it became difficult after that, especially as he was so exceptionally broad. He would have used his arms and his hands to push himself up, but instead of them he only had all those little legs continuously
                    </p>
                    <a href="single.html" className="btn btn-lg">Read more</a>
                </div>
            </div>
        </article>
        <article className="post type-post format-standard">
            <div className="entry-thumbnail radius"><img src="../images/posts/9.jpg" alt="Post Thumbnail" /></div>
            <div className="entry-content media">
                <div className="post-date">
                    <time datetime="2018-05-28"><span className="date">28</span> July</time>
                </div>
                <div className="content-details media-body">
                    <h3 className="entry-title"><a href="single.html">WordPress Theme Development Resources</a></h3>
                    <div className="entry-meta">
                        <span className="author"><i className="icon-user"></i> <a href="#">Anthony Doe</a></span>
                        <span className="tag"><i className="icon-tag"></i> <a href="#">News</a></span>
                        <span className="comments"><i className="icon-bubbles"></i> <a href="#">13 comments</a></span>
                    </div>
                    <p>
                        He was moreover unable to control. If he wanted to bend one of them, then that was the first one that would stretch itself out and if he finally managed to do what he wanted with that leg, all the others seemed to be set free and would move about painfully and continuously moving in different directions.
                    </p>
                    <a href="single.html" className="btn btn-lg">Read more</a>
                </div>
            </div>
        </article>
        <article className="post type-post format-audio">
            <div className="entry-thumbnail radius">
                <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/257503997&"></iframe>
            </div>
            <div className="entry-content media">
                <div className="post-date">
                    <time datetime="2018-05-28"><span className="date">28</span> July</time>
                </div>
                <div className="content-details media-body">
                    <h3 className="entry-title"><a href="single.html">How To Create A Local Business Directory Site In WordPress</a></h3>
                    <div className="entry-meta">
                        <span className="author"><i className="icon-user"></i> <a href="#">Anthony Doe</a></span>
                        <span className="tag"><i className="icon-tag"></i> <a href="#">News</a></span>
                        <span className="comments"><i className="icon-bubbles"></i> <a href="#">13 comments</a></span>
                    </div>
                    <p>
                        At the same time he did not forget to remind himself that calm consideration was much better than rushing to desperate conclusions. He would direct his eyes to the window and look out as clearly as he could, but unfortunately even the other side of the narrow street was enveloped in morning fog
                    </p>
                    <a href="single.html" className="btn btn-lg">Read more</a>
                </div>
            </div>
        </article>
        <article className="post type-post format-link">
            <div className="entry-thumbnail radius">
                <a href="#">
                    <span>CAST - Construction, Industrial & Building Responsive WordPress Theme</span>
                    https://themeforest.net/item/cast-construction-industrial-building-responsive-wordpress-theme/19590274
                </a>
            </div>
            <div className="entry-content media">
                <div className="post-date">
                    <time datetime="2018-05-28"><span className="date">28</span> July</time>
                </div>
                <div className="content-details media-body">
                    <h3 className="entry-title"><a href="single.html">How To Tell If A Site Is WordPress Or Not</a></h3>
                    <div className="entry-meta">
                        <span className="author"><i className="icon-user"></i> <a href="#">Anthony Doe</a></span>
                        <span className="tag"><i className="icon-tag"></i> <a href="#">News</a></span>
                        <span className="comments"><i className="icon-bubbles"></i> <a href="#">13 comments</a></span>
                    </div>
                    <p>
                        Seven o’clock already, he said to himself when the clock struck again seven o’clock, and there’s still a fog like this. And he lay there quietly a while longer, breathing lightly as if he perhaps expected the totalstillnessto bring things back to their real and natural state.
                    </p>
                    <a href="single.html" className="btn btn-lg">Read more</a>
                </div>
            </div>
        </article>
        <article className="post type-post format-video">
            <div className="entry-thumbnail radius">
                <img src="../images/posts/10.jpg" alt="Post Thumbnail" />
                <a href="https://gaming.youtube.com/watch?v=CZhE2p46vJk" className="popup-video"><i className="fa fa-play-circle-o"></i></a>
            </div>
            <div className="entry-content media">
                <div className="post-date">
                    <time datetime="2018-05-28"><span className="date">28</span> July</time>
                </div>
                <div className="content-details media-body">
                    <h3 className="entry-title"><a href="single.html">WordPress Video Themes 2018 - Make Video Website Easily</a></h3>
                    <div className="entry-meta">
                        <span className="author"><i className="icon-user"></i> <a href="#">Anthony Doe</a></span>
                        <span className="tag"><i className="icon-tag"></i> <a href="#">News</a></span>
                        <span className="comments"><i className="icon-bubbles"></i> <a href="#">13 comments</a></span>
                    </div>
                    <p>
                        But then he said to himself, before it strikes quarter past seven i’ll definitely have to have got properly out of bed. And by then somebody will have come round from work to ask what’s happened to me as well, as they open up at work before seven o’clock.
                    </p>
                    <a href="single.html" className="btn btn-lg">Read more</a>
                </div>
            </div>
        </article>
        <article className="post type-post format-text-only">
            <div className="entry-content media">
                <div className="post-date">
                    <time datetime="2018-05-28"><span className="date">28</span> July</time>
                </div>
                <div className="content-details media-body">
                    <h3 className="entry-title"><a href="single.html">30+ Free WordPress Themes 2018 - Simple & Fast Loading</a></h3>
                    <div className="entry-meta">
                        <span className="author"><i className="icon-user"></i> <a href="#">Anthony Doe</a></span>
                        <span className="tag"><i className="icon-tag"></i> <a href="#">News</a></span>
                        <span className="comments"><i className="icon-bubbles"></i> <a href="#">13 comments</a></span>
                    </div>
                    <p>
                        He set himself to the task of swinging the entire length of his body out of the bed all at the same time. If he succeeded in falling out of bed in this way and kept his head raised as he did so he could probably avoid injuring it. His back seemed to be quite hard and probably nothing would happen to it.
                    </p>
                    <a href="single.html" className="btn btn-lg">Read more</a>
                </div>
            </div>
        </article>
        <article className="post type-post format-standard">
            <div className="entry-thumbnail radius"><img src="../images/posts/11.jpg" alt="Post Thumbnail" /></div>
            <div className="entry-content media">
                <div className="post-date">
                    <time datetime="2018-05-28"><span className="date">28</span> July</time>
                </div>
                <div className="content-details media-body">
                    <h3 className="entry-title"><a href="single.html">WordPress Themes 2018 : Responsive and Creative Design</a></h3>
                    <div className="entry-meta">
                        <span className="author"><i className="icon-user"></i> <a href="#">Anthony Doe</a></span>
                        <span className="tag"><i className="icon-tag"></i> <a href="#">News</a></span>
                        <span className="comments"><i className="icon-bubbles"></i> <a href="#">13 comments</a></span>
                    </div>
                    <p>
                        When Gregor was already sticking half way out of the bed, the new method was more of a game than an effort, all he had to do was rock back and forth. It occurred to him how simple everything would be if somebody came to help him. Two strong people - he had his father and the maid in mind would have been more than enough
                    </p>
                    <a href="single.html" className="btn btn-lg">Read more</a>
                </div>
            </div>
        </article>
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <i className="fa fa-angle-right"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    );
}

function SingleBlog() {
    return (
        <div className="col-md-8">
            <article className="post type-post format-standard">
                <div className="entry-thumbnail radius"><img src="../images/posts/11.jpg" alt="Post Thumbnail" /></div>
                    <div className="entry-content media">
                        <div className="post-date">
                            <time datetime="2018-05-28"><span className="date">28</span> July</time>
                        </div>
                        <div className="content-details media-body">
                            <h3 className="entry-title"><a href="#">How To Choose Niche For Your Business Directory</a></h3>
                            <div className="entry-meta">
                                <span className="author"><i className="icon-user"></i> <a href="#">Anthony Doe</a></span>
                                <span className="tag"><i className="icon-tag"></i> <a href="#">News</a></span>
                                <span className="comments"><i className="icon-bubbles"></i> <a href="#">13 comments</a></span>
                            </div>
                            <p>
                                <strong>The office assistant wasthe boss’s man,spineless, and with no understanding. What about if he reported sick? But that would be extremely strained and suspicious as in fifteen years of service Gregor had never once yet been ill</strong>
                            </p>
                            <p>
                                His boss would certainly come round with the doctor from the medical insurance company, accuse his parents of having a lazy son, and accept the doctor’s recommendation not to make any claim as the doctor believed that no-one was ever ill but that many were workshy. And what’s more, would he have been entirely wrong in this case? Gregor did in fact, apart from excessive sleepiness after sleeping for so long, feel completely well and even felt much hungrier than usual.
                            </p>
                            <p>
                                He was still hurriedly thinking all this through, unable to decide to get out of the bed, when the clock struck quarter to seven. There was a cautious knock at the door near his head. Gregor, somebody called – it was his mother – it’s quarter to seven. Didn’t you want to go somewhere? That gentle voice, Gregor was shocked when he heard his own voice answering, it could hardly be recognised as the voice he had had before
                            </p>
                            <blockquote className="post-quote">
                                That’ll be someone from work, he said to himself and froze very still, although his little legs only became all the more lively as they danced around. For a moment everything remained quiet
                            </blockquote>
                            <p>
                                Gregor only needed to hear the visitor’s first words of greeting and he knew who it was the chief clerk himself. Why did Gregor have to be the only one condemned to work for a company where they immediately became highly suspicious at the slightest shortcoming? Were all employees, every one of them, louts, was there not one of them who was faithful and devoted who would go so mad with pangs of conscience that he couldn’t get out of bed if he didn’t spend at least a couple of hours
                            </p>
                            <p>
                                Was it really not enough to let one of the trainees make enquiries assuming enquiries were even necessary did the chief clerk have to come himself, and did they have to show the whole, innocent family that this was so suspicious that only the chief clerk could be trusted to have the wisdom to investigate it? And more because these thoughts had made him upset than through any proper decision, he swang himself with all his force out of the bed.
                            </p>
                            <div className="content-bottom">
                                <div className="tags float-left">
                                    <a href="#">HTML5</a>
                                    <a href="#">University</a>
                                    <a href="#">Courses</a>
                                </div>
                                <div className="share dropdown float-right">
                                    <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        share <i className="fa fa-share-alt"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="twitter" href="#"><i className="icons icon-social-twitter"></i></a>
                                        <a className="facebook" href="#"><i className="icons icon-social-facebook"></i></a>
                                        <a className="pinterest" href="#"><i className="icons icon-social-pinterest"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <div className="post-navigation">
                    <div className="row">
                        <div className="col-md-6">
                            <article className="post type-post">
                                <div className="entry-thumbnail"><img src="../images/posts/12.jpg" alt="Thumbnail" /></div>
                                    <div className="entry-content">
                                        <h3 className="entry-title"><a href="single.html">WordPress Video Themes 2018 - Make Video Website Easily</a></h3>
                                        <div className="entry-meta">
                                            <span className="comment"><i className="icons icon-bubbles"></i> 13 comments</span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-md-6">
                                <article className="post type-post">
                                    <div className="entry-thumbnail"><img src="../images/posts/13.jpg" alt="Thumbnail" /></div>
                                        <div className="entry-content">
                                            <h3 className="entry-title"><a href="single.html">30+ Free WordPress Themes 2018 - Simple & Fast Loading</a></h3>
                                            <div className="entry-meta">
                                                <span className="comment"><i className="icons icon-bubbles"></i> 13 comments</span>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className="author-bio">
                            <h3 className="title">About the author</h3>
                            <div className="author-contents media">
                                <div className="author-avatar float-left"><img className="radius" src="../images/au.jpg" alt="Avatar" /></div>
                                    <div className="author-details media-body">
                                        <h3 className="name"><a href="#">Julia Adams</a></h3>
                                        <p>
                                            There was a painful and uncontrollable squeaking mixed in with it, the words could be made out at first but then there was a sort of echo which made them unclear, leaving the hearer unsure whether he had heard properly or not.
                                        </p>
                                        <div className="author-social">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-pinterest"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comments">
                                <h2 className="title">25 Comments</h2>
                                <ol className="comment-list">
                                    <li className="comment parent">
                                        <div className="comment-body media">
                                            <img className="rounded-circle author-avatar" src="../images/comments/1.jpg" alt="Comment Authors" />
                                            <div className="comment-content media-body">
                                                <span className="time"><time datetime="2016-02-20 21:00">20-02-2016 at 21:37</time> </span>
                                                <span className="name"><a href="#">Anthony Doe</a></span>
                                                <p className="description">
                                                    Gregor had wanted to give a full answer and explain everything but in the circumstances contented himself with saying- I’m getting up now.
                                                </p>
                                                <a href="#" className="btn reply-btn">Reply</a>
                                            </div>
                                        </div>
                                        <ol className="children">
                                            <li className="comment">
                                                <div className="comment-body media">
                                                    <img className="rounded-circle author-avatar" src="../images/comments/2.jpg" alt="Comment Authors" />
                                                    <div className="comment-content media-body">
                                                        <span className="time"><time datetime="2016-02-20 21:00">20-02-2016 at 21:37</time> </span>
                                                        <span className="name"><a href="#">Anthony Doe</a></span>
                                                        <p className="description">
                                                            The change in Gregor’s voice probably could not be noticed outside through the wooden door, as his mother was satisfied with this explanation and shuffled away
                                                        </p>
                                                        <a href="#" className="btn reply-btn">Reply</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className="comment parent">
                                        <div className="comment-body media">
                                            <img className="rounded-circle author-avatar" src="../images/comments/4.jpg" alt="Comment Authors" />
                                            <div className="comment-content media-body">
                                                <span className="time"><time datetime="2016-02-20 21:00">20-02-2016 at 21:37</time> </span>
                                                <span className="name"><a href="#">Anthony Doe</a></span>
                                                <p className="description">
                                                    And yet, once in a while, he renders a head with such character, or a movement with such ease that we wonder whether he had not in him, after all, the making of a real artist.
                                                </p>
                                                <a href="#" className="btn reply-btn">Reply</a>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                                <div className="respond">
                                    <h2 className="title">Add Your Comment</h2>
                                    <form action="#" method="post" className="comment-form">
                                        <input className="form-control" name="author" type="text" placeholder="Name *" required />
                                        <input className="form-control" name="email" type="email" placeholder="Email *" required />
                                        <input className="form-control" name="url" type="url" placeholder="URL" />
                                        <textarea id="comment" className="form-control" name="comment" placeholder="Comment" rows="8" required></textarea>
                                        <input className="btn" type="submit" value="Submit Comment" />
                                    </form>
                                </div>
                            </div>
        </div>
    );
}

export function Blog() {
    return (
        <div>
            <Header activeTitle="blog" />
            <BreadCrumb title="Blog" currentItem="Blog" />
            <section className="blog-posts">
                <div className="section-padding">
                    <div className="container">
                        <div className="row">
                            <SingleBlog />
                            <div className="col-md-4">
                                <aside className="sidebar">
                                    <div className="widget widget_search">
                                        <div className="widget-details">
                                            <form method="get" className="search-form" action="#">
                                                <input type="text" className="form-control" placeholder="Search ..." name="s" title="Search here" required />
                                                <input type="submit" className="form-control" />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="widget widget_categories">
                                        <h2 className="widget-title">Categories</h2>
                                        <div className="widget-details">
                                            <ul>
                                                <li><a href="#">News</a></li>
                                                <li><a href="#">Photography</a></li>
                                                <li><a href="#">WordPress</a></li>
                                                <li><a href="#">Learning Press</a></li>
                                                <li><a href="#">HTML5</a></li>
                                                <li><a href="#">Blog</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget widget_popular_post">
                                        <h2 className="widget-title">Popular Posts</h2>
                                        <div className="widget-details">
                                            <article className="post type-post media">
                                                <div className="entry-thumbnail">
                                                    <img src="../images/widget/1.jpg" alt="post"/>
                                                </div>
                                                <div className="entry-content media-body">
                                                    <h3 className="entry-title"><a href="#">WordPress Theme Development Resources</a></h3>
                                                    <div className="entry-meta">
                                                        <span className="time"><i className="icons icon-calendar"></i> <time datetime="2018-05-28">28 July, 2018</time></span>
                                                    </div>
                                                </div>
                                            </article>
                                            <article className="post type-post media">
                                                <div className="entry-thumbnail">
                                                    <img src="../images/widget/2.jpg" alt="post"/>
                                                </div>
                                                <div className="entry-content media-body">
                                                    <h3 className="entry-title"><a href="#">How To Tell If A Site Is WordPress Or Not</a></h3>
                                                    <div className="entry-meta">
                                                        <span className="time"><i className="icons icon-calendar"></i> <time datetime="2018-05-28">28 July, 2018</time></span>
                                                    </div>
                                                </div>
                                            </article>
                                            <article className="post type-post media">
                                                <div className="entry-thumbnail">
                                                    <img src="../images/widget/3.jpg" alt="post"/>
                                                </div>
                                                <div className="entry-content media-body">
                                                    <h3 className="entry-title"><a href="#">WordPress Themes 2018 : Responsive and Creative Design</a></h3>
                                                    <div className="entry-meta">
                                                        <span className="time"><i className="icons icon-calendar"></i> <time datetime="2018-05-28">28 July, 2018</time></span>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                    <div className="widget widget_tag_cloud">
                                        <h2 className="widget-title">Tags Cloud</h2>
                                        <div className="widget-details">
                                            <div className="tagcloud">
                                                <a href="#">Theme</a>
                                                <a href="#">Template</a>
                                                <a href="#">Learning Press</a>
                                                <a href="#">WordPress</a>
                                                <a href="#">News</a>
                                                <a href="#">Development</a>
                                                <a href="#">HTML5</a>
                                                <a href="#">University</a>
                                                <a href="#">Courses</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget widget_instagram">
                                        <h2 className="widget-title">Instagram</h2>
                                        <div className="widget-details">
                                            <ul>
                                                <li><a href="#"><img src="../images/insta/1.jpg" alt="flicker" /></a></li>
                                                <li><a href="#"><img src="../images/insta/2.jpg" alt="flicker" /></a></li>
                                                <li><a href="#"><img src="../images/insta/3.jpg" alt="flicker" /></a></li>
                                                <li><a href="#"><img src="../images/insta/4.jpg" alt="flicker" /></a></li>
                                                <li><a href="#"><img src="../images/insta/5.jpg" alt="flicker" /></a></li>
                                                <li><a href="#"><img src="../images/insta/6.jpg" alt="flicker" /></a></li>
                                                <li><a href="#"><img src="../images/insta/7.jpg" alt="flicker" /></a></li>
                                                <li><a href="#"><img src="../images/insta/8.jpg" alt="flicker" /></a></li>
                                                <li><a href="#"><img src="../images/insta/9.jpg" alt="flicker" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget widget_archive">
                                        <h2 className="widget-title">Archive</h2>
                                        <div className="widget-details">
                                            <ul>
                                                <li><a href="#">January 2018</a></li>
                                                <li><a href="#">February 2018</a></li>
                                                <li><a href="#">March 2018</a></li>
                                                <li><a href="#">April 2018</a></li>
                                                <li><a href="#">May 2018</a></li>
                                                <li><a href="#">June 2018</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
