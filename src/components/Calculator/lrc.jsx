import React from "react";
import { Link  } from "react-router-dom";
const LoanRepaymentCalculator = () => {
  return (
    <div className="w-full bg-gray-100">
    {/* Full-Width Banner */}
    <div className="w-full bg-gradient-to-r from-primary to-secondary-200 py-12 text-white text-center">
      <h1 className="text-3xl font-bold mt-12">Loan Repayment Calculator</h1>
      <p className="text-lg mt-1">Find out how much you can borrow with this easy-to-use tool.</p>
    </div>
    <div className="max-w-3xl mx-auto bg-white mt-6 p-6 ">
      <iframe
        className="VisiCalcClass"
        id="Loan_Repayment_Calculator"
        src="https://www.visionabacus.net/Tools/B3/SuiteA/Z200/MFAA/Loan_Repayment_Calculator/BlueGreen"
        frameBorder="0"
        scrolling="no"
        title="Loan Repayment Calculator"
      ></iframe>
    </div>
    </div>
  );
};

export default LoanRepaymentCalculator;
