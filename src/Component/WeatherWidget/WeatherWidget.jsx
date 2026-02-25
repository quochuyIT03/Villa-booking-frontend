// src/components/WeatherWidget.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMagnifyingGlass, faWater, faWind } from '@fortawesome/free-solid-svg-icons';
import './WeatherWidget.css';
import clear from '../assets/clear.png';
import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import cloud from '../assets/cloud.png';
import heavyRain from '../assets/heavy-rain.png';
import mist from '../assets/mist.png';
import notFound from '../assets/404.jpg';

const WeatherWidget = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [city, setCity] = useState('');

    const APIKey = '64064ac40e271296c32155b2b0719059';

    const fetchWeather = () => {
        if (city === '') return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
            .then(response => response.json())
            .then(json => {
                if (json.cod === '404') {
                    setError('Không tìm thấy đất nước hoặc thành phố của bạn!!');
                    setWeatherData(null);
                    return;
                }

                setError(null);
                setWeatherData(json);
            })
            .catch(err => setError('Có lỗi xảy ra, vui lòng thử lại sau.'));
    };

    const getImage = (main) => {
        switch (main) {
            case 'Clear': return clear;
            case 'Rain': return rain;
            case 'Snow': return snow;
            case 'Clouds': return cloud;
            case 'Heavy Rain': return heavyRain;
            case 'Haze': return mist;
            default: return '';
        }
    };

    return (
        <div className="container">
            <div className="search-box">
                <FontAwesomeIcon icon={faLocationDot} />
                <input
                    type="text"
                    placeholder="Input your city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button onClick={fetchWeather}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>

            {error && (
                <div className="not-found">
                    <img src={notFound} alt="Not Found" />
                    <p>{error}</p>
                </div>
            )}

            {weatherData && (
                <>
                    <div className="weather-box">
                        <img src={getImage(weatherData.weather[0].main)} alt="Weather" />
                        <p className="temperature">{parseInt(weatherData.main.temp)}<span>°C</span></p>
                        <p className="description">{weatherData.weather[0].description}</p>
                    </div>

                    <div className="weather-details">
                        <div className="humidity">
                            <FontAwesomeIcon icon={faWater} />
                            <div className="text">
                                <span>{weatherData.main.humidity}%</span>
                                <p>Độ ẩm</p>
                            </div>
                        </div>

                        <div className="wind">
                            <FontAwesomeIcon icon={faWind} />
                            <div className="text">
                                <span>{parseInt(weatherData.wind.speed)}Km/h</span>
                                <p>Tốc độ gió</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default WeatherWidget;
