import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Service from "./routes/Service";
import Footer from "./components/Footer";

import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/destination.css";
import "./styles/trip.css";
import "./styles/tripdata.css";
import "./styles/footer.css";
import "./styles/aboutus.css";
import "./styles/contactform.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
