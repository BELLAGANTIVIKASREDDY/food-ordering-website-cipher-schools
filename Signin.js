import React from "react";
import {Link} from 'react-router-dom';
import Nav from "./Nav";
import './Hi.css';
function Signin(){
    return(
        <div className="signin">
            <h1 id="h1">Sign In</h1><br></br>
            <input type="email" placeholder="Enter your email" id="email"></input><br></br>
            <br></br>
            <input type="password" placeholder="Enter your password" id="password"></input><br></br>
            <br></br>
            <Link to="/nav"><button id="btn1">Sign In</button><br></br></Link>
            <br></br>
            <button id="btn2">Login as guest user</button><br></br>
            <br></br>
            <h3 id="h3">New to MovieApp? SignUp Now</h3>
        </div>
    );
}
export default Signin;