import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../Theme";
import { CheckCircle, ArrowRight } from "lucide-react";
import logoImage from "../../assets/logo_new.png";

const CheckoutSuccess = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen">
      {/* Navigation bar */}
      <nav className="py-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="mx-auto px-4 lg:px-8 max-w-full">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src={logoImage}
                alt="Lumora Ventures"
                className="h-7 sm:h-8 xl:h-9"
              />
              <span className="ml-2 text-lg font-bold text-indigo-700 hidden sm:inline xl:text-xl">
                Lumora Ventures
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <div
            className="bg-white p-8 rounded-xl shadow-md text-center"
            style={{ borderTop: `5px solid ${theme.colors.secondary}` }}
          >
            <div className="mb-6">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
                style={{ backgroundColor: `${theme.colors.secondary}15` }}
              >
                <CheckCircle
                  size={48}
                  style={{ color: theme.colors.secondary }}
                />
              </div>
            </div>

            <h1
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: theme.colors.text.primary }}
            >
              Payment Successful!
            </h1>

            <p className="text-gray-600 mb-6">
              Thank you for your purchase. Your Google Business Profile
              management service has been activated.
            </p>

            <div className="mb-8">
              <h2 className="font-medium mb-2 text-gray-800">
                What happens next?
              </h2>
              <ol className="text-left text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 font-medium mr-2 flex-shrink-0">
                    1
                  </span>
                  <span>
                    Our team will contact you within 24 hours to begin the
                    onboarding process.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 font-medium mr-2 flex-shrink-0">
                    2
                  </span>
                  <span>
                    We'll collect any additional information needed to optimize
                    your Google Business Profile.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 font-medium mr-2 flex-shrink-0">
                    3
                  </span>
                  <span>
                    You'll receive your first monthly report within 30 days
                    showing your initial performance improvements.
                  </span>
                </li>
              </ol>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => navigate("/")}
                className="w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                style={{
                  backgroundColor: theme.colors.primary,
                  color: "white",
                }}
              >
                Return to Home
                <ArrowRight size={18} className="ml-2" />
              </button>

              <p className="text-sm text-gray-500">
                A receipt has been sent to your email address.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutSuccess;
