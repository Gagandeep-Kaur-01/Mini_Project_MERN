import React, {useState} from "react";
import "./login.css";

const Login = () => {

    const [ user, setUser] = useState({
        email: "abc@gmail.com",
        password: "",
    })

    const handleChange = e => {        
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    return(
        <div className="login">
            {console.log("--login page--", user)}
            <h1>Login</h1>
            <input type="text" name="email" value={user.Email} placeholder="Enter your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange}></input>
            <div className="button">Login</div>
            <div>or</div>
            <div className="button">Register</div>
        </div>
    )
}

export default Login;