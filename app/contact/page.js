
"use client"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;
    
    const whatsappMessage = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${message}`;
    
    window.open(`https://wa.me/919123071634?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="bg-white">
      <div className="bg-white max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#f8f3ed]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <img src="/flower.png" alt="Flower" width={60} height={60} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-sacramento)' }} className="text-6xl md:text-8xl text-[#5E3B1F] mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-[#A06718] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get in touch for bookings or inquiries
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#5E3B1F] mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A06718]"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A06718]"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A06718]"
                  />
                </div>
                <div>
                  <textarea 
                    name="message"
                    placeholder="Your Message" 
                    rows="4"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A06718]"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="flex items-center justify-center px-8 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-full transition-colors"
                >
                  <FaWhatsapp className="mr-2 text-xl" />
                  Send via WhatsApp
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div>
              <div className="bg-[#f8f3ed] p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-[#5E3B1F] mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FaPhone className="text-[#A06718] mt-1 mr-4 text-xl" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">9123071634</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaEnvelope className="text-[#A06718] mt-1 mr-4 text-xl" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">rsk881745@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-[#A06718] mt-1 mr-4 text-xl" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Address</h4>
                      <p className="text-gray-600">
                        95 Kabisekhar Kalidas Roy Road<br />
                        (Landmark: Subhash Sangha Club)<br />
                        Kolkata, West Bengal 700026
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.771068366052!2d88.36787441533839!3d22.54564473814694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a7f1315f2d%3A0x6a4a7f6b1a2b5e1f!2sSubhash%20Sangha%20Club!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}