import React from 'react';
import { Card, Image } from 'antd';
import './articleComponent.css';

const { Meta } = Card;

const ArticleComponent = ({ title, description, image }) => {
    return (
        <Card
            hoverable
            cover={<Image style={{ height: '250px' }} alt={title} src={image} />}
            className="article-card"
        >
            <Meta title={title} description={description} />
        </Card>
    );
};

export default ArticleComponent;
