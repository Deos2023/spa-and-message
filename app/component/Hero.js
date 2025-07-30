import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen py-16 bg-white">
      {/* Background elements (optional) */}
      <div className="absolute inset-0 overflow-hidden">
        {/* You can add decorative elements here */}
      </div>

      {/* Main content container */}
      <div className="container mx-auto sm:-mt-16 px-4 flex flex-col lg:flex-row items-center justify-center gap-12 z-10">
        {/* Image - will stack above text on mobile */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <img 
              src="/lady.png" 
              alt="Relaxing spa environment" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Text content - centered both horizontally and vertically */}
        <div className="w-full lg:w-1/2  flex flex-col items-center lg:items-start text-center lg:text-left space-y-1">
          <div className="w-16 h-16 relative">
            <img 
              src="/flower.png" 
              alt="Decorative flower" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <h1 
            style={{ fontFamily: 'var(--font-sacramento)' }} 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#5E3B1F] leading-tight"
          >
            Beauty Spa <br /> With Massage
          </h1>
          
          <p className="text-lg text-gray-600 max-w-md">
            Indulge in luxury treatments with our premium services
          </p>
          
          <button className="mt-6 px-8 py-4 bg-[#A06718] hover:bg-[#8a5a15] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            MAKE AN APPOINTMENT
          </button>
        </div>
      </div>
    </section>
  );
}