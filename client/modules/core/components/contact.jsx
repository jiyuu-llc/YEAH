import React from 'react';

const Contact = () => ({

    render() {
        return (
            <div id="contact" className="yh-card">
                <div className="yh-content">
                    <div className="row">
                        <div className="col-xs-12 col-sm-5">
                            <a href="tel:1-717-676-2553">Contact Us Directly</a>
                        </div>
                        <div className="col-xs-12 col-sm-2">
                            Or
                        </div>
                        <div className="col-xs-12 col-sm-5">
                            <a href="tel:1-717-676-2553">Become a Member</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Contact;
