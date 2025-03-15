import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto max-w-6xl py-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Lumora Ventures</h3>
            <p className="text-lg max-w-md">
              Don't let your business stay hidden—partner with Lumora Ventures
              to shine on Google and grow like never before!
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Request a Free Consultation
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-indigo-400" />
              <a
                href="mailto:info@lumora-ventures.com"
                className="hover:text-white transition-colors"
              >
                info@lumora-ventures.com
              </a>
            </div>

            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-indigo-400" />
              <a
                href="tel:18005868671"
                className="hover:text-white transition-colors"
              >
                1-800-LUMORA-1
              </a>
            </div>

            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-3 text-indigo-400" />
              <span>123 Business Ave, Suite 101, San Francisco, CA 94103</span>
            </div>

            <div className="flex space-x-4 mt-6">
              {/* Fixed social media links with proper URLs */}
              <a
                href="https://facebook.com/lumoraventures"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com/lumoraventures"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter page"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/lumoraventures"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Lumora Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
