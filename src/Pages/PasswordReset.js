import React, {useState} from "react";
import '../Styles/Login.css';
import ForgotPasswordForm from "../Components/forgot-password/forgot-password-form";


const PasswordReset = () => {

    return (
        <div className="login-page">
            <div className="login-form-container">
            <ForgotPasswordForm />
            </div>
            <div className="login-image-container">
            </div>
        </div>
    )
}

export default PasswordReset;