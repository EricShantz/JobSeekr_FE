import React, {useState} from "react";
import '../Styles/Login.css';
import LoginForm from "../Components/login-form";
import SignupForm from "../Components/signup-form";
import ForgotPasswordForm from "../Components/forgot-password/forgot-password-form";
import PasswordLinkSent from "../Components/forgot-password/password-link-sent"


const Login = () => {
    const [showLoginForm, setShowLoginForm] = useState(true)
    const [showForgotPassword, setShowForgotPassword] = useState(false)
    const [showPasswordLinkSent, setShowPasswordLinkSent] = useState(false)
    const [showSignUpForm, setShowSignUpForm] = useState(false)

    const toggleLoginForm = () => {
        setShowLoginForm(true);
        setShowForgotPassword(false);
        setShowPasswordLinkSent(false)
        setShowSignUpForm(false)

    }
    const toggleForgotPasswordForm = () => {
        setShowForgotPassword(true);
        setShowLoginForm(false);
        setShowPasswordLinkSent(false)
        setShowSignUpForm(false)
    }

    const toggleShowPasswordLinkSent = () => {
        setShowForgotPassword(false);
        setShowLoginForm(false);
        setShowPasswordLinkSent(true)
        setShowSignUpForm(false)
    }

    const toggleShowSignupForm=()=>{
        setShowForgotPassword(false);
        setShowLoginForm(false);
        setShowPasswordLinkSent(false)
        setShowSignUpForm(true)
    }
    return (
        <div className="login-page">
            <div className="login-form-container">
                {showLoginForm ? ( // show login form
                    <LoginForm toggleLoginForm={toggleLoginForm} toggleForgotPasswordForm={toggleForgotPasswordForm} toggleShowSignupForm={toggleShowSignupForm} />
                ) : null}

                {showForgotPassword ? ( // show forgot password form
                    <ForgotPasswordForm toggleShowPasswordLinkSent={toggleShowPasswordLinkSent} toggleLoginForm={toggleLoginForm}/>
                ) : null}

                {!showLoginForm && !showForgotPassword && !showPasswordLinkSent && showSignUpForm ? ( // show signup form
                    <SignupForm toggleLoginForm={toggleLoginForm} />
                ) : null}

                {!showLoginForm && !showForgotPassword && !showSignUpForm && showPasswordLinkSent ? ( //show password reset email sent 
                    <PasswordLinkSent toggleLoginForm={toggleLoginForm}/>
                ) : null}
            </div>
            <div className="login-image-container">
            </div>
        </div>
    )
}

export default Login;