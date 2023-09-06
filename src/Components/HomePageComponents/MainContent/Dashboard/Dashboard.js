import React, {useState} from "react";
import { ToastContainer } from 'react-toastify';
import DashboardHeader from "./DashboardHeader";
import DashboardOverview from "./DashboardOverview";
import DashboardBoard from "./DashboardBoard";
import DashboardList from "./DashboardList";
import NewJobModal from "./NewJobModal"
import { DisplayApplicationCreationSuccess, DisplayDataRetrievalError } from "../../../../Utils/ToastMessages";


const Dashboard = () => {
    const [activeComponent, setActiveComponent] = useState("Overview") //TODO: set this to context when it changes
    const [newJobModalActive, setNewJobModalActive] = useState(false)
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
          
          <NewJobModal isOpen={isModalOpen} closeModal={closeModal} newApplicationCreationSuccess={newApplicationCreationSuccess} DisplayDataRetrievalError={DisplayDataRetrievalError} />
          
          {newJobModalActive &&
          <div className="new-job-modal-overlay"></div>
          }

            <DashboardHeader onButtonPress={setContentComponent} showNewJobModal={showNewJobModal}/>

            {activeComponent === "Overview" && 
            <DashboardOverview/>
            }

            {activeComponent === "Board" && 
              <DashboardBoard/>
            }

            {activeComponent === "List" && 
              <DashboardList/>
            }
    <ToastContainer />
        </div>
    )
}

export default Dashboard