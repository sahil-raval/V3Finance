import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
const CardButton = ({ image, heading, description, onButtonClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative transition-transform duration-300"
    >
      <div className="shadow-lg overflow-hidden bg-white transition-all">
        <img
          src={image}
          alt={heading}
          className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-primary">{heading}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
     
    </motion.div>
  );
};

export default function RecentSettlements() {
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialSettlements = [
    {
      id: 1,
      image: '/images/img24.jpg',
      heading: '',
      description: ' ',
    },
    {
      id: 2,
      image: '/images/img25.jpg',
      heading: '',
      description: '',
    },
    {
      id: 3,
      image: '/images/img27.JPG',
      heading: 'Alucoat Australia',
      description: 'RBA has surprised a lot of economic gurus by giving relief of 25 basis points on the cash rate this week when underlying inflation is still high. Big Daddy is keeping the world leaders on standby with their surprises in international policies every week. Too early to tell whether it’s good or bad. But the pleasant news is all banks have passed on the rates and consumers will have some relief. We continue to support our clients in 2025 by securing the business finance. Alucoat is a great example where we collaborated with a group of clients, helped them with finding a right mentor, lawyer and other professional contacts to help their transition from PAYG to entrepreneurship. And 3 months in the business, the business is already kicking the goals.',
    },
  ];

  const additionalSettlements = [
    {
      id: 4,
      image: '/images/img28.JPG',
      heading: '',
      description: '',
    },
    {
      id: 5,
      image: '/images/img29.jpg',
      heading: '',
      description: '',
    },
    {
      id: 6,
      image: '/images/img30.jpg',
      heading: '',
      description: '',
    },
    {
      id: 7,
      image: '/images/img31.JPG',
      heading: '',
      description: '',
    },
    {
      id: 8,
      image: '/images/img32.JPG',
      heading: '',
      description: '',
    },
    {
      id: 9,
      image: '/images/img33.JPG',
      heading: '',
      description: '',
    },
  ];

  const settlements = showMore ? [...initialSettlements, ...additionalSettlements] : initialSettlements;

  const handleViewMore = () => {
    setLoading(true);
    setTimeout(() => {
      setShowMore(true);
      setLoading(false);
    }, 500); // Simulate a loading state before showing more content
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-teal-50 mx-auto dark:from-gray-800 dark:to-gray-900 pt-12 px-4">
        {/* Display Confetti at the start of the page */}
        <Confetti
          numberOfPieces={200}
          recycle={false}
          className="fixed top-0 left-0 w-full h-full pointer-events-none"
        />

        <h2 className="text-4xl mt-12 font-bold font-philosopher text-center text-primary dark:text-white">
          Recent Settlements
        </h2>
        <p className="text-xl text-primary font-bold  text-center mt-6 dark:text-gray-300 mb-6">
          Celebrating our client's success stories!
        </p>

        {/* Grid Layout with Padding on the sides */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {settlements.map((settlement) => (
            <CardButton
              key={settlement.id}
              image={settlement.image}
              heading={settlement.heading}
              description={settlement.description}
              onButtonClick={handleViewMore}
            />
          ))}
        </div>

        <div className="text-center mt-6">
          {loading ? (
            <p className="text-primary">Loading more success stories...</p>
          ) : (
            !showMore && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-secondary-200 hover:bg-secondary-100 text-white px-6 py-3 shadow-md transition-all duration-300"
                onClick={handleViewMore}
              >
                View More Stories
              </motion.button>
            )
          )}
        </div>
      </div>
    </>
  );
}
