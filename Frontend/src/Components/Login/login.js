import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions"
import "./login.css";
import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login = (props) => {        

    const {setLoginUser} = props

    const {userDetail} = useSelector((state) => ({        
        userDetail: state?.user?.userDetail
    }))
    
    const dispatch = useDispatch();
    // const history = useHistory();
    const navigate = useNavigate();

    const [ user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleChange = e => {        
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleLogin = () => {
        const { email, password } = user;
        dispatch(actions.LoginUser(user, () => {
            setLoginUser(userDetail);
            navigate('/'); 
        }));
    }

    return(
        <div className="login">
            <h1>Login</h1>
            <input 
                type="text" 
                name="email" 
                value={user.email} 
                placeholder="Enter your Email" 
                onChange={handleChange}>                    
            </input>
            <input 
                type="password" 
                name="password" 
                value={user.password} 
                placeholder="Enter your Password" 
                onChange={handleChange}>                    
            </input>
            {/* <div className="button"
                onClick = {handleLogin}>
                Login
            </div> */}
            <Button
                type="primary" 
                onClick = {() => handleLogin()}
            >
                Login
            </Button> 
            <ToastContainer />   
            <div> 
                or
            </div>
            <div 
                className="button"
                onClick={() => navigate('/register')}>
                Register
            </div>
        </div>
    )
}

export default Login;