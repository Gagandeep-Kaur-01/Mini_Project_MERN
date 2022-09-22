import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../actions"
import { useNavigate } from 'react-router-dom';
import { history1 } from '../../helpers/history.js';

import { createBrowserHistory } from 'history';


import "./register.css";



const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const history = createBrowserHistory();
    
    const [ user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {        
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleRegister = () => {
        const { name, email, password, reEnterPassword } = user;
        
        //validation
        if(name && email && password && (password === reEnterPassword)) {
            dispatch(actions.registerNewUser(user, () => {
                navigate('/login')
            })) 
        } else {
            alert("---Invalid Input----")
        }        
    }

    return(
        <div className="register">
            <h1>
                Register
            </h1>
            <input 
                type="text" 
                name="name" 
                value={user.name} 
                placeholder="Your Name" 
                onChange = {handleChange}>
            </input>
            <input type="text" 
                name="email" 
                value={user.email} 
                placeholder="Your Email" 
                onChange = {handleChange}>
            </input>
            <input 
                type="password" 
                name="password" 
                value={user.password} 
                placeholder="Your Password" 
                onChange = {handleChange}>       
            </input>
            <input 
                type="password" 
                name="reEnterPassword" 
                value={user.reEnterPassword} 
                placeholder="Re-enter Password" 
                onChange = {handleChange}>
            </input>
            <div 
                className="button" 
                onClick= {handleRegister}>
                    Register
            </div>
            <div>
                or
            </div>
            <div 
                className="button"
                onClick={() => navigate('/login')}
                // onClick = {() => {history.push("/login")}}
                >
                    Login
            </div>
        </div>
    )
}

export default Register;