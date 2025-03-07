import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Calculator = () => {
  const navigate = useNavigate();
  const calculators = [
    {
      name: "Borrowing Power Calculator",
      description: "Calculate your borrowing power based on income and expenses.",
      route: "/bpc",
    },
    {
      name: "Loan Repayment Calculator",
      description: "Estimate your monthly loan repayments.",
      route: "/lrc",
    },
    {
      name: "Stamp Duty Calculator",
      description: "Find out how much stamp duty you'll need to pay.",
      route: "/sdc",
    },
    {
      name: "Offset Calculator",
      description: "See how an offset account can save you interest.",
      route: "/oc",
    },
    {
      name: "LMI Calculator",
      description: "Determine if you'll need to pay Lender’s Mortgage Insurance.",
      route: "/lmi",
    },
  ];

  return (
    <>
    <span id="/calculator"></span>
    <h2 className="text-4xl mt-24 font-philosopher font-bold text-center text-primary mb-12 dark:text-white">
        Calculators
      </h2>
    <div className="min-h-screen dark:bg-gray-900 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {calculators.map((calc, index) => (
          <div
          key={index}
          className="p-6 bg-gray-100 bg-center bg-cover  dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow "
        >
            <h2 className="text-xl font-semibold mb-4 text-primary dark:text-white">
              {calc.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {calc.description}
            </p>
            <Link to={calc.route}>
              <button
                onClick={() => navigate(calc.route)}
                className="px-4 py-2 bg-secondary-100 dark:bg-primary text-white font-medium  hover:bg-primary dark:hover:bg-secondary-100 transition-colors"
              >
                Go to Calculator
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};
export default Calculator;
