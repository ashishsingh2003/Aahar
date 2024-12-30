import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-gray-400">
              We are dedicated to delivering delicious meals to your doorstep.
              Fresh, fast, and always with a smile!
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/menu"
                  className="hover:text-white transition-colors duration-300"
                >
                  Menu
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/contact"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400">Email: support@fooddelivery.com</p>
            <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
            <p className="text-gray-400">Address: 123 Food St, Delivery City</p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
          <p>© 2024 Food Delivery. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
