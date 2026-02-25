/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import './ContactComponent.css';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

const ContactComponent = () => {
    return (
        <div>
            <div className="contact section bg-img">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4 ">
                            <div className="section-heading text-center">
                                <h6>| Contact Us</h6>
                                <h2 style={{ color: 'white' }}>Get In Touch With Our Agents</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div id="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33957.77331083807!2d109.21064192497987!3d12.221278622900343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31706785fb9eb2b7%3A0x1212fa9b49048b61!2sVinpearl%20Resort%20%26%20Spa%20Nha%20Trang%20Bay!5e1!3m2!1sen!2sth!4v1717753238605!5m2!1sen!2sth"
                                    width="100%"
                                    height="500px"
                                    style={{ border: 0, borderRadius: '10px', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)' }}
                                    allowFullScreen=""
                                ></iframe>
                            </div>
                            <div className="row contact-info">
                                <div className="col-lg-6">
                                    <div className="item phone">
                                        <PhoneOutlined style={{ fontSize: '36px', marginRight: '20px', color: '#ff6600' }} />
                                        <h6>079-774-4819<br /><span>Phone Number</span></h6>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="item email">
                                        <MailOutlined style={{ fontSize: '36px', marginRight: '20px', color: '#ff6600' }} />
                                        <h6>nguyenquochuy3102@gmail.com<br /><span>Business Email</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <form id="contact-form" action="" method="post">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label htmlFor="name">Full Name</label>
                                            <input type="text" name="name" id="name" placeholder="Your Name..." autoComplete="on" required />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label htmlFor="email">Email Address</label>
                                            <input type="email" name="email" id="email" placeholder="Your E-mail..." required />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label htmlFor="subject">Subject</label>
                                            <input type="text" name="subject" id="subject" placeholder="Subject..." autoComplete="on" />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <label htmlFor="message">Message</label>
                                            <textarea name="message" id="message" placeholder="Your Message"></textarea>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="orange-button">Send Message</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactComponent
