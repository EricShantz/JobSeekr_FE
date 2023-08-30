import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import tirangle_logo from "../../Assets/triangle_logo.PNG"
import { ArrowBack } from '@mui/icons-material';
import { registerUser } from "../../API/userAPIs";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { DisplaySigninError, DisplayEmailExistsError } from "../../Utils/ToastMessages";
import 'react-toastify/dist/ReactToastify.css';
import "../../Styles/LoginPageComponents/signup-component.css"


const SignupForm = ({toggleLoginForm}) => {
    const [firstName, setFirstName] = useState("")
    const [firstNameError, setFirstNameError] = useState(false)

    const [lastName, setLastName] = useState("")
    const [lastNameError, setLastNameError] = useState(false)

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState(false)

    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState(false)

    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)

    const navigate = useNavigate()

    const handleBackClick = () => {
        toggleLoginForm()
    }

    const handleCreateAccount = async() => {
        if(formValidator()){
            try{
                let response =  await registerUser(firstName, lastName, email, password)
                if(response.ok){
                    response = await response.json()
                    const user = {
                        user_id: response.user.user_id,
                        firstName: response.user.first_name,
                        lastName: response.user.last_name,
                        created_at: response.user.created_at,
                    }
                    navigate(`/home/${user.firstName}`)
                } else {
                    if(response.status === 409){ //set error to 409 on the backend if that email has been used
                        DisplayEmailExistsError()
                    } else {
                        DisplaySigninError();
                    }
                }
            } catch(err){
                DisplaySigninError();
            }
        }
    }

    const formValidator = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let isValid = true
      
        if (firstName === "") {
          setFirstNameError(true)
          isValid = false;
        }
      
        if (lastName === "") {
            setLastNameError(true)
            isValid = false;
        }
      
        if (!emailRegex.test(email)) {
            setEmailError(true)
            isValid = false;
        }
      
        if (password === "") {
            setPasswordError(true)
            isValid = false;
        }
      
        if (confirmPassword === "") {
            setConfirmPasswordError(true)
            isValid = false;
        }
      
        if (password !== confirmPassword) {
            setConfirmPasswordError(true)
            isValid = false;
        }
      
        return isValid;
      };
      

    return(
        <div>
            <div className="back-button" onClick={handleBackClick}>
                <ArrowBack className="back-icon"/>
                <p>Back</p>
            </div>

            <div className="signup-form">

                <div className="signup-logo">
                    <img src={tirangle_logo}/>
                    <p>JobSeekr</p>
                </div>

                <div className="signup-title">
                    <h2>Signup</h2>
                    <p>Please enter your information to create an account.</p>
                </div>

                <div className="name-field">
                <TextField
                    className={`name-textfield`}
                    id="outlined-error"
                    label="First Name"
                    error={firstNameError} // Set error state
                    helperText={firstNameError ? 'Please input a first name' : ''} // Optional error message
                    FormHelperTextProps={{
                        style: { marginLeft: '0rem' }
                    }}
                    onChange={(event) => {
                      setFirstName(event.target.value);
                      setFirstNameError(false);
                    }}
                />

                <TextField
                    className={`name-textfield`}
                    id="outlined-error"
                    label="Last Name"
                    error={lastNameError} // Set error state
                    helperText={lastNameError ? 'Please input a last name' : ''} // Optional error message
                    FormHelperTextProps={{
                        style: { marginLeft: '0rem' }
                    }}
                    onChange={(event) => {
                      setLastName(event.target.value);
                      setLastNameError(false);
                    }}
                />
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
                    helperText={passwordError ? 'Please input a password' : ''} // Optional error message
                    FormHelperTextProps={{
                        style: { marginLeft: '0rem' }
                    }}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      setPasswordError(false);
                    }}
                />
                <TextField
                    className={`signup-textfield`}
                    id="outlined-error"
                    label="Confirm Password"
                    type="password"
                    error={confirmPasswordError} // Set error state
                    helperText={confirmPasswordError ? 'Your passwords don\'t match.' : ''} // Optional error message
                    FormHelperTextProps={{
                        style: { marginLeft: '0rem' }
                    }}
                    onChange={(event) => {
                      setConfirmPassword(event.target.value);
                      setConfirmPasswordError(false);
                    }}
                />

            <Button variant="contained" onClick={handleCreateAccount}>Create Account</Button>
            </div>

            <ToastContainer />
        </div>
    )
}

export default SignupForm;