import React, { useState } from "react";
import ImageModal from "./ImageModal";

const LeftSection = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="sticky top-0 content-center w-full h-screen p-10 bg-base-200 text-neutral-content">
      <div className="flex flex-col max-w-6xl gap-2 mx-auto sm:gap-32 sm:flex-row">
        <div className="m-auto text-2xl font-semibold md:text-5xl text-neutral-content font-PrimaryFont">
          {props.heading}
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="text-right text-neutral-content font-SecondaryFont">
            {props.children}
          </h2>
          <img
            onClick={() => setShowModal(true)}
            className="w-auto h-auto cursor-pointer hover:shadow-md drop hover:shadow-primary rounded-box"
            src={`assets/${props.image}`}
          />
        </div>
      </div>
      {showModal && (
        <ImageModal image={props.image} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default LeftSection;
