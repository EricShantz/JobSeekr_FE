import React, { useState, useEffect } from "react";
import Searchbar from "../Components/HomePageComponents/Searchbar";
import Sidebar from "../Components/HomePageComponents/Sidebar";
import Dashboard from "../Components/HomePageComponents/MainContent/Dashboard/Dashboard"
import Interviews from "../Components/HomePageComponents/MainContent/Interviews"
import Settings from "../Components/HomePageComponents/MainContent/Settings"
import MenuIcon from '@mui/icons-material/Menu';
import UserIcon from "../Components/HomePageComponents/UserIcon"
import 'animate.css';
import "../Styles/HomePageComponents/home-page.css"

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMainContentComponent, setActiveMainContentComponent] = useState("Dashboard")

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }, []);

    const toggleSideBar = () => {
      setSidebarOpen(!sidebarOpen)
    }

    const setMainContentComponent = (tabName)=>{
      setActiveMainContentComponent(tabName)
    }
  
  return (
    <div>
    {windowWidth <= 600 ? (
      <div> {/* ========= Mobile View ========= */}
        <div className={` ${sidebarOpen ? "overlay" : ''}` } onClick={toggleSideBar}/> {/*overlay when menu open */}
        <div className={`mobile-sidebar ${!sidebarOpen ? "sidebar-closed" : "sidebar-open"}`}> {/*slie out menu */}
         <Sidebar onButtonPress={setMainContentComponent}/>
        </div>
        <div className="mobile-header">
          <MenuIcon className="menu-icon" onClick={toggleSideBar} />
          <Searchbar />
        </div>

        <div>{/*===== Main Content====== */}
          {activeMainContentComponent === "Dashboard" && 
            <Dashboard/>
          }
          {activeMainContentComponent === "Interviews" && 
            <Interviews/>
          }
          {activeMainContentComponent === "Settings" && 
            <Settings/>
          }
        </div>
        
      </div>
    ) : (
      <div className="home-page">{/* ======= Desktop View ======= */}
        
        <div className="desktop-sidebar">
           <Sidebar onButtonPress={setMainContentComponent}/>
         </div>

         <div className={`searchbar-mainContent-stack`}>
          <div className="searchbar">
            <Searchbar />
          </div>
          <div className="userIcon">
            <UserIcon />
          </div>

          <div>{/*===== Main Content====== */}
          {activeMainContentComponent === "Dashboard" && 
            <Dashboard/>
          }
          {activeMainContentComponent === "Interviews" && 
            <Interviews/>
          }
          {activeMainContentComponent === "Settings" && 
            <Settings/>
          }

          </div>
        </div>
      </div>
    )}
  </div>
  
  )
}
export default Home;

