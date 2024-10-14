// FormContainer.js
"use client";
import React, { useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import StepProgressBar from "./StepProgressBar";
import StepContactDetails from "./StepContactDetails";
import StepStart from "./StepStart";
import StepSession from "./StepSession";
import Image from "next/image";

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
  contactMethod: [],
  consent: true,
  session: "", // Added session field
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

  const validateFormData = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "phone",
      "email",
      "session",
      "contactMethod",
      "consent",
    ];
    const errors = {};

    requiredFields.forEach((field) => {
      if (
        !formData[field] ||
        (Array.isArray(formData[field]) && formData[field].length === 0)
      ) {
        errors[field] = "This field is required.";
      }
    });

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    if (!validateFormData()) {
      alert("Please fill out all required fields.");
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
      setStep(3);
      setErrors({});
      setTimeout(() => {
        window.location.reload();
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
      {/* ... rest of your component */}
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
