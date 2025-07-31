"use client";
import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
} from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    // { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="w-full bg-white fixed top-0 z-50 shadow-sm px-4 sm:px-6 py-7 sm:py-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between relative">
          {/* Left: Hamburger menu on mobile */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <FaBars className="text-xl text-[#5E3B1F]" />
              <span className="font-bold text-[#5E3B1F]">MENU</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} href={item.path}>
                <span className="text-[#5E3B1F] hover:text-[#27A4A1] text-xs font-medium transition-colors cursor-pointer">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:translate-x-0 text-center">
  <Link href="/">
    <div
      style={{ fontFamily: "var(--font-sacramento)" }}
      className="text-2xl sm:text-4xl font-bold text-[#5E3B1F] px-6 py-2 cursor-pointer"
    >
      Spa & Massage
    </div>
  </Link>

  {/* Subtext: Home / Services (not links) */}
  <div className="-mt-3 text-sm sm:text-base text-[#5E3B1F] font-medium"
  style={{
    fontFamily: "var(--font-sacramento)"
  }}>
    Home Services
  </div>
</div>



          {/* Right: Desktop social icons / Mobile call button */}
          <div className="flex items-center">
            {/* Desktop Social Icons */}
            <div className="hidden lg:flex space-x-2">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-9 h-9 flex items-center justify-center rounded-full text-[#27A4A1] hover:bg-[#27A4A1] hover:text-white transition-colors"
                    aria-label={`${Icon} social link`}
                  >
                    <Icon size={14} />
                  </a>
                )
              )}
            </div>

            {/* Mobile: Contact/Call Button */}
            <a
              href="tel:+91 9123071634"
              className="lg:hidden bg-[#27A4A1] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="w-full bg-white shadow-lg py-4 px-6 lg:hidden mt-2 space-y-4">
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

            {/* Mobile Social Icons */}
            <div className="flex justify-center space-x-3 pt-4 border-t border-[#eee]">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-9 h-9 flex items-center justify-center rounded-full text-[#27A4A1] hover:bg-[#27A4A1] hover:text-white transition-colors"
                    aria-label={`${Icon} social link`}
                  >
                    <Icon size={14} />
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-24"></div>
    </>
  );
}
