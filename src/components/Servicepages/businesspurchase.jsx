import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import {Link} from "react-router-dom"

const steps = [
  { 
    title: "Find the Right Business", 
    description: (
      <ul className="list-disc text-justify pl-6">
        <li>Research and identify a business that aligns with your financial capacity, industry preference, and long-term goals.</li>
        <li>Evaluate market trends, business performance, and future growth potential before making a decision.</li>
      </ul>
    ),
    icon: <CheckCircle size={24} />,
    image: "/images/img51.jpg"
  },
  { 
    title: "Negotiate the Price & Sign Heads of Agreement", 
    description: (
      <ul className="list-disc text-justify pl-6">
        <li>Discuss the purchase price, payment structure, and key terms with the seller.</li>
        <li>Once both parties agree on the major terms, sign a Heads of Agreement, which serves as a preliminary contract outlining the deal.</li>
      </ul>
    ),
    icon: <CheckCircle size={24} />,
    image: "/images/img53.jpg"
  },
  { 
    title: "Engage Solicitors", 
    description: (
      <ul className="list-disc text-justify pl-6">
        <li>Hire experienced solicitors to handle the legal aspects of the transaction.</li>
        <li>They will review agreements, conduct legal due diligence, and ensure compliance with business laws to protect your interests.</li>
      </ul>
    ),
    icon: <CheckCircle size={24} />,
    image: "/images/img54.jpg"
  },
  { 
    title: "Finance Approval", 
    description: (
      <ul className="list-disc text-justify pl-6">
        <li>Secure funding by obtaining loan pre-approval or confirming investment sources.</li>
        <li>Work with lenders, financial advisors, or investors to finalize financing for the business purchase.</li>
      </ul>
    ),
    icon: <CheckCircle size={24} />,
    image: "/images/img55.jpg"
  },
  { 
    title: "Complete Financial & Legal Due Diligence", 
    description: (
      <ul className="list-disc text-justify pl-6">
        <li>Conduct an in-depth analysis of the business’s financial records, contracts, tax obligations, employee agreements, and potential risks.</li>
        <li>This step ensures transparency and verifies that the business is a viable investment.</li>
      </ul>
    ),
    icon: <CheckCircle size={24} />,
    image: "/images/img56.jpg"
  },
  { 
    title: "Exchange of Contracts", 
    description: (
      <ul className="list-disc text-justify pl-6">
        <li>Once due diligence is completed, both parties sign the final contract, legally binding them to the transaction.</li>
        <li>A deposit may be required at this stage, and the agreed-upon terms become official.</li>
      </ul>
    ),
    icon: <CheckCircle size={24} />,
    image: "/images/img57.png"
  },
  { 
    title: "Settlement", 
    description: (
      <ul className="list-disc text-justify pl-6">
        <li>Finalize the payment, transfer ownership, and ensure all necessary documents are signed.</li>
        <li>The seller hands over control of the business, and you officially become the new owner.</li>
      </ul>
    ),
    icon: <CheckCircle size={24} />,
    image: "/images/img58.jpeg"
  },
  { 
    title: "Hand Over", 
    description: (
      <ul className="list-disc text-justify pl-6">
        <li>Transition into ownership with the seller providing necessary training, support, and business records.</li>
        <li>Ensure a smooth takeover by understanding operations, meeting staff, and implementing any changes.</li>
      </ul>
    ),
    icon: <CheckCircle size={24} />,
    image: "/images/img59.jpg"
  },
];

export default function BusinessPurchaseSteps() {
  return (
    <>
    <span id="businesspurchase"></span>
    <div className="min-h-screen flex flex-col mt-6 items-center justify-center space-between bg-white text-black p-6 dark:bg-gray-900 dark:text-white">
      <h2 className="text-4xl mt-12 font-philosopher font-bold text-center text-primary mb-12 dark:text-white">
        Business Purchase Journey
      </h2>
      {/* Desktop Image */}
<img src="/images/1.png" alt="Desktop Image" className="hidden sm:block" />

{/* Mobile Image */}
<img src="/images/4.png" alt="Mobile Image" className="sm:hidden" />
   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-gray-100 p-8 shadow-lg border border-gray-300 hover:shadow-2xl transition-shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-64 object-cover mb-4"
              />
              <div className="mb-4 text-primary">{step.icon}</div>
              <h2 className="text-2xl font-semibold text-primary dark:text-gray-200">{step.title}</h2>
              <div className="text-gray-600 mt-4 leading-relaxed dark:text-gray-400">
                {step.description}
              </div>
            </div>
          </motion.div>
        ))}
        
      </div>
      <section className="relative  mt-12 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-lg overflow-hidden mb-16">
      <div className="z-10 relative text-center lg:px-16 lg:py-20 px-8 py-12">
          <h2 className="text-4xl font-extrabold font-philosopher text-primary dark:text-teal-300">
            V3Finance adds value to your journey
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
          At V3 Finance, we’re committed to helping you make confident, informed decisions at every stage of the business purchase journey. Whether you’re buying your first business or expanding your portfolio, our expertise, personalized advice, and reliable partnerships will help you achieve your business goals with ease.
          </p>
          <Link to="/inquiry">
            <button className="mt-6 bg-primary dark:bg-teal-600 text-white py-3 px-8 shadow-lg hover:bg-primary-dark dark:hover:bg-teal-500 transition-transform transform hover:scale-105">
              Get your business today!
            </button>
          </Link>
        </div>
        </section>
    </div>
    </>
  );
}  