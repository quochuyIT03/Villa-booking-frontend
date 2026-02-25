import React, { useState } from 'react';
import SliderComponent from '../../Component/SliderComponent/SliderComponent';
import FunFacts from '../../Component/FunFacts/FunFacts';
import house from '../../assets/svg/house.png';
import contact from '../../assets/svg/contact.png';
import payment from '../../assets/svg/payment.png';
import safety from '../../assets/svg/safety.png';
import './homePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Image } from 'antd';
import { CalendarOutlined, CloudOutlined, SearchOutlined } from '@ant-design/icons';
import CardComponent from '../../Component/CardComponent/CardComponent';
import ContactComponent from '../../Component/ContactComponent/ContactComponent';
import AssetComponent from '../../Component/AssetComponent/AssetComponent';
import { TiLocation, TiThermometer } from 'react-icons/ti';
import { MdOutlineWater } from 'react-icons/md';
import { FaWind } from 'react-icons/fa';
import { BsFillSunriseFill, BsFillSunsetFill } from 'react-icons/bs';

const HomePage = () => {
    const [showWeather, setShowWeather] = useState(false);

    const toggleWeather = () => {
        setShowWeather(!showWeather);
    };
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(false);

    const fetchWeather = async (city) => {
        const APIKey = '64064ac40e271296c32155b2b0719059';
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`);
            const data = await response.json();
            if (data.cod === '404') {
                setError(true);
                setWeatherData(null);
            } else {
                setError(false);
                setWeatherData(data);
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const handleSearch = () => {
        const city = document.querySelector('.weather-popup .search-box input').value;
        if (city) {
            fetchWeather(city);
        }
    };

    return (
        <div className="homepage">
            <SliderComponent />
            <div className="featured section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="left-image">
                                <Image
                                    src="https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863_960_720.jpg"
                                    alt="Hallstatt"
                                    className="main-image"
                                />

                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="section-heading">
                                <h6 className="section-title">| Featured</h6>
                                <h2 className="section-subtitle">Best Apartment & Sea View</h2>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            Best useful links?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            Get <strong>the best villa</strong> website template in HTML CSS and Bootstrap for your business.
                                            TemplateMo provides you the{' '}
                                            <a href="https://www.google.com/search?q=best+free+css+templates" target="_blank" rel="noopener noreferrer">
                                                best free CSS templates
                                            </a>{' '}
                                            in the world. Please tell your friends about it.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            How does this work?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut
                                            labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            Why is Villa Agency the best?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut
                                            labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="info-table">
                                <ul className="info-list">
                                    <li className="info-item">
                                        <img src={house} alt="House Icon" className="info-icon" />
                                        <h4 className="info-title">
                                            250 m²
                                            <br />
                                            <span className="info-subtitle">Total Flat Space</span>
                                        </h4>
                                    </li>
                                    <li className="info-item">
                                        <img src={contact} alt="Contact Icon" className="info-icon" />
                                        <h4 className="info-title">
                                            Contract
                                            <br />
                                            <span className="info-subtitle">Contract Ready</span>
                                        </h4>
                                    </li>
                                    <li className="info-item">
                                        <img src={payment} alt="Payment Icon" className="info-icon" />
                                        <h4 className="info-title">
                                            Payment
                                            <br />
                                            <span className="info-subtitle">Payment Process</span>
                                        </h4>
                                    </li>
                                    <li className="info-item">
                                        <img src={safety} alt="Safety Icon" className="info-icon" />
                                        <h4 className="info-title">
                                            Safety
                                            <br />
                                            <span className="info-subtitle">24/7 Under Control</span>
                                        </h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="video-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4">
                            <div className="section-heading text-center">
                                <h6>| Video View</h6>
                                <h2 style={{ color: 'white', fontSize: '40px' }} >Get Closer View & Different Feeling</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="video-frame">
                    <iframe
                        src="https://www.youtube.com/embed/H1CIBqDeWQ0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <FunFacts />

            <div class="section best-deal">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="section-heading">
                                <h6>| Best Deal</h6>
                                <h2>Find Your Best Deal Right Now!</h2>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="tabs-content">
                                <div class="row">
                                    <div class="nav-wrapper">
                                        <ul class="nav nav-tabs" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="appartment-tab" data-bs-toggle="tab" data-bs-target="#appartment" type="button" role="tab" aria-controls="appartment" aria-selected="true">Apartment</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="villa-tab" data-bs-toggle="tab" data-bs-target="#villa" type="button" role="tab" aria-controls="villa" aria-selected="false">Villa House</button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="penthouse-tab" data-bs-toggle="tab" data-bs-target="#penthouse" type="button" role="tab" aria-controls="penthouse" aria-selected="false">Penthouse</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade show active" id="appartment" role="tabpanel" aria-labelledby="appartment-tab">
                                            <div class="row deal-content">
                                                <div class="col-lg-3">
                                                    <div class="info-table">
                                                        <ul>
                                                            <li>Total Flat Space <span>185 m²</span></li>
                                                            <li>Floor Number <span>26th</span></li>
                                                            <li>Number of Rooms <span>4</span></li>
                                                            <li>Parking Available <span>Yes</span></li>
                                                            <li>Payment Process <span>Bank</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <Image className="villa-preview" src="https://c4.wallpaperflare.com/wallpaper/575/667/599/trees-design-house-lawn-wallpaper-preview.jpg" alt="Deal Image" />
                                                </div>
                                                <div class="col-lg-3">
                                                    <h4>Extra Info About Property</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.
                                                        <br /><br />When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
                                                    <div class="icon-button">
                                                        <a href="/"><CalendarOutlined /> Schedule a visit</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="villa" role="tabpanel" aria-labelledby="villa-tab">
                                            <div class="row deal-content">
                                                <div class="col-lg-3">
                                                    <div class="info-table">
                                                        <ul>
                                                            <li>Total Flat Space <span>250 m²</span></li>
                                                            <li>Floor Number <span>26th</span></li>
                                                            <li>Number of Rooms <span>5</span></li>
                                                            <li>Parking Available <span>Yes</span></li>
                                                            <li>Payment Process <span>Bank</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <Image className="villa-preview" src="https://w0.peakpx.com/wallpaper/333/786/HD-wallpaper-villa-architecture-colorful-house-grass-home-to-u-beautiful-lights-modern-chairs-beauty-chair-reflection-luxury-night-lovely-houses-colors-design-trees-pool-water-cool-peaceful.jpg" alt="Deal Image" />
                                                </div>
                                                <div class="col-lg-3">
                                                    <h4>Detail Info About Villa</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. <br /><br />Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.</p>
                                                    <div class="icon-button">
                                                        <a href="/"><CalendarOutlined />Schedule a visit</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="penthouse" role="tabpanel" aria-labelledby="penthouse-tab">
                                            <div class="row deal-content">
                                                <div class="col-lg-3">
                                                    <div class="info-table">
                                                        <ul>
                                                            <li>Total Flat Space <span>320 m²</span></li>
                                                            <li>Floor Number <span>34th</span></li>
                                                            <li>Number of Rooms <span>6</span></li>
                                                            <li>Parking Available <span>Yes</span></li>
                                                            <li>Payment Process <span>Bank</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <Image className="villa-preview" src="https://wallpapercave.com/wp/2LdxBEw.jpg" alt="Deal Image" />
                                                </div>
                                                <div class="col-lg-3">
                                                    <h4>Extra Info About Penthouse</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. <br /><br />Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.</p>
                                                    <div class="icon-button">
                                                        <a href="/"><CalendarOutlined /> Schedule a visit</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="properties section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 offset-lg-4">
                            <div class="section-heading text-center">
                                <h6>| Properties</h6>
                                <h2>We Provide The Best Property You Like</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">


                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />
                        <CardComponent />


                    </div>
                </div>
            </div>
            <ContactComponent />
            <AssetComponent />

            <div className={`weather-popup ${showWeather ? 'show' : ''}`}>
                <div className="container">
                    <div className="search-box">
                        <TiLocation style={{ fontSize: '30px', color: 'red' }} />

                        <input type="text" placeholder="Input city" style={{ borderRadius: '20px' }} />
                        <button style={{ border: 'none', borderRadius: '50%', height: '50px', width: '50px' }} onClick={handleSearch}><SearchOutlined style={{ borderRadius: '50%', height: '40px', width: '40px', marginLeft: '7px' }} /></button>
                    </div>
                    {error && (
                        <div className="not-found show">
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-page-not-available-9561127-7706458.png" alt="Not found" />
                            <p>Không tìm thấy đất nước hoặc thành phố của bạn!!</p>
                        </div>
                    )}
                    {weatherData && (
                        <div>
                            <div className="weather-box show">
                                <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather icon" />
                                <p className="temperature">{Math.round(weatherData.main.temp)}°C</p>
                                <p className="description">{weatherData.weather[0].description}</p>
                            </div>
                            <div className="weather-details show">
                                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    <div style={{ flex: '1 1 50%' }}>
                                        <div className="humidity" style={{ display: 'flex', alignItems: 'center' }}>
                                            <MdOutlineWater style={{ fontSize: '30px', color: '#1f50e2' }} />
                                            <div className="text" style={{ marginLeft: '10px' }}>
                                                <span>{weatherData.main.humidity}%</span>
                                                <p>Độ ẩm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ flex: '1 1 50%' }}>
                                        <div className="wind" style={{ display: 'flex', alignItems: 'center' }}>
                                            <FaWind style={{ fontSize: '30px', marginLeft: '10px', color: '#848484' }} />
                                            <div className="text" style={{ marginLeft: '10px' }}>
                                                <span>{weatherData.wind.speed} m/s</span>
                                                <p>Tốc độ gió</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ flex: '1 1 50%' }}>
                                        <div className="pressure" style={{ display: 'flex', alignItems: 'center' }}>
                                            <TiThermometer style={{ fontSize: '40px', color: '#cb1c10' }} />
                                            <div className="text" style={{ marginLeft: '0px' }}>
                                                <span>{weatherData.main.pressure} hPa</span>
                                                <p>Áp suất</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ flex: '1 1 50%' }}>
                                        <div className="sunrise-sunset">
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <BsFillSunriseFill style={{ fontSize: '40px', color: '#ffde15' }} />
                                                <div className="text" style={{ marginLeft: '10px' }}>
                                                    <span>{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</span>
                                                    <p>Bình minh</p>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                                <BsFillSunsetFill style={{ fontSize: '40px', color: '#ff8b15' }} />
                                                <div className="text" style={{ marginLeft: '10px' }}>
                                                    <span>{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</span>
                                                    <p>Hoàng hôn</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Weather Widget Button */}
            <button className="weather-widget-btn" onClick={toggleWeather}>
                <CloudOutlined />
            </button>


        </div>
    );
};

export default HomePage;
