import React from 'react';
import { Carousel, Form, FormControl, Button } from 'react-bootstrap';
import { SearchOutlined } from '@ant-design/icons';
import slider1 from '../../assets/banner1.jpg';
import slider2 from '../../assets/banner2.jpg';
import slider3 from '../../assets/banner3.jpg';
import slider4 from '../../assets/banner4.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SliderComponent.css';

const SliderComponent = () => {
    return (
        <Carousel interval={null}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                />
                <Carousel.Caption className="text-center caption-content">
                    <h1 className="caption-heading">Tailor-made holidays and safaris, crafted by experts</h1>
                    <Form inline>
                        <div className="search-container" style={{ alignItems: 'center' }}>
                            <FormControl type="search" placeholder="Search" className="mr-sm-2 search-input" />
                            <Button variant="outline-light" className="search-button">
                                <SearchOutlined style={{ color: '#fff' }} />
                            </Button>
                        </div>
                    </Form>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                />
                <Carousel.Caption className="text-center caption-content text-shadow-box shadow-box">

                    <h3 className="caption-heading-small">Where to go in 2024</h3>
                    <p className="text-heading-small">Here are ten destinations that are calling out to us,
                        from the wild spaces and intimate camps of Botswana, to the art cities and Roman ruins of Italy.</p>
                    <Button className="see-list-button">
                        SEE THE LIST
                    </Button>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                />
                <Carousel.Caption className="text-center caption-content text-shadow-box shadow-box">

                    <h3 className="caption-heading-small">Our spring edition of Audley Traveller</h3>
                    <p className="text-heading-small">Within its pages, our specialists share their
                        latest travel tips and ideas, including three ways to explore Japan and a coastal road trip through South Africa.</p>
                    <Button className="see-list-button">

                        REQUEST YOUR NEW COPY
                    </Button>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider4}
                    alt="Third slide"
                />
                <Carousel.Caption className="text-center caption-content text-shadow-box shadow-box">

                    <h3 className="caption-heading-small">Arrange a video appointment</h3>
                    <p className="text-heading-small">Our specialists can help bring your trip to life,
                        sharing maps, images and first-hand experience.</p>
                    <Button className="see-list-button">
                        HOW OUR APPOINTMENTS WORK
                    </Button>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default SliderComponent;
