import React from "react";
import CarCard from "./CarCard";

const CarCardGrid = ({ filteredCars, tipeDriver, waktu }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {filteredCars.length === 0 ? (
        <p className="text-center text-gray-500">
          Tidak ada mobil yang cocok dengan pencarian Anda.
        </p>
      ) : (
        filteredCars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            tipeDriver={tipeDriver} // Pass user-selected driver type
            waktu={waktu} // Pass waktu jemput
          />
        ))
      )}
    </div>
  );
};

export default CarCardGrid;
