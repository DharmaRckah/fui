import React from 'react';
import circleImage from '../../Asset/img/circle.png'; // Adjust path as necessary
import videoSrc from '../../Asset/video/1107923_1080p_4k_2k_1280x720.mp4'; // Adjust path as necessary

function SectionThree() {
    return (
        <section className="section_2">
            <div className="container">
                <div className="row">
                    <img src={circleImage} className="c_img_1 right" alt="" />
                    <div className="col-md-6 paddingRight">
                        <div>
                            <h2 className="title" data-aos="fade-up" data-aos-duration="1500">
                                What is <span className="span">AR?</span>
                            </h2>
                            <p className="para animate-text" data-aos="fade-up" data-aos-duration="1500">
                                Augmented reality (AR) combines the digital world with real elements. It is a technology that is equally suitable for mobile devices and desktops. It is unique because it offers the possibility of reflecting digital components in the real world. AR delivers visual elements, sound, and other sensory information to the user through a device like a smartphone or glasses.
                            </p>
                            <div className="d-flex btn_flex" data-aos="fade-up" data-aos-duration="1500">
                                <button className="btn get_btn animate-text">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <video src={videoSrc} width="100%" autoPlay loop muted className="videoMeta" data-aos="fade-up" data-aos-duration="1500"></video>
                    </div>
                </div>
            </div>
           
        </section>
    );
}

export default SectionThree;
