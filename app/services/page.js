import Image from "next/image";

export default function ServicesPage() {
  // Massage Services
  const massageServices = [
    {
      name: "Aroma Oil Massage",
      title: "Aroma Oil Massage",
      price: "₹1499",
      duration: "60 mins",
      description:
        "Relaxing massage with aromatic essential oils to relieve stress and improve circulation",
    },
    {
      name: "Dry Massage",
      title: "Dry Massage",
      price: "₹1199",
      duration: "45 mins",
      description:
        "Traditional massage technique without oils to improve muscle tone and flexibility",
    },
    {
      name: "Deep Tissue Massage",
      title: "Deep Tissue Massage",
      price: "₹1999",
      duration: "75 mins",
      description: "Targeted pressure to relieve chronic muscle tension and pain",
    },
    {
      name: "Body Polish",
      title: "Body Polish",
      price: "₹2499",
      duration: "90 mins",
      description: "Exfoliation and hydration treatment for radiant, smooth skin",
    },
    {
      name: "Hot Stone Massage",
      title: "Hot Stone Massage",
      price: "₹2999",
      duration: "90 mins",
      description: "Heated stones to relax muscles and improve energy flow",
    },
    {
      name: "Swedish Massage",
      title: "Swedish Massage",
      price: "₹1799",
      duration: "60 mins",
      description: "Gentle, relaxing full-body massage with long strokes",
    },
  ];

  // Spa & Beauty Services
  const spaBeautyServices = [
    {
      name: "Facial Treatment",
      title: "spa",
      price: "₹999-₹2999",
      duration: "45-90 mins",
      description: "Customized facials for glowing skin with deep cleansing",
    },
    {
      name: "Body Scrub",
      title: "bodymsg",
      price: "₹1999",
      duration: "60 mins",
      description: "Exfoliation treatment to remove dead skin cells",
    },
    {
      name: "Waxing Services",
      title: "fullbody",
      price: "₹499-₹1499",
      duration: "30-60 mins",
      description: "Professional hair removal for smooth skin",
    },
    {
      name: "Manicure & Pedicure",
      title: "naiol",
      price: "₹799-₹1499",
      duration: "60-90 mins",
      description: "Nail care and grooming with massage",
    },
  ];

  // Hair Services
  const hairServices = [
    {
      name: "Hair Cut & Styling",
      title: "Hair Cut & Styling",
      price: "₹499-₹1499",
      duration: "45-90 mins",
      description: "Professional haircut and styling for all hair types",
    },
    {
      name: "Hair Coloring",
      title: "Hair Coloring",
      price: "₹1499-₹3999",
      duration: "90-180 mins",
      description: "Expert coloring with premium products",
    },
    {
      name: "Hair Spa",
      title: "Hair Spa",
      price: "₹1299",
      duration: "60 mins",
      description: "Deep conditioning treatment for damaged hair",
    },
    {
      name: "Bridal Hair & Makeup",
      title: "Bridal Hair & Makeup",
      price: "₹4999+",
      duration: "120+ mins",
      description: "Complete bridal look with trials available",
    },
  ];

  return (
    <div className="bg-white">
      <div className="bg-white max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="relative py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <img src="/flower.png" alt="Flower" width={60} height={60} />
            </div>
            <h1
              style={{ fontFamily: "var(--font-sacramento)" }}
              className="text-6xl md:text-8xl text-[#5E3B1F] mb-4"
            >
              Our Services
            </h1>
            <div className="w-24 h-1 bg-[#A06718] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Professional treatments in the comfort of your home
            </p>
          </div>
        </section>

        {/* Massage Services */}
        <Section title="Massage Therapies" services={massageServices} />

        {/* Spa & Beauty Services */}
        <Section title="Spa & Beauty Treatments" services={spaBeautyServices} />

        {/* Hair Services */}
        <Section title="Hair Care Services" services={hairServices} />

        {/* Price Range Section */}
        <section className="py-16 px-4 bg-[#f8f3ed]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-[#5E3B1F] mb-8 text-center">
              Our Price Range
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <li className="flex justify-between border-b pb-2">
                  <span>Basic Massages</span>
                  <span className="font-semibold">₹1199 - ₹1999</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Premium Massages</span>
                  <span className="font-semibold">₹2499 - ₹3999</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Facials & Skin Care</span>
                  <span className="font-semibold">₹999 - ₹2999</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Hair Services</span>
                  <span className="font-semibold">₹499 - ₹4999+</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Waxing Services</span>
                  <span className="font-semibold">₹499 - ₹1499</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Bridal Packages</span>
                  <span className="font-semibold">₹4999+</span>
                </li>
              </ul>
              <p className="mt-6 text-center text-gray-600">
                *Prices may vary based on specific requirements and duration
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Reusable Section Component
function Section({ title, services }) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-[#5E3B1F] mb-8 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Reusable Service Card Component
function ServiceCard({ service }) {
  const imageName = service.title
    ? `/img/${service.title.toLowerCase().replace(/\s+/g, '-')}.jpg`
    : "/img/default.jpg";

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-48 bg-[#A06718] flex items-center justify-center relative overflow-hidden">
        <Image
          src={imageName}
          alt={service.name}
          fill
          className="object-cover opacity-70"
        />
        <h3 className="text-2xl font-bold text-white relative z-10 text-center px-4">
          {service.name}
        </h3>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-semibold text-[#A06718]">
            {service.price}
          </span>
          <span className="text-gray-600 text-sm">{service.duration}</span>
        </div>
        <p className="text-gray-700 mb-6">{service.description}</p>
        <a
          href={`https://wa.me/919123071634?text=Hi,%20I%20would%20like%20to%20book%20${encodeURIComponent(
            service.name
          )}%20service`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center px-6 py-2 bg-[#5E3B1F] hover:bg-[#4a2e16] text-white rounded-full transition-colors"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
