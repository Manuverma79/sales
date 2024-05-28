import React from "react";

const Hero = () => {
  return (
    <div className="sticky top-0 min-h-screen hero bg-center bg-cover bg-no-repeat bg-[url('https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')] bg-gray-700 bg-blend-multiply">
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="flex items-center justify-center w-full gap-1 p-4 text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold font-PrimaryFont">
            Welcome to Manu's Data Analysis Hub
          </h1>
          <p className="mb-5 text-2xl font-SecondaryFont">
            Where numbers come to life!
          </p>
          <p className="mb-5 text-lg font-SecondaryFont">
            I specialize in the art of transforming raw data into meaningful
            insights. Whether you're seeking business intelligence, data-driven
            decisions, or simply a fresh perspective on your information, I'm
            here to make sense of the numbers. Explore the world of data through
            my analytical lens and discover the stories that lie within. Welcome
            to the power of data analysis, simplified.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
