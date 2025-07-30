
"use client"
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import HeroSection from './component/Hero';

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Priya Sharma",
      review: "The best spa experience I've had at home. The therapist was professional and the aromatherapy was divine!",
      rating: "★★★★★"
    },
    {
      name: "Rahul Chatterjee",
      review: "Regular customer for their deep tissue massage. Relieves all my work stress effectively.",
      rating: "★★★★☆"
    },
    {
      name: "Mousumi Banerjee",
      review: "Loved the body polish treatment. My skin has never felt so soft and rejuvenated!",
      rating: "★★★★★"
    }
  ];

  const spaServices = [
  { name: "Hair Services", image: "/spa/hair-services.png" },
  { name: "Hair Treatments", image: "/spa/hair-treatments.png" },
  { name: "Hair Colouring", image: "/spa/hair-colouring.png" },
  { name: "Hair Extensions", image: "/spa/hair-extensions.png" },
  { name: "Cosmetic Services", image: "/spa/cosmetic.png" },
  { name: "Mani Services", image: "/spa/mani.png" },
  { name: "Make-up", image: "/spa/makeup.png" },
  { name: "Wedding Events", image: "/spa/wedding.png" },
  { name: "Spa & Massage", image: "/spa/massage.png" },
];

  return (
    <div className="bg-white">
      {/* Hero Section (from previous) */}
      <HeroSection />
      {/* About Us Section */}
      <section className="py-16 px-4 bg-[#fefaf5]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center">
              <img src="/flower.png" alt="Flower" width={60} height={60} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-sacramento)' }} className="text-5xl md:text-6xl text-[#5E3B1F] mb-4">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-[#A06718] mx-auto mb-8"></div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Since 2021, Spa & Massage Home Service has been bringing luxury wellness experiences directly to your doorstep in Kolkata.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Founded with a passion for holistic healing, we combine traditional techniques with modern therapies to create personalized treatments that rejuvenate both body and mind.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <FaPhone className="text-3xl text-[#A06718] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600">9123071634</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <FaEnvelope className="text-3xl text-[#A06718] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">rsk881745@gmail.com</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <FaMapMarkerAlt className="text-3xl text-[#A06718] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-600">95 Kabisekhar Kalidas Roy Road, Kolkata</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-[#f4fdff]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex justify-center">
            <img src="/flower.png" alt="Flower" width={60} height={60} />
          </div>
          <h2 className="text-5xl md:text-6xl text-[#5E3B1F] mb-4 "
          style={{ fontFamily: 'var(--font-sacramento)' }}
          >
            Our Services
          </h2>
          <div className="w-24 h-1 bg-[#A06718] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {spaServices.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-2">
              <div className="w-32 h-32 relative">
                <img
                  src={service.image}
                  alt={service.name}
                  layout="fill"
                  className="object-cover rounded-full border-4 border-white shadow-lg"
                  style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)' }}
                />
              </div>
              <p className="text-lg font-semibold text-[#333]">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* What We Serve Section */}
      <section className="py-16 px-4 bg-[#f8f3ed]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center">
              <img src="/flower.png" alt="Flower" width={60} height={60} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-sacramento)' }} className="text-5xl md:text-6xl text-[#5E3B1F] mb-4">
              What We Serve
            </h2>
            <div className="w-24 h-1 bg-[#A06718] mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#5E3B1F] mb-6">Our Specialties</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-3">✓</span>
                  <span className="text-gray-700">Professional therapists with 5+ years experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-3">✓</span>
                  <span className="text-gray-700">Premium quality oils and products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-3">✓</span>
                  <span className="text-gray-700">Customized treatments for individual needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-3">✓</span>
                  <span className="text-gray-700">Hygienic equipment and sanitized environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-3">✓</span>
                  <span className="text-gray-700">Flexible scheduling including weekends</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#5E3B1F] mb-6">Why Choose Us</h3>
              <p className="text-gray-700 mb-4">
                We bring the spa experience to your home, saving you time while providing the same luxury service you'd receive at a high-end spa.
              </p>
              <p className="text-gray-700 mb-4">
                Our therapists are trained in multiple modalities and can adapt techniques to your specific requirements.
              </p>
              <p className="text-gray-700">
                We use only premium, therapeutic-grade products that nourish your skin while providing deep relaxation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center">
              <img src="/flower.png" alt="Flower" width={60} height={60} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-sacramento)' }} className="text-5xl md:text-6xl text-[#5E3B1F] mb-4">
              Client Stories
            </h2>
            <div className="w-24 h-1 bg-[#A06718] mx-auto mb-8"></div>
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-[#f8f3ed] p-8 rounded-lg shadow-md text-center">
              <p className="text-xl italic text-gray-700 mb-4">"{testimonials[currentTestimonial].review}"</p>
              <p className="font-bold text-[#5E3B1F]">{testimonials[currentTestimonial].name}</p>
              <p className="text-[#A06718]">{testimonials[currentTestimonial].rating}</p>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="p-2 rounded-full bg-[#A06718] text-white"
              >
                <FaArrowLeft />
              </button>
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="p-2 rounded-full bg-[#A06718] text-white"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 px-4 text-neutral-700 bg-[#f8f3ed]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 style={{ fontFamily: 'var(--font-sacramento)' }} className="text-5xl md:text-6xl text-[#5E3B1F] mb-6">
              Get In Touch
            </h2>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const name = e.target[0].value;
                const email = e.target[1].value;
                const phone = e.target[2].value;
                const message = e.target[3].value;
                const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
                window.open(`https://wa.me/919123071634?text=${whatsappMessage}`, '_blank');
              }}
            >
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A06718]" required />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A06718]" required />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A06718]" required />
              <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A06718]" required></textarea>
              <button type="submit" className="px-8 py-3 bg-[#A06718] hover:bg-[#8a5a15] text-white font-semibold rounded-full transition-colors">
                Send Message via WhatsApp
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#5E3B1F] mb-6">Our Location</h3>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden mb-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.771068366052!2d88.36787441533839!3d22.54564473814694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a7f1315f2d%3A0x6a4a7f6b1a2b5e1f!2sSubhash%20Sangha%20Club!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[#A06718] mt-1 mr-3" />
                <p>95 Kabisekhar Kalidas Roy Road (Landmark: Subhash Sangha Club), Kolkata, West Bengal 700026</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-[#A06718] mr-3" />
                <p>9123071634</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-[#A06718] mr-3" />
                <p>rsk881745@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}