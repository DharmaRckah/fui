import React from 'react';
import circleImage from '../../Asset/img/circle.png';
import vectorImage from '../../Asset/img/Vector_1.png';
import heroImage from '../../Asset/img/hero.png';

function SectionOne() {
    return (
        <section className="section_1">
            <img src={circleImage} className="c_img_1" alt="" />
            <div className="container containerAbsolate">
                <div className="row">
                    <div className="col-md-6">
                        <div className="letter-animation">
                            <h1 className="title" data-aos="fade-up" data-aos-duration="1500">
                                Explore the future of the <span className="span">METAVERSE DEVELOPMENT</span>
                            </h1>
                        </div>
                        <p className="para animate-text pt-3 pb-3" data-aos="fade-up" data-aos-duration="2000">
                            Let's explore and create your experience with metaverse.
                        </p>
                        <div className="d-flex btn_flex">
                            <button className="btn get_btn animate-text" data-aos="fade-up" data-aos-duration="2500">Get Started</button>
                            <button className="btn explore_btn animate-text" data-aos="fade-up" data-aos-duration="3000">Explore Now</button>
                        </div>
                        <div className="d-flex counter_flex" data-aos="fade-up" data-aos-duration="4000">
                            <CounterDisplay count="29k+" text="Artworks" />
                            <CounterDisplay count="18K+" text="Artists" />
                            <CounterDisplay count="25K+" text="Artworks" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="heroDiv">
                            <img src={vectorImage} className="Vector_1" alt="" />
                            <img src={heroImage} alt="" className="heroImg" />
                            <div className="div_color"></div>
                        </div>
                    </div>
                </div>
            </div>
         
        </section>
    );
}

function CounterDisplay({ count, text }) {
    return (
        <div className="counter_d_flex">
            <p className="onload_Counter animate-text">{count}</p>
            <p className="counter_Text animate-text">{text}</p>
        </div>
    );
}

export default SectionOne;
