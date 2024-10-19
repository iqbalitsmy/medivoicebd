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

// The `generateMetadata` function allows you to dynamically set metadata.
export async function generateMetadata() {
  // Fetch your config data
  const defaultConfig = await getData('https://api.medivoicebd.com/config-variable');

  // Destructure the necessary metadata fields
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
  } = defaultConfig || {};

  // Return an object with all the meta tags
  return {
    title: meta_title || 'Default Title',
    description: meta_description || 'Default Description',
    keywords: meta_keyword || 'default,keywords',
    openGraph: {
      siteName: company_name || 'Default Company',
      type: 'website',
      twitter: twitter_link || 'https://twitter.com/default',
      facebook: facebook_link || 'https://facebook.com/default',
      linkedin: linkedin || 'https://linkedin.com/default',
      youtube: youtube_link || 'https://youtube.com/default',
    },
    facebookAppId: facebook_app_id || '',
  };
}

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

  return (
    <html lang="en">
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
