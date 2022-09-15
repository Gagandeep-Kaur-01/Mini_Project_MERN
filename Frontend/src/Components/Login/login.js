import React from "react";
import "./login.css";

const Login = () => {
    return(
        <div className="login">
            <h1>Login</h1>
            <input type="text" placeholder="Enter your Email"></input>
            <input type="password" placeholder="Enter your Password"></input>
            <div className="button">Login</div>
            <div>or</div>
            <div className="button">Register</div>
        </div>
    )
}

export default Login;