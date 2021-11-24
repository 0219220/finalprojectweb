import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import '../App.css';
import {
    Link,
} from 'react-router-dom';

function SignIn() {
    return <div >
        <body >
            <div class="row">
                <div class="col-sm-3 col-md-3 col-lg-3"></div>
                <div class="col-sm-6 col-md-6 col-lg-6">
                    <div className={"borderr"}>
                        <form>
                            <div className="form-group">
                            <h1 className='title'>Welcome to GDL2Europe!!!</h1>
                                <label for="exampleInputEmail1" className='subtitle'>Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1" className='subtitle'>Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" style={{marginBottom:'20px'}}></input>

                                <Link to='/Mainpage'>   <button type="submit" class="btn btn-light btn-lg" id="signinbutton">Sign In</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-sm-3 col-md-3 col-lg-3"></div>
            </div>
        </body>
    </div>;
}


export default SignIn;
/*

function SignIn(){
    return(
        <h1>wefjhwbe page</h1>
    );
}

export default SignIn;




*/