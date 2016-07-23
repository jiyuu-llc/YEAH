import React from 'react';



const Navigation = () => ({


    missionClick(){
        FlowRouter.go("/mission");
    },

    homeClick(){
        FlowRouter.go("/");
    },

    newsClick(){
        FlowRouter.go("/news");
    },

    membersClick(){
        FlowRouter.go("/members");
    },

    contactClick(){
        FlowRouter.go("/contact");
    },

    render() {
        return (
       <div id="nav-contain">
        <nav className="navbar navbar-yeah hidden-sm-down">
            <div className="navbar-toggler navButton" onClick={this.homeClick.bind(this)}>
                Home
            </div>
            <div className="navbar-toggler navButton" onClick={this.newsClick.bind(this)}>
                News
            </div>
            <div className="navbar-toggler navButton" onClick={this.missionClick.bind(this)}>
                Our Mission
            </div>
            <div className="navbar-toggler navButton" onClick={this.membersClick.bind(this)}>
                Members
            </div>
            <div className="navbar-toggler navButton" onClick={this.contactClick.bind(this)}>
                Contact Us
            </div>
        </nav>
           <div id="menuToggle" className="hidden-md-up navbar-toggler navButton" type="button"data-toggle="collapse" data-target="#exCollapsingNavbar">
               <i className="fa fa-bars" aria-hidden="true"/>
           </div>
    </div>
        );
    }
});

export default Navigation;
