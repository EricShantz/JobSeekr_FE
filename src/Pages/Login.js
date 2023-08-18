import React from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import tirangle_logo from "../Assets/triangle_logo.PNG"

import '../Styles/Login.css';


const Login = () => {
    const navigate = useNavigate()
    return (
        <div className="login-page">
            <div className="login-form-container">
                <div className="login-form">
                    <div className="login-logo">
                        <img src={tirangle_logo}/>
                        <p>JobSeekr</p>
                    </div>
                    <div className="login-title">
                        <h2>Login</h2>
                        <p>Welcome Back, Enter your credentials to access your account.</p>
                    </div>
                    <TextField
                        className="login-textfield"
                        id="outlined-required"
                        label="Email"
                    />
                    <TextField
                        className="login-textfield"
                        id="outlined-required"
                        label="Password"
                        type="password"
                    />
                <a href="#" className="forgot-password">Forgot Password</a>
                <div className="keepCheckedIn">
                    <input type="checkbox"></input>
                    <p>Keep me signed in</p>
                </div>
                <Button variant="contained">Continue</Button>
            </div>
          </div>
            <div className="login-image-container">
            </div>
        </div>
    )
}

export default Login;