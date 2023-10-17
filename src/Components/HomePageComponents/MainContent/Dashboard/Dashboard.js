import React, {useState} from "react";
import { ToastContainer } from 'react-toastify';
import DashboardHeader from "./DashboardHeader";
import DashboardOverview from "./DashboardOverview";
import DashboardBoard from "./DashboardBoard";
import DashboardList from "./DashboardList";
import NewJobModal from "./NewJobModal"
import { DisplayApplicationCreationSuccess, DisplayDataRetrievalError } from "../../../../Utils/ToastMessages";
import "../../../../Styles/HomePageComponents/Dashboard/dashboard.css"


const Dashboard = () => {
    const [activeComponent, setActiveComponent] = useState("Overview") //TODO: set this to context when it changes
    const [isModalOpen, setIsModalOpen] = useState(false)

    const setContentComponent = (tabName) => {
        setActiveComponent(tabName)
    }
    const showNewJobModal = () =>{
      openModal()
    }

    const openModal = () => {
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
  };

  const newApplicationCreationSuccess = () =>{
    DisplayApplicationCreationSuccess()
  }


    return(
        <div>
          <div>

          <NewJobModal 
          isOpen={isModalOpen} 
          closeModal={closeModal} 
          newApplicationCreationSuccess={newApplicationCreationSuccess} 
          DisplayDataRetrievalError={DisplayDataRetrievalError} 
          />

          <DashboardHeader onButtonPress={setContentComponent} showNewJobModal={showNewJobModal}/>
          </div>

          <div className="main-component">
            {activeComponent === "Overview" && 
            <DashboardOverview/>
            }
            {activeComponent === "Board" && 
              <DashboardBoard/>
            }
            {activeComponent === "List" && 
              <DashboardList />
            }
          </div>

    <ToastContainer />
        </div>
    )
}

export default Dashboard