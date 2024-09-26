// src/components/Services.jsx
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import ServiceImg from "../assets/img_service.png";

const Services = () => {
  return (
    <div className="pt-20 pb-10 px-10 relative">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={ServiceImg}
            alt="Car Service"
            className="w-full max-w-md h-auto object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="text-left md:mr-20 md:pl-6 lg:pl-10">
          <h2 className="text-2xl font-bold mb-4">
            Best Car Rental for any kind of trip in (Lokasimu)!
          </h2>
          <p className="text-gray-600 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <ul className="list-none space-y-3">
            <li className="flex items-center  ">
              <IoCheckmarkCircleSharp className="text-green-500 mr-2 h-4 w-4 lg:h-6 lg:w-6" />{" "}
              Sewa Mobil Dengan Supir di Bali 12 Jam
            </li>
            <li className="flex items-center ">
              <IoCheckmarkCircleSharp className="text-green-500 mr-2 h-4 w-4 lg:h-6 lg:w-6" />{" "}
              Sewa Mobil Lepas Kunci di Bali 24 Jam
            </li>
            <li className="flex items-center ">
              <IoCheckmarkCircleSharp className="text-green-500 mr-2 h-4 w-4 lg:h-6 lg:w-6" />{" "}
              Sewa Mobil Jangka Panjang Bulanan
            </li>
            <li className="flex items-center ">
              <IoCheckmarkCircleSharp className="text-green-500 mr-2 h-4 w-4 lg:h-6 lg:w-6" />{" "}
              Gratis Antar - Jemput Mobil di Bandara
            </li>
            <li className="flex items-center ">
              <IoCheckmarkCircleSharp className="text-green-500 mr-2 h-4 w-4 lg:h-6 lg:w-6" />{" "}
              Layanan Airport Transfer / Drop In Out
            </li>
            <li className="flex items-center ">
              <IoCheckmarkCircleSharp className="text-green-500 mr-2 h-4 w-4 lg:h-6 lg:w-6" />{" "}
              Tersedia berbagai tipe model mobil
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
