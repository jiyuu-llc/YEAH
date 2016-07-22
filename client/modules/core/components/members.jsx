import React from 'react';

const Members = () => ({

    render() {
        return (
            <div id="home">
                <div className="yh-content">
                    <input className="form-control" placeholder="Search our members directory"/>
                    <div id="search-results">
                        <div className="head-contain">
                            <img height="120px" className="head-img img-circle" src="/images/profile.jpg"/>
                            <h6>Alec Wantoch</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Members;
