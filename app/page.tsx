import React from "react";
import Head from 'next/head'; // Import the Head component
import { Hero } from "../components/Hero";
import  Footer  from "../components/Footer";
import { Reviews } from "../components/Reviews";
import { BookingCTA } from "../components/BookingCTA";
import { BriefDescription } from "../components/BriefDescription";
import { FAQSection } from "../components/FAQSection";
import Navbar from "../components/Navbar";
import Services from "../components/Services";


export default function Home() {
  return (
    <>
      <Head>
        <title>Your Airbnb Landing Page Title</title>
        <meta name="description" content="A compelling description of your Airbnb landing page.  Keep it concise and keyword-rich." />
        <meta name="keywords" content="airbnb, vacation rental, travel, lodging, accommodation, booking" />
        <link rel="icon" href="/favicon.ico" /> {/* Add your favicon */}
        {/* Optional Open Graph metadata for social sharing */}
        <meta property="og:title" content="Your Airbnb Landing Page Title" />
        <meta property="og:description" content="A compelling description of your Airbnb landing page for social media." />
        <meta property="og:image" content="/your-og-image.jpg" />  {/* Path to your image */}
        <meta property="og:url" content="https://yourdomain.com" /> {/* Your website URL */}

        {/* Optional Twitter Card metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@YourTwitterHandle" />
        <meta name="twitter:title" content="Your Airbnb Landing Page Title" />
        <meta name="twitter:description" content="A compelling description of your Airbnb landing page for Twitter." />
        <meta name="twitter:image" content="/your-og-image.jpg" /> {/* Path to your image */}
      </Head>

      <Navbar />
      <Hero />
      <BriefDescription />
      <Services />
      <Reviews />
      <FAQSection />
      <BookingCTA />
      <Footer />
    </>
  );
}
