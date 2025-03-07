import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 pt-12">

    <h2
        className="text-4xl mt-12 font-bold font-philosopher text-center text-primary dark:text-white"
      >
        About Us
      </h2>
      <section className="relative flex flex-col lg:flex-col items-center lg:justify-between px-6 lg:px-20 py-16">
        <div className="text-center lg:text-center lg:w-1/2" data-aos="fade-right">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary  dark:text-teal-300 leading-tight mb-6">
            Welcome to <span className="text-teal-600 font-sans-serif">V3FINANCE</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Discover how our journey redefines financial solutions and empowers your success through innovation and trust.
          </p>
          <Link to="/services">
            <button className="bg-primary text-white px-6 py-3 shadow-md hover:scale-105 transform transition-all">
              Explore Our Services
            </button>
          </Link>
        </div>

        <motion.div
          className="relative w-full mt-6 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Carousel />
        </motion.div>
      </section>

      <section className="py-16 bg-gray-100  dark:bg-gray-600 ">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl text-primary font-philosopher font-semibold mb-8">Our Lending Partners</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
      <div className="flex justify-center">
        <img src="/logos/anz.png" alt="ANZ" className="w-24 h-12 object-contain" />
      </div>
      <div className="flex justify-center">
        <img src="/logos/nab.png" alt="NAB" className="w-24 h-12 object-contain" />
      </div>
      <div className="flex justify-center">
        <img src="/logos/cba.png" alt="CBA" className="w-24 h-12 object-contain" />
      </div>
      <div className="flex justify-center">
        <img src="/logos/suncorp.png" alt="Suncorp" className="w-24 h-12 object-contain" />
      </div>
      <div className="flex justify-center">
        <img src="/logos/ing.png" alt="ING" className="w-24 h-12 object-contain" />
      </div>
      <div className="flex justify-center">
        <img src="/logos/goedge.png" alt="GoEdge" className="w-24 h-12 object-contain" />
      </div>
      <div className="flex justify-center">
        <img src="/logos/adelaidebank.png" alt="Adelaide Bank" className="w-24 h-12 object-contain" />
      </div>
      <div className="flex justify-center">
        <img src="/logos/bluestone.png" alt="Bluestone" className="w-24 h-12 object-contain" />
      </div>
      <div className="flex justify-center">
        <img src="/logos/beyondbank.png" alt="BeyondBank" className="w-24 h-12 object-contain" />
      </div>
      <div className="flex justify-center">
        <img src="/logos/bankwest.png" alt="Bankwest" className="w-24 h-12 object-contain" />
      </div>
      <div className="flex justify-center">
        <img src="/logos/westpac.png" alt="Westpac" className="w-24 h-12 object-contain" />
      </div>
      <div className="flex justify-center">
        <img src="/logos/stgeorge.png" alt="St George" className="w-24 h-12 object-contain" />
      </div>
      <div className="flex justify-center">
        <img src="/logos/orde.png" alt="orde" className="w-24 h-12 object-contain" />
      </div>
      <div className="flex justify-center">
        <img src="/logos/bom.png" alt="bank-of-melbourne" className="w-24 h-12 object-contain" />
      </div>
      <div className="flex justify-center">
        <img src="/logos/liberty.png" alt="liberty" className="w-24 h-12 object-contain" />
      </div>
      <div className="flex justify-center">
        <img src="/logos/latrobe.png" alt="latrobe" className="w-24 h-12 object-contain" />
      </div>
      <div className="flex justify-center">
        <img src="/logos/resimac.png" alt="resimac" className="w-24 h-12 object-contain" />
      </div>
      <div className="flex justify-center">
        <img src="/logos/macquirie.png" alt="macquirie" className="w-24 h-12 object-contain" />
      </div>
    </div>
  </div>
</section>


     {/* Why Choose Us Section */}
<section className="bg-teal-50 dark:bg-gray-800 py-16 px-6 lg:px-20">
  <div className="max-w-6xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
    <div data-aos="fade-right">
      <h3 className="text-3xl font-bold font-philosopher text-primary dark:text-teal-300 mb-6">
        Why Choose V3FINANCE
      </h3>
      <p className="text-gray-700 text-justify dark:text-gray-300 leading-relaxed mb-6">
        Choosing V3FINANCE means partnering with a team that puts your financial well-being at the forefront. Our approach combines advanced technology with human expertise to deliver transparent, efficient, and impactful financial solutions. We are committed to innovation, integrity, and building long-term relationships with our clients.
      </p>
      <Link to="/contact">
        <button className="bg-teal-600 text-white px-8 py-3 shadow-md hover:scale-105 transform transition-all">
          Get in Touch
        </button>
      </Link>
    </div>
    <div data-aos="fade-left">
      <img
        src="/images/building.jpg"
        alt="Why Choose Us"
        className="w-full shadow-lg"
      />
    </div>
  </div>
</section>

<section className="bg-gray-100 dark:bg-gray-800 py-16 px-6 lg:px-20">
  <div className="max-w-6xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
    <div data-aos="fade-left">
      <img
        src="/images/aboutus2.jpg"
        alt="Why Choose Us"
        className="w-full shadow-lg"
      />
    </div>
    <div data-aos="fade-right">
      <h3 className="text-3xl font-bold font-philosopher text-primary dark:text-teal-300 mb-6">
        Our Foundation
      </h3>
      <p className="text-gray-700 text-justify dark:text-gray-300 leading-relaxed mb-6">
        V3FINANCE was founded on a passion for helping others achieve financial clarity and success. Inspired by the challenges faced by individuals and businesses navigating a fast-changing economic landscape, we created a platform that integrates our years of experience with a forward-thinking mindset. What began as a small initiative to assist local communities has grown into a trusted partner for clients nationwide, driven by our dedication to innovation and customer-centric solutions.
      </p>
      <Link to="/contact">
        <button className="bg-teal-600 text-white px-8 py-3 shadow-md hover:scale-105 transform transition-all">
          Get in Touch
        </button>
      </Link>
    </div>
  </div>
</section>

<section className="bg-teal-50 dark:bg-gray-800 py-16 px-6 lg:px-20">
  <div className="max-w-6xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
    <div data-aos="fade-right">
      <h3 className="text-3xl font-bold font-philosopher text-primary dark:text-teal-300 mb-6">
        Our Experience
      </h3>
      <p className="text-gray-700 text-justify dark:text-gray-300 leading-relaxed mb-6">
        With years of expertise across diverse financial sectors, our team has the knowledge and skills to guide clients through complex financial landscapes. From strategic planning to risk management and wealth optimization, we have successfully helped clients of all sizes achieve their objectives. Our experience allows us to anticipate challenges and adapt to the ever-changing dynamics of the financial world, ensuring that your success is our priority. At V3FINANCE, we’re not just a financial service provider – we’re your partner in building a brighter, more secure future.
      </p>
      <Link to="/contact">
        <button className="bg-teal-600 text-white px-8 py-3 shadow-md hover:scale-105 transform transition-all">
          Get in Touch
        </button>
      </Link>
    </div>
    <div data-aos="fade-left">
      <img
        src="/images/aboutus3.jpg"
        alt="Why Choose Us"
        className="w-full shadow-lg"
      />
    </div>
  </div>
</section>

<section className="bg-gray-100 dark:bg-gray-800 py-16 px-6 lg:px-20">
  <div className="max-w-6xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
    <div data-aos="fade-left">
      <img
        src="/images/img21.jpg"
        alt="Why Choose Us"
        className="w-full shadow-lg"
      />
    </div>
    <div data-aos="fade-right">
      <h3 className="text-3xl font-bold font-philosopher text-primary dark:text-teal-300 mb-6">
        Our Vision
      </h3>
      <p className="text-gray-700 text-justify dark:text-gray-300 leading-relaxed mb-6">
        We envision a world where everyone has the power to control their financial future. Our goal is to bridge the gap between traditional financial services and modern technology, making wealth creation, management, and sustainability more inclusive and accessible. By staying ahead of industry trends, we aim to redefine what it means to build financial freedom.
      </p>
      <Link to="/contact">
        <button className="bg-teal-600 text-white px-8 py-3 shadow-md hover:scale-105 transform transition-all">
          Get in Touch
        </button>
      </Link>
    </div>
  </div>
</section>

<section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-lg overflow-hidden mb-12">
  <div className="absolute inset-0">
    <img
      src="/images/img4.jpg"
      alt="Hero Background"
      className="w-full h-full object-cover opacity-25"
    />
  </div>
  <div className="relative z-10 text-center px-6 py-16 lg:px-12 lg:py-24">
    <h1 className="text-3xl lg:text-4xl font-philosopher font-bold text-primary dark:text-teal-300">
      Be a part of our Journey through referral
    </h1>
    <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
      Help us grow by referring your friends and family to our journey.
      Let's create something amazing together.
    </p>
    <Link to="/referral">
      <button className="mt-6 bg-primary dark:bg-teal-600 text-white py-3 px-8 shadow-lg hover:bg-primary-dark dark:hover:bg-teal-500 transition-transform transform hover:scale-105">
        Join our Referral Program
      </button>
    </Link>
  </div>
</section>
    </div>
    </>
  );
};

export default AboutUs;
