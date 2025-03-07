import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Servicesfield/Services";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import Privacy from "./components/Footer/Privacy";
import Servicesfield from './components/Servicesfield/Services';
import Calculator from './components/Calculator/calculator';
import Settlements from './components/Settlements/Success';
import "./styles/calculatorStyles.css";

import Home from './components/HomePage/Home'
import Contactus from './components/Contact/Contact'
import Aboutus from "./components/About/Aboutus"
import Inquiry from './components/Inquiry/inquiry';
import Businesspurchase from "./components/Servicepages/businesspurchase"
import Business from "./components/Servicepages/Business";
import Residential from './components/Servicepages/Residential';
import Commercial from './components/Servicepages/Commercial';
import PEL from './components/Servicepages/PEL';
import SMSF from './components/Servicepages/SMSF';
import Asset from './components/Servicepages/Asset';
import PDL from './components/Servicepages/Property';

import BorrowingPowerCalculator from "./components/Calculator/bpc";
import LoanRepaymentCalculator from "./components/Calculator/lrc";
import StampDutyCalculator from "./components/Calculator/sdc";
import OffsetCalculator from "./components/Calculator/oc";
import LMICalculator from "./components/Calculator/lmi";

import Scroll from './components/Scrolleffect/scroll'
import { BrowserRouter, Routes, Route } from "react-router";

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const introShown = sessionStorage.getItem("introShown");
    if (!introShown) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("introShown", "true"); 
      }, 2000); 
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, []); 
  
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  
  return (
    <div>
      {/* Preloader Screen with Logo */}
      {isLoading ? (
        <div className="flex justify-center items-center font font-playfair w-full h-screen bg-gray-100">
          <img
            src="./logos/logo.png"
            alt="Logo"
            className="animate-pulse w-64 transition-opacity opacity-100" 
          />
        </div>
      ) : (
        <div>
          <BrowserRouter>
            <Scroll/>
            <div className="bg-white dark:bg-black dark:text-white font- text-black overflow-x-hidden">
              <Navbar theme={theme} setTheme={setTheme} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/referral" element={<Contactus />} />
                <Route path="/services" element={<Servicesfield />} />
                <Route path="/about" element={<Aboutus />} />
                <Route path="/inquiry" element={<Inquiry />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/services/commercial-property-loans" element={<Commercial />} />
                <Route path="/services/asset-finance" element={<Asset />} />
                <Route path="/services/private-equity-loan" element={<PEL />} />
                <Route path="/services/property-development-loans" element={<PDL />} />
                <Route path="/services/smsf-loans" element={<SMSF />} /> 
                <Route path="/services/business-loans" element={<Business />} />
                <Route path="/services/residential-loans" element={<Residential />} />
                <Route path="/services/businesspurchase" element={<Businesspurchase />} />
                <Route path="/lmi" element={<LMICalculator />} />
                <Route path="/lrc" element={<LoanRepaymentCalculator />} />
                <Route path="/sdc" element={<StampDutyCalculator />} />
                <Route path="/oc" element={<OffsetCalculator/>} />
                <Route path="/bpc" element={<BorrowingPowerCalculator />} />
                <Route path="/settlements" element={<Settlements />} />
                <Route path="/privacy" element={<Privacy/>}/>
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
};

export default App;
