import React from "react";

const BorrowingPowerCalculator = () => {
  return (
    <div className="w-full bg-gray-100">
      {/* Full-Width Banner */}
      <div className="w-full bg-gradient-to-r from-primary to-secondary-200 py-12  text-white text-center">
        <h1 className="text-3xl font-bold mt-12">Borrowing Power Calculator</h1>
        <p className="text-lg mt-1">Find out how much you can borrow with this easy-to-use tool.</p>
      </div>

      {/* Calculator Section */}
      <div className="max-w-3xl mx-auto bg-white mt-6 p-6 border-primary border-3 ">
        <iframe
          className="w-full h-[750px] border-none"
          id="Borrowing_Power_Calculator"
          src="https://www.visionabacus.net/Tools/B3/SuiteA/Z200/MFAA/Borrowing_Power_Calculator/BlueGreen"
          title="Borrowing Power Calculator"
        ></iframe>
      </div>
    </div>
  );
};

export default BorrowingPowerCalculator;
