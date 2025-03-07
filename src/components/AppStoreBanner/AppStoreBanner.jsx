import React from "react";

const bannerImg = {
  backgroundImage: `url(/images/img4.jpg)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStoreBanner = () => {
  return (
    <div className="container">
      <div
        className="text-black py-12 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl bg-cover bg-center"
        style={bannerImg}
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto text-center">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-semibold font-serif"
            >
              Let's Get Started!
            </h1>
            <p
              data-aos="fade-up"
              className="text-lg sm:px-20 text-gray-700"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
              magnam harum accusantium odit?
            </p>
            <div
              data-aos="fade-up"
              className="flex flex-wrap justify-center items-center gap-6"
            >
             
            </div>
            <div
              data-aos="fade-up"
              className="mt-8"
            >
              <a
                href="/inquiry"
                className="inline-block px-6 py-3 text-white bg-teal-600 hover:bg-teal-700 rounded-lg font-semibold transition duration-300"
              >
                Inquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;
