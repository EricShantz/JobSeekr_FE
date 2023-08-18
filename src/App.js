import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import '../src/Styles/App.css';

function App() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/Home" element={<Home/>} />
        </Routes>
      </Router>
    );  
}

export default App;
