import React, {useState} from "react";
import '../Styles/Login.css';
import PasswordResetForm from "../Components/forgot-password/password-reset-form";


const PasswordReset = () => {

    return (
        <div className="login-page">
            <div className="login-form-container">
            <PasswordResetForm />
            </div>
            <div className="login-image-container">
            </div>
        </div>
    )
}

export default PasswordReset;