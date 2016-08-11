import React from 'react';

const Login = () => ({

    loginClick(){
        const email = $("#email").val();
        const pw = $("#pw").val();
        Meteor.loginWithPassword(email, pw, function(err) {
            FlowRouter.go("/");
        });
    },

    render() {
        return (
            <div id="login">
                <input id="email" placeholder="Email" className="form-control"/>
                <br/>
                <input id="pw" type="password" placeholder="Password" className="form-control"/>
                <br/>
                <button onClick={this.loginClick.bind(this)} className="btn btn-primary-outline btn-center">Login</button>
            </div>
        );
    }
});

export default Login;
