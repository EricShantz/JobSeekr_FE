import React, {useState} from "react";
import triangle_logo from "../../Assets/triangle_logo.PNG"
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useNavigate } from "react-router-dom";
import "../../Styles/HomePageComponents/sidebar.css"

const Sidebar = ({ onButtonPress }) => {
    const [dashboardActive, setDashboardActive] = useState(true)
    const [interviewsActive, setInterviewsActive] = useState(false)
    const [settingsActive, setSettingsActive] = useState(false)

    const navigate = useNavigate()


    const handleTabClick = (tabName) =>{
       toggleActiveTabs(tabName)
       onButtonPress(tabName)
    }

    const toggleActiveTabs = (tabName) =>{
        if(tabName === "Dashboard"){
            setDashboardActive(true)
            setInterviewsActive(false)
            setSettingsActive(false)
        } else if(tabName === "Interviews") {
            setDashboardActive(false)
            setInterviewsActive(true)
            setSettingsActive(false)
        } else if(tabName === "Settings"){
            setDashboardActive(false)
            setInterviewsActive(false)
            setSettingsActive(true)
        }else {
            setDashboardActive(false)
            setInterviewsActive(false)
            setSettingsActive(false)
        }
    }
    const logout = () =>{
        //logout
        navigate('/')
        localStorage.removeItem("JWT")
    }

    return(
        <div className="desktop-sidebar-position">
            <div className="title-div">
                <img src={triangle_logo} className="triangle-logo"/>
                <h3>JobSeekr</h3>
            </div>
            <div className="divider"/>
            <div className={`sidebar-button ${dashboardActive? "active-tab" : ""}`} onClick={()=>{handleTabClick("Dashboard")}}>
                <HomeOutlined sx={{marginTop:'0.8rem', marginRight:'0.7rem', transform:'scale(1.2)'}}/> 
                <p>Dashboard</p>
            </div>
            <div className="divider"/>
            <div className={`sidebar-button ${interviewsActive? "active-tab" : ""}`} onClick={()=>{handleTabClick("Interviews")}}>
                <CalendarTodayIcon sx={{marginTop:'0.8rem', marginRight:'1rem'}}/> 
                <p>Interviews</p>
            </div>
            <div className="divider"/>
            <div className="favourites-title"> Favourites</div>

            <div className="sidebar-footer">
                <div className="divider"/>
                <div className={`sidebar-button ${settingsActive? "active-tab" : ""}`} onClick={()=>{handleTabClick("Settings")}}>
                    <SettingsOutlinedIcon sx={{marginTop:'0.8rem', marginRight:'1rem'}}/> 
                    <p>Settings</p>
                </div>
                <div className="divider"/>
                <div className={`sidebar-button`} onClick={logout}>
                    <LogoutOutlinedIcon sx={{marginTop:'0.8rem', marginRight:'1rem'}}/> 
                    <p>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar