import Image from "next/image";
import React from "react";
import { carModels } from "../constants";
import Link from "next/link";

const StepModelSelection = ({ formData, handleInputChange, onNext }) => {
  return (
    <div className="text-center m-4">
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
            className={`w-full max-w-xs flex flex-col align-middle items-center bg-white p-4 rounded-sm m-4 shadow-lg hover:shadow-xl transition-shadow duration-300 `}
          >
            <div className="h-32 object-center overflow-hidden">
              <Image
                src={car.image}
                alt={car.model}
                className="object-fit rounded-md "
                width={300}
                height={300}
              />
            </div>
            <h3 className="text-xs font-light mt-4 text-center h-10 flex items-center justify-center">
              {car.model}
            </h3>
            <Link href={car.link}>
              <div className=" flex bg-[#B3CEE8] px-4 py-3 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <span className="text-[#273773] font-thin">
                  Vezi configuratia
                </span>
              </div>
            </Link>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepModelSelection;
