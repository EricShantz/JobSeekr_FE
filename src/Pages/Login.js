import React, {useState} from "react";
import '../Styles/Login.css';
import LoginForm from "../Components/login-form";
import SignupForm from "../Components/signup-form";


const Login = () => {
    const [showLoginForm, setShowLoginForm] = useState(true)

    const toggleLoginForm = () => {
        setShowLoginForm(!showLoginForm);
    }
    return (
        <div className="login-page">
            <div className="login-form-container">
                {showLoginForm ? (
                <LoginForm toggleLoginForm= {toggleLoginForm}/>
                ) : (
                <SignupForm toggleLoginForm = {toggleLoginForm}/>
                )}
            </div>
            <div className="login-image-container">
            </div>
        </div>
    )
}

export default Login;