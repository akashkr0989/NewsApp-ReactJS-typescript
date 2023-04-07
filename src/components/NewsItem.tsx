import React, { Component } from 'react';
import dummyImageUrl from '../assets/news.jpg'
// import PropTypes from 'prop-types'

interface NewsItemProps {
    title: string,
    description: string,
    imageUrl: string,
    newsUrl: string,
    author: string,
    date: string,
    source: string
}


export class NewsItem extends Component<NewsItemProps> {


    render() {

        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>{source}</span>
                    <img src={imageUrl || dummyImageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>

                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className="text-muted">By {author || 'Unknown'} on </small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More...</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
