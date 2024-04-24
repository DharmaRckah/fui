import React from 'react';
import circleImage from '../../Asset/img/circle.png';
import img2 from '../../Asset/img/img_2.png';
import img3 from '../../Asset/img/img_3.png';
import img4 from '../../Asset/img/img_4.png';
import img5 from '../../Asset/img/img_5.png';
import img6 from '../../Asset/img/img_6.png';
import img7 from '../../Asset/img/img_7.png';

function SectionFour() {
    const industries = [
        { image: img2, title: "Education", description: "Working online is the same experience as working in an office. This will be achieved with...", buttonLabel: "Explore Now" },
        { image: img3, title: "Healthcare", description: "Watching concerts virtually is one of the things that can be done in cyberspace...", buttonLabel: "Explore Now" },
        { image: img4, title: "Real Estate", description: "For gamers, the metaverse could be an interesting platform of choice for the...", buttonLabel: "Explore Now" },
        { image: img5, title: "Events and Expos", description: "With cyberspace, online travel is certainly not impossible. We can do this with the help of...", buttonLabel: "Explore Now" },
        { image: img6, title: "V-Commerce", description: "In the past, works of art such as paintings could only be seen in the real world...", buttonLabel: "Explore Now" },
        { image: img7, title: "Gaming", description: "The community has also been active with the emergence of paintings or drawings...", buttonLabel: "Explore Now" },
        { image: img7, title: "Advertisement & Marketing", description: "The community has also been active with the emergence of paintings or drawings...", buttonLabel: "Explore Now" },
        { image: img7, title: "Entertainment", description: "The community has also been active with the emergence of paintings or drawings...", buttonLabel: "Explore Now" },
        { image: img7, title: "Automotive", description: "The community has also been active with the emergence of paintings or drawings...", buttonLabel: "Explore Now" },
    ];

    return (
        <section className="section_2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mb-5">
                        <h2 className="title" data-aos="fade-up" data-aos-duration="1500">IMPLICATION <span className="span">INDUSTRIES</span></h2>
                        <p className="para animate-text" data-aos="fade-up" data-aos-duration="1500">Let's explore and create your experience with metaverse.</p>
                    </div>
                </div>
                <img src={circleImage} className="c_img_1" alt="" />
                <div className="row">
                    {industries.map((industry, index) => (
                        <IndustryCard key={index} image={industry.image} title={industry.title} description={industry.description} buttonLabel={industry.buttonLabel} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function IndustryCard({ image, title, description, buttonLabel }) {
    return (
        <div className="col-md-4 mb-5">
            <div className="card">
                <img src={image} width="100%" alt={title} />
                <div className="card-body">
                    <h4 className="animate-text">{title}</h4>
                    <p className="paraText animate-text">{description}</p>
                    <div className="d-flex btn_flex">
                        <button className="btn get_btn">{buttonLabel}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionFour;
