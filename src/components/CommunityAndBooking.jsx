import React from 'react';

const CommunityAndBooking = () => {
  return (
    <div className="bg-white py-24 px-6 md:px-10 lg:px-20 max-w-350 mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
      
      {/* 🖼️ Left Side: Custom Offset Image Grid */}
      <div className="w-full lg:w-1/2 flex gap-4 md:gap-6">
        
        {/* Column 1: Tall Image (Pushed Down slightly for masonry effect) */}
        <div className="w-1/2 mt-12 md:mt-20">
          <img 
            src="/image2.jpg" 
            alt="Padel Court Details" 
            className="w-full h-75 md:h-100 object-cover shadow-lg"
          />
        </div>

        {/* Column 2: Two Stacked Images */}
        <div className="w-1/2 flex flex-col gap-4 md:gap-6">
          {/* Top Image */}
          <img 
            src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=600&auto=format&fit=crop&q=80" 
            alt="Female Padel Players" 
            className="w-full h-42.5 md:h-70 object-cover shadow-lg"
          />
          {/* Bottom Image */}
          <img 
            src="https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?w=600&auto=format&fit=crop&q=80" 
            alt="Male Padel Player" 
            className="w-full h-42.5 md:h-70 object-cover shadow-lg"
          />
        </div>

      </div>

      {/* 📝 Right Side: Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
        
        {/* Subheading */}
        <h4 className="text-[#437bf2] font-bold text-sm tracking-widest uppercase mb-4">
          About Our Club
        </h4>
        
        {/* Main Heading */}
        <h2 
          className="text-4xl md:text-5xl lg:text-4xl font-bold uppercase mb-6 text-black leading-[1.1]" 
          style={{ fontFamily: "'Oswald', Arial" }}
        >
          Join A Growing Padel Community
        </h2>
        
        {/* Description */}
        <p className="text-gray-500 text-lg mb-10 max-w-md leading-relaxed font-medium">
          Enjoy modern courts, professional coaching, and a welcoming atmosphere designed for players of every level.
        </p>
        
        {/* Call to Action Button */}
        <button className="bg-[#437bf2] text-white px-10 py-4 text-sm font-bold uppercase tracking-wider hover:bg-blue-700 transition duration-300 shadow-md">
          About Us
        </button>

      </div>
      
    </div>
  );
};

export default CommunityAndBooking;