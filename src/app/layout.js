import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar/Navbar";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <Footer />
      </body>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v21.0"></script>
    </html>
  );
}
