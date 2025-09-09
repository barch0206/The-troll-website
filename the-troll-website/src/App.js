import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Home2 from "./Home2";
import SpecialOffer from "./SpecialOffer";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/special-offer" element={<SpecialOffer />} />
      </Routes>
    </Router>
  );
}

export default App;
