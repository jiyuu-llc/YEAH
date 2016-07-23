import React from 'react';



const MobileMenu = () => ({


    menuClick(){
        $("#mobileMenu").toggle();
    },


    render() {
        return (
            <div id="mobileMenu" onClick={this.menuClick.bind(this)}>
                <div>
                    <a className="champagneBold" href="/">Home</a>
                </div>
                <div>
                    <a className="champagneBold" href="/news">News</a>
                </div>
                <div>
                    <a className="champagneBold" href="/mission">Our Mission</a>
                </div>
                <div>
                    <a className="champagneBold" href="/members">Members</a>
                </div>
                <div>
                    <a className="champagneBold" href="/contact">Contact Us</a>
                </div>
            </div>
        );
    }
});

export default MobileMenu;
