import { GoThumbsup } from "react-icons/go";
import { GoTag } from "react-icons/go";
import { PiMedalLight } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa";

const WhyUs = () => {
  const services = [
    {
      title: "Mobil Lengkap",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      icon: <GoThumbsup className="text-white text-4xl" />,
      bgColor: "bg-blue-500",
    },
    {
      title: "Harga Murah",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      icon: <GoTag className="text-white text-4xl" />,
      bgColor: "bg-green-500",
    },
    {
      title: "Layanan 24 Jam",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      icon: <FaRegClock className="text-white text-4xl" />,
      bgColor: "bg-red-500",
    },
    {
      title: "Sopir Profesional",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      icon: <PiMedalLight className="text-white text-4xl" />,
      bgColor: "bg-yellow-500",
    },
  ];

  return (
    <section className="py-10 px-5 bg-white md:mx-20">
      <div className="max-w-7xl mx-auto text-center md:text-left mb-10">
        {" "}
        {/* Centering the container */}
        <h2 className="text-2xl font-bold">Why Us?</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-5 shadow-lg text-left"
          >
            <div
              className={`md:h-20 md:w-20  h-14 w-14 rounded-full ${service.bgColor} mb-4 flex items-center justify-center`}
              size
            >
              {service.icon}
            </div>
            <h3 className="font-bold text-lg">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
