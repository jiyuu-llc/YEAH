import React from 'react';

const Members = () => ({

    render() {
        return (
            <div id="members" className="yh-card">
                <div className="yh-content">
                    <input className="form-control" placeholder="Search our members directory"/>
                    <div className="member-contain">
                        <img height="120px" className="head-img" src="http://zephyr.pairsite.com/HCP/wp-content/uploads/2013/09/Harrell_test_1.jpg"/>
                        <div className="member-name">Edgar C. Harrell</div>
                        <p className="member-bio">I am Alec Wantoch</p>
                    </div>
                    <div className="member-contain">
                        <img height="120px" className="head-img" src="/images/profile.jpg"/>
                        <p className="member-name">Alec Wantoch</p>
                        <p className="member-bio">I am Alec Wantoch</p>
                    </div>
                    <div className="member-contain">
                        <img height="120px" className="head-img" src="https://jiyuuu.s3.amazonaws.com/zEHCCEdgc3weLcuQu/BCuz8bHW3cuGzn3uHnP4mgq2WDen6frj"/>
                        <p className="member-name">Zachary Pelkey</p>
                        <p className="member-bio">I am Zachary Pelkey</p>
                    </div>
                </div>
            </div>
        );
    }
});

export default Members;
