import React from 'react';

import './newsPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { articlesData } from './style';

const NewsPage = () => {
    return (
        <div className="news-page">
            <div className="container">
                <div className="section-heading1 text-center">
                    <h6 style={{ color: '#ff6600', fontWeight: 'bold' }}>| News</h6>
                    <h2>Latest News & Updates</h2>
                </div>
                <div className="row">
                    {articlesData.map((article, index) => (
                        <div className="col-12" key={index}>
                            <div className="article-item" style={{ cursor: 'pointer' }}  >
                                <img src={article.image} alt={article.title} className="article-image" />
                                <div className="article-content">
                                    <h3 className="article-title">{article.title}</h3>
                                    <p className="article-description">{article.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
