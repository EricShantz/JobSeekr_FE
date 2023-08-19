import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import tirangle_logo from "../Assets/triangle_logo.PNG"
import "../Styles/login-component.css"

const LoginForm = ({toggleLoginForm}) => {

    const handleSignupClick = () => {
        toggleLoginForm()
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
                className="login-textfield"
                id="outlined-required"
                label="Email"
            />
            <TextField
                className="login-textfield"
                id="outlined-required"
                label="Password"
                type="password"
            />
        <a href="#" className="forgot-password">Forgot Password</a>
        <div className="keepCheckedIn">
            <input type="checkbox"></input>
            <p>Keep me signed in</p>
        </div>
        <Button variant="contained">Continue</Button>
        <div className="sign-up">
            <p>Don't have an account?</p>
            <p className="sign-up-link" onClick={handleSignupClick}>Sign up here</p>
        </div>
        </div>
    )
}

export default LoginForm;