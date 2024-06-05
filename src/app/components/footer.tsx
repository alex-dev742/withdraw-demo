import React from "react";

const Footer = () => {
  return (
    <footer className="bg-yellow-400 py-4 fixed bottom-0 left-0 right-0">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <p>&copy; 2024 Easybet. All rights reserved.</p>
          <ul className="flex space-x-4">
            <li>
              <a href="/terms" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
