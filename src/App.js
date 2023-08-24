import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './Utils/UserContext'; // Import the UserProvider
import Login from './Pages/Login';
import Home from './Pages/Home';
import PasswordReset from './Pages/PasswordReset';
import '../src/Styles/App.css';

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home/:firstName" element={<Home />} />
          <Route path="/password-reset/:resetToken" element={<PasswordReset />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}


export default App;
