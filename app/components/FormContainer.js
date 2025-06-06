// FormContainer.js
"use client";
import React, { useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import StepProgressBar from "./StepProgressBar";
import StepContactDetails from "./StepContactDetails"; // Step 3
import StepStart from "./StepStart"; // Step 0
import StepModelSelection from "./StepModelSelection"; // Step 1
import Image from "next/image";

// Dynamically import the GoogleReCaptchaProvider with SSR disabled
const GoogleReCaptchaProvider = dynamic(
  () =>
    import("react-google-recaptcha-v3").then(
      (mod) => mod.GoogleReCaptchaProvider
    ),
  { ssr: false }
);

// Initial form data with all required fields
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
  consent: false,
  session: "",
  selectedModel: "", // Added session field for audiform.pia.ro
};

const FormContent = () => {
  const [step, setStep] = useState(1);
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

  // Validate form data before submission
  const validateFormData = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "phone",
      "email",
      "contactMethod",
      "consent",
    ];

    // Include 'session' as a required field for 'audiform.pia.ro'
    requiredFields.push("selectedModel");

    const errors = {};

    requiredFields.forEach((field) => {
      if (
        !formData[field] ||
        (Array.isArray(formData[field]) && formData[field].length === 0)
      ) {
        errors[field] = "Acest câmp este obligatoriu.";
      }
    });

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    if (!validateFormData()) {
      alert("Vă rugăm să completați toate câmpurile obligatorii.");
      return;
    }

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

      const response = await axios.post(
        "https://api.pia.ro/send-email-audiform",
        {
          formData,
          captchaToken,
        }
      );
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
      if (error.response && error.response.data && error.response.data.error) {
        alert(`Form submission failed: ${error.response.data.error}`);
      } else {
        alert("Form submission failed. Please try again.");
      }
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
          <StepModelSelection
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
    <div className="bg-white shadow-xl w-full max-w-lg min-h-screen">
      {/* Logo and header */}
      <div className="left-0 w-full overflow-hidden">
        <div className="relative w-full h-[100px] ">
          <div className="absolute inset-0 transform mb-10"></div>
        </div>
        <div className="text-sm px-10 mb-5 text-center">
          <h1
            className="text-4xl font-bold font-audi"
            style={{ fontWeight: 700 }}
          >
            Raiffeisen Leasing
          </h1>
        </div>
      </div>
      {renderStep()}
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
