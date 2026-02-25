import React from 'react';
import './PropertiesDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Carousel, DatePicker, InputNumber, Button, Form, Input } from 'antd';
import house from '../../assets/svg/house.png';
import contact from '../../assets/svg/contact.png';
import payment from '../../assets/svg/payment.png';
import safety from '../../assets/svg/safety.png';
import dayjs from 'dayjs';

const PropertiesDetail = () => {

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
                            <span className="breadcrumb">
                                <a href="/" style={{ fontWeight: 'bold', color: 'rgb(243, 85, 37)' }}>
                                    Home
                                </a> / Single Property
                            </span>
                            <h3 style={{ fontSize: '50px', marginTop: '50px' }}>
                                Single Property
                            </h3>
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
                                    Get <strong>the best villa agency</strong> HTML CSS Bootstrap Template
                                    for your company website. TemplateMo provides you the best templates
                                    in the world.
                                    <br /><br />
                                    When you look for free CSS templates, you can simply type TemplateMo
                                    in any search engine website.
                                </p>
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
                                        checkin: dayjs(),
                                        checkout: dayjs().add(1, 'day'),
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
                                        rules={[{ required: true, message: 'Please select check-in date!' }]}
                                    >
                                        <DatePicker style={{ width: '100%' }} />
                                    </Form.Item>

                                    <Form.Item
                                        label="Check-out"
                                        name="checkout"
                                        rules={[{ required: true, message: 'Please select check-out date!' }]}
                                    >
                                        <DatePicker style={{ width: '100%' }} />
                                    </Form.Item>

                                    <Form.Item
                                        label="Guests"
                                        name="guests"
                                        rules={[{ required: true, message: 'Enter number of guests!' }]}
                                    >
                                        <InputNumber min={1} max={10} style={{ width: '100%' }} />
                                    </Form.Item>

                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" block>
                                            Book Now
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>

                            <div className="info-table" style={{ marginTop: '50px' }}>
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