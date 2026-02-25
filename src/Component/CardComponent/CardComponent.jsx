import { Image } from 'antd';
import React from 'react';
import './CardComponent.css'; // Assuming you will place the CSS in this file
import { CalendarOutlined } from '@ant-design/icons';

const CardComponent = () => {
    return (
        <div className="card-container col-lg-4 col-md-6">
            <div className="property-card">

                <Image src="https://static.vecteezy.com/system/resources/thumbnails/043/302/543/small_2x/traditional-mediterranean-white-house-with-swimming-pool-on-a-hill-overlooking-the-sea-background-summer-holidays-photo.jpg" alt="Property" className="property-image" />

                <div className="property-info">
                    <span className="property-category">Luxury Villa</span>
                    <h6 className="property-price">$2,264,000</h6>
                    <h4 className="property-title">
                        <a href="property-details.html">18 New Street Miami, OR 97219</a>
                    </h4>
                    <ul className="property-details">
                        <li>Bedrooms: <span>8</span></li>
                        <li>Bathrooms: <span>8</span></li>
                        <li>Area: <span>545m²</span></li>
                        <li>Floor: <span>3</span></li>
                        <li>Parking: <span>6 spots</span></li>
                    </ul>
                    <div className="main-button">
                        <a href="properties_detail"> <CalendarOutlined /> Schedule a visit</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;
