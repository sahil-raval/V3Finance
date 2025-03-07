import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamCarousel = () => {
  const teamData = [
    { 
      name: 'Kartik Mashar', 
      role: 'Director', 
      image: '/images/img22.jpg', 
      description: 'Kartik is the visionary behind the company and leads the strategic planning and direction.' 
    },
    { 
      name: 'Rachana Mashar', 
      role: 'Co-founder & Operational Manager', 
      image: '/images/img23.jpg', 
      description: 'Rachana manages the operations, ensuring smooth day-to-day activities across the company.' 
    },
    { 
      name: 'Sahil Raval', 
      role: 'IT & Operational Officer', 
      image: "/images/sahil.jpg", 
      description: 'Sahil oversees IT infrastructure and supports the operations team with technical solutions.' 
    },
  ];

  const [selectedMember, setSelectedMember] = useState(teamData[0]);

  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setSelectedMember(teamData[index]),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-16 px-6 lg:px-20">
      <h2 className="text-4xl  font-bold text-center font-philosopher text-primary dark:text-teal-300 mb-12">
        Meet Our Team
      </h2>

      <div className="flex flex-col lg:flex-row items-center lg:justify-center space-y-8 lg:space-y-0 lg:space-x-10">
        {/* Selected Member Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="relative group overflow-hidden rounded-md shadow-lg transform hover:scale-105 transition-all">
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="w-full h-64 object-cover sm:h-72 lg:h-80"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">{selectedMember.name}</h3>
            </div>
          </div>
        </div>

        {/* Carousel with Names and Roles */}
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <Slider {...settings}>
            {teamData.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center justify-center space-y-4 cursor-pointer transform transition-all hover:scale-105"
              >
                <h3 className="text-2xl font-bold  text-primary dark:text-teal-300">{member.name}</h3>
                <p className="text-lg font-medium text-gray-600 dark:text-gray-300">{member.role}</p>
              </div>
            ))}
          </Slider>
      
        </div>

        {/* Selected Member Description */}
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
            {selectedMember.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;
