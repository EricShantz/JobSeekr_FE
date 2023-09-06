import React from "react";
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

import tirangle_logo from "../Assets/triangle_logo.PNG"
import "../Styles/not-found.css"


const NotFound = () => {

    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate(`/`)
    }

    return (
        <div className="not-found-page">
            <div className="not-found-form-container">
            <div className="back-button" onClick={handleBackClick}>
                <ArrowBack className="back-icon"/>
                <p>Back</p>
            </div>

        <div className="not-found-form">        
            <div className="not-found-logo">
                <img src={tirangle_logo}/>
                <p>JobSeekr</p>
            </div>
            <div className="not-found-title">
                <h2>404. Page not found</h2>
                <p>Whoops! Looks like you're trying to access a page that doesn't exist.</p>
            </div>
        </div>

            </div>
            <div className="not-found-image-container">
            </div>
        </div>
    )
}

export default NotFound;