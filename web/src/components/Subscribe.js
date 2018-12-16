import React from 'react';

export function Subscribe() {
    return (
        <section className="subscribe text-center gray-bg">
            <div className="section-padding">
                <div className="container">
                    <h4>Subscribe Weekly Newsletter</h4>
                    <form id="mc4wp-form-1" className="mc4wp-form mc4wp-form-1971" method="post" data-id="1971" data-name="Mail Form">
                        <input className="subscribe-email" type="email" id="subscribe-email" name="EMAIL" placeholder="Enter Email Address Here" required="" />
                        <input className="subscribe-submit" type="submit" id="subscribe-submit" name="submit" value="Subscribe now" />
                    </form>
                </div>
            </div>
        </section>
    );
}
