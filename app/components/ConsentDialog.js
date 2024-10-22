"use client";
import React, { useState, useEffect } from "react";

const ConsentDialog = () => {
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowDialog(true);
    } else {
      // Update consent status based on stored preference
      updateConsentStatus(consent);
    }
  }, []);

  const updateConsentStatus = (consentStatus) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "consent_update",
      // Update the consent parameters based on user's choice
      ad_storage: consentStatus === "accepted" ? "granted" : "denied",
      analytics_storage: consentStatus === "accepted" ? "granted" : "denied",
      functionality_storage:
        consentStatus === "accepted" ? "granted" : "denied",
      personalization_storage:
        consentStatus === "accepted" ? "granted" : "denied",
      security_storage: "granted", // Usually set to 'granted'
    });
  };

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowDialog(false);
    updateConsentStatus("accepted");
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowDialog(false);
    updateConsentStatus("declined");
  };

  if (!showDialog) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-md border-t z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between align-middle items-center">
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
