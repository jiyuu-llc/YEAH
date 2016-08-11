import React from 'react';

const Admin = () => ({

    publishClick(){

    },

    toggleEditClick(){
        console.log("Clicked!");
        localStorage.setItem("editor", true);
        console.log(localStorage.getItem("editor"));
    },

    clickLogout(){
        Meteor.logout(function(){
            FlowRouter.go("/");
        });
    },
    
    render() {

        if(Meteor.userId()){
            return (
                <div id="admin-page" className="aligner-c">

                    <div id="admin-sidebar">
                        <div className="sidebar-item">
                            Publish
                        </div>
                        <div onClick={this.toggleEditClick.bind(this)} className="sidebar-item">
                            Toggle Editor
                        </div>
                        <div className="sidebar-item">
                            Test
                        </div>
                        <div className="sidebar-item">
                            Test
                        </div>
                        <div className="sidebar-item">
                            Test
                        </div>
                        <div className="sidebar-item">
                            Test
                        </div>
                        <div className="sidebar-item">
                            Test
                        </div>
                        <div onClick={this.clickLogout.bind(this)} className="sidebar-item">
                            Logout
                        </div>
                    </div>

                    <div className="card">
                        <div id="site-builder" className="card-block">
                            <iframe width="100%" height="100%" src="http://yeah-hbg.com"/>
                        </div>
                    </div>

                </div>
            );
        }else{
            return false;
        }
    }
});

export default Admin;
