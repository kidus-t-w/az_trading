import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black">
      <div className="py-8 px-2 sm:px-6 lg:container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <Phone />
                <span className="ml-2">+251-915579335</span>
              </li>
              <li className="flex items-center">
                <Mail />
                <span className="ml-2">az.trading@gmail.com</span>
              </li>
              <li className="flex items-center">
                <MapPin />
                <span className="ml-2">Burau, Oromia, Ethiopia.</span>
              </li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/products"> Red Kidney beans</Link>
              </li>
              <li>
                <Link to="/products"> Mung bean</Link>
              </li>
              <li>
                <Link to="/products"> Chickpea</Link>
              </li>
              <li>
                <Link to="/products"> Pumpkin Seeds</Link>
              </li>
            </ul>
          </div>

          {/* Quick Navigation Section */}
          <div>
            <h3 className="text-lg font-semibold">Quick Navigation</h3>
            <ul className="mt-4 space-y-2 grid grid-cols-2">
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="/products"> Products</Link>
              </li>

              <li>
                <Link to="/about_us"> About Us</Link>
              </li>
              <li>
                <Link to="/videos"> Videos</Link>
              </li>
              <li>
                <Link to="/contact_us"> Contact Us</Link>
              </li>
              <li>
                <Link to="/faq"> FAQ</Link>
              </li>
            </ul>
          </div>

          {/* QR Code Section */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold">QR Code</h3>
            <img
              src="/src/assets/img/QR.png"
              alt="QR Code"
              className="h-[250px]"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-200 text-center py-4">
        <p className="text-gray-600">
          Copyright © Az Trading, PLC. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
