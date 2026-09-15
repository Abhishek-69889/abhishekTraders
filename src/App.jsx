import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import OurJourney from "./pages/OurJourney";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import useProtect from "./hooks/useProtect";

function App() {  

  useProtect()

  return (
    <>
      <div className="select-none">

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ourJourney" element={<OurJourney/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
      </div>
    </>
  )
}

export default App
