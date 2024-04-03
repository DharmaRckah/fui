import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialSlider = () => {
    const testimonials = [
        {
            name: 'Delbert Simonas',
            profession: 'Store Owner',
            content: "Online reviews can make or break a customer's decision to make a purchase. Read about these customer review sites where your customers' satisfaction is our priority."
        },
        {
            name: 'Tikoh Amin',
            profession: 'Salon Owner',
            content: "When you think of Apple, you automatically think expensive. If you're anything like me, when purchasing this laptop I was skeptical about the laptops I purchased."
        },
        {
            name: 'Malachi Lensing',
            profession: 'Marketing Manager',
            content: "I’ve wanted a MacBook for a while now because of the build quality and the simplicity of the OS. I spend an average of 6 hours a day using it for college, and the battery still has a fair amount of charge left."
        },
        {
            name: 'Christian Isla',
            profession: 'Android Developer',
            content: "This MacBook has excellent processing speed. The screen is crystal clear, and I really enjoy the touch bar. I set up the fingerprint reader."
        },
        {
            name: 'Lori Charles',
            profession: 'Sales Manager',
            content: "For the last 10 years, I have owned an old Gateway laptop. Although it was amazing and lasted me, it was time for an upgrade. I own an Apple phone, so I decided to look into a computer."
        }
    ];
    

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3, // Set to show 3 testimonials at once
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="items " > {/* Set background color here */}
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="card bg-[#1F3C4C] w-75 h-full">
                        <div className="card-body h-full">
                            <h4 className="card-title">
                                <img src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png" alt="quote icon" />
                            </h4>
                            <div className="template-demo">
                                <p>{testimonial.content}</p>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-2">
                                    <img className="profile-pic" src="https://img.icons8.com/bubbles/100/000000/edit-user.png" alt="profile pic" />
                                </div>
                                <div className="col-sm-10">
                                    <div className="profile">
                                        <h4 className="cust-name">{testimonial.name}</h4>
                                        <p className="cust-profession">{testimonial.profession}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TestimonialSlider;


