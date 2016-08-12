import React from 'react';

const editorState = (state) => {

  if (state) {
    return "editor";
  } else {
    return "site";
  }
}

const menuClick = () => {
  $("#mobileMenu").toggle();
}

const changeRoute = (name) => {
  FlowRouter.go(name);
}

const renderNav = () => {
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
        <div className="navbar-toggler navButton" key={page.order} onClick={changeRoute.bind(this, page.route)}>
          {page.name}
        </div>
    ))
}

const Navigation = ({state}) => (

     <div id="nav-contain">
      <nav className="navbar navbar-yeah hidden-sm-down">
        {renderNav()}
      </nav>
         <div id="menuToggle" className="hidden-md-up navbar-toggler navButton" onClick={menuClick.bind(this)}>
             <i className="fa fa-bars" aria-hidden="true"/>
         </div>
      </div>

);

export default Navigation;
