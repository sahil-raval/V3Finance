import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CountUp from "react-countup";

const slides = [
  {
    id: 1,
    image: "/images/img14.jpg",
    title: "Success in every step!",
    description: "Discover amazing features and services.",
    button: { text: "Learn More", link: "/services/businesspurchase" },
  },
  {
    id: 2,
    image: "/images/img19.jpg",
    title: "Business Loans",
    description: "Stay updated with our latest articles and insights.",
    button: { text: "Learn More", link: "/services/business-loans" },
  },
  {
    id: 3,
    image: "/images/img20.jpg",
    title: "Residential Loans",
    description: "Sign up and be a part of our growing community.",
    button: { text: "Explore", link: "/services/residential-loans" },
  },
  {
    id: 4,
    image: "/images/img18.jpg",
    title: "Asset Finance",
    description: "Tailored financial solutions for your assets.",
    button: { text: "Get Started", link: "/services/asset-finance" },
  },
];

export default function LandingPageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-gray-900 overflow-hidden">
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === currentIndex ? (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10 pointer-events-none"></div>

              <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center p-6">
                <h1 className="text-4xl md:text-8xl font-philosopher font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-base md:text-xl max-w-xl">{slide.description}</p>
                {slide.button && (
                  <a
                    href={slide.button.link}
                    className="mt-4 inline-block bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md transition duration-300"
                  >
                    {slide.button.text}
                  </a>
                )}
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Counter Box */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 z-10 dark:to-gray-900 shadow-lg p-4 w-50 hidden md:block">
        <div className="flex flex-col justify-center items-center">
          <div className="text-6xl font-bold text-primary dark:text-white flex items-center">
            <CountUp start={0} end={100} duration={4} />
            <span className="text-secondary-200 text-4xl font-semibold ml-1">+</span>
          </div>
          <span className="text-gray-600 dark:text-gray-300 text-base mt-2">
            Businesses we helped
          </span>
        </div>
      </div>

      {/* Navigation Buttons (hidden on mobile) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 z-30 hidden md:block"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80 z-30 hidden md:block"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Dots for mobile navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30 md:hidden">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
