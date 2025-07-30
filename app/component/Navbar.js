"use client"
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaBars } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-white fixed top-0 z-50 shadow-sm">
        {/* Left: Prominent Hamburger/Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors lg:hidden"
          aria-label="Toggle menu"
        >
          <FaBars className="text-xl text-[#5E3B1F]" />
          <span className="font-bold text-[#5E3B1F]">MENU</span>
        </button>

        {/* Desktop Navigation (hidden on mobile) */}
        <div className="hidden lg:flex space-x-8 ml-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <span className="text-[#5E3B1F] hover:text-[#27A4A1] font-medium transition-colors cursor-pointer">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Center: Logo */}
        <Link href="/">
          <div 
            style={{ fontFamily: 'var(--font-sacramento)' }} 
            className="text-4xl font-bold text-[#5E3B1F] px-6 py-2 rounded-full shadow-md cursor-pointer"
          >
            Spa & Massage
          </div>
        </Link>

        {/* Right: Social Icons */}
        <div className="flex space-x-4">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
            <a 
              key={index}
              href="#" 
              className="w-10 h-10 flex items-center justify-center rounded-full text-[#27A4A1] hover:bg-[#27A4A1] hover:text-white transition-colors"
              aria-label={`${Icon} social link`}
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 lg:hidden">
            {navItems.map((item) => (
              <Link key={item.name} href={item.path}>
                <span 
                  className="block py-3 text-[#5E3B1F] font-medium border-b border-[#f0e6d9] hover:text-[#27A4A1] cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}