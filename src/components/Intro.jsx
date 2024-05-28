import React from "react";

const Intro = () => {
  return (
    <div className="sticky top-0 flex items-center justify-center w-full h-screen px-4 pt-9 bg-base-100 text-neutral-content">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="mb-5 text-3xl font-bold md:text-5xl font-PrimaryFont">
          SALES ANALYSIS
        </h1>
        <div className=" divider"></div>
        <p className="mb-5 text-xl md:text-2xl font-SecondaryFont">
          We will be doing Data Analysis on the sales data provided by a online
          electronics store,the provided dataset holds the key to unlocking a
          wealth of insights and knowledge. We are poised to unravel patterns,
          trends, and valuable business intelligence. We'll delve deep into
          understanding customer purchasing behavior, popular products, sales
          trends, and geographic distribution of our orders. Through meticulous
          examination and strategic analysis, we aim to empower our data-driven
          decision-making and a competitive edge in the market. Welcome to the
          journey of data analysis, where we turn raw data into actionable
          information for the future success.
        </p>
      </div>
    </div>
  );
};

export default Intro;
