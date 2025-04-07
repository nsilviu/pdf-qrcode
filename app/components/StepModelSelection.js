import Image from "next/image";
import React from "react";
import { carModels } from "../constants";
import Link from "next/link";

const StepModelSelection = ({ formData, handleInputChange, onNext }) => {
  return (
    <div className="text-center">
      <h1 className="font-audi mb-10">Descopera toate modelele</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
        {carModels.map((car) => (
          <button
            key={car.id}
            type="button"
            onClick={() => {
              handleInputChange({
                target: { name: "selectedModel", value: car.model },
              });
            }}
            className={`w-full max-w-xs flex flex-col align-middle items-center bg-white p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 `}
          >
            <Image
              src={car.image}
              alt={car.model}
              className="object-contain"
              width={200}
              height={150}
            />
            <h3 className="text-xs font-light mt-4 text-center h-10 flex items-center justify-center">
              {car.model}
            </h3>
            <Link href={car.link}>
              <div className="bg-black flex px-4 py-3">
                <span className="text-white">Vezi oferta</span>
              </div>
            </Link>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepModelSelection;
