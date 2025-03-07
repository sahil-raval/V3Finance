import React from 'react'
import Slider from './Slider'
import Testimonial from '../Testimonial/Testimonial'
import { Link } from "react-router-dom";
import CountUp from "react-countup"
import { FaPiggyBank, FaHome, FaTools, FaChartLine } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <Slider />
      <div className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold font-philosopher text-primary dark:text-white">
            What We Offer
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 mb-8">
            Discover a range of financial solutions to meet your goals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/services/business-loans" className="group">
              <div className="bg-white dark:bg-gray-800 shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <FaPiggyBank className="text-5xl text-primary dark:text-teal-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary dark:text-white">
                  Business Loans
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Boost your business with customized loans.
                </p>
              </div>
            </Link>
            <Link to="/services/residential-loans" className="group">
              <div className="bg-white dark:bg-gray-800 shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <FaHome className="text-5xl text-primary dark:text-teal-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary dark:text-white">
                  Residential Loans
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Find your dream home loan solutions.
                </p>
              </div>
            </Link>
            <Link to="/services/asset-finance" className="group">
              <div className="bg-white dark:bg-gray-800 shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <FaTools className="text-5xl text-primary dark:text-teal-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary dark:text-white">
                  Asset Finance
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Upgrade your business with ease.
                </p>
              </div>
            </Link>
            <Link to="/services/property-development-loans" className="group">
              <div className="bg-white dark:bg-gray-800 shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <FaChartLine className="text-5xl text-primary dark:text-teal-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary dark:text-white">
                  Property Development Loans
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Build your future with specialized loans.
                </p>
              </div>
            </Link>
          </div>
        </section>
        <Testimonial />
        <div className="flex flex-col sm:flex-row justify-center gap-12 mb-12">
          <section className="text-center bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 z-10 dark:to-gray-900 shadow-lg p-4 cursor-pointer">
            <h2 className="text-4xl font-bold font-philosopher text-primary dark:text-white">
              Looking to buy a business?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              We are always ready to be a part of your business purchase journey.
            </p>
            <Link to="/services/businesspurchase">
              <button className="mt-6 bg-primary dark:bg-teal-600 text-white py-3 px-8 shadow-lg hover:bg-primary-dark dark:hover:bg-teal-500 transition-transform transform hover:scale-105">
                Business Purchase Journey
              </button>
            </Link>
          </section>
          <section className="text-center bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 z-10 dark:to-gray-900 shadow-lg p-4 cursor-pointer">
            <h2 className="text-4xl font-bold font-philosopher text-primary dark:text-white">
              Ready to Start?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Let us help you achieve your goals with tailored financial solutions.
            </p>
            <Link to="/Inquiry">
              <button className="mt-6 bg-primary dark:bg-teal-600 text-white py-3 px-8 shadow-lg hover:bg-primary-dark dark:hover:bg-teal-500 transition-transform transform hover:scale-105">
                Get in touch
              </button>
            </Link>
          </section>
        </div>
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-lg overflow-hidden mb-12">
          <div className="absolute inset-0">
            <img
              src="/images/img4.jpg"
              alt="Background"
              className="w-full h-full object-cover opacity-25"
            />
          </div>
          <div className="relative z-10 text-center px-6 py-16 lg:px-12 lg:py-24">
            <h1 className="text-4xl font-bold font-philosopher text-primary dark:text-teal-300">
              Welcome to Our Financial Solutions
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
              Explore our tailored loan options, designed to empower your future.
              Let’s turn your aspirations into reality.
            </p>
            <Link to="/services">
              <button className="mt-6 bg-primary dark:bg-teal-600 text-white py-3 px-8 shadow-lg hover:bg-primary-dark dark:hover:bg-teal-500 transition-transform transform hover:scale-105">
                Explore Services
              </button>
            </Link>
          </div>
        </section>
    
      </div>
    </>
  );
};

export default HomePage;
