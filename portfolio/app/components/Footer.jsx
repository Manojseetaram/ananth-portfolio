
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { assets } from "@/assets/assets";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-300 px-4 py-10 sm;px-8  ">
      <div className=" w-full mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
         
          <div>
            <div className="flex items-center gap-2">
              <Image src={assets.logo} alt="Logo" width={40} height={40} />
              <span className="font-bold text-xl">JCREA</span>
            </div>
            <p className="mt-3 text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim.
            </p>
            <div className="flex gap-3 mt-4 text-gray-700">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaYoutube className="hover:text-red-500 cursor-pointer" />
            </div>
          </div>

          {/* Middle Section: Navigation */}
          <div>
            <h3 className="text-blue-600 font-semibold">Navigation</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li className="hover:text-blue-500 cursor-pointer">Home</li>
              <li className="hover:text-blue-500 cursor-pointer">About Us</li>
              <li className="hover:text-blue-500 cursor-pointer">Service</li>
              <li className="hover:text-blue-500 cursor-pointer">Resume</li>
              <li className="hover:text-blue-500 cursor-pointer">Project</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-blue-600 font-semibold">Contact</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>📞 +91 7738443636</li>
              <li>📧 Jaycrea36@gmail.com</li>
              <li>🌍 Portfolio-jcrea.com</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-blue-600 font-semibold">Get the latest information</h3>
            <div className="mt-3 flex items-center border border-gray-400 rounded-lg overflow-hidden">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 px-3 py-2 outline-none"
              />
              <button className="bg-blue-600 p-3 text-white">
                <IoIosSend size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-8 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-600">
          <p>Copyright © 2023 Jayesh. All Rights Reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-blue-500">User Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-blue-500">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
