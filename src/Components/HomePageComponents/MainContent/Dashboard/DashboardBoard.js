import React, {useState} from "react";
import "../../../../Styles/HomePageComponents/Dashboard/dashboard-board.css"


const DashboardBoard = () => {
    return(
        <div className="dashboard-board-container">
            <div className="board-column">
                <h4>Applied</h4>
            </div>
            <div className="board-column">
                <h4>Interview</h4>
            </div>
            <div className="board-column">
                <h4>Job Offer</h4>
            </div>
            <div className="board-column">
                <h4>Rejected</h4>
            </div>

        </div>
    )
}

export default DashboardBoard