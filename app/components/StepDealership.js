// StepDealership.js
import React from "react";
import { dealerships } from "../constants";

const StepDealership = ({ formData, handleOptionSelect }) => {
  const availableDealerships = dealerships.filter((d) =>
    d.brands.includes(formData.brand)
  );

  return (
    <div className="mb-4 text-center">
      <h1 className="text-xl pb-5">Alegeți distribuitorul dorit</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {availableDealerships.length > 0 ? (
          availableDealerships.map((dealership) => (
            <button
              key={dealership.name}
              type="button"
              onClick={() => handleOptionSelect("dealership", dealership.name)}
              className={`flex flex-col items-center justify-center w-60 h-24 bg-gray-100 rounded-lg hover:bg-gray-200 ${
                formData.dealership === dealership.name
                  ? "ring-2 ring-blue-500"
                  : ""
              }`}
            >
              <span>{dealership.name}</span>
              <span className="text-sm text-gray-500">
                {dealership.address}
              </span>
            </button>
          ))
        ) : (
          <p>Nicio reprezentanță disponibilă pentru marca selectată.</p>
        )}
      </div>
    </div>
  );
};

export default StepDealership;
