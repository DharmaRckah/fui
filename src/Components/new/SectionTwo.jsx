import React from 'react';
import circleImage from '../../Asset/img/circle.png';
import image1 from '../../Asset/img/image_1.png';

function SectionTwo() {
    return (
        <section className="section_2">
            <img src={circleImage} className="c_img_1 right" alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={image1} alt="" className="img image_1" data-aos="fade-up" data-aos-duration="1500" />
                    </div>
                    <div className="col-md-6 paddingLeft">
                        <div>
                            <h2 className="title" data-aos="fade-up" data-aos-duration="1500">
                                What is <span className="span">VR?</span>
                            </h2>
                            <p className="para animate-text" data-aos="fade-up" data-aos-duration="1500">
                                Virtual reality is a technology that allows a user to carry out actions in a digital environment yet feel as if they are immersed in a physical environment. The purpose of VR is to enable a person to experience and manipulate the environment as if it were the real world.
                                Virtual reality provides an immersive user experience by simulating various human senses such as vision, touch, and sound.
                            </p>
                            <div className="d-flex btn_flex" data-aos="fade-up" data-aos-duration="1500">
                                <button className="btn get_btn animate-text">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default SectionTwo;
