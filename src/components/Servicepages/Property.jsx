import React from 'react';
import { FaBuilding, FaDraftingCompass, FaTools } from 'react-icons/fa';
import { Link } from "react-router-dom";
const PropertyDevelopmentLoans = () => {
  return (
    <div className="container mx-auto  px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl mt-12 font-philosopher font-bold  text-primary dark:text-white">
          Property Development Loans
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
          Fund your next property development project with tailored loan options designed to meet your unique requirements. Build with confidence and achieve your vision.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 shadow-md text-center">
          <FaBuilding className="text-5xl text-primary dark:text-teal-300 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-primary dark:text-white">
            Large-Scale Projects
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Finance multi-unit developments, high-rises, or commercial spaces with ease.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 shadow-md text-center">
          <FaDraftingCompass className="text-5xl text-primary dark:text-teal-300 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-primary dark:text-white">
            Tailored Loan Structures
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Get funding designed to match the stages of your development process.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 shadow-md text-center">
          <FaTools className="text-5xl text-primary dark:text-teal-300 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-primary dark:text-white">
            Expert Guidance
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Work with specialists who understand the complexities of property development.
          </p>
        </div>
      </section>

      {/* Image and Description Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12 mb-12">
        <div className="lg:w-1/2">
          <img
            src="/images/img5.jpg"
            alt="Property Development Loans"
            className="shadow-lg w-full h-96 object-cover "
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">
            Build Your Future with Confidence
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Property Development Loans are specifically designed to support developers at every stage of the project. From land acquisition to construction and final sale, we provide the financial solutions you need to succeed.
          </p>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
            <li>Access funding for both small and large-scale developments.</li>
            <li>Benefit from flexible repayment options tailored to project timelines.</li>
            <li>Navigate regulatory requirements with expert advice.</li>
            <li>Utilize progress payments to keep construction moving smoothly.</li>
          </ul>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-lg overflow-hidden mb-16">
     
        <div className="relative z-10 px-8 py-12 text-center lg:px-16 lg:py-20">
          <h1 className="text-4xl font-philosopher font-extrabold text-primary dark:text-teal-300">
            Finance Your Vision, Build Your Legacy
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
            Partner with us to turn your development plans into reality. Start your journey today.
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

export default PropertyDevelopmentLoans;
