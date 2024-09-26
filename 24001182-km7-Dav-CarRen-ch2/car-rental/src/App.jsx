// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import WhyUs from "./components/WhyUs";
import Navbar from "./components/Navbar";
import PesanMobil from "./components/PesanMobil";
import Carimobil from "./pages/CariMobil/index"; // Pastikan ini benar

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <div id="ourservices">
                  <Services />
                </div>
                <div id="whyus">
                  <WhyUs />
                </div>
                <div id="testimonial">
                  <Testimonial />
                </div>
                <div id="pesanmobil">
                  <PesanMobil />
                </div>
                <div id="faq">
                  <FAQSection />
                </div>
                <Footer />
              </>
            }
          />
          <Route path="/carimobil" element={<Carimobil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
