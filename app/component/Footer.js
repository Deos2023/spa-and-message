import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#5E3B1F] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-sacramento)' }} className="text-4xl mb-4">Spa & Massage</h3>
            <p className="text-[#f0e6d9] mb-4">
              Bringing luxury spa experiences to your doorstep in Kolkata since 2021.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#f0e6d9] hover:text-[#A06718] transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-[#f0e6d9] hover:text-[#A06718] transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-[#f0e6d9] hover:text-[#A06718] transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://wa.me/919123071634" className="text-[#f0e6d9] hover:text-[#A06718] transition-colors">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-[#f0e6d9] hover:text-[#A06718] transition-colors">Home</a></li>
              <li><a href="/about" className="text-[#f0e6d9] hover:text-[#A06718] transition-colors">About Us</a></li>
              <li><a href="/services" className="text-[#f0e6d9] hover:text-[#A06718] transition-colors">Services</a></li>
              <li><a href="/contact" className="text-[#f0e6d9] hover:text-[#A06718] transition-colors">Contact</a></li>
             
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#f0e6d9] hover:text-[#A06718] transition-colors">Aroma Oil Massage</a></li>
              <li><a href="#" className="text-[#f0e6d9] hover:text-[#A06718] transition-colors">Deep Tissue Massage</a></li>
              <li><a href="#" className="text-[#f0e6d9] hover:text-[#A06718] transition-colors">Body Polish</a></li>
              <li><a href="#" className="text-[#f0e6d9] hover:text-[#A06718] transition-colors">Facial Treatments</a></li>
              <li><a href="#" className="text-[#f0e6d9] hover:text-[#A06718] transition-colors">Bridal Packages</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-[#A06718]" />
                <a href="tel:9123071634" className="text-[#f0e6d9] hover:text-[#A06718] transition-colors">9123071634</a>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-3 text-[#A06718]" />
                <a href="mailto:rsk881745@gmail.com" className="text-[#f0e6d9] hover:text-[#A06718] transition-colors">rsk881745@gmail.com</a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-[#A06718]" />
                <span className="text-[#f0e6d9]">
                  95 Kabisekhar Kalidas Roy Road<br />
                  Kolkata, WB 700026
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#A06718] my-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#f0e6d9] mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Spa & Massage Home Service. All rights reserved.Website Develope and Maintained by Digital Exposure Online Services. 
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-[#f0e6d9] hover:text-[#A06718] transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-[#f0e6d9] hover:text-[#A06718] transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-[#f0e6d9] hover:text-[#A06718] transition-colors text-sm">Cancellation Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}