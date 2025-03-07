import React from 'react';
import { FaHome, FaKey, FaBuilding } from 'react-icons/fa';
import { Link } from "react-router-dom";
const ResidentialLoans = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-philosopher mt-12 font-bold  text-primary dark:text-white">
          Residential Loans
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
          Simplify your home-buying journey with expert guidance and loan solutions tailored to your needs. Owning your dream home has never been easier.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 shadow-md text-center">
          <FaKey className="text-5xl text-primary dark:text-teal-300 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-primary dark:text-white">
            Easy Approval
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Our streamlined process ensures quick approval so you can focus on finding the perfect home.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 shadow-md text-center">
          <FaHome className="text-5xl text-primary dark:text-teal-300 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-primary dark:text-white">
            Flexible Repayment
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Choose from multiple repayment options that suit your budget and financial plans.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 shadow-md text-center">
          <FaBuilding className="text-5xl text-primary dark:text-teal-300 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-primary dark:text-white">
            Expert Guidance
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Our experienced advisors will guide you through the process every step of the way.
          </p>
        </div>
      </section>

      {/* Image and Description Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12 mb-12">
        <div className="lg:w-1/2">
          <img
            src="/images/img9.jpg"

            className="shadow-lg w-full h-96 object-cover "
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">
            Your Path to Home Ownership
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Our residential loans are designed with your comfort and convenience in mind. With competitive rates and a customer-centric approach, we make your home-buying experience seamless.
          </p>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
            <li>Low-interest rates tailored to your financial profile.</li>
            <li>Guidance on budgeting and loan planning.</li>
            <li>Specialized options for first-time homebuyers.</li>
            <li>Transparent policies with no hidden fees.</li>
          </ul>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-lg overflow-hidden mb-16">
    
        <div className="relative z-10 px-8 py-12 text-center lg:px-16 lg:py-20">
          <h1 className="text-4xl font-extrabold font-philosopher text-primary dark:text-teal-300">
            Your Dream Home Awaits
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
            Apply today and turn your dream of homeownership into a reality.
          </p>
          <Link to="/inquiry">
          <button className="mt-6 bg-primary dark:bg-teal-600 text-white py-3 px-8 shadow-lg hover:bg-primary-dark dark:hover:bg-teal-500 transition-transform transform hover:scale-105">
            Get Started Now
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ResidentialLoans;
