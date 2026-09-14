import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import OurJourney from "./pages/OurJourney";

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ourJourney" element={<OurJourney/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
