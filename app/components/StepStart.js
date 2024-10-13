import React from "react";
import { IconArrowRight } from "@tabler/icons-react";

const StepStart = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Text Block */}

      {/* Button */}
      <button
        onClick={onNext}
        className="flex flex-col items-center justify-center p-4 w-52 bg-black text-white shadow-lg hover:bg-[#f50537] transition duration-300 ease-in-out transform hover:scale-110"
      >
        <span className="text-xl mb-1">Start</span>
        <IconArrowRight className="w-8 h-8" />
      </button>
    </div>
  );
};

export default StepStart;
