// StepBrand.js
import React from "react";
import { brands } from "../constants";
import Image from "next/image";

const StepBrand = ({ formData, handleOptionSelect }) => {
  return (
    <div className="mb-4 text-center">
      <h1 className="text-xl pb-5">Alegeți marca dorită pentru programare</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {brands.map((brand) => (
          <button
            key={brand.name}
            type="button"
            onClick={() => handleOptionSelect("brand", brand.name)}
            className={`flex items-center justify-center w-24 h-24 bg-gray-100 rounded-lg hover:bg-gray-200 ${
              formData.brand === brand.name ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              className="w-16"
              height={300}
              width={300}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepBrand;
