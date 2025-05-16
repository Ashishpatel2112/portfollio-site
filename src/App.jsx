import React, { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

const App = () => {
  const [hideLoader, setHideLoader] = useState(true);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    
    const timer1 = setTimeout(() => setHideLoader(true), 3000); 
    const timer2 = setTimeout(() => setShowContent(true), 3500); 

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      {!showContent && <Loader hide={hideLoader} />}

      {showContent && (
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
       </Routes>
       </BrowserRouter>
      )}
    </>
  );
};

export default App;


// import React from 'react'
// import Ball from './Components/Ball'

// const App = () => {
//   return (
//     <>
//     <Ball/>
//     </>
//   )
// }

// export default App
