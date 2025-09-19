import { useState, useEffect, useRef } from "react";
import logo from "/logo.svg";

export default function Header() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const links = ["Home", "About", "How it works", "Token design", "YARD flywheel"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="w-full container mx-auto py-4 px-6 flex items-center justify-between">
      <img src={logo} alt="logo" className="w-[132px] h-11 object-contain" />

      <nav className="hidden md:flex gap-6 justify-center flex-1">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            onClick={() => setActive(link)}
            className={`px-3 py-1 rounded-full text-[13px] transition-colors duration-200
              ${active === link ? "bg-black text-white" : "text-[#aeb0b1] hover:text-black"}`}
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Бургер кнопка */}
      <button
        className="md:hidden flex flex-col gap-1 bg-gray"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-6 h-0.5 bg-black"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
        <span className="block w-6 h-0.5 bg-black"></span>
      </button>

      {/* Меню */}
      {isOpen && (
        <div
          ref={menuRef} // <-- FIX: добавили ref
          className="absolute top-3 left-0 w-full bg-white flex flex-col items-center py-4 md:hidden shadow-md"
        >
          {links.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => {
                setActive(link);
                setIsOpen(false);
              }}
              className={`px-3 py-2 rounded-full text-[13px] w-full text-center transition-colors duration-200
                ${active === link ? "bg-black text-white" : "text-[#aeb0b1] hover:text-black"}`}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
