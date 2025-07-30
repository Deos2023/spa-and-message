import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaLeaf, FaHands, FaHeart, FaAward } from "react-icons/fa";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Rajesh Sharma",
      role: "Founder & Lead Therapist",
      bio: "With 15+ years in wellness industry, specializes in deep tissue and therapeutic massages.",
      expertise: "Deep Tissue, Sports Massage"
    },
    {
      name: "Priyanka Chatterjee",
      role: "Senior Spa Therapist",
      bio: "Expert in aromatherapy and holistic treatments with a passion for Ayurvedic techniques.",
      expertise: "Aromatherapy, Ayurvedic Massage"
    },
    {
      name: "Ananya Das",
      role: "Beauty Specialist",
      bio: "Skincare expert providing advanced facial treatments and body polishing services.",
      expertise: "Facials, Body Treatments"
    }
  ];

  const features = [
    {
      icon: <FaLeaf className="text-3xl text-[#A06718]" />,
      title: "Natural Products",
      description: "We use only premium, organic oils and products for all treatments"
    },
    {
      icon: <FaHands className="text-3xl text-[#A06718]" />,
      title: "Certified Therapists",
      description: "All our professionals are certified with minimum 5 years experience"
    },
    {
      icon: <FaHeart className="text-3xl text-[#A06718]" />,
      title: "Personalized Care",
      description: "Every treatment is customized to your specific needs and preferences"
    },
    {
      icon: <FaAward className="text-3xl text-[#A06718]" />,
      title: "Award-Winning Service",
      description: "Recognized as Kolkata's Best Home Spa Service 2022 & 2023"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <img src="/flower.png" alt="Flower" width={60} height={60} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-sacramento)' }} className="text-6xl font-semibold md:text-8xl text-[#5E3B1F] mb-4">
            Our Story
          </h1>
          <div className="w-24 h-1 bg-[#A06718] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Bringing luxury spa experiences to your doorstep since 2021
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#5E3B1F] mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-6">
                Spa & Massage Home Service was founded with a simple mission: to provide professional, 
                high-quality spa treatments in the comfort of your own home.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our team of certified therapists brings years of experience and a passion for wellness 
                to every session. We believe that self-care shouldn't be limited by time or location.
              </p>
              <p className="text-lg text-gray-700">
                Serving Kolkata since 2021, we've helped hundreds of clients reduce stress, relieve pain, 
                and achieve deeper relaxation without leaving their homes.
              </p>
            </div>
            <div className="bg-[#f8f3ed] p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#5E3B1F] mb-6">Our Details</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaCalendarAlt className="text-[#A06718] mt-1 mr-4 text-xl" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Since From</h4>
                    <p className="text-gray-600">2021</p>
                  </div>
                </div>
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
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-[#f8f3ed]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#5E3B1F] mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-[#A06718] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#5E3B1F] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-sacramento)' }} className="text-5xl text-[#5E3B1F] mb-2">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-[#A06718] mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our certified professionals bring expertise and care to every treatment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-[#f8f3ed] rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 bg-[#A06718] flex items-center justify-center text-white text-4xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#5E3B1F]">{member.name}</h3>
                  <p className="text-[#A06718] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700 mb-4">{member.bio}</p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Specializes in:</span> {member.expertise}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-16 px-4 bg-[#5E3B1F] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 style={{ fontFamily: 'var(--font-sacramento)' }} className="text-5xl mb-4">
            Our Promise to You
          </h2>
          <div className="w-24 h-1 bg-[#A06718] mx-auto mb-8"></div>
          <p className="text-xl mb-8">
            We guarantee professional, hygienic, and transformative wellness experiences that prioritize your comfort and satisfaction above all else.
          </p>
          <div className="bg-white text-[#5E3B1F] inline-block px-8 py-3 rounded-full font-semibold">
            Book Your Experience Today
          </div>
        </div>
      </section>
    </div>
  );
}