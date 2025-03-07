import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [formSent, setFormSent] = useState(false); // State to track success message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2dk23z8', 'template_jolw4rr', form.current, {
        publicKey: 'L5ucgzdMWIwWKcU6q',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setFormSent(true); // Show success message
          form.current.reset(); // Clear the form

          // Hide message after 5 seconds
          setTimeout(() => {
            setFormSent(false);
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <span id="referral"></span>
      <div className="dark:bg-black dark:text-white">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-6xl pt-8 mt-24 mb-12 mx-auto p-6 bg-white dark:bg-gray-800 shadow-md dark:shadow-lg"
        >
          <h2 className="text-4xl text-center font-philosopher text-primary font-bold mb-6 dark:text-white">
            Let us grow together
          </h2>

          {/* Success Message */}
          {formSent && (
            <div className="mb-4 text-secondary-200 dark:text-green-400 text-center font-semibold">
              ✅ Thank you! Your message has been sent successfully.
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <img
                src="/images/img17.jpg"
                alt="Inquiry Image"
                className="w-full shadow-lg"
              />
            </div>
            <div className="flex-1">
              <div className="space-y-2 mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  required
                  className="w-full h-12 px-4 border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:ring-primary dark:focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="space-y-2 mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Enter your email ID"
                  required
                  className="w-full h-12 px-4 border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:ring-primary dark:focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="space-y-2 mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="from_phone"
                  placeholder="Enter your contact number"
                  required
                  className="w-full h-12 px-4 border-2 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:ring-primary dark:focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="space-y-2 mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  required
                  className="w-full h-36 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 resize-none focus:outline-none focus:ring focus:ring-primary dark:focus:ring-teal-500 dark:bg-gray-700 dark:text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-secondary-200 text-white dark:bg-teal-600 dark:hover:bg-teal-500 shadow-lg hover:bg-teal-600 focus:ring-4 focus:ring-teal-300 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
