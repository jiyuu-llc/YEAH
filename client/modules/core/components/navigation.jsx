import React from 'react';

const Navigation = ({navItems}) => ({

    changeRoute(name){
      FlowRouter.go(name);
    },

    renderNav() {
      var nav = [
                {
                        "name" : "Home",
                        "route" : "home",
                        "order" : 0
                },
                {
                        "name" : "News",
                        "route" : "news",
                        "order" : 1
                },
                {
                        "name" : "Our Mission",
                        "route" : "mission",
                        "order" : 2
                },
                {
                        "name" : "Members",
                        "route" : "members",
                        "order" : 3
                },
                {
                        "name" : "Contact Us",
                        "route" : "contact",
                        "order" : 4
                }
        ];
        return nav.map((page)=>(
            <div className="navbar-toggler navButton" key={page.order} onClick={this.changeRoute.bind(this, page.route)}>
              {page.name}
            </div>
        ))
    },

    render() {
        return (
           <div id="nav-contain">
            <nav className="navbar navbar-yeah hidden-sm-down">
              {this.renderNav()}
            </nav>
               <div id="menuToggle" className="hidden-md-up navbar-toggler navButton" type="button"data-toggle="collapse" data-target="#exCollapsingNavbar">
                   <i className="fa fa-bars" aria-hidden="true"/>
               </div>
            </div>
        );
    }
});

export default Navigation;
