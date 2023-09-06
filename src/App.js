import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { UserProvider } from './Utils/UserContext';
import Login from './Pages/Login';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound'
import PasswordReset from './Pages/PasswordReset';
import {ProtectedRoutesLogin, ProtectedRoutesPasswordReset } from './Utils/ProtectedRoutes'
import '../src/Styles/App.css';

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route exact path="/" element={<Login />} />

          {/* Protected Home page */}
          <Route element={<ProtectedRoutesLogin />}>
            <Route path="/home/:firstName" element={<Home />} />
          </Route>

          {/* Protected Password Reset Page */}
          <Route element={<ProtectedRoutesPasswordReset />}>
            <Route path="/password-reset/:resetToken" element={<PasswordReset />} />
          </Route>

           {/* 404 */}
           <Route path="*" element={<NotFound />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}


export default App;


