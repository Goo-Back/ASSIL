import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Offre from "./components/Offre"
import Contact from "./components/Contact"
import Epices from "./components/Epices"
import Home from "./components/Home"
import Page404 from "./components/Page404"
function App() {
  return (
    <BrowserRouter basename="/assil">
      <div>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/ASSIL" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Offre" element={<Offre />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Epices" element={<Epices />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App