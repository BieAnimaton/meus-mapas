import "./style.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import Complexidade from "./Pages/Complexidade/Complexidade";
import Home from "./Pages/Home/Home";
import Banco from "./Pages/Banco/Banco";
import SO_II from "./Pages/SO_II/SO_II";
import Arquitetura from "./Pages/Arquitetura/Arquitetura";

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/complexidade" element={<Complexidade />} />
          <Route path="/banco" element={<Banco />} />
          <Route path="/so_ii" element={<SO_II />} />
          <Route path="/arquitetura" element={<Arquitetura />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
