import React from 'react';

const Login = () => ({

    render() {
        return (
            <div id="login">
                <input id="email" placeholder="Email" className="form-control"/>
                <br/>
                <input id="password" type="password" placeholder="Password" className="form-control"/>
                <br/>
                <button className="btn btn-primary-outline btn-center">Login</button>
            </div>
        );
    }
});

export default Login;
