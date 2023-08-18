import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h3>Login Page</h3>
            <button onClick={()=>navigate("/Home")}>Login</button>
        </div>
    )
}

export default Login;