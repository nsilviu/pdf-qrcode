import React from "react";
import Image from "next/image";
import FormContainer from "./components/FormContainer";
import { IconBrandFacebook, IconMail, IconPhone } from "@tabler/icons-react";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Form container */}
      <div className="flex flex-col items-center justify-center text-center bg-black px-5 pt-5">
        <a href="#">
          <Image
            src="/logos/pialogo.png"
            className="w-16"
            alt="Porsche Inter Auto Logo"
            width={120}
            height={120}
          />
        </a>
        <h1 className="text-xs font-light p-5 text-white">
          Porsche Inter Auto
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center px-2">
        <FormContainer />
      </div>
      <footer className="bg-gray-900 text-gray-400">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs audi font-light mb-5">
            &copy; {new Date().getFullYear()} Porsche Inter Auto Romania. All
            rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="mailto:pia@porsche.ro"
              className="hover:text-white transition"
            >
              <IconMail className="h-6 w-6" />
            </a>
            <a href="tel:+0219229" className="hover:text-white transition">
              <IconPhone className="h-6 w-6" />
            </a>
            <a
              href="https://facebook.com/piaromania"
              className="hover:text-white transition"
            >
              <IconBrandFacebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
