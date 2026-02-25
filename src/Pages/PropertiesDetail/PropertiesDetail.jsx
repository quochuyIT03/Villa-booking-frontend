import React from 'react';
import { useParams } from 'react-router-dom';
import './PropertiesDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Carousel, DatePicker, InputNumber, Button, Form, Input } from 'antd';
import house from '../../assets/svg/house.png';
import contact from '../../assets/svg/contact.png';
import payment from '../../assets/svg/payment.png';
import safety from '../../assets/svg/safety.png';
import moment from 'dayjs';

const PropertiesDetail = () => {
    // eslint-disable-next-line no-unused-vars
    const { id } = useParams();

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>

            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="breadcrumb"><a href="/" style={{ fontWeight: 'bold', color: 'rgb(243, 85, 37)' }} >Home</a> / Single Property</span>
                            <h3 style={{ fontSize: '50px', marginTop: '50px' }}>Single Property</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="single-property section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="main-image">
                                <Carousel autoplay>
                                    <Image src="https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg" alt="Property" />
                                    <Image src="https://img.freepik.com/free-photo/modern-hotel-room-with-large-bed_1203-1491.jpg" alt="Property" />
                                    <Image src="https://img.freepik.com/free-photo/cozy-hotel-room-interior_1232-1822.jpg" alt="Property" />
                                </Carousel>
                            </div>
                            <div className="main-content">
                                <span className="category">Apartment</span>
                                <h4>24 New Street Miami, OR 24560</h4>
                                <p>
                                    Get <strong>the best villa agency</strong> HTML CSS Bootstrap Template for your company website.
                                    TemplateMo provides you the <a href="/" target="_blank" rel="noopener noreferrer">asb</a> in the world.
                                    Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.
                                    <br /><br />
                                    When you look for free CSS templates, you can simply type TemplateMo in any search engine website.
                                    In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc.
                                    Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.
                                </p>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Best useful links ?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice,
                                            chillwave vexillologist incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How does this work ?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice,
                                            chillwave vexillologist incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Why is Villa the best ?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice,
                                            chillwave vexillologist incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="booking-form">
                                <h3>Book This Property</h3>
                                <Form
                                    name="booking"
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    initialValues={{
                                        checkin: moment(),
                                        checkout: moment().add(1, 'days'),
                                        guests: 1
                                    }}
                                >
                                    <Form.Item
                                        label="Name"
                                        name="name"
                                        rules={[{ required: true, message: 'Please enter your name!' }]}
                                    >
                                        <Input placeholder="Your Name" />
                                    </Form.Item>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[{ required: true, message: 'Please enter your email!' }]}
                                    >
                                        <Input placeholder="Your Email" />
                                    </Form.Item>
                                    <Form.Item
                                        label="Check-in"
                                        name="checkin"
                                        rules={[{ required: true, message: 'Please select your check-in date!' }]}
                                    >
                                        <DatePicker />
                                    </Form.Item>
                                    <Form.Item
                                        label="Check-out"
                                        name="checkout"
                                        rules={[{ required: true, message: 'Please select your check-out date!' }]}
                                    >
                                        <DatePicker />
                                    </Form.Item>
                                    <Form.Item
                                        label="Guests"
                                        name="guests"
                                        rules={[{ required: true, message: 'Please enter number of guests!' }]}
                                    >
                                        <InputNumber min={1} max={10} />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" block>
                                            Book Now
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                            <div className="info-table" style={{ marginTop: '50px' }} >
                                <ul>
                                    <li>
                                        <img src={house} alt="Icon" style={{ maxWidth: '52px' }} />
                                        <h4>450 m2<br /><span>Total Flat Space</span></h4>
                                    </li>
                                    <li>
                                        <img src={contact} alt="Icon" style={{ maxWidth: '52px' }} />
                                        <h4>Contract<br /><span>Contract Ready</span></h4>
                                    </li>
                                    <li>
                                        <img src={payment} alt="Icon" style={{ maxWidth: '52px' }} />
                                        <h4>Payment<br /><span>Payment Process</span></h4>
                                    </li>
                                    <li>
                                        <img src={safety} alt="Icon" style={{ maxWidth: '52px' }} />
                                        <h4>Safety<br /><span>24/7 Under Control</span></h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertiesDetail;
