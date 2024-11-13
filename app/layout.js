import "./globals.css";

import dynamic from "next/dynamic";

const GoogleAnalytics = dynamic(() => import("./components/GoogleAnalytics"), {
  ssr: false,
});

export const metadata = {
  title: "Audi. Perfect sincronizat cu tine",
  description: "Punct test drive Park Lake",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-F43JZMZBYB" />
      <body>{children}</body>
    </html>
  );
}
