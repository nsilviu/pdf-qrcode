"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie"; // Import js-cookie for cookie handling

const COOKIE_NAME = "cookies_consent"; // Name of the consent cookie

const ConsentDialog = () => {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    // Check if the consent cookie exists
    const consentCookie = Cookies.get(COOKIE_NAME);
    console.log("Current cookie consent status:", consentCookie);

    if (consentCookie) {
      // Consent cookie exists, update consent status
      const consentObject = JSON.parse(consentCookie);
      updateConsentStatus(consentObject);
      setShowDialog(false);
    } else {
      // Show the consent dialog if no consent is stored
      setShowDialog(true);
    }
  }, []);

  const updateConsentStatus = (consentObject) => {
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", consentObject);
    } else {
      // If gtag is not available, queue the command
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(() => {
        window.gtag("consent", "update", consentObject);
      });
    }
  };

  const handleConsent = (consentObject) => {
    // Store the consent object as a JSON string in the cookie
    Cookies.set(COOKIE_NAME, JSON.stringify(consentObject), {
      expires: 365, // Cookie expires in 365 days
      path: "/", // Cookie accessible throughout the site
      sameSite: "None", // Allows cross-site cookie access
      secure: true, // Cookie only sent over HTTPS
    });

    console.log("Cookie consent updated to:", consentObject);
    setShowDialog(false);

    // Update consent using gtag
    updateConsentStatus(consentObject);
  };

  const handleAccept = () => {
    const consentObject = {
      ad_storage: "granted",
      analytics_storage: "granted",
      functionality_storage: "granted",
      personalization_storage: "granted",
      security_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    };

    handleConsent(consentObject);
  };

  const handleDecline = () => {
    const consentObject = {
      ad_storage: "denied",
      analytics_storage: "denied",
      functionality_storage: "denied",
      personalization_storage: "denied",
      security_storage: "granted", // Security storage is typically granted
      ad_user_data: "denied",
      ad_personalization: "denied",
    };

    handleConsent(consentObject);
  };

  if (!showDialog) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-md border-t z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <p className="text-xs font-light text-left">
          Folosim cookie-uri pentru a personaliza conținutul, pentru a oferi
          funcționalități social media și a analiza traficul.
          <a
            href="https://www.porscheinterauto.ro/directiva-privind-fisierele-cookie"
            className="underline ml-2"
          >
            Află mai multe
          </a>
          .
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleDecline}
            className="bg-gray-200 text-gray-800 px-4 py-2"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="bg-black text-white hover:bg-slate-800 px-4 py-2"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentDialog;
