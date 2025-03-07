import React, { useState } from "react";
import emailjs from "emailjs-com";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    enquiryType: "",
    reference: "",
    postCode: "",
    message: "",
  });

  const [formSent, setFormSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2dk23z8",
        "template_4uonqu6",
        e.target,
        "L5ucgzdMWIwWKcU6q"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSent(true);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            enquiryType: "",
            reference: "",
            postCode: "",
            message: "",
          });
          e.target.reset(); // Optional: Resets the form in case of uncontrolled inputs
        
        },
        (error) => {
          console.log(error.text);
          setFormSent(false);
        }
      );
  };
  return (
    <>
      <span id="inquiry"></span>
      <div className="max-w-6xl mx-auto pt-8 mt-24 mb-12 p-6 bg-white dark:bg-gray-800 shadow-lg dark:shadow-lg">
        <h2 className="text-4xl font-philosopher text-center text-primary font-bold mb-6 dark:text-white">
          Inquiry Form
        </h2>
        {formSent && (
          <div className="mb-4 text-secondary-200  dark:text-green-400 text-center font-semibold">
          ✅ Thank you! Your inquiry has been sent successfully.
        </div>
        )}
        {/* Flex container for image and form */}
        <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-1">
            <img
              src="/images/img15.jpg" // Replace with your image URL
              alt="Inquiry Image"
              className="w-auto h-auto shadow-lg"
            />
          </div>
          <div className="flex-1">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="w-full">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-primary dark:focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-primary dark:focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-primary dark:focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-primary dark:focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="enquiryType"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Enquiry Type
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-primary dark:focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
                    required
                  >
                    <option value="">Select Enquiry Type</option>
                    <option value="First Home">First Home</option>
                    <option value="Refinance">Refinance</option>
                    <option value="Investment Loans">Investment Loans</option>
                    <option value="Business Purchase">Business Purchase</option>
                    <option value="Business Loans">Business Loans</option>
                    <option value="Commercial Loans">Commercial Property Loans</option>
                    <option value="Asset Finance">Asset Finance</option>
                    <option value="Private Equity Loan">Private Equity Loan</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="reference"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Where did you hear about us?
                  </label>
                  <select
                    id="reference"
                    name="reference"
                    value={formData.reference}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-primary dark:focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
                    required
                  >
                    <option value="">Select Reference</option>
                    <option value="Google">Google</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Friend/Family">Friend/Family</option>
                    <option value="Advertisement">Advertisement</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="postCode"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Post Code
                  </label>
                  <input
                    type="text"
                    id="postCode"
                    name="postCode"
                    value={formData.postCode}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-primary dark:focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter your post code"
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-primary focus:ring-4 transition duration-300 dark:focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
                    rows="4"
                    placeholder="Enter your message"
                    required
                  />
                </div>
              </div>

              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-secondary-200 text-white dark:bg-teal-600 dark:hover:bg-teal-500 shadow-lg hover:bg-teal-600 focus:ring-4 focus:ring-teal-300 transition duration-300"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default InquiryForm;
