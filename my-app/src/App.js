import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Home from "./components/Home";
import CaseStudies from "./components/CaseStudies";
import CaseStudyTemplate from "./components/CaseStudyTemplate";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Decisions from "./components/Decisions";

export default function App() {
  return (
    <body>
      <div className="text-gray-400 bg-gray-900 body-font">
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<CaseStudies/>} />
            <Route path="/work/:slug" element={<CaseStudyTemplate />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/decisions" element={<Decisions />} />
            <Route path="/decisions/:slug" element={<Decisions />} />
            <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    </body>
  );
}
