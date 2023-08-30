import React, {useState} from "react";
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import tirangle_logo from "../../Assets/triangle_logo.PNG"
import "../../Styles/LoginPageComponents/forgot-password-component.css"



const PasswordResetSuccess = () => {

    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate(`/`)
    }

    return(
        <div className="forgot-password-form">
            <div className="back-button" onClick={handleBackClick}>
                <ArrowBack className="back-icon"/>
                <p>Back</p>
            </div>

            <div className="forgot-password-logo">
                <img src={tirangle_logo}/>
                <p>JobSeekr</p>
            </div>
            <div className="forgot-password-title">
                <h2>Password Reset Successfully</h2>
                <p>You can now log into your account with your new password</p>
            </div>

        </div>
    )
}

export default PasswordResetSuccess;