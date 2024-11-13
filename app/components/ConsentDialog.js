"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "../lib/storageHelper";

const ConsentDialog = () => {
  const [cookieConsent, setCookieConsent] = useState(null);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    console.log("Stored Cookie Consent:", storedCookieConsent);
    setCookieConsent(storedCookieConsent);
  }, []);

  const updateConsentStatus = (consentGranted) => {
    const consentValue = consentGranted ? "granted" : "denied";

    window.gtag("consent", "update", {
      ad_storage: consentValue,
      analytics_storage: consentValue,
      functionality_storage: consentValue,
      personalization_storage: consentValue,
      security_storage: "granted", // Always granted
    });

    // For Testing
    console.log("Consent updated with:", {
      ad_storage: consentValue,
      analytics_storage: consentValue,
      functionality_storage: consentValue,
      personalization_storage: consentValue,
      security_storage: "granted",
    });
  };

  useEffect(() => {
    if (cookieConsent !== null) {
      updateConsentStatus(cookieConsent);

      setLocalStorage("cookie_consent", cookieConsent);

      // For Testing
      console.log("Cookie Consent:", cookieConsent);
    }
  }, [cookieConsent]);

  return (
    <div
      className={`my-10 mx-auto max-w-max md:max-w-screen-sm
        fixed bottom-0 left-0 right-0 
        px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
        bg-white shadow ${cookieConsent !== null ? "hidden" : "flex"} `}
    >
      <div className="text-center text-xs">
        <Link href="/info/cookies">
          <p>
            Site-ul nostru foloseste{" "}
            <span className="font-bold text-xs text-sky-400">cookie-uri</span>{" "}
            pentru o experienta mai buna.
          </p>
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          className="bg-gray-900 px-5 py-2 text-white"
          onClick={() => setCookieConsent(false)}
        >
          Respinge
        </button>
        <button
          className="bg-gray-900 px-5 py-2 text-white"
          onClick={() => setCookieConsent(true)}
        >
          Accepta
        </button>
      </div>
    </div>
  );
};

export default ConsentDialog;
