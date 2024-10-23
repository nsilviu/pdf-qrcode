import Image from "next/image";
import React from "react";
import { sessions } from "../constants";

const StepSession = ({ formData, handleInputChange, onNext }) => {
  return (
    <div className="text-center">
      <h1 className="font-audi mb-10">Alegeți sesiunea de test drive</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {sessions.map((session) => (
          <div
            key={session.id}
            className={`bg-white p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
              formData.session === session.name
                ? "border-2 border-[#f50537]"
                : ""
            }`}
          >
            <h3 className="text-base font-light mb-4">{session.name}</h3>
            <div className="text-xs font-light p-5 ">
              Masini disponibile în această perioada
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              {session.cars.map((car, index) => (
                <div
                  key={index}
                  className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col items-center"
                >
                  <Image
                    src={car.image}
                    alt={car.model}
                    className="object-contain"
                    layout="responsive"
                    width={1}
                    height={1}
                  />
                  <p className="text-center mt-2">{car.model}</p>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                handleInputChange({
                  target: { name: "session", value: session.name },
                });
              }}
              className="mt-4 w-full flex items-center justify-center px-4 py-2 bg-black text-white font-light hover:bg-white hover:border hover:border-black hover:text-black transition-colors duration-300"
            >
              Selectează sesiune
            </button>
          </div>
        ))}
      </div>

      {/* Display selected session */}
      {formData.session && (
        <div className="mt-6 p-2">
          Sesiune selectată: <p className="audi">{formData.session}</p>
        </div>
      )}
    </div>
  );
};

export default StepSession;
