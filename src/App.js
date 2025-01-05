import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Services from "./components/OurServices";
import Overview from "./components/Overview";
import Packages from "./components/Packages";
import Footer from "./components/Footer";
import ContactUs from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermAndConditions"; // Add this import

// Main content component remains the same
const MainContent = ({ activeSection, scrollToSection }) => {
  return (
    <>
      <section id="home">
        <Hero onNavClick={scrollToSection} />
      </section>
      <section id="overview">
        <Overview onNavClick={scrollToSection} />
      </section>
      <section id="about">
        <AboutUs onNavClick={scrollToSection} />
      </section>
      <section id="packages">
        <Packages onNavClick={scrollToSection} />
      </section>
      <section id="services">
        <Services onNavClick={scrollToSection} />
      </section>
      <section id="contact">
        <ContactUs onNavClick={scrollToSection} />
      </section>
    </>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    // Add terms-conditions handling
    if (sectionId === "privacy") {
      window.location.href = "/privacy-policy";
      return;
    }
    if (sectionId === "terms") {
      window.location.href = "/terms-conditions";
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navbar height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar activeSection={activeSection} onNavClick={scrollToSection} />
        <Routes>
          <Route
            path="/"
            element={
              <MainContent
                activeSection={activeSection}
                scrollToSection={scrollToSection}
              />
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
        </Routes>
        <Footer onNavClick={scrollToSection} />
      </div>
    </Router>
  );
}

export default App;
