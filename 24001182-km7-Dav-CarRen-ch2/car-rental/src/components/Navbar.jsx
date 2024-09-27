import { useState, useEffect, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom"; // Import hooks untuk navigasi
import imageLogo from "../assets/image-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = useRef(null);

  const navigate = useNavigate(); // Hook untuk navigasi
  const location = useLocation(); // Hook untuk mengetahui lokasi path saat ini

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/"); // Navigasi ke root path sebelum scroll
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay untuk memastikan navigasi selesai
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  // Menangani scroll untuk efek navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, []);

  // Hitung tinggi navbar untuk padding di konten
  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    };

    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);

    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, []);

  return (
    <>
      <nav
        ref={navbarRef}
        className={`fixed w-full z-50 transition-all duration-100 ${
          isScrolled && !isOpen
            ? "bg-[#F1F3FF]/80 shadow-md backdrop-blur-md"
            : "bg-[#F1F3FF]"
        } py-4 px-10`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="ml-2 md:ml-14">
            <img
              src={imageLogo}
              alt="Logo"
              className="h-10 w-auto cursor-pointer"
              onClick={() => navigate("/")} // Logo mengarah ke root path
            />
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection("ourservices")}
                className="text-black hover:text-blue-700 text-sm font-medium"
              >
                Our Services
              </button>
              <button
                onClick={() => scrollToSection("whyus")}
                className="text-black hover:text-blue-700 text-sm font-medium"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection("testimonial")}
                className="text-black hover:text-blue-700 text-sm font-medium"
              >
                Testimonial
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-black hover:text-blue-700 text-sm font-medium"
              >
                FAQ
              </button>
            </div>
            <button className="bg-green-500 text-white px-6 py-2 rounded hidden md:block">
              Register
            </button>
            <button onClick={toggleMenu} className="md:hidden text-black">
              {isOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[60]"
            onClick={toggleMenu}
          />
        )}

        <div
          className={`fixed top-0 right-0 w-64 h-full bg-white z-[70] transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden shadow-lg`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-black"
          >
            <AiOutlineClose size={24} />
          </button>
          <ul className="flex flex-col space-y-4 mt-16 px-8">
            <li>
              <button
                onClick={() => scrollToSection("ourservices")}
                className="text-black hover:text-blue-700 text-sm font-medium"
              >
                Our Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("whyus")}
                className="text-black hover:text-blue-700 text-sm font-medium"
              >
                Why Us
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("testimonial")}
                className="text-black hover:text-blue-700 text-sm font-medium"
              >
                Testimonial
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-black hover:text-blue-700 text-sm font-medium"
              >
                FAQ
              </button>
            </li>
            <li>
              <button className="bg-green-500 text-white px-6 py-2 rounded">
                Register
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main style={{ paddingTop: `${navbarHeight}px` }}>
        {/* Konten utama di sini */}
      </main>
    </>
  );
};

export default Navbar;
