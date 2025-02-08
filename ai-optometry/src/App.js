import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';   // Imported and used below
import LoginPage from './Login';  // Imported and used in the routes
import SignupPage from './Signup';
import HomePage from './Home';
import TestPage from './TestPage';
import AboutUs from './About';
import ContactUs from './ContactUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<HomePage />} /> {/* Changed this route */}
          <Route path="/home" element={<HomePage />} /> {/* Add this line */}
          <Route path="/test" element={<TestPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
