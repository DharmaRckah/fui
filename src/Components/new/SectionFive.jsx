import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // basic Swiper styles
import 'swiper/css/navigation'; // if you use navigation buttons
import 'swiper/css/pagination'; // if you use pagination

import videoSource from '../../Asset/video/1107923_1080p_4k_2k_1280x720.mp4';

function SectionFive() {
    return (
        <section className="section_2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mb-5">
                        <h2 className="title" data-aos="fade-up" data-aos-duration="1500">What is <span className="span">Metaverse</span></h2>
                        <p className="para animate-text" data-aos="fade-up" data-aos-duration="1500">Let's explore and create your experience with metaverse.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            muted={true} // additional props for custom behavior
                        >
                            <SwiperSlide>
                                <video src={videoSource} width="100%" autoPlay loop muted></video>
                                <div className="sliderText">
                                    <h3 className="animate-text">Metaverse Fashion Week</h3>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <video src={videoSource} width="100%" autoPlay loop muted></video>
                                <div className="sliderText">
                                    <h3 className="animate-text">Metaverse Fashion Week</h3>
                                </div>
                            </SwiperSlide>
                            {/* Add more slides as needed */}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionFive;
