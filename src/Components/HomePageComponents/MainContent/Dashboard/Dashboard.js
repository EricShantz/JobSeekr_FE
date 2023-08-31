import React, {useState} from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardOverview from "./DashboardOverview";
import DashboardBoard from "./DashboardBoard";
import DashboardList from "./DashboardList";
import NewJobModal from "./NewJobModal"

const Dashboard = () => {
    const [activeComponent, setActiveComponent] = useState("Overview")
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

    return(
        <div>
          
          <NewJobModal isOpen={isModalOpen} closeModal={closeModal} />
          
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

        </div>
    )
}

export default Dashboard