import React from 'react';

const Register = () => ({

    registerSubmit(){
        const email =  $("#email").val();
        const pw1 = $("#pw1").val();
        const pw2 = $("#pw2").val();
        const user = {email:email,password:pw1};
        if(pw1 == pw2){
            Accounts.createUser(user,function(err){
                if(!err){
                    FlowRouter.go("/");
                }else{
                    console.log(err)
                }
            });
        }else{
            alert("Your passwords do not match!");
        }
    },

    render() {

        if(Meteor.userId()){
            FlowRouter.go("/");
        }else{
            return (
                <div id="admin-page" className="aligner-c">

                    <div className="card">
                        <div className="card-block">
                            <div className="form-group">
                                <input type="text" className="form-control" id="email" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="pw1" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="pw2" placeholder="Confirm Password"/>
                            </div>
                            <div className="btn btn-lg btn-primary-outline btn-center" onClick={this.registerSubmit.bind(this)}>Register</div>
                        </div>
                    </div>
                </div>
            );
        }
    }
});

export default Register;
