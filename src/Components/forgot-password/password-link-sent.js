import React, {useState} from "react";
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import tirangle_logo from "../../Assets/triangle_logo.PNG"
import "../../Styles/forgot-password-component.css"


const PasswordLinkSent = ({toggleLoginForm}) => {


    const handleBackClick = () => {
        toggleLoginForm()
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
                <h2>Password Reset Sent</h2>
                <p>An link to reset your password has been sent to your email.</p>
                <p>If you don't see it, please check your spam folder.</p>
            </div>

            {/* TODO: add check mark image */}
        </div>
    )
}

export default PasswordLinkSent;