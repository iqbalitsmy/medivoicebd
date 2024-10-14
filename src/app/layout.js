import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar/Navbar";
import ScrollToTopButton from "./components/shared/ScrollToTopButton/ScrollToTopButton";

const kironSans = localFont({
  src: "./fonts/Kiron.woff",
  variable: "--font-kiron-sans",
});

export const metadata = {
  title: "medivoicebd.com - বাংলাদেশের স্বাস্থ্যখাত মুখপত্র",
  description: "medivoicebd.com - বাংলাদেশের স্বাস্থ্যখাত মুখপত্র",
  keywords: "মেডিভয়েস",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${kironSans.variable} font-sans antialiased`}
      >
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <Footer />
        <ScrollToTopButton />
      </body>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v21.0"></script>
    </html>
  );
}
