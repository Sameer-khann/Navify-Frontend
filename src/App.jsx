import React, {useState} from "react";

import DJB from "./Img/DJB.png";
import EPFO from "./Img/EPFO.png";
import PaviwahanSewa from "./Img/ParivahanSewa.png";
import PromptBox from "./navify/PromptBox";



const services = [
  {
    title: "Delhi Jal Board",
    description:
      "The Delhi Jal Board (DJB) manages the supply of drinking water and the collection, treatment, and disposal of sewage in the capital.",
    logo: DJB,
    alt: "Delhi Jal Board logo",
    isSvg: false,
    websiteKey: "DJB",
  },
  {
    title: "EPFO, India",
    description:
      "The Employees' Provident Fund Organisation (EPFO) manages provident fund, pension, and insurance schemes for India's workforce.",
    logo: EPFO,
    alt: "EPFO logo",
    isSvg: false,
    websiteKey: "EPFO",
  },
  {
    title: "Parivahan Sewa",
    description:
      "Parivahan Sewa (Ministry of Road Transport & Highways) provides online services for vehicle registration, driving licenses, & transport permits across India.",
    logo: PaviwahanSewa,
    alt: "Parivahan Sewa logo",
    isSvg: false,
    websiteKey: "ParivahanSewa",
  },
  {
    title: "Add yourself",
    description: "Add yourself",
    isSvg: true,
    alt: "Add icon",
    websiteKey: "custom",
  },
];


function app() {

  const [selectedWebsite, setSelectedWebsite] = useState(null);
const [isPromptBoxOpen, setIsPromptBoxOpen] = useState(false);

const handleCardClick = (websiteName) => {
  setSelectedWebsite(websiteName);
  setIsPromptBoxOpen(true);
};


  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-brown-900 to-brown-800 bg-opacity-90 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <div className="w-full h-full bg-[url('/herobg.png')] bg-repeat"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Navigation */}
          <nav className="py-4 px-6 md:px-12 lg:px-16">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <h1 className="text-white font-medium text-xl">
                    OneGov Navigator
                  </h1>
                </div>
                <div className="hidden md:flex space-x-8">
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 transition"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 transition"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 transition"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-grow flex items-center justify-center px-6 md:px-12 lg:px-16 pb-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Making Government Websites
                <br />
                Effortless to Use.
              </h2>
              <p className="text-white text-md md:text-lg opacity-80 max-w-3xl mx-auto">
                A unified platform that simplifies access to government services
                by integrating smart, AI-powered search across all official
                websites.
              </p>
            </div>
          </main>
        </div>
      </div>

      <section>
        <div className="min-h-screen bg-[rgba(27,27,27,1)] p-6 md:p-10 lg:p-16">
          {/* Header */}
          <header className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center mb-12">
            <div className="text-orange-500 mr-4">
              <svg viewBox="0 0 50 50" className="w-10 h-10">
                <circle
                  cx="25"
                  cy="25"
                  r="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <g transform="rotate(0 25 25)">
                  {[...Array(12)].map((_, i) => (
                    <rect
                      key={i}
                      x="24"
                      y="5"
                      width="2"
                      height="8"
                      fill="currentColor"
                      transform={`rotate(${i * 30} 25 25)`}
                    />
                  ))}
                </g>
              </svg>
            </div>
            <h1 className="text-white text-2xl md:text-3xl font-semibold text-center md:text-left my-4 md:my-0">
              The OneGov Navigator Repository
            </h1>
            <div className="text-orange-500 ml-4">
              <svg viewBox="0 0 50 50" className="w-10 h-10">
                <circle
                  cx="25"
                  cy="25"
                  r="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <g transform="rotate(0 25 25)">
                  {[...Array(12)].map((_, i) => (
                    <rect
                      key={i}
                      x="24"
                      y="5"
                      width="2"
                      height="8"
                      fill="currentColor"
                      transform={`rotate(${i * 30} 25 25)`}
                    />
                  ))}
                </g>
              </svg>
            </div>
          </header>

          {/* Repository Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(service.websiteKey)}
                className="bg-gray-800 rounded-lg p-4 border border-gray-700"
              >
                <div className="flex">
                  <div className="mr-4">
                    <div
                      className={`p-2 rounded-lg w-16 h-16 flex items-center justify-center ${
                        service.isSvg ? "bg-gray-200" : "bg-white"
                      }`}
                    >
                      {service.isSvg ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      ) : (
                        <img
                          src={service.logo}
                          alt={service.alt}
                          className="max-w-full max-h-full"
                        />
                      )}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-white text-xl font-medium mb-1">
                      {service.title}
                    </h2>
                    <p className="text-gray-400 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="min-h-screen bg-[rgba(27,27,27,1)] p-6 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Orange sun/burst icon in top right */}
          <div className="absolute top-0 right-0 text-orange-500 mt-6 mr-6 md:mt-12 md:mr-12">
            <svg viewBox="0 0 50 50" className="w-16 h-16 md:w-24 md:h-24">
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <g>
                {[...Array(12)].map((_, i) => (
                  <rect
                    key={i}
                    x="24"
                    y="5"
                    width="2"
                    height="8"
                    fill="currentColor"
                    transform={`rotate(${i * 30} 25 25)`}
                  />
                ))}
              </g>
            </svg>
          </div>

          {/* Main content */}
          <div className="max-w-6xl mx-auto">
            {/* Heading and subheading */}
            <div className="text-center mb-16">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Government websites are hard to use
              </h2>
              <p className="text-gray-400 text-lg">
                Most citizens struggle to find the services they're looking for.
              </p>
            </div>

            {/* Three cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 - Confusing layouts */}
              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 flex flex-col items-center text-center">
                <div className="mb-6 text-blue-400">
                  <svg
                    className="w-16 h-16"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="12"
                      y="12"
                      width="40"
                      height="40"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="20"
                      y="20"
                      width="24"
                      height="24"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="28"
                      y="28"
                      width="8"
                      height="8"
                      rx="1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
                <p className="text-white text-lg">
                  Confusing layouts with inconsistent navigation.
                </p>
              </div>

              {/* Card 2 - Long menus */}
              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 flex flex-col items-center text-center">
                <div className="mb-6 text-blue-400">
                  <svg
                    className="w-16 h-16"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="14"
                      y="14"
                      width="36"
                      height="36"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="20"
                      y="22"
                      width="24"
                      height="6"
                      rx="1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="20"
                      y="32"
                      width="24"
                      height="6"
                      rx="1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="20"
                      y="42"
                      width="24"
                      height="6"
                      rx="1"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle
                      cx="32"
                      cy="25"
                      r="8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M36 29L40 33"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="text-white text-lg">
                  Long, buried menus that hide essential services.
                </p>
              </div>

              {/* Card 3 - Users don't know where to click */}
              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 flex flex-col items-center text-center">
                <div className="mb-6 text-gray-300">
                  <svg
                    className="w-16 h-16"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 32C24 29.7909 25.7909 28 28 28H36C38.2091 28 40 29.7909 40 32V40C40 42.2091 38.2091 44 36 44H28C25.7909 44 24 42.2091 24 40V32Z"
                      fill="none"
                    />
                    <path
                      d="M12 20H18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M22 20H28"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M32 20H38"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M42 20H48"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <text x="48" y="24" fontSize="14" fill="currentColor">
                      ?
                    </text>
                    <path
                      d="M28 28L22 22"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M36 36L42 30"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M30 40L24 46"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M32 32L38 26"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M44 22L50 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M34 34L40 40"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="text-white text-lg">
                  Users don't know where to click — so they leave.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="min-h-screen bg-[rgba(27,27,27,1)] p-6 md:p-12 lg:p-16 relative">
          {/* Orange sun/burst icon in top left */}
          <div className="absolute top-0 left-0 text-orange-500 mt-6 ml-6 md:mt-12 md:ml-12">
            <svg viewBox="0 0 50 50" className="w-16 h-16 md:w-24 md:h-24">
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <g>
                {[...Array(12)].map((_, i) => (
                  <rect
                    key={i}
                    x="24"
                    y="5"
                    width="2"
                    height="8"
                    fill="currentColor"
                    transform={`rotate(${i * 30} 25 25)`}
                  />
                ))}
              </g>
            </svg>
          </div>

          {/* Main content */}
          <div className="max-w-6xl mx-auto pt-20 md:pt-16">
            {/* Heading and subheading */}
            <div className="text-center mb-16">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                We made government websites
              </h2>
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                usable again. How?
              </h2>
              <p className="text-gray-400 text-lg">
                Follow the steps before viewing the Repository and get straight
                answers — fast.
              </p>
            </div>

            {/* Steps section */}
            <div className="flex flex-col md:flex-row items-center justify-center mt-20 max-w-5xl mx-auto">
              {/* Left side - Steps 1 & 2 */}
              <div className="flex flex-col items-center mb-12 md:mb-0 md:mr-8 lg:mr-16">
                {/* Step 1 */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white text-2xl font-bold mb-4">
                    1
                  </div>
                  <p className="text-white text-lg max-w-xs">
                    Select a government website from the Repository.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative" style={{ marginLeft: "80px" }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-600 text-white text-2xl font-bold mb-4">
                    2
                  </div>
                  <p className="text-white text-lg max-w-xs text-center">
                    Enter your prompt in Navify and hit enter.
                  </p>
                </div>
              </div>

              {/* Right side - Steps 3 & 4 */}
              <div className="flex flex-col items-center md:ml-8 lg:ml-16">
                {/* Step 3 */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white text-2xl font-bold mb-4">
                    3
                  </div>
                  <p className="text-white text-lg max-w-xs">
                    View the top 3 most relevant pages with a summary.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="relative" style={{ marginLeft: "80px" }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-600 text-white text-2xl font-bold mb-4">
                    4
                  </div>
                  <p className="text-white text-lg max-w-xs text-center">
                    Click on the relevant link and get redirected to the
                    required page.
                  </p>
                </div>
              </div>
            </div>

            {/* Dashed connecting lines */}
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
              <svg
                className="w-full h-24 opacity-30"
                viewBox="0 0 800 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100,50 C200,20 250,80 400,50 C550,20 600,80 700,50"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[rgba(46,46,46,1)] text-white py-12 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Logo and Social Icons */}
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold mb-6">OneGov Navigator</h2>
              <div className="flex space-x-4 mt-2">
                {/* Instagram Icon */}
                <a href="#" className="text-white hover:text-gray-300">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* LinkedIn Icon */}
                <a href="#" className="text-white hover:text-gray-300">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* Facebook Icon */}
                <a href="#" className="text-white hover:text-gray-300">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>

                {/* Email Icon */}
                <a href="#" className="text-white hover:text-gray-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Links - First Column */}
            <div className="flex flex-col">
              <nav>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Repository
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Navigation Links - Second Column */}
            <div className="flex flex-col">
              <nav>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Security & Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 text-center text-sm text-orange-500">
            © 2025 OneGov Navigator. All Rights Reserved.
          </div>
        </div>
      </footer>
      {/* <PromptBox /> */}

      {isPromptBoxOpen && (
        <PromptBox
          selectedWebsite={selectedWebsite}
          closePromptBox={() => setIsPromptBoxOpen(false)}
        />
      )}
    </>
  );
}

export default app;
