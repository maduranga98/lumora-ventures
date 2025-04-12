// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-blue-900 text-gray-300 border-t border-gray-700/50">
      <div className="max-w-8xl mx-auto px-8 lg:px-16 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-white">Lumora Automation</h3>
            <p className="text-sm leading-relaxed">
              Pioneering industrial automation solutions through innovation and
              technical excellence.
            </p>
            <div className="flex space-x-4">
              {["📘", "🐦", "💼"].map((icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-2xl hover:text-cyan-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Solutions</h3>
            <ul className="space-y-3">
              {[
                ["/automation", "Control Systems"],
                ["/automation/control", "HMI/VFD Programming"],
                ["/automation/rd-development", "R&D Innovation"],
                ["/automation/maintenance", "Maintenance 24/7"],
              ].map(([path, title], index) => (
                <li key={index}>
                  <Link
                    to={path}
                    className="text-sm hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <span className="mr-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {[
                ["/docs", "Technical Documentation"],
                ["/case-studies", "Case Studies"],
                ["/white-papers", "White Papers"],
                ["/compliance", "Safety Standards"],
              ].map(([path, title], index) => (
                <li key={index}>
                  <Link
                    to={path}
                    className="text-sm hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <span className="mr-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-white">Global Support</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-cyan-400">📞</span>
                <div>
                  <p className="text-sm font-medium">24/7 Emergency</p>
                  <p className="text-xs">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-400">📧</span>
                <div>
                  <p className="text-sm font-medium">Technical Support</p>
                  <p className="text-xs">support@lumoraventures.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-cyan-400">📍</span>
                <div>
                  <p className="text-sm font-medium">HQ Location</p>
                  <p className="text-xs">123 Innovation Drive, Tech City</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/50 my-8" />

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h3 className="text-xl font-bold text-white mb-4">
            Automation Insights
          </h3>
          <p className="text-sm mb-6">
            Subscribe for industry updates and technical briefs
          </p>
          <form className="flex gap-4 justify-center">
            <input
              type="email"
              placeholder="Professional email"
              className="px-6 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-cyan-500 text-sm w-64"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-xl transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 pt-8 border-t border-gray-700/50"
        >
          <p>
            © {currentYear} Lumora Ventures. All rights reserved. |
            <Link
              to="/privacy"
              className="hover:text-cyan-400 ml-2 transition-colors"
            >
              Data Security Policy
            </Link>
          </p>
          <p className="mt-2 text-xs">
            ISO 9001 Certified | IEC 62443 Compliant Systems
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
