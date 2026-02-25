/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './FooterComponent.css';
import { HomeOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const FooterComponent = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-widget about-widget">
                            <h2>About Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, sem ut sollicitudin convallis, leo lacus venenatis urna, eget lacinia risus arcu eget sapien.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-widget links-widget">
                            <h2>Useful Links</h2>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-widget contact-widget">
                            <h2>Contact Us</h2>
                            <ul>
                                <li><PhoneOutlined /> 079-774-4819</li>
                                <li><MailOutlined /> nguyenquochuy3102@gmail.com</li>
                                <li><HomeOutlined /> 361 Vo Thi Sau St, Long Toan town, BRVT, VietNam</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <p className="copyright">© 2024 Quoc Huy Villa. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent
