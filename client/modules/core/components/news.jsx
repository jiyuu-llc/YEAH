import React from 'react';

const News = () => ({

    render() {
        return (
            <div id="news" className="yh-card">
                <div className="yh-title">
                    News
                </div>
                <br/>
                <div className="yh-content">
                     <div className="news-item">
                        <div className="card-block">
                           <p className="news-title">- Site is live - <span className="news-date"> July 23rd, 2016</span></p>
                           <p className="news-body">Today marks the official launch of the "Young Entrepreneur's of Harrisburg's" website.</p>
                        </div>
                     </div>
                </div>
            </div>
        );
    }
});

export default News;
