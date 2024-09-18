import { useState, useEffect, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0); // State untuk menyimpan tinggi navbar
  const navbarRef = useRef(null); // Ref untuk referensi ke navbar

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "auto";
    }
  };

  // Fungsi untuk scroll ke bagian tertentu
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // tutup menu setelah klik di mobile
      document.body.style.overflow = "auto"; // Pastikan scroll diaktifkan
    }
  };

  // Deteksi scroll untuk menambah class 'scrolled'
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener saat komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, []);

  // Hitung tinggi navbar dan terapkan padding ke konten utama
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
      {/* Navbar */}
      <nav
        ref={navbarRef}
        className={`fixed w-full z-50 transition-all duration-100 ${
          isScrolled && !isOpen
            ? "bg-[#F1F3FF]/80 shadow-md backdrop-blur-md" // Blur saat scroll dan hamburger menu tidak terbuka
            : "bg-[#F1F3FF]"
        } py-4 px-10`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900 ml-2 md:ml-14">
            LOGO
          </div>
          <div className="flex items-center space-x-6 ">
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

        {/* Overlay when menu is open */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[60]" // Update z-index
            onClick={toggleMenu}
          />
        )}

        {/* Sidebar for Mobile */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-white z-[70] transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden shadow-lg`}
          style={{ backgroundColor: "#FFFFFF" }} // Pastikan background solid
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

      {/* Main Content */}
      <main style={{ paddingTop: `${navbarHeight}px` }}>
        {/* Konten utama di sini */}
      </main>
    </>
  );
};

export default Navbar;
