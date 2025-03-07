import React from 'react';
import { FaPiggyBank, FaChartLine, FaHandshake } from 'react-icons/fa';
import { Link } from "react-router-dom";

const BusinessLoan = () => {
  return (
    <div className="container mx-auto px-6  py-12">
      {/* Main Heading Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-philosopher font-bold text-primary mt-12 dark:text-white">
          Business Loans
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
          Tailored solutions to help grow your business.
        </p>
      </section>

      {/* Loan Categories Section */}
      {/* Features Section */}
      <section className="mb-12 gap-8 grid grid-cols-1 md:grid-cols-3">
        <div className="bg-white shadow-md text-center dark:bg-gray-800 p-6">
          <FaHandshake className="mx-auto text-5xl text-primary dark:text-teal-300 mb-4" />
          <h3 className="text-2xl font-semibold dark:text-white text-primary">
            Flexible Loan Options
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Choose from a variety of loan types to meet your business needs.
          </p>
        </div>
        <div className="bg-white shadow-md text-center dark:bg-gray-800 p-6">
          <FaChartLine className="mx-auto text-5xl text-primary dark:text-teal-300 mb-4" />
          <h3 className="text-2xl font-semibold dark:text-white text-primary">
            Competitive Interest Rates
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Get access to affordable financing with low interest rates.
          </p>
        </div>
        <div className="bg-white shadow-md text-center dark:bg-gray-800 p-6">
          <FaPiggyBank className="mx-auto text-5xl text-primary dark:text-teal-300 mb-4" />
          <h3 className="text-2xl font-semibold dark:text-white text-primary">
            Quick Approvals
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Fast and hassle-free loan approvals to keep your business on track.
          </p>
        </div>
      </section>

      {/* Loan Details Section */}
      <section className="mb-12 gap-12 items-center flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <img
            src="/images/img6.jpg"

            className="shadow-lg w-full h-96 object-cover"
          />
        </div>

        <div className="lg:w-1/2">
          <h2 className="font-bold text-primary dark:text-white mb-4 text-3xl">
            Why choose us for business loans?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            We are passionate about finding the best solution for our client’s business needs and love seeing them grow.
          </p>
          <div className="flex flex-col md:flex-row gap-4 text-lg font-semibold text-white mb-10">
            <span className="px-4 py-2 bg-secondary-200 shadow-sm">We Listen</span>
            <span className="px-4 py-2 bg-secondary-100 shadow-sm">We Understand</span>
            <span className="px-4 py-2 bg-primary shadow-sm">We Deliver</span>
          </div>

          <ul className="text-gray-600 dark:text-gray-400 space-y-2 pl-5 list-disc">
            <li>Business Purchase</li>
            <li>Working Capital</li>
            <li>Private Equity Loans</li>
            <li>Debtor Finance</li>
          </ul>
        </div>
      </section>
      <section className="mb-12 bg-gray-100 dark:bg-gray-800 p-6 shadow-md">
        <h2 className="text-3xl font-bold text-primary dark:text-white mb-4 text-center">
          Loan Segments We Serve
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
          Whether it is for business purchase, expansion, working capital, properties, investments, line of credit, or any other lending needs, we assist businesses across all financial segments.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-white dark:bg-gray-900 shadow-md">
            <h3 className="text-2xl font-semibold text-primary dark:text-teal-300 mb-2">
              Less than $2M
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Tailored for small to medium businesses.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 shadow-md ">
            <h3 className="text-2xl font-semibold text-primary dark:text-teal-300 mb-2">
              $2M to $10M
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Ideal for medium to large businesses.
            </p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 shadow-md ">
            <h3 className="text-2xl font-semibold text-primary dark:text-teal-300 mb-2">
              Greater than $10M
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Corporate funding for large-scale operations.
            </p>
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-lg overflow-hidden mb-16">
        <div className="z-10 relative text-center lg:px-16 lg:py-20 px-8 py-12">
          <h2 className="text-4xl font-extrabold font-philosopher text-primary dark:text-teal-300">
            Take Your Business to the Next Level
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
            Secure funding to expand, invest, and grow with confidence. Inquire today to get started.
          </p>
          <Link to="/inquiry">
            <button className="mt-6 bg-primary dark:bg-teal-600 text-white py-3 px-8 shadow-lg hover:bg-primary-dark dark:hover:bg-teal-500 transition-transform transform hover:scale-105">
              Inquire Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};
export default BusinessLoan;