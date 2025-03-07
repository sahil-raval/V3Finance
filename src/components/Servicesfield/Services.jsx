import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { 
  FaMoneyCheckAlt, 
  FaHome, 
  FaBuilding, 
  FaWrench, 
  FaHandHoldingUsd, 
  FaDraftingCompass, 
  FaPiggyBank 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  {
    id: "businesspurchase",
    title: "Business Purchase",
    description: "Take the first step towards owning your business with ease. Our expert guidance makes the business purchase process smooth and straightforward.",
    icon: <FaPiggyBank />,
    image: "/images/img60.jpg",
    cta: "Business Purchase Journey!",
  },
  {
    id: "business-loans",
    title: "Business Loans",
    description: "Empower your business with tailored loan options designed to fuel growth, expansion, or equipment acquisition. Let us help you achieve your goals.",
    icon: <FaMoneyCheckAlt />,
    image: "/images/img2.jpg",
    cta: "Boost your business today!",
  },
  {
    id: "residential-loans",
    title: "Residential Loans",
    description: "Simplify the process of purchasing your dream home. We provide expert advice and competitive loan solutions to make home ownership easy.",
    icon: <FaHome />,
    image: "/images/img9.jpg",
    cta: "Start your home journey now!",
  },
  {
    id: "commercial-property-loans",
    title: "Commercial Property Loans",
    description: "Expand your business premises with flexible financing solutions. Whether you're purchasing, renovating, or building, we have you covered.",
    icon: <FaBuilding />,
    image: "/images/img6.jpg",
    cta: "Explore commercial financing!",
  },
  {
    id: "asset-finance",
    title: "Asset Finance",
    description: "Acquire the assets your business needs without financial strain. Our asset finance solutions are tailored for growth and operational ease.",
    icon: <FaWrench />,
    image: "/images/img7.jpg",
    cta: "Upgrade your assets today!",
  },
  {
    id: "private-equity-loan",
    title: "Private Equity Loan",
    description: "Optimize your property investments with personalized equity loan solutions. Leverage your assets to achieve greater financial outcomes.",
    icon: <FaHandHoldingUsd />,
    image: "/images/img26.jpg",
    cta: "Maximize your equity potential!",
  },
  {
    id: "property-development-loans",
    title: "Property Development Loans",
    description: "Build your future with specialized loans for property development purpose. From planning to execution, we finance your vision.",
    icon: <FaDraftingCompass />,
    image: "/images/img5.jpg",
    cta: "Kickstart your development project!",
  },
  {
    id: "smsf-loans",
    title: "SMSF Loans",
    description: "Secure your retirement with Self-Managed Super Fund loans. We guide you through every step to make informed investment decisions.",
    icon: <FaPiggyBank />,
    image: "/images/img10.jpg",
    cta: "Plan your retirement smarter!",
  },
  
];

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <span id="services"></span>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl  mt-12 font-philosopher font-bold text-center text-primary mb-12 dark:text-white">
          Our Financial Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 dark:text-white">
          {services.map((service) => (
            <div 
              key={service.id} 
              data-aos="fade-up" 
              className="transform transition duration-300 hover:scale-105"
            >
              <div className="bg-white dark:bg-gray-800 shadow-md  overflow-hidden dark:text-white">
                <div className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 p-6">
                  <div className="text-primary dark:text-teal-300 text-5xl">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    {service.description}
                  </p>
                  <Link to={`/services/${service.id}`}>
                    <button className="mt-4 w-full bg-secondary-200 dark:bg-teal-600 text-white py-2 px-6  hover:bg-secondary-100 dark:hover:bg-teal-500 transition">
                      {service.cta}
                    </button>
                  </Link>
                </div>
                <div className="p-5">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-48 object-cover " 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesPage;

