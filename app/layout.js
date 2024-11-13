import "./globals.css";
import ConsentDialog from "./components/ConsentDialog";

export const metadata = {
  title: "Audi. Perfect sincronizat cu tine",
  description: "Punct test drive Park Lake",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Define dataLayer
              window.dataLayer = window.dataLayer || [];
              // Set initial consent state
              window.dataLayer.push({
                'consent_default': 'denied',
                'consent': {
                  'ad_storage': 'denied',
                  'analytics_storage': 'denied',
                  'functionality_storage': 'denied',
                  'personalization_storage': 'denied',
                  'security_storage': 'granted'
                }
              });
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NMHG5MNP');
            `,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NMHG5MNP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ConsentDialog />
        {children}
      </body>
    </html>
  );
}
