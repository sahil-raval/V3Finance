import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceCard = ({ id, title, description, icon, image, cta }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div
      className="bg-white dark:bg-gray-800 shadow-md overflow-hidden dark:text-white"
      data-aos="fade-up"
    >
      <div className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 p-4">
        <div className="text-primary dark:text-teal-300 text-4xl">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3
          className="text-xl font-semibold text-primary dark:text-white"
          data-aos="fade-up"
        >
          {title}
        </h3>
        <p
          className="text-gray-600 dark:text-gray-400 mt-2"
          data-aos="fade-up"
        >
          {description}
        </p>
        <Link to={`/services/${id}`} data-aos="fade-up">
          <button
            className="mt-4 bg-secondary-200 dark:bg-teal-600 text-white py-2 px-6 hover:bg-secondary-100 dark:hover:bg-teal-500"
          >
            {cta}
          </button>
        </Link>
      </div>
      <div className="p-5">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          data-aos="fade-up"
        />
      </div>
    </div>
  );
};

export default ServiceCard;


