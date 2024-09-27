import React from "react";
import CarCard from "./CarCard";
import IconNoCars from "../../icons/IconNoCars";

const CarCardGrid = ({ filteredCars, tipeDriver, waktu }) => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {filteredCars.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center text-gray-500 space-y-4 h-screen">
          <IconNoCars />
          <p>Tidak ada mobil yang cocok dengan pencarian Anda.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {filteredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              tipeDriver={tipeDriver}
              waktu={waktu}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CarCardGrid;
