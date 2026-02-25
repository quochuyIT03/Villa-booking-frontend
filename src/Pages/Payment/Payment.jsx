import React from 'react';
import { Form, Input, Button, InputNumber, DatePicker } from 'antd';
import { FaCreditCard, FaPaypal } from 'react-icons/fa';
import './Payment.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Payment = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
        // Handle payment processing here
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="payment-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-heading header-text">
                            <h3 style={{ fontSize: '50px', marginTop: '50px' }}>Payment</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="payment-form">
                            <h3>Complete Your Payment</h3>
                            <Form
                                name="payment"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
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
                                    label="Card Number"
                                    name="cardNumber"
                                    rules={[{ required: true, message: 'Please enter your card number!' }]}
                                >
                                    <Input placeholder="Card Number" prefix={<FaCreditCard />} />
                                </Form.Item>
                                <Form.Item
                                    label="Expiration Date"
                                    name="expirationDate"
                                    rules={[{ required: true, message: 'Please select the expiration date!' }]}
                                >
                                    <DatePicker picker="month" placeholder="MM/YY" />
                                </Form.Item>
                                <Form.Item
                                    label="CVV"
                                    name="cvv"
                                    rules={[{ required: true, message: 'Please enter the CVV!' }]}
                                >
                                    <Input placeholder="CVV" type="password" />
                                </Form.Item>
                                <Form.Item
                                    label="Amount"
                                    name="amount"
                                    rules={[{ required: true, message: 'Please enter the amount!' }]}
                                >
                                    <InputNumber min={1} placeholder="Amount" />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" block>
                                        Pay Now
                                    </Button>
                                </Form.Item>
                            </Form>
                            <div className="alternative-payment-methods">
                                <h4>Or pay with</h4>
                                <Button type="default" icon={<FaPaypal />} block style={{ marginBottom: '10px' }}>
                                    PayPal
                                </Button>
                                <Button type="default" icon={<FaCreditCard />} block>
                                    Credit Card
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
