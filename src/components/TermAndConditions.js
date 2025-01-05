import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/terms-conditions.txt")
      .then((response) => response.text())
      .then((data) => {
        setContent(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading terms and conditions:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Back to Home Button */}
        <div className="px-6 py-4 bg-gray-900">
          <button
            onClick={() => navigate("/")}
            className="text-white hover:text-indigo-400 transition-colors flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Home
          </button>
        </div>

        <div className="px-6 py-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Terms and Conditions
            </h1>
            <p className="mt-2 text-gray-600">Last updated January 04, 2025</p>
          </div>

          {/* Content */}
          {isLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">
                Loading Terms and Conditions...
              </p>
            </div>
          ) : (
            <div className="prose max-w-none text-gray-600">
              <div
                className="whitespace-pre-wrap"
                style={{
                  fontFamily: "Arial, sans-serif",
                  lineHeight: "1.6",
                  fontSize: "14px",
                }}
              >
                {content}
              </div>
            </div>
          )}

          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <div className="text-gray-600">
              <p className="mb-2">
                If you have any questions about these Terms and Conditions, you
                can contact us:
              </p>
              <ul className="list-disc pl-5">
                <li>
                  By email:{" "}
                  <a
                    href="mailto:info@lumoraventures.com"
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    info@lumoraventures.com
                  </a>
                </li>
                <li>
                  By visiting our website:{" "}
                  <a
                    href="https://www.lumoraventures.com/"
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    https://www.lumoraventures.com/
                  </a>
                </li>
                <li>
                  By mail: Office 4157, 58 Peregrine Road, Hainault, Ilford,
                  Essex IG6 3SZ, England
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
