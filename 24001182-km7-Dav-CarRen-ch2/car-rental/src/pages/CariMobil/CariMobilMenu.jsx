import React, { useState } from "react";

const CariMobilMenu = ({ onSearch }) => {
  const [tipeDriver, setTipeDriver] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [waktu, setWaktu] = useState("");
  const [penumpang, setPenumpang] = useState("");

  const isFormValid = tipeDriver && tanggal && waktu && penumpang;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form data:", { tipeDriver, tanggal, waktu, penumpang });
    onSearch({
      tipeDriver,
      tanggal,
      waktu,
      penumpang: parseInt(penumpang, 10),
    });
  };

  return (
    <div className="relative flex justify-center -mt-16">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full mx-4 max-w-6xl z-10">
        <form
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4"
          onSubmit={handleSubmit}
        >
          {/* Tipe Driver */}
          <div className="col-span-1">
            <label
              htmlFor="tipeDriver"
              className="block text-sm font-medium text-gray-700"
            >
              Tipe Driver
            </label>
            <select
              id="tipeDriver"
              name="tipeDriver"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={tipeDriver}
              onChange={(e) => setTipeDriver(e.target.value)}
            >
              <option value="">Pilih Tipe Driver</option>
              <option value="Dengan Driver">Dengan Driver</option>
              <option value="Tanpa Driver">Tanpa Driver</option>
            </select>
          </div>

          {/* Tanggal */}
          <div className="col-span-1">
            <label
              htmlFor="tanggal"
              className="block text-sm font-medium text-gray-700"
            >
              Tanggal
            </label>
            <input
              type="date"
              id="tanggal"
              name="tanggal"
              className="block w-full px-3 py-2 border mt-1 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
            />
          </div>

          {/* Waktu Jemput */}
          <div className="col-span-1">
            <label
              htmlFor="waktu"
              className="block text-sm font-medium text-gray-700"
            >
              Waktu Jemput/Ambil
            </label>
            <input
              type="time"
              id="waktu"
              name="waktu"
              className="block w-full px-3 py-2 border mt-1 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={waktu}
              onChange={(e) => setWaktu(e.target.value)}
            />
          </div>

          {/* Jumlah Penumpang */}
          <div className="col-span-1">
            <label
              htmlFor="penumpang"
              className="block text-sm font-medium text-gray-700"
            >
              Jumlah Penumpang
            </label>
            <input
              type="number"
              id="penumpang"
              name="penumpang"
              className="block w-full px-3 py-2 border mt-1 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Jumlah Penumpang"
              value={penumpang}
              onChange={(e) => setPenumpang(e.target.value)}
              min={1}
            />
          </div>

          {/* Cari Mobil Button */}
          <div className="col-span-1 sm:col-span-2 md:col-span-4 xl:col-span-1 xl:col-start-5 flex items-end justify-end mt-4 xl:mt-0">
            <button
              type="submit"
              className={`w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md ${
                !isFormValid
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-green-600"
              }`}
              disabled={!isFormValid}
            >
              Cari Mobil
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CariMobilMenu;
