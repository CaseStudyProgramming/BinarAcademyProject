import React from "react";

const CarCard = ({ car, tipeDriver, waktu }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md max-w-sm">
      <img
        src={car.image} // Use car image from data
        alt={car.model}
        className="w-full object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">
          {car.manufacture} {car.model}
        </h2>
        <p className="text-green-600 text-xl font-bold mb-4">
          Rp {car.rentPerDay.toLocaleString()} / hari
        </p>
        <p className="text-gray-600 text-sm mb-4">{car.description}</p>
        <ul className="text-gray-700 space-y-2">
          <li className="flex items-center">
            <i className="fas fa-users mr-2"></i> {car.capacity} orang
          </li>
          <li className="flex items-center">
            <i className="fas fa-cogs mr-2"></i> {car.transmission}
          </li>
          <li className="flex items-center">
            <i className="fas fa-calendar mr-2"></i> Tahun {car.year}
          </li>
          <li className="flex items-center">
            <i className="fas fa-user mr-2"></i> Tipe Driver: {tipeDriver}
          </li>
          <li className="flex items-center">
            <i className="fas fa-clock mr-2"></i> Waktu Jemput: {waktu}
          </li>
        </ul>
        <button className="bg-green-500 text-white w-full py-2 mt-4 rounded hover:bg-green-600">
          Pilih Mobil
        </button>
      </div>
    </div>
  );
};

export default CarCard;
