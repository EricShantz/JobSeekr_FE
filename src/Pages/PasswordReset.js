import React, {useState} from "react";
import PasswordResetForm from "../Components/LoginPageComponents/password-reset-form";
import PasswordResetSuccess from "../Components/LoginPageComponents/password-reset-success";
import "../Styles/LoginPageComponents/Login.css"


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