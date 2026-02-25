import React, { useEffect } from 'react';
import './FunFacts.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const FunFacts = () => {
    useEffect(() => {
        const counters = document.querySelectorAll('.count-number');
        const speed = 200;

        counters.forEach(counter => {
            const animate = () => {
                const value = +counter.getAttribute('data-to');
                const data = +counter.innerText;
                const time = value / speed;
                if (data < value) {
                    counter.innerText = Math.ceil(data + time);
                    setTimeout(animate, 1);
                } else {
                    counter.innerText = value;
                }
            };

            animate();
        });
    }, []);

    return (
        <div className="fun-facts">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="wrapper">
                            <div className="row">
                                <div className="col-lg-4 d-flex justify-content-center">
                                    <div className="counter">
                                        <div className="decoration"></div>
                                        <h2 className="timer count-title count-number" data-to="34" data-speed="1000">0</h2>
                                        <p className="count-text">Buildings<br />Finished Now</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 d-flex justify-content-center">
                                    <div className="counter">
                                        <div className="decoration"></div>
                                        <h2 className="timer count-title count-number" data-to="12" data-speed="1000">0</h2>
                                        <p className="count-text">Years<br />Experience</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 d-flex justify-content-center">
                                    <div className="counter">
                                        <div className="decoration"></div>
                                        <h2 className="timer count-title count-number" data-to="24" data-speed="1000">0</h2>
                                        <p className="count-text">Awards<br />Won 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FunFacts;
