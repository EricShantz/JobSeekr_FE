import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import tirangle_logo from "../Assets/triangle_logo.PNG"
import { ArrowBack } from '@mui/icons-material';
import "../Styles/signup-component.css"
import { registerUser } from "../API/userAPIs";

const SignupForm = ({toggleLoginForm}) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleBackClick = () => {
        toggleLoginForm()
    }

    const handleCreateAccount = async() => {
        if(firstName != "" && lastName != "" && email != "" && password != "" && confirmPassword != "" && password === confirmPassword){
            //if user with that email doesnt already exist in the db
            registerUser(firstName, lastName, email, password)
        } else {
            //display error
        }
    }

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
                        className="name-textfield"
                        id="outlined-required"
                        label="First Name"
                        onChange={(event)=>{setFirstName(event.target.value)}}

                    />
                    <TextField
                        className="name-textfield"
                        id="outlined-required"
                        label="Last Name"
                        onChange={(event)=>{setLastName(event.target.value)}}

                    />
                </div>

                <TextField
                    className="signup-textfield"
                    id="outlined-required"
                    label="Email"
                    onChange={(event)=>{setEmail(event.target.value)}}

                />

                <TextField
                    className="signup-textfield"
                    id="outlined-required"
                    label="Password"
                    type="password"
                    onChange={(event)=>{setPassword(event.target.value)}}
                />
                <TextField
                    className="signup-textfield"
                    id="outlined-required"
                    label="Confirm Password"
                    type="password"
                    onChange={(event)=>{setConfirmPassword(event.target.value)}}

                />

            <Button variant="contained" onClick={handleCreateAccount}>Create Account</Button>
            </div>
        </div>
    )
}

export default SignupForm;