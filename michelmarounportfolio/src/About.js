import React from 'react'

export default class About extends React.Component{
    render(){
        return(
            <section class="mh-about" id="mh-about">
            <div class="container">
                <div class="row section-separator">
                    <div class="col-sm-12 col-md-6">
                        <div class="mh-about-img shadow-2 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                            <img src="assets/images/ab-img.png" alt="" class="img-fluid"/>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <div class="mh-about-inner">
                            <h2 class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">About Me</h2>
                            <p class="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Hello, I’m Michel, <b>Software Engineer</b> based in Montreal. 
                            I have rich experience in full stack web development, mobile development, networking, writing extensions and developing tools. </p>
                            <div class="mh-about-tag wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                                <ul>
                                    <li><span>React</span></li>
                                    <li><span>Python</span></li>
                                    <li><span>Angular</span></li>
                                    <li><span>Redux</span></li>
                                    <li><span>Javascript</span></li>
                                    <li><span>Firebase</span></li>
                                    <li><span>Postgresql</span></li>
                                    <li><span>Mysql</span></li>
                                    <li><span>Java</span></li>
                                    <li><span>Objective C</span></li>
                                    <li><span>Php</span></li>
                                    <li><span>Html</span></li>
                                    <li><span>Css</span></li>
                                    <li><span>Wordpress</span></li>
                                </ul>
                            </div>
                            <a href="#" class="btn btn-fill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">Downlaod CV <i class="fa fa-download"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}