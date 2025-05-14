import React, { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

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
       </Routes>
       </BrowserRouter>
      )}
    </>
  );
};

export default App;
