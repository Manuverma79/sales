import React, { useState } from "react";
import ImageModal from "./ImageModal";

const RightSection = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="sticky top-0 content-center w-full h-screen p-10 bg-base-100 text-neutral-content">
      <div className="flex flex-col-reverse max-w-6xl gap-2 mx-auto sm:gap-32 sm:flex-row">
        <div className="flex flex-col gap-10">
          <h2 className="text-neutral-content font-SecondaryFont">
            {props.children}
          </h2>
          <img
            onClick={() => setShowModal(true)}
            className="w-auto h-auto cursor-pointer hover:shadow-md drop hover:shadow-primary rounded-box"
            src={`src/assets/${props.image}`}
          />
        </div>
        <div className="m-auto text-2xl font-semibold text-right md:text-5xl text-neutral-content font-PrimaryFont">
          {props.heading}
        </div>
      </div>
      {showModal && (
        <ImageModal image={props.image} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default RightSection;
