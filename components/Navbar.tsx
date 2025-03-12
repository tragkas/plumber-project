"use client";

import { Link } from "react-scroll"; // Import from react-scroll

export default function Navbar() {
  return (
    <nav className="top-0 left-0 w-full bg-white/10 backdrop-blur-lg z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold text-white">Plumbing Pros</h1>
        <div className="flex gap-6">
          <Link
            to="services" // The id of the section you want to scroll to
            smooth={true} // Enables smooth scrolling
            duration={500} // Scroll duration in milliseconds
            className="text-white cursor-pointer hover:underline py-2"
          >
            Services
          </Link>
          <a href="tel:+1234567890" className="text-white bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-lg">
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
}
