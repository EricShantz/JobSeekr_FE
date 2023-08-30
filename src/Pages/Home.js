import React, { useState, useEffect } from "react";
import Searchbar from "../Components/HomePageComponents/Searchbar";
import Sidebar from "../Components/HomePageComponents/Sidebar";
import Dashboard from "../Components/HomePageComponents/MainContent/Dashboard"
import Interviews from "../Components/HomePageComponents/MainContent/Interviews"
import Settings from "../Components/HomePageComponents/MainContent/Settings"
import HamburgerMenu from "../Components/HomePageComponents/HamburgerMenu"
import MenuIcon from '@mui/icons-material/Menu';
import 'animate.css';
import "../Styles/HomePageComponents/home-page.css"

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
  
  return (
    <div>
    {windowWidth <= 600 ? (
      <div> {/* =========== Mobile View =========== */}
        <div className={` ${sidebarOpen ? "overlay" : ''}` } onClick={toggleSideBar}/>
        <div className={`mobile-sidebar ${!sidebarOpen ? "sidebar-closed" : "sidebar-open"}`}>
          <HamburgerMenu />
        </div>
        <div className="mobile-header">
          <MenuIcon className="menu-icon" onClick={toggleSideBar} />
          <Searchbar />
        </div>
      </div>
    ) : (
      <div className="home-page">{/* =========== Desktop View =========== */}
        
        <div className="desktop-sidebar">
           <Sidebar />
         </div>

         <div className={`searchbar-mainContent-stack`}>
           <div className="searchbar">
             <Searchbar />
           </div>
           <div>
            {/* Main Content */}
            </div>
         </div>


      </div>
    )}
  </div>
  
  )
}
export default Home;

