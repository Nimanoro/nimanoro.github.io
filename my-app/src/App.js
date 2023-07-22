import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Home from "./components/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <body> 
      <div className="text-gray-400 bg-gray-900 body-font">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/About' element={<About/>} />
        <Route path='/Projects' element={<Projects/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </Router>
    </div>
    <div>

    </div>
    </body>
  );
}
