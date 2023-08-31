import React, {useState} from "react";
import Button from '@mui/material/Button';
import "../../../../Styles/HomePageComponents/Dashboard/dashboard-header.css"

const DashboardHeader = ({onButtonPress, showNewJobModal}) => {
    const [overviewActive, setOverviewActive] = useState(true)
    const [boardActive, setBoardActive] = useState(false)
    const [listActive, setListActive] = useState(false)

    const handleTabClick = (tabName) =>{
        toggleActiveTabs(tabName)
        onButtonPress(tabName)
     }

     const handleNewJobClick = () =>{
        showNewJobModal()
     }

    const toggleActiveTabs = (tabName) =>{
        if(tabName === "Overview"){
            setOverviewActive(true)
            setBoardActive(false)
            setListActive(false)
        } else if(tabName === "Board") {
            setOverviewActive(false)
            setBoardActive(true)
            setListActive(false)
        } else if(tabName === "List"){
            setOverviewActive(false)
            setBoardActive(false)
            setListActive(true)
        }else {
            setOverviewActive(false)
            setBoardActive(false)
            setListActive(false)
        }
    }

    return(
        <div className="dashboard-header-container">

            <div className={`dashboard-header-option ${overviewActive ? "active-dashboard-tab" : ""}`} onClick={()=>{handleTabClick("Overview")}}>
                <p>Overview</p>
            </div>

            <div className={`dashboard-header-option ${boardActive ? "active-dashboard-tab" : ""}`} onClick={()=>{handleTabClick("Board")}}>
                <p>Board</p>
            </div>

            <div className={`dashboard-header-option ${listActive ? "active-dashboard-tab" : ""}`} onClick={()=>{handleTabClick("List")}}>
                <p>List</p>
            </div>

            <div className="dashboard-header-button">
                <Button variant="contained" onClick={handleNewJobClick}>+ Job</Button>
            </div>

        </div>
    )
}

export default DashboardHeader