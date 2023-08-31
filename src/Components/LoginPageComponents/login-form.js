import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import tirangle_logo from "../../Assets/triangle_logo.PNG"
import { ToastContainer } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { DisplayLoginError, DisplayLoginIncorrect, DisplaySomethingWentWrong} from "../../Utils/ToastMessages";
import { loginUser } from "../../API/userAPIs";
import { useUserContext } from '../../Utils/UserContext'
import "../../Styles/LoginPageComponents/login-component.css"



const LoginForm = ({toggleForgotPasswordForm, toggleShowSignupForm}) => {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const { user, setUser } = useUserContext();


    const navigate = useNavigate()

    const handleSignupClick = () => {
        toggleShowSignupForm()
    }

    const handleForgotPasswordClick = () => {
        toggleForgotPasswordForm()
    }

    const handleLogIn = async() => {
        if(formValidator()){
            try{
                let response = await loginUser(email, password)
                if(response.ok){
                    response = await response.json()

                    localStorage.setItem('JWT', response.token)


                    const user = {
                        user_id: response.user.user_id,
                        firstName: response.user.first_name,
                        lastName: response.user.last_name,
                        email: response.user.email,
                        created_at: response.user.created_at
                    }

                    setUser(user);
                    navigate(`/home/${user.firstName}`)
                } else {
                    if(response.status === 401){
                        DisplayLoginIncorrect()
                    } else {
                        DisplayLoginError()

                    }
                }

            }catch (err){
                DisplaySomethingWentWrong()
                console.error("Something went wrong",err)
            }
        }
    }

    const formValidator = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let isValid = true

        if (!emailRegex.test(email)) {
            setEmailError(true)
            isValid = false;
        }
      
        if (password === "") {
            setPasswordError(true)
            isValid = false;
        }

        return isValid
    }

    return (
        <div className="login-form">
            <div className="login-logo">
                <img src={tirangle_logo}/>
                <p>JobSeekr</p>
            </div>
            <div className="login-title">
                <h2>Login</h2>
                <p>Welcome to JobSeekr. Enter your credentials to access your account.</p>
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
            <TextField
                    className={`signup-textfield`}
                    id="outlined-error"
                    label="Password"
                    type="password"
                    error={passwordError} // Set error state
                    helperText={passwordError ? 'Please input your password' : ''} // Optional error message
                    FormHelperTextProps={{
                        style: { marginLeft: '0rem' }
                    }}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setPasswordError(false);
                    }}
                />
        <p className="forgot-password" onClick={handleForgotPasswordClick}>Forgot Password</p>
        <div className="keepCheckedIn">
            <input type="checkbox"></input>
            <p>Keep me signed in</p>
            {/* TODO: figure out how to use keep me signed in */}
            {/* TODO: figure out how not to log out on reload */}
        </div>
        <Button variant="contained" onClick={handleLogIn}>Continue</Button>
        <div className="sign-up">
            <p>Don't have an account?</p>
            <p className="sign-up-link" onClick={handleSignupClick}>Sign up here</p>
        </div>
        <ToastContainer />
        </div>
    )
}

export default LoginForm;