import React from 'react';
import { FaHome, FaDollarSign, FaShieldAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
const SMSFLoans = () => {
  return (
    <div className="container mx-auto px-6  py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl mt-12 font-bold font-philosopher  text-primary dark:text-white">
          SMSF Loans
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
          Leverage your Self-Managed Super Fund to invest in property and build long-term wealth with our tailored SMSF loan solutions.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 shadow-md text-center">
          <FaHome className="text-5xl text-primary dark:text-teal-300 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-primary dark:text-white">
            Property Investment
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Finance residential or commercial properties through your SMSF with ease.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 shadow-md text-center">
          <FaDollarSign className="text-5xl text-primary dark:text-teal-300 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-primary dark:text-white">
            Competitive Rates
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Enjoy low interest rates and terms designed to maximize your investment returns.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 shadow-md text-center">
          <FaShieldAlt className="text-5xl text-primary dark:text-teal-300 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-primary dark:text-white">
            Secure & Compliant
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Trust our experts to ensure full compliance with SMSF regulations.
          </p>
        </div>
      </section>

      {/* Image and Description Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12 mb-12">
        <div className="lg:w-1/2">
          <img
            src="/images/img10.jpg"
  
            className="shadow-lg w-full h-96 object-cover "
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">
            Build Wealth Through SMSF Loans
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Self-Managed Super Fund (SMSF) Loans are a smart way to leverage your retirement savings for property investment. With our expert support, you can unlock the potential of your SMSF to grow wealth.
          </p>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
            <li>Specialized loans designed for SMSF trustees.</li>
            <li>Access a wide range of property investment opportunities.</li>
            <li>Ensure compliance with complex regulatory frameworks.</li>
            <li>Benefit from competitive rates and flexible repayment plans.</li>
          </ul>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-lg overflow-hidden mb-16">
     
        <div className="relative z-10 px-8 py-12 text-center lg:px-16 lg:py-20">
          <h1 className="text-4xl font-extrabold font-philosopher text-primary dark:text-teal-300">
            Unlock the Power of Your SMSF
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
            Start your property investment journey with our SMSF loan options designed to maximize your wealth potential.
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

export default SMSFLoans;
