import React from "react";

const Footer = () => {
  return (
    <div className="sticky top-0 flex items-center justify-center w-full h-screen px-4 pt-9 bg-base-100 text-neutral-content">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="mb-5 text-3xl font-medium md:text-5xl font-PrimaryFont">
          THANK YOU
        </h1>
        <p className="mb-5 text-xl md:text-2xl font-SecondaryFont">
          Data analysis isn't just a process; it's the compass guiding us into a
          future of informed choices and continuous improvement.
        </p>
        <p className="mb-5 text-xl md:text-2xl font-NameFont text-primary">
          ~MANU VERMA~
        </p>
      </div>
    </div>
  );
};

export default Footer;
