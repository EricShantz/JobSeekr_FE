import React, {useState} from "react";
import "../../../../Styles/HomePageComponents/Dashboard/dashboard-board.css"


const DashboardBoard = () => {
    return(
        <div className="dashboard-board-container">
            <div className="board-column">
                <h3>Applied</h3>
            </div>
            <div className="board-column">
                <h3>Interview</h3>
            </div>
            <div className="board-column">
                <h3>Job Offer</h3>
            </div>
            <div className="board-column">
                <h3>Rejected</h3>
            </div>

        </div>
    )
}

export default DashboardBoard