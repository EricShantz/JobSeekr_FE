import React, { useState, useEffect } from "react";
import { useUserContext } from '../../../../Utils/UserContext'
import "../../../../Styles/HomePageComponents/Dashboard/dashboard-list.css"

const DashboardList = () => {
  const { applicationList } = useUserContext();

  const tableRows = applicationList.map((item) => {
    return (
      <tr key={item.application_id}>
        <td>{item.company_name}</td>
        <td>{item.job_title}</td>
        <td>{item.compensation}</td>
        <td>{item.job_description}</td>
        <td>{item.application_status}</td>
        <td>{item.link_to_job_posting}</td>
        <td>{item.date_applied}</td>
        <td>{item.interview_date}</td>
        <td>{item.is_favourite}</td>
      </tr>
    );
  });

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Job Title</th>
            <th>Compensation</th>
            <th>Job Description</th>
            <th>Status</th>
            <th>Link to Job Posting</th>
            <th>Date Applied</th>
            <th>Interview Date</th>
            <th>Favourite</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default DashboardList;
