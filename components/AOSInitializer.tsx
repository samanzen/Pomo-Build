"use client"; // This tells Next.js to run this code in the browser

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the styles for the animations

export default function AOSInitializer() {
  useEffect(() => {
    // This code runs once when the website loads in the browser
    AOS.init({
      duration: 750, // How long the animation takes in milliseconds
      once: true,     // Whether animation should happen only once - while scrolling down
    });
  }, []); // The empty array means this effect runs only once

  return null; // This component doesn't show any visible HTML
}