import React, {useState} from "react";
import '../Styles/Login.css';
import LoginForm from "../Components/login-form";
import SignupForm from "../Components/signup-form";
import ForgotPasswordForm from "../Components//forgot-password-form";


const Login = () => {
    const [showLoginForm, setShowLoginForm] = useState(true)
    const [showForgotPassword, setShowForgotPassword] = useState(false)

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
        setShowForgotPassword(false);
    }
    const toggleForgotPasswordForm = () => {
        setShowForgotPassword(!showForgotPassword);
        setShowLoginForm(!showLoginForm);
    }
    return (
        <div className="login-page">
            <div className="login-form-container">
                {showLoginForm ? (
                    <LoginForm toggleLoginForm={toggleLoginForm} toggleForgotPasswordForm={toggleForgotPasswordForm} />
                ) : null}

                {showForgotPassword ? (
                    <ForgotPasswordForm toggleForgotPasswordForm={toggleForgotPasswordForm}/>
                ) : null}

                {!showLoginForm && !showForgotPassword ? (
                    <SignupForm toggleLoginForm={toggleLoginForm} />
                ) : null}
            </div>
            <div className="login-image-container">
            </div>
        </div>
    )
}

export default Login;