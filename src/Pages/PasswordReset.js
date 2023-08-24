import React, {useState} from "react";
import '../Styles/Login.css';
import PasswordResetForm from "../Components/forgot-password/password-reset-form";
import PasswordResetSuccess from "../Components/forgot-password/password-reset-success";


const PasswordReset = () => {
    const [showPasswordResetForm, setShowPasswordResetForm] = useState(true)

    const togglePasswordResetForm = () => {
        setShowPasswordResetForm(!showPasswordResetForm)
    }

    return (
        <div className="login-page">
            <div className="login-form-container">
                {showPasswordResetForm ?
                    <PasswordResetForm togglePasswordResetForm={togglePasswordResetForm} />
                    :
                    <PasswordResetSuccess />
                }
            </div>
            <div className="login-image-container">
            </div>
        </div>
    )
}

export default PasswordReset;