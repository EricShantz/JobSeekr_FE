import React, {useState} from "react";
import { ArrowBack } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import tirangle_logo from "../Assets/triangle_logo.PNG"
import { ToastContainer } from 'react-toastify';
import { DisplayLoginError, DisplayLoginIncorrect} from "../Utils/ToastMessages";
import "../Styles/forgot-password-component.css"


const ForgotPasswordForm = ({toggleForgotPasswordForm}) => {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const handleBackClick = () => {
        toggleForgotPasswordForm()
    }

    const handleReset = () => {
        if(formValidator()){
            try{
            //TODO: 
                //Check if the email exists in the db
                //if no, return toast saying user doesnt exist
                //if yes, randly generate a password, hash it, and set it to the db
                //send the new password to them via email service
                //if successful, return toast saying their password has been reset and sent to email

            } catch (err){

            }
        }

    }

    const formValidator = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let isValid = true;
        if (!emailRegex.test(email)) {
            setEmailError(true)
            isValid = false;
        }
        return isValid
    }

    return(
        <div className="forgot-password-form">
            <div className="back-button" onClick={handleBackClick}>
                <ArrowBack className="back-icon"/>
                <p>Back</p>
            </div>

            <div className="login-logo">
                <img src={tirangle_logo}/>
                <p>JobSeekr</p>
            </div>
            <div className="login-title">
                <h2>Forgot Password</h2>
                <p>Please enter your email address so we can reset your password.</p>
            </div>
            <TextField
                    className={`signup-textfield`}
                    id="outlined-error"
                    label="Email"
                    error={emailError} // Set error state
                    helperText={emailError ? 'Please input a valid email address' : ''} // Optional error message
                    FormHelperTextProps={{
                        style: { marginLeft: '0rem' }
                    }}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      setEmailError(false);
                    }}
                />
                <Button variant="contained" onClick={handleReset}>Reset</Button>
        </div>
    )
}

export default ForgotPasswordForm;