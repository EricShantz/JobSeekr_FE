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

// const Home = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     }
//   }, []);

//   const toggleSidebar = (e) => {
//     const isHamburgerMenuClicked = e.target.closest('.mobile-hamburger-menu');
//     if (isHamburgerMenuClicked) {
//       return; // Prevent toggling if the target is the hamburger menu
//     }
//     if(sidebarOpen){

//     }
//     setSidebarOpen(!sidebarOpen);

//   };

//   return (
//     <div className="home-page">
//       {windowWidth >= 600 && (
//         <div className="sidebar">
//           <Sidebar />
//         </div>
//       )}

//       <div className={`searchbar-mainContent-stack ${sidebarOpen ? 'sidebar-open' : ''}`}>
//         <div className="searchbar-hamburger-stack">
//           {windowWidth < 600 && (
//             <MenuIcon className="menu-icon" onClick={toggleSidebar}/>
//           )}
//           <div className="searchbar">
//             <Searchbar />
//           </div>
//         </div>

//         {/* Main Content */}
//         <Dashboard />
//       </div>

// {/*============== Hamburger Menu - Mobile =============*/}
//       {windowWidth < 600 && (
//         <div className={`hamburger-overlay`} onClick={toggleSidebar}>
//           <div
//             className={`mobile-hamburger-menu animate__animated ${
//               sidebarOpen
//                 ? 'animate__slideInLeft'
//                 : 'animate__slideOutLeft'
//             } animate__faster`}
//           >
//             <HamburgerMenu />
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }

// export default Home;

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
      <div>
        <div className={` ${sidebarOpen ? "overlay" : ''}` } onClick={toggleSideBar}/>
        <div className={`sidebar ${!sidebarOpen ? "sidebar-closed" : "sidebar-open"}`}>
          <HamburgerMenu />
        </div>
        <div className="mobile-header">
          <MenuIcon className="menu-icon" onClick={toggleSideBar} />
          <Searchbar />
        </div>
      </div>
    ) : (
      <div>{/* Desktop View */}</div>
    )}
  </div>
  
  )
}
export default Home;

