import { Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from 'react';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// import OurJourney from "./pages/OurJourney";
// import Services from "./pages/Services";
// import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
import useProtect from "./hooks/useProtect";

const OurJourney = lazy(()=> import("./pages/OurJourney"))
const Services = lazy(()=> import("./pages/Services"))
const Gallery = lazy(()=> import("./pages/Gallery"))

function App() {  

  useProtect()
    const renderLazy = (Component) => (
    <Suspense fallback={<div className="spinner">Loading page...</div>}>
      {Component}
    </Suspense>
  );
  return (
    <>
      <div className="select-none">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/ourJourney" element={renderLazy(<OurJourney/>)}/>
          <Route path="/services" element={renderLazy(<Services/>)}/>
          <Route path="/gallery" element={renderLazy(<Gallery/>)}/>
          <Route path="*" element={renderLazy(<NotFound/>)}/>
      </Routes>
      <Footer/>
      </div>
    </>
  )
}

export default App
