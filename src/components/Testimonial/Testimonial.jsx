import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    name: "Ramesh Pindoriya",
    description:
      "Working with Kartik Mashar was an incredible experience! They took the time to understand my unique business needs and provided clear guidance on the best loan options available. The process was smooth and efficient, and I was impressed by their professionalism and knowledge. I especially appreciated how Kartik was always available to answer my questions throughout the business loan process. I highly recommend V3 Finance to anyone looking for personalized and reliable service.",
    aosDelay: "0",
  },
  {
    name: "Beshoy Mekheel",
    description:
      "Kartik is a perfect example for the successful business broker, very understanding the situations of small businesses, perfect communication, always in time, and whatever he promises he achieved Honestly couldn’t ask for more Highly recommended 👍👍👍",
    aosDelay: "300",
  },
  {
    name: "Madelaine Karatli",
    description:
      "I had an excellent experience working with Kartik as my finance broker. He went above and beyond to help me secure a business loan with an affordable rate. Kartik's expertise and dedication were evident throughout the entire process. He was proactive in finding the best options tailored to my needs and ensured a smooth approval process. I greatly appreciate his professionalism and commitment to providing quality service. If you're looking for a finance broker who delivers results with affordability in mind, I highly recommend Kartik 👍",
    aosDelay: "600",
  },
  {
    name: "Jigar Shah",
    description:
      "Can not rate V3 enough to anyone and everyone.  We run a small business where they guided us every single step in the process with clarity( be it business finance or mortgage).   We got couple of approvals in less than 24 hours where our previous financial planner took more than 6 or sometime 8 weeks to get results.  Super quick and transparent service.  Also our office staff is equally happy to work with V3 finance team with similar work.  Keep up the good work team…",
    aosDelay: "900",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000, 
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white py-14 sm:pb-24">
      <div className="container mx-auto lg:w-[50%] px-6 lg:px-12">
        <div className="space-y-4 pb-12 text-center">
          <h2
            data-aos="fade-up"
            className="text-4xl font-bold font-philosopher text-primary dark:text-teal-300 "
          >
            What Our Clients Say About Us
          </h2>
          <p
            data-aos="fade-up"
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Discover the impact we’ve made on our clients. Their stories speak
            volumes about our commitment to excellence and satisfaction.
          </p>
        </div>

        <Slider {...settings} className="w-full">
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={testimonial.aosDelay}
              className="card p-6  dark:bg-gray-800 bg-white  border-4 border-primary transform transition-all duration-300 rounded-xl"
            >
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-full  bg-gradient-to-r from-secondary-200 via-secondary-100 to-primary flex items-center justify-center">
                  <span className="text-white text-3xl font-semibold uppercase">
                    {testimonial.name.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
              </div>

              <div className="text-xl text-yellow-400 mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                "{testimonial.description}"
              </p>
              <p className="font-semibold text-lg text-primary dark:text-teal-300">
                {testimonial.name}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
