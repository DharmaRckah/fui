import React from 'react';
import logo from '../../Asset/img/MetaV_Footer.png';
import icon1 from '../../Asset/img/icon_1.png';
import icon2 from '../../Asset/img/icon_2.png';
import icon3 from '../../Asset/img/icon_3.png';
import icon4 from '../../Asset/img/icon_4.png';

function Footer() {
    return (
        <React.Fragment>
            <footer className="pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={logo} width="125" className="mb-5" alt="MetaV Logo"/>
                            <p className="paraText">Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies lacus. Nisi porta lorem mollis aliquam ut porttitor</p>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-6 footerMainBlock">
                            <div className="footerBlock">
                                <h3 className="footerTitle">About Us</h3>
                                <a href="#" className="footerLink">About Meta</a>
                                <a href="#" className="footerLink">Contact Us</a>
                                <a href="#" className="footerLink">FAQ</a>
                                <a href="#" className="footerLink">Privacy Policy</a>
                                <a href="#" className="footerLink">Terms of Service</a>
                            </div>
                            <div className="footerBlock">
                                <h3 className="footerTitle">Explore</h3>
                                <a href="#" className="footerLink">NFT Marketplace</a>
                                <a href="#" className="footerLink">Virtual Concert</a>
                                <a href="#" className="footerLink">Gaming</a>
                                <a href="#" className="footerLink">Artwork</a>
                                <a href="#" className="footerLink">Online Travel</a>
                            </div>
                            <div className="footerBlock">
                                <h3 className="footerTitle">Contact</h3>
                                <div className="d-flex gap">
                                    <a href="#" className="footerLink"><img src={icon1} width="30" alt="Social Icon 1"/></a>
                                    <a href="#" className="footerLink"><img src={icon2} width="30" alt="Social Icon 2"/></a>
                                    <a href="#" className="footerLink"><img src={icon3} width="30" alt="Social Icon 3"/></a>
                                    <a href="#" className="footerLink"><img src={icon4} width="30" alt="Social Icon 4"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <p className="text-center pb-3">2024 © Abdul Hameed Malik All right reserved.</p>
        </React.Fragment>
    );
}

export default Footer;
