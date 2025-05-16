import { useEffect, useRef, useState } from "react";
import Logo from "../assets/Logo-white.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Agar click dropdown ya hamburger button ke bahar ho
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className=" text-white  h-[80px] sticky top-0 bg-[#3a3a3a] md:h-[90px] z-1">
      <div className="  h-full w-full flex justify-between">
        <div className="one h-full w-[50%]  flex  ">
          <img src={Logo} className=" w-[30%] md:w-[25%] lg:w-[18%] " alt="" />
        </div>
        <div className="md:hidden h-full w-[15%]  flex justify-center  items-center">
          <button
            ref={buttonRef}
            onClick={() => setIsOpen((prev) => !prev)}
            className="focus:outline-none  text-white"
          >
            {isOpen ? (
              // Cross icon
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div className=" hidden one h-full w-[50%]  text-white md:flex justify-center items-center">
          <Link
            className="font-bold text-lg hover:border-b-2 border-white px-3"
            to={"/"}
          >
            HOME
          </Link>
          <Link
            className="font-bold text-lg hover:border-b-2 border-white px-3"
            to={"/about"}
          >
            ABOUT
          </Link>
          <Link
            className="font-bold text-lg hover:border-b-2 border-white px-3"
            to={"/projects"}
          >
            PROJECTS
          </Link>
          <Link
            className="font-bold text-lg hover:border-b-2 border-white px-3"
            to={"/contact"}
          >
            CONTACT
          </Link>
        </div>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute bg-[#5a5959] md:hidden w-full h-[150px] flex flex-col items-center justify-evenly
                     transition-all duration-300 ease-in-out transform translate-y-0 opacity-100"
        >
          <Link className="font-bold shadow-2xl" onClick={() => setIsOpen(false)} to={"/"}>
            HOME
          </Link>
          <Link
            className="font-bold"
            onClick={() => setIsOpen(false)}
            to={"/about"}
          >
            ABOUT
          </Link>
          <Link
            className="font-bold"
            onClick={() => setIsOpen(false)}
            to={"/projects"}
          >
            PROJECTS
          </Link>
          <Link
            className="font-bold"
            onClick={() => setIsOpen(false)}
            to={"/contact"}
          >
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  );
}
