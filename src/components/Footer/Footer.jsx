import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaRegClock,
  FaPhone // Clock Icon
} from "react-icons/fa";
import { link } from "framer-motion/client";

const FooterLinks = [
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Referral",
    link: "/referral",
  },
  {
    title: "Inquiry",
    link: "/inquiry",
  },
  {
    title: "Calculator",
    link: "/calculator",
  },
  
];

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-dark  rounded-t-3xl">
      <section className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className="py-8 px-4">
            <Link to={"/"}>
            <img className="mb-10" src={Logo} alt="Logo" />
            </Link>
            <p className="text-m text-justify text-gray-500 dark:text-gray-200">
            "We understand that every financial situation is unique. That's why we offer tailored solutions to meet your specific needs."{" "}
            </p>
            <br />
             {/* Social Handles */}
             <div className="flex items-center gap-3 mt-6">
                  <a href="https://www.instagram.com/v3finance1234?igsh=MTFvMnUwdnR4cmI0bQ%3D%3D&utm_source=qr">
                    <FaInstagram className="text-3xl text-secondary-100 hover:text-primary duration-300" />
                  </a>
                  <a href="https://www.facebook.com/p/V3-Finance-100089280325677/">
                    <FaFacebook className="text-3xl text-secondary-100 hover:text-primary duration-300" />
                  </a>
                  <a href="https://www.linkedin.com/company/105014309/admin/dashboard/">
                    <FaLinkedin className="text-3xl text-secondary-100 hover:text-primary duration-300" />
                  </a>
                </div>
          </div>

          {/* Links */}
          
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="">
            
              <div className="py-8 px-4">
                <Link to="/calculator">
                <h1 className="sm:text-2xl text-xl font-bold text-primary sm:text-left text-justify mb-5">
                  Calculators
                </h1>
                </Link>
                <ul className={`flex flex-col gap-5`}>
                <Link to="/bpc">
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                      
                      <span>Borrowing Power Calculator</span>
                    </li>
                    </Link>
                    <Link to="/lrc">
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                      
                      <span>Loan Repayment Calculator</span>
                    </li>
                    </Link>
                    <Link to="/sdc">
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                    
                      <span>Stamp Duty Calculator</span>
                    </li>
                    </Link>
                    <Link to="/oc">
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                     
                      <span>Offset Calculator</span>
                    </li>
                    </Link>
                    <Link to="/lmi">
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                    
                      <span>How Long to Repay Calculator</span>
                    </li>
                    </Link>
                </ul>
               
              </div>
              
            </div>
            
            <div className="">
              <div className="py-8 px-4">
              <h1 className="sm:text-2xl text-xl font-bold text-primary sm:text-left text-justify mb-5">
    Links
  </h1>

  <ul className="flex flex-col gap-5">
    {FooterLinks.map((linkItem, index) => (
      <li key={index} className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
        <Link to={linkItem.link}>
          <span>{linkItem.title}</span>
        </Link>
      </li>
     
    ))}
    <Link to={"/privacy"}>
     <li  className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
        <span>Privacy Policy</span>
      </li>
      </Link>
  </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-2xl text-xl text-primary font-bold sm:text-left text-justify mb-5">
                  Contact
                </h1>
                {/* Contact Details */}
                <div className="flex items-center gap-3">
                  <FaLocationArrow className="text-xl text-primary" />
                  <p> Unit 310/89 Overton Rd, Williams Landing VIC 3027</p>
                </div>

                <div className="flex items-center gap-2 mt-6">
                  <FaRegClock className="text-xl text-primary" />
                  <p className="text-gray-500 dark:text-gray-200">
                    <strong>Mon - Fri:</strong> 08:00 AM to 06:00 PM
                    <br />
                    <strong>Sat:</strong> 08:00 AM to 03:00 PM
                    <br />
                    <strong>Sun:</strong> Closed
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-3">
  <FaPhone className="text-xl text-primary" style={{ transform: 'scaleX(-1)' }} />
  <p>(03) 9988 1088</p>
</div>

              </div>
            </div>
          </div>
        </div>
        <div className="bottom-0 left-0 w-full text-sm font-bold text-gray-500 text-center py-2">
        <h2>ABN – 57 304 642 992</h2>
        <h2>© 2025 V3 FINANCE – AUSTRALIAN CREDIT LICENCE 391237</h2>
      </div>
      </section>
    </div>
  );
};

export default Footer;
