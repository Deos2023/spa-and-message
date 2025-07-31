import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919123071634?text=Hi,%20I%20would%20like%20to%20inquire%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+919123071634"
        className="flex items-center justify-center w-14 h-14 bg-[#27A4A1] hover:bg-[#218e8b] text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
        aria-label="Call Now"
      >
        <FaPhoneAlt size={20} />
      </a>
    </div>
  );
}
