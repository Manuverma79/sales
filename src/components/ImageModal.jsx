import { AiOutlineClose } from "react-icons/ai";

const ImageModal = ({ image, onClose }) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative flex flex-col justify-center w-5/6 bg-base-100 rounded-xl">
        <AiOutlineClose
          className="absolute text-3xl text-red-600 cursor-pointer right-6 top-6"
          onClick={onClose}
        />
        <img
          className="w-auto h-auto rounded-box"
          src={`src/assets/${image}`}
        />
      </div>
    </div>
  );
};

export default ImageModal;
