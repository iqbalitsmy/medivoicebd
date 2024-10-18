import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar/Navbar";
import ScrollToTopButton from "./components/shared/ScrollToTopButton/ScrollToTopButton";
import { getData } from "./utils/getData";
import Head from "next/head";

const kironSans = localFont({
  src: "./fonts/Kiron.woff",
  variable: "--font-kiron-sans",
});

export default async function RootLayout({ children }) {
  // Fetching the default configuration data
  const defaultConfig = await getData("https://api.medivoicebd.com/config-variable");

  // Fallback if no config data is fetched
  if (!defaultConfig) {
    return (
      <html lang="en">
        <body className="text-white pt-6 text-center">
          <p>Loading ...</p>
        </body>
      </html>
    );
  }

  const {
    meta_title,
    meta_description,
    meta_keyword,
    company_name,
    facebook_app_id,
    twitter_link,
    facebook_link,
    linkedin,
    youtube_link,
  } = defaultConfig;


  return (
    <html lang="en">
      <Head>
        {/* Dynamic Meta Tags */}
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
        <meta name="keywords" content={meta_keyword} />
        {/* Facebook Meta Tag Example */}
        <meta property="og:site_name" content={company_name} />
        <meta property="fb:app_id" content={facebook_app_id} />
        {/* Additional Social Media Links */}
        <meta property="og:twitter" content={twitter_link} />
        <meta property="og:facebook" content={facebook_link} />
        <meta property="og:linkedin" content={linkedin} />
        <meta property="og:youtube" content={youtube_link} />
      </Head>
      <body className={`${kironSans.variable} font-sans antialiased`}>
        <header className="mb-24 md:mb-40 lg:mb-24">
          <Navbar defaultConfig={defaultConfig} />
        </header>
        <main>{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v21.0"></script>
    </html>
  );
}
