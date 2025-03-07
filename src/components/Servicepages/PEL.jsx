import React from 'react';
import { FaBusinessTime, FaUserTie, FaRegChartBar } from 'react-icons/fa';
import { Link } from "react-router-dom";
const PrivateEquityLoans = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-philosopher font-bold mt-12 text-primary dark:text-white">
          Private Equity Loans
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
          Secure financing backed by private equity to power mergers, acquisitions, or strategic growth. Unlock the potential of your business with innovative funding solutions.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 shadow-md text-center">
          <FaBusinessTime className="text-5xl text-primary dark:text-teal-300 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-primary dark:text-white">
            Strategic Funding
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Get access to capital for acquisitions, buyouts, and expansion projects.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 shadow-md text-center">
          <FaUserTie className="text-5xl text-primary dark:text-teal-300 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-primary dark:text-white">
            Expert Partnerships
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Collaborate with equity specialists to create customized solutions.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 shadow-md text-center">
          <FaRegChartBar className="text-5xl text-primary dark:text-teal-300 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-primary dark:text-white">
            Flexible Structures
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Enjoy flexibility with loan structures designed for private equity needs.
          </p>
        </div>
      </section>

      {/* Image and Description Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12 mb-12">
        <div className="lg:w-1/2">
          <img
            src="/images/img26.jpg"
   
            className="shadow-lg w-full h-96 object-cover"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">
            Why Choose Private Equity Loans?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Private equity loans empower businesses to scale and seize opportunities. By leveraging your equity, you can secure funding for key milestones without compromising on operational control.
          </p>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
            <li>Bridge financing for acquisitions or critical investments.</li>
            <li>Unlock liquidity from existing assets or equity stakes.</li>
            <li>Support for growth strategies, new ventures, or partnerships.</li>
            <li>Tailored repayment schedules aligned with cash flow.</li>
          </ul>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-lg overflow-hidden mb-16">
       
        <div className="relative z-10 px-8 py-12 text-center lg:px-16 lg:py-20">
          <h1 className="text-4xl font-philosopher font-extrabold text-primary dark:text-teal-300">
            Drive Success with Innovative Financing
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
            Harness the power of private equity to fund transformative projects and drive business growth.
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

export default PrivateEquityLoans;
