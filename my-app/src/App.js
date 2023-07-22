import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Home from "./components/Home"
import { HashRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <body> 
      <div className="text-gray-400 bg-gray-900 body-font">
      <HashRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route exact path='/'  element={<Home />} />
        <Route exact path='/About' element={<About/>} />
        <Route exact path='/Projects' element={<Projects/>} />
        <Route exact path='/Contact' element={<Contact/>} />
      </Routes>
    </HashRouter>
    </div>
    <div>

    </div>
    </body>
  );
}
