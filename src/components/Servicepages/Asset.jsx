import React from 'react';
import { FaCogs, FaTools, FaBalanceScale } from 'react-icons/fa';
import { Link } from "react-router-dom";
const AssetFinance = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl mt-12 font-philosopher font-bold text-primary  dark:text-white">
          Asset Finance
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
          Simplify the process of acquiring essential assets for your business with our flexible and tailored financing options. Turn your business needs into reality today.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 shadow-md text-center">
          <FaCogs className="text-5xl text-primary dark:text-teal-300 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-primary dark:text-white">
            Streamlined Process
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Quick and efficient approvals to get you the assets you need fast.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 shadow-md text-center">
          <FaTools className="text-5xl text-primary dark:text-teal-300 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-primary dark:text-white">
            Flexible Terms
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Customizable financing plans that adapt to your business cycle.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 shadow-md text-center">
          <FaBalanceScale className="text-5xl text-primary dark:text-teal-300 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-primary dark:text-white">
            Affordable Payments
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manageable payment structures designed for your budget.
          </p>
        </div>
      </section>

      {/* Image and Description Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12 mb-12">
        <div className="lg:w-1/2">
          <img
            src="/images/img7.jpg"
            alt="Asset Finance"
            className="shadow-lg w-full h-96 object-cover"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">
            Empower Your Business with Asset Financing
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Asset Finance helps you acquire equipment, machinery, or other essential assets without straining your cash flow. With our flexible plans, you can focus on growing your business while we take care of the rest.
          </p>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
            <li>Access financing for equipment, vehicles, and machinery.</li>
            <li>Tailored plans with competitive interest rates.</li>
            <li>Minimal paperwork and hassle-free approvals.</li>
            <li>Expert guidance to make the process seamless.</li>
          </ul>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-lg overflow-hidden mb-16">
       
        <div className="relative z-10 px-8 py-12 text-center lg:px-16 lg:py-20">
          <h1 className="text-4xl font-bold mt-12 font-philosopher text-primary dark:text-teal-300">
            Asset Finance
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
            Start your journey towards better business performance with our asset financing options.
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

export default AssetFinance;
