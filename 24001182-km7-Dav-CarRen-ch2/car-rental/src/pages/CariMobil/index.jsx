import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Hero from "./HeroCariMobil";
import Footer from "../../components/Footer";
import CariMobil from "./CariMobilMenu";
import CarCardGrid from "./CarCardGrid";
import { fetchCarData } from "../../utils/api";

function Carimobil() {
  const [showCarGrid, setShowCarGrid] = useState(false);
  const [filteredCars, setFilteredCars] = useState([]);
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchCarData();
      if (data) {
        console.log("Fetched car data:", data);
        setCarData(data);
      }
    };
    loadData();
  }, []);

  const [tipeDriver, setTipeDriver] = useState("");
  const [waktu, setWaktu] = useState("");

  const handleSearch = ({ tipeDriver, tanggal, waktu, penumpang }) => {
    // Simpan tipeDriver dan waktu jemput
    setTipeDriver(tipeDriver);
    setWaktu(waktu);

    const formattedDate = new Date(`${tanggal}T${waktu}`).toISOString();
    console.log("Formatted date for filtering:", formattedDate);

    const filtered = carData.filter((car) => {
      const isAvailable = car.available; // Ensure this property exists
      const hasEnoughCapacity =
        penumpang === "" || car.capacity >= parseInt(penumpang, 10);
      const isAvailableOnDate =
        new Date(car.availableAt) <= new Date(formattedDate);

      console.log("Car availableAt:", car.availableAt);
      console.log("Formatted user input date:", formattedDate);
      console.log("isAvailableOnDate:", isAvailableOnDate);

      const matchesDriverType =
        tipeDriver === "" ||
        tipeDriver === "Dengan Driver" ||
        tipeDriver === "Tanpa Driver";

      console.log("Car being checked:", car);
      console.log("isAvailableOnDate:", isAvailableOnDate);
      console.log("hasEnoughCapacity:", hasEnoughCapacity);
      console.log("matchesDriverType:", matchesDriverType);

      return (
        isAvailable &&
        hasEnoughCapacity &&
        isAvailableOnDate &&
        matchesDriverType
      );
    });

    console.log("Filtered cars:", filtered);
    setFilteredCars(filtered);
    setShowCarGrid(true);
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <CariMobil onSearch={handleSearch} />
      {showCarGrid && (
        <CarCardGrid
          filteredCars={filteredCars}
          tipeDriver={tipeDriver}
          waktu={waktu}
        />
      )}
      <Footer />
    </div>
  );
}

export default Carimobil;
