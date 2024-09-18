import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import WhyUs from "./components/WhyUs";
import Navbar from "./components/Navbar";
import PesanMobil from "./components/PesanMobil";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
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
    </div>
  );
}

export default App;
