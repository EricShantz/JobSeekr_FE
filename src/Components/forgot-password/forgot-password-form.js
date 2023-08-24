import React, {useState} from "react";
import { ArrowBack } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import tirangle_logo from "../../Assets/triangle_logo.PNG"
import { ToastContainer } from 'react-toastify';
import { DisplayNoEmailExists, DisplaySomethingWentWrong } from "../../Utils/ToastMessages";
import "../../Styles/forgot-password-component.css"
import { forgotPassword } from "../../API/userAPIs";

const ForgotPasswordForm = ({toggleShowPasswordLinkSent, toggleLoginForm}) => {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const handleBackClick = () => {
        toggleLoginForm()
    }

    const handleReset = async() => {
        if(formValidator()){
            try{           
                const response = await forgotPassword(email)
                console.log("Response",response)
                if(response.ok){
                    toggleShowPasswordLinkSent()
                } else {
                    if(response.status === 401){
                        DisplayNoEmailExists()
                    } else {
                        DisplaySomethingWentWrong()
                    }
                }
            } catch (err){
                //TODO: handle errors
                console.error("Something went wrong", err)
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
                <ToastContainer />
        </div>
    )
}

export default ForgotPasswordForm;