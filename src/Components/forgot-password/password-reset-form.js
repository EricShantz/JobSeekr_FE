import React, {useState} from "react";
import { ArrowBack } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import tirangle_logo from "../../Assets/triangle_logo.PNG"
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';
import "../../Styles/forgot-password-component.css"


const PasswordResetForm = () => {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    const { resetToken } = useParams();

    const navigate = useNavigate()


    const handleBackClick = () => {
        navigate(`/`)
    }

    const handleReset = () => {
        if(formValidator()){
            try{
            // TODO: call api to change password in the db

            } catch (err){

            }
        }
    }

    const formValidator = () => {
        let isValid = true;
        if (password === "") {
            setPasswordError(true)
            isValid = false;
        }
        if (confirmPassword === "") {
            setConfirmPasswordError(true)
            isValid = false;
        }

        if (confirmPassword !== password) {
            setConfirmPasswordError(true)
            isValid = false;
        }
        return isValid
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
                <h2>Reset Password</h2>
                <p>Please enter your new password.</p>
            </div>
            <TextField
                    className={`forgot-password-textfield`}
                    type="password"
                    id="outlined-error"
                    label="New Password"
                    error={passwordError} // Set error state
                    helperText={passwordError ? 'Please input a password' : ''} 
                    FormHelperTextProps={{
                        style: { marginLeft: '0rem' }
                    }}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setPasswordError(false);
                    }}
                />
            <TextField
                    className={`forgot-password-textfield`}
                    type="password"
                    id="outlined-error"
                    label="Confirm Password"
                    error={confirmPasswordError} // Set error state
                    helperText={confirmPasswordError ? 'Please make sure your passwords match' : ''} // Optional error message
                    FormHelperTextProps={{
                        style: { marginLeft: '0rem' }
                    }}
                    onChange={(event) => {
                      setConfirmPassword(event.target.value);
                      setConfirmPasswordError(false);
                    }}
                />
                <Button variant="contained" onClick={handleReset}>Reset</Button>
                <ToastContainer />

        </div>
    )
}

export default PasswordResetForm;