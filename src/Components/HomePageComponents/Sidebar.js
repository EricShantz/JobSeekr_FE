import React, {useState} from "react";
import "../../Styles/HomePageComponents/sidebar.css"
import triangle_logo from "../../Assets/triangle_logo.PNG"

const Sidebar = () => {
    return(
        <div>
            <div className="title-div">
                <img src={triangle_logo} className="triangle-logo"/>
                <h3>JobSeekr</h3>
            </div>
            <div className="dashboard-button"></div>
            <div className="interviews-button"></div>
            <div className="favourites-div"></div>
        </div>
    )
}

export default Sidebar