import React, {useState, useEffect} from "react";
import Searchbar from "../Components/HomePageComponents/Searchbar";
import Sidebar from "../Components/HomePageComponents/Sidebar";
import Dashboard from "../Components/HomePageComponents/MainContent/Dashboard"
import Interviews from "../Components/HomePageComponents/MainContent/Interviews"
import Settings from "../Components/HomePageComponents/MainContent/Settings"
import HamburgerMenu from "../Components/HomePageComponents/HamburgerMenu"
import MenuIcon from '@mui/icons-material/Menu';
import "../Styles/HomePageComponents/home-page.css"

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to track sidebar
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  })

  const toggleSidebar = () => {
    console.log("TOGGLING")
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="home-page">
      {windowWidth >= 600 ? (
        <div className="sidebar">
          <Sidebar />
        </div>
      ) : (
        <div className="hamburger-menu">
          <HamburgerMenu />
        </div>
      )}

      <div className={`searchbar-mainContent-stack`}>
        <div className="searchbar-hamburger-stack">
          {windowWidth < 600 && (
            <MenuIcon className="menu-icon" onClick={toggleSidebar}/>
          )}
          <div className="searchbar">
            <Searchbar />
          </div>
        </div>

        {/* Main Content */}
        <Dashboard />
      </div>
    </div>
  );
}


export default Home;


   
