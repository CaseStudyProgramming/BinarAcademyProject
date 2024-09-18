import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import BinarLogo from "../assets/binar.svg";

export default function Footer() {
  return (
    <footer className="bg-white pt-10 pb-6 px-8 md:px-20">
      <div className="container flex flex-col md:flex-row justify-start items-start space-y-5 md:space-y-0 md:space-x-11 lg:space-x-28 xl:space-x-48">
        {/* Contact Information */}
        <div className="flex flex-col space-y-2 max-w-64">
          <p className="text-gray-800">
            Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
          </p>
          <p className="text-gray-800">binarcarrental@gmail.com</p>
          <p className="text-gray-800">081-233-334-808</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-2 ">
          <a href="#" className="text-gray-800 hover:underline">
            Our Services
          </a>
          <a href="#" className="text-gray-800 hover:underline">
            Why Us
          </a>
          <a href="#" className="text-gray-800 hover:underline">
            Testimonial
          </a>
          <a href="#" className="text-gray-800 hover:underline">
            FAQ
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col items-start">
          <p className="text-gray-800 mb-4">Connect with Us</p>
          <div className="flex space-x-4 md:space-x-2 lg:space-x-4 xl:space-x-8">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="h-6 w-6 text-gray-500 hover:text-gray-800 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="h-6 w-6 text-gray-500 hover:text-gray-800 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="h-6 w-6 text-gray-500 hover:text-gray-800 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="h-6 w-6 text-gray-500 hover:text-gray-800 cursor-pointer"
            />
            <EnvelopeIcon className="h-6 w-6 text-gray-500 hover:text-gray-800 cursor-pointer" />
          </div>
        </div>

        {/* Copyright and Logo */}
        <div className="flex flex-col items-start space-y-2">
          <p className="text-gray-500">Copyright Binar 2022</p>
          <img src={BinarLogo} alt="Binar Logo" className="w-16 h-6" />
        </div>
      </div>
    </footer>
  );
}
