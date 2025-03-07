import React from 'react';
import { FaBuilding, FaBriefcase, FaHandshake } from 'react-icons/fa';
import { Link } from "react-router-dom";
const CommercialPropertyLoans = () => {
  return (
    <div className="container mx-auto px-6  py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-philosopher font-bold mt-12  text-primary dark:text-white">
          Commercial Property Loans
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
          Invest in the future of your business with tailored commercial property loan options. We provide the financial flexibility you need to secure the perfect location.
        </p>  
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 shadow-md text-center">
          <FaBuilding className="text-5xl text-primary dark:text-teal-300 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-primary dark:text-white">
            Competitive Rates
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Unlock industry-leading interest rates for your property investments.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 shadow-md text-center">
          <FaBriefcase className="text-5xl text-primary dark:text-teal-300 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-primary dark:text-white">
            Flexible Financing
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Tailored loan terms designed to meet your unique business needs.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 shadow-md text-center">
          <FaHandshake className="text-5xl text-primary dark:text-teal-300 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-primary dark:text-white">
            Expert Assistance
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Partner with experienced advisors who understand your industry.
          </p>
        </div>
      </section>

      {/* Image and Description Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12 mb-12">
        <div className="lg:w-1/2">
          <img
            src="/images/img6.jpg"

            className="shadow-lg w-full h-96 object-cover rounded-xl"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">
            Invest in Your Business Space
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Secure the perfect property for your business with our commercial property loan solutions. Designed for entrepreneurs and established businesses, our loans provide you with the financial freedom to grow.
          </p>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
            <li>Low down payments to get started with ease.</li>
            <li>Customizable loan terms based on your business needs.</li>
            <li>Support for office spaces, retail locations, warehouses, and more.</li>
            <li>Quick and hassle-free processing to save you time.</li>
          </ul>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-lg overflow-hidden mb-16">
      
        <div className="relative z-10 px-8 py-12 text-center lg:px-16 lg:py-20">
          <h1 className="text-4xl font-philosopher font-extrabold text-primary dark:text-teal-300">
            Build the Foundation for Success
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
            Apply today to finance the commercial property that takes your business to the next level.
          </p>
          <Link to="/inquiry">
          <button className="mt-6 bg-primary dark:bg-teal-600 text-white py-3 px-8 shadow-lg hover:bg-primary-dark dark:hover:bg-teal-500 transition-transform transform hover:scale-105">
            Apply Now
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CommercialPropertyLoans;
