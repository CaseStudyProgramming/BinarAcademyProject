import carImage from "../../assets/img_car.png";

const Hero = () => {
  return (
    <section className="bg-[#F1F3FF] pt-10 pl-10 relative flex flex-col md:flex-row items-center justify-between min-h-[60vh]">
      <div className="md:w-1/2 w-full mb-0 pl-4 md:pl-14 mr-8">
        <h1 className="text-4xl font-bold text-black mb-4">
          Sewa & Rental Mobil Terbaik di kawasan{" "}
          <span className="text-black">(Lokasimu)</span>
        </h1>
        <p className="text-black mb-6 text-sm pr-20">
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
          untuk sewa mobil selama 24 jam.
        </p>
      </div>
      <div className="md:w-1/2 w-full flex justify-center md:justify-end mt-6">
        <img src={carImage} alt="Car" className="object-contain" />
      </div>
    </section>
  );
};

export default Hero;
