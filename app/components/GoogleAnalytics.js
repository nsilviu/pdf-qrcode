"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "../lib/gtaghelper";

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    pageview(GA_MEASUREMENT_ID, url);
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);

  return (
    <>
      {/* Load the Google Analytics script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />

      {/* Initialize Google Analytics with consent status from localStorage */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            (function() {
              var consentValue = 'denied';
              try {
                var storedConsent = localStorage.getItem('cookie_consent');
                if (storedConsent === 'true') {
                  consentValue = 'granted';
                }
              } catch (e) {
                console.error('Error accessing localStorage:', e);
              }
              gtag('consent', 'default', {
                'ad_storage': consentValue,
                'analytics_storage': consentValue,
                'functionality_storage': consentValue,
                'personalization_storage': consentValue,
                'security_storage': 'granted',
              });
            })();

            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
