import React from "react";

const StepProgressBar = ({ step }) => (
  <div className="w-full bg-gray-200 h-0.5 mb-4 overflow-hidden">
    <div
      className="bg-black h-2.5 transition-all duration-500"
      // Calculate the width based on the current step in a 3-step process
      style={{ width: `${(step / 2) * 100}%` }} // Dividing by 2 because step goes from 0 to 2 (3 steps)
    ></div>
  </div>
);

export default StepProgressBar;
