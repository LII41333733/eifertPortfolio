import React from 'react';

export default (page, func) => {
    return (
        <>
            <div className="row bgGrey">
                <div class="col-12 text-center py-3">
                    <div class="contact-inner">
                        <div class="intro">
                            <h2 className="rockwell">Let's Connect!</h2>
                            <p>I hand craft clean, logical, and innovative designs for both print &amp; digital platforms. <span class="br-txt">I specialize in branding, illustration, and strong, highly successful marketing campaigns.</span> From concept to execution, I am collaborative in my approach.</p>
                        </div>

                        <div class="protocol clearfix">


                            <div class="steps step-00">
                                <div class="num">
                                    <p>1</p>
                                </div>
                                <h2>Get a Quote</h2>
                                <p>Call or email me today <span class="txt-br">to get an estimate on your </span>next design project.</p>
                            </div>


                            <div class="steps step-01">
                                <div class="num">
                                    <p>2</p>
                                </div>
                                <h2>Design Execution</h2>
                                <p>I will use my skills and <span class="txt-br">experience to turn your </span>vision into a reality.</p>
                            </div>


                            <div class="steps step-02">
                                <div class="num">
                                    <p>3</p>
                                </div>
                                <h2>File Delivery</h2>
                                <p>Once given approval, I will <span class="txt-br">package and prep all final </span>files to send to you.</p>
                            </div>

                        </div>

                        <h3>Like my work? Send me a message and let's get started!</h3>
                        <a href="mailto:e.eifert@hotmail.com" class="cta"> eifertdesign@gmail.com</a>
                        <h3 className="mt-50">Check out my other website featuring my collection of wedding invitation packages at <a className="wbe" href="http://wbeinvitations.com"><h2><em>wbeinvitations.com</em></h2></a></h3>

                    </div>
                </div>
            </div>
            <div className="row">
                <div class="footer">
                    <nav>
                        <a href="https://www.linkedin.com/" target="_blank"><img src="images/contact/icon-linkedin.png" /></a>
                        <a href="http://www.facebook.com/" target="_blank"><img src="images/contact/icon-facebook.png" /></a>
                        <a href="https://www.instagram.com" target="_blank"><img src="images/contact/icon-instagram.png" /></a>
                    </nav>
                    <small>{`Copyright © ${new Date().getFullYear()}, All rights reserved.`}</small>
                </div>
            </div>
        </>
    )
}
