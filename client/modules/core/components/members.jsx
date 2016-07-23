import React from 'react';

const Members = () => ({

    render() {
        return (
            <div id="members" className="yh-card">
                <div className="yh-content">
                    <input id="searchBar" className="form-control" placeholder="Search our members directory"/>
                    <div className="member-contain">
                        <img height="130px" className="head-img" src="http://zephyr.pairsite.com/HCP/wp-content/uploads/2013/09/Harrell_test_1.jpg"/>
                        <div className="member-name">Edgar C. Harrell</div>
                        <a className="email" href="mailto://eharrell47@comcast.net">eharrell47@comcast.net</a>
                    </div>
                    <div className="member-contain">
                        <img height="130px" className="head-img" src="/images/profile.jpg"/>
                        <div className="member-name">Alec Wantoch</div>
                        <a className="email"  href="mailto://alec@wantoch.net">alec@wantoch.net</a>
                    </div>
                    <div className="member-contain">
                        <img height="130px" className="head-img" src="https://jiyuuu.s3.amazonaws.com/zEHCCEdgc3weLcuQu/BCuz8bHW3cuGzn3uHnP4mgq2WDen6frj"/>
                        <div className="member-name">Zachary Pelkey</div>
                        <a className="email" href="mailto://zpelkey@gmail.com">zpelkey@gmail.com</a>
                    </div>
                </div>
            </div>
        );
    }
});

export default Members;
