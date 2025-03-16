import React, { useEffect, useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./index.css";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Services from "./components/OurServices";
import Overview from "./components/Overview";
// import Packages from "./components/Packages";
import Footer from "./components/Footer";
import ContactUs from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermAndConditions";
import GmbPage from "./gmb/GmbPage";
import CheckoutPage from "./gmb/checkout/CheckoutPage";
import CheckoutSuccess from "./gmb/checkout/CheckoutSuccess";

const SECTION_OFFSET = 80;
const SCROLL_THRESHOLD = 100;
const SCROLL_DEBOUNCE = 50;

const MainContent = () => {
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <main className="font-sans antialiased bg-[#EEE8F5]">
      <Helmet>
        <title>Lumora Ventures - Google Business Profile Services</title>
        <meta
          name="description"
          content="Boost your local visibility with Lumora Ventures' Google Business Profile services. Affordable packages starting at $199—get started today!"
        />
      </Helmet>
      <section id="home" className="min-h-screen bg-[#EEE8F5]">
        <Hero onNavClick={scrollToSection} />
      </section>
      <section id="overview" className="min-h-screen bg-[#AEBBDB]">
        <Overview onNavClick={scrollToSection} />
      </section>
      <section id="about" className="min-h-screen bg-[#8698C4]">
        <AboutUs onNavClick={scrollToSection} />
      </section>
      {/* <section id="packages" className="min-h-screen bg-[#7291E6]">
        <Packages onNavClick={scrollToSection} />
      </section> */}
      <section id="services" className="min-h-screen bg-[#8698C4]">
        <Services onNavClick={scrollToSection} />
      </section>
      <section id="contact" className="min-h-screen bg-[#AEBBDB]">
        <ContactUs onNavClick={scrollToSection} />
      </section>
    </main>
  );
};

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");
  const [isScrolling, setIsScrolling] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isMainPage = location.pathname === "/";

  const scrollToSection = useCallback(
    (sectionId) => {
      if (["privacy", "terms"].includes(sectionId)) {
        navigate(
          sectionId === "privacy" ? "/privacy-policy" : "/terms-conditions"
        );
        return;
      }

      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition = element.offsetTop - SECTION_OFFSET;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    },
    [navigate]
  );

  useEffect(() => {
    if (!isMainPage) return;

    let scrollTimeout;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!isScrolling) {
        setIsScrolling(true);

        // Update active section
        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => {
          const sectionTop = section.offsetTop - SECTION_OFFSET;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (currentScrollY > sectionTop && currentScrollY <= sectionBottom) {
            setActiveSection(section.getAttribute("id"));
          }
        });

        // Update navbar visibility
        setIsNavVisible(
          currentScrollY < lastScrollY || currentScrollY < SCROLL_THRESHOLD
        );
        setLastScrollY(currentScrollY);

        // Debounce scroll handling
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(
          () => setIsScrolling(false),
          SCROLL_DEBOUNCE
        );
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isMainPage, isScrolling, lastScrollY]);

  return (
    <div className="relative min-h-screen bg-[#EEE8F5]">
      {isMainPage && (
        <Navbar
          activeSection={activeSection}
          onNavClick={scrollToSection}
          className={`fixed top-0 w-full z-50 bg-[#EEE8F5]/90 backdrop-blur-sm shadow-sm 
            transition-transform duration-300 ${
              isNavVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        />
      )}
      <div
        className={`${isMainPage ? "pt-10" : ""} transition-all duration-300`}
      >
        {children}
      </div>
      {isMainPage && (
        <Footer
          onNavClick={scrollToSection}
          className="bg-[#3D52A2] text-[#EEE8F5]"
        />
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="bg-[#EEE8F5] text-[#3D52A2]">
        <Layout>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/gmb" element={<GmbPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/checkout/success" element={<CheckoutSuccess />} />
            <Route
              path="/privacy-policy"
              element={
                <PrivacyPolicy className="container mx-auto max-w-4xl px-4 py-8" />
              }
            />
            <Route
              path="/terms-conditions"
              element={
                <TermsAndConditions className="container mx-auto max-w-4xl px-4 py-8" />
              }
            />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
