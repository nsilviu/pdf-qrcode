import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

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
