import { useState } from "react";
import img1 from "../assets/Ellipse 10.png";
import img2 from "../assets/Ellipse 101.png";

const testimonials = [
  {
    id: 1,
    name: "John Dee",
    age: 32,
    location: "Bromo",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    image: img1,
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 28,
    location: "Bromo",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    image: img2,
  },
  {
    id: 3,
    name: "Mike Johnson",
    age: 45,
    location: "Bromo",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    image: img1,
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Testimonial</h2>
      <p className="text-center mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </p>

      <div className="flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          ❮
        </button>

        <div className="mx-6 max-w-sm p-4 border rounded-lg text-center bg-[#F1F3FF]">
          <img
            className="mx-auto rounded-full mb-4"
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            width={100}
            height={100}
          />
          <p className="italic">
            &ldquo;{testimonials[currentIndex].feedback}&rdquo;
          </p>
          <h3 className="font-bold mt-4">
            {testimonials[currentIndex].name}, {testimonials[currentIndex].age}
          </h3>
          <p className="text-sm text-gray-500">
            {testimonials[currentIndex].location}
          </p>
        </div>

        <button
          onClick={handleNext}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          ❯
        </button>
      </div>
    </div>
  );
}
