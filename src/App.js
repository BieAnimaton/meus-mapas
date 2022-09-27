import "./style.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menu from "./Components/Menu/Menu";
import Footer from "./Components/Footer/Footer";
import Complexidade from "./Pages/Complexidade/Complexidade";
import Home from "./Pages/Home/Home";
import Banco from "./Pages/Banco/Banco";

function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/complexidade" element={<Complexidade />} />
          <Route path="/banco" element={<Banco />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
