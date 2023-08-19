import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import tirangle_logo from "../Assets/triangle_logo.PNG"
import { ArrowBack } from '@mui/icons-material';
import "../Styles/signup-component.css"

const SignupForm = ({toggleLoginForm}) => {

    const handleBackClick = () => {
        toggleLoginForm()
    }

    return(
        <div>
            <div className="back-button" onClick={handleBackClick}>
                <ArrowBack className="back-icon"/>
                <p>Back</p>
            </div>

            <div className="signup-form">

                <div className="signup-logo">
                    <img src={tirangle_logo}/>
                    <p>JobSeekr</p>
                </div>

                <div className="signup-title">
                    <h2>Signup</h2>
                    <p>Please enter your information to create an account.</p>
                </div>

                <div className="name-field">
                    <TextField
                        className="name-textfield"
                        id="outlined-required"
                        label="First Name"
                    />
                    <TextField
                        className="name-textfield"
                        id="outlined-required"
                        label="Last Name"
                    />
                </div>

                <TextField
                    className="signup-textfield"
                    id="outlined-required"
                    label="Email"
                />

                <TextField
                    className="signup-textfield"
                    id="outlined-required"
                    label="Password"
                    type="password"
                />
                <TextField
                    className="signup-textfield"
                    id="outlined-required"
                    label="Confirm Password"
                    type="password"
                />

            <Button variant="contained">Create Account</Button>
            </div>
        </div>
    )
}

export default SignupForm;