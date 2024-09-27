import React from "react";
import IconCalendar from "../../icons/IconCalendar";
import IconClock from "../../icons/IconClock";
import IconSettings from "../../icons/IconSettings";
import IconUser from "../../icons/IconUser";
import IconUserCheckmark from "../../icons/IconUserCheckmark";
import IconsUserX from "../../icons/IconsUserX";

const CarCard = ({ car, tipeDriver, waktu }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md min-w-[300px] w-full flex flex-col h-full">
      <img
        src={car.image}
        alt={car.model}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4 flex-grow">
        <h2 className="text-lg font-semibold mb-2">
          {car.manufacture} {car.model}
        </h2>
        <p className="text-green-600 text-xl font-bold mb-4">
          Rp {car.rentPerDay.toLocaleString()} / hari
        </p>
        <p className="text-gray-600 text-sm mb-2 line-clamp-3 min-h-[72px]">
          {car.description}
        </p>
        <ul className="text-gray-700 space-y-2 pl-4 pt-2">
          <li className="flex items-center space-x-3">
            {tipeDriver === "Dengan Driver" ? (
              <IconUserCheckmark />
            ) : (
              <IconsUserX />
            )}
            <span>Tipe Driver: {tipeDriver}</span>
          </li>
          <li className="flex items-center space-x-3">
            <IconUser />
            <span>{car.capacity} orang</span>
          </li>
          <li className="flex items-center space-x-3">
            <IconSettings />
            <span>{car.transmission}</span>
          </li>
          <li className="flex items-center space-x-3">
            <IconCalendar />
            <span>Tahun {car.year}</span>
          </li>
          <li className="flex items-center space-x-3">
            <IconClock />
            <span>Waktu Jemput: {waktu}</span>
          </li>
        </ul>
      </div>
      <button className="bg-green-500 text-white w-full py-2 mt-4 rounded hover:bg-green-600">
        Pilih Mobil
      </button>
    </div>
  );
};

export default CarCard;
