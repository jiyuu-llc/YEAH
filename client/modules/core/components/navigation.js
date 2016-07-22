import React from 'react';



const Navigation = () => ({


    missionClick(){
        FlowRouter.go("/mission");
    },

    homeClick(){
        FlowRouter.go("/");
    },

    facilitiesClick(){
        FlowRouter.go("/facilities");
    },

    membersClick(){
        FlowRouter.go("/members");
    },



    render() {
        return (
       <div id="nav-contain">
        <nav className="navbar navbar-yeah hidden-sm-down">
            <div className="navbar-toggler navButton" onClick={this.homeClick.bind(this)}>
                Home
            </div>
            <div className="navbar-toggler navButton" onClick={this.missionClick.bind(this)}>
                Our Mission
            </div>
            <div className="navbar-toggler navButton" onClick={this.facilitiesClick.bind(this)}>
                Facilities
            </div>
            <div className="navbar-toggler navButton" onClick={this.membersClick.bind(this)}>
                Members
            </div>
            <div className="navbar-toggler navButton" type="button">
                Join Us
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
