// FormContainer.js
"use client";
import React, { useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import StepProgressBar from "./StepProgressBar";
import StepContactDetails from "./StepContactDetails"; // Step 3
import StepStart from "./StepStart";
import StepSession from "./StepSession";
import Image from "next/image";

// Dynamically import the GoogleReCaptchaProvider with SSR disabled
const GoogleReCaptchaProvider = dynamic(
  () =>
    import("react-google-recaptcha-v3").then(
      (mod) => mod.GoogleReCaptchaProvider
    ),
  { ssr: false }
);

const initialFormData = {
  brand: "",
  dealership: "",
  model: "",
  newOrUsed: "Noua",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
  contactMethod: [], // Initialize as an empty array for multiple options
  consent: true,
};

const FormContent = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(initialFormData);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleContactMethodChange = (updatedContactMethods) => {
    setFormData({
      ...formData,
      contactMethod: updatedContactMethods,
    });
  };

  const handleOptionSelect = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      console.log("Execute reCAPTCHA not yet available");
      return;
    }

    const captchaToken = await executeRecaptcha("submit");

    if (!captchaToken) {
      console.error("No captcha token provided");
      return;
    }

    handleSubmit(captchaToken);
  };

  const handleSubmit = async (captchaToken) => {
    if (!captchaToken) {
      console.error("No captcha token provided");
      return;
    }

    console.log("Submitting the form...");
    setLoading(true);

    try {
      console.log("Form Data:", formData);
      console.log("Captcha Token Sent:", captchaToken);

      const response = await axios.post("https://daune.pia.ro/api/send-email", {
        formData,
        captchaToken,
      });
      console.log("Response from server:", response.data);

      setFormSubmitted(true);
      setFormData(initialFormData);
      setStep(3); // Final step
      setErrors({});
      setTimeout(() => {
        window.location.reload(); // This will refresh the page after 3 seconds
      }, 2000);
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("Form submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return <StepStart onNext={handleNext} />;
      case 1:
        return (
          <StepSession
            formData={formData}
            handleInputChange={handleInputChange}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <StepContactDetails
            formData={formData}
            handleInputChange={handleInputChange}
            handleContactMethodChange={handleContactMethodChange}
            errors={errors}
            loading={loading}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white shadow-xl w-full max-w-lg">
      <div className="-top-60 left-0 w-full overflow-hidden">
        <div className="relative w-full h-[100px] overflow-hidden">
          <div className="absolute inset-0 transform -translate-y-1/2">
            <Image
              src="/logos/audi_light.svg" // Path to your logo
              alt="Audi Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="text-sm px-10 mb-5 text-left">
          {" "}
          {/* Corrected className and added margin */}
          <h1
            className="text-4xl font-bold font-audi"
            style={{ fontWeight: 700 }}
          >
            Audi
          </h1>
          <h1 className="font-audi">Perfect sincronizat cu tine.</h1>{" "}
          {/* Added font-audi */}
        </div>
      </div>
      <StepProgressBar step={formSubmitted ? 3 : step} />
      {/* Logo positioned at the top */}

      {formSubmitted ? (
        <div className="text-center">
          <h2 className="text-xl font-bold">
            Formularul a fost trimis cu succes.
          </h2>
          <p>
            Vă mulțumim! În cel mai scurt timp veți fi contactat de un coleg
            specialist vânzări.
          </p>
        </div>
      ) : (
        <form onSubmit={handleFormSubmission}>
          {renderStep()}
          <div className="mt-4 flex justify-between">
            {/* Înapoi button */}
            {step > 0 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="px-4 py-2 bg-white m-6 w-28 text-black border border-black hover:bg-black hover:text-white"
              >
                Înapoi
              </button>
            ) : (
              <div className="invisible px-4 py-2" />
            )}
            {/* Înainte button */}
            {step > 0 && step < 2 && (
              <button
                type="button"
                onClick={handleNext}
                className="px-4 py-2 bg-black m-6 w-28 text-white hover:bg-gray-600"
              >
                Înainte
              </button>
            )}
            {/* Trimite button */}
            {step === 2 && (
              <button
                type="submit"
                className="px-4 py-2 bg-[#f50537] m-6 w-28 text-white hover:bg-white hover:text-black hover:border-black hover:border"
                disabled={loading}
              >
                {loading ? "Se trimite..." : "Trimite"}
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

const FormContainer = () => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY}
    >
      <FormContent />
    </GoogleReCaptchaProvider>
  );
};

export default FormContainer;
