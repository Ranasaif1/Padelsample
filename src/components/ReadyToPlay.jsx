import React from 'react';

const ReadyToPlay = () => {
  return (
    <div 
      // bg-fixed class hi woh jadoo hai jo background image ko rok kar rakhti hai
      className="relative w-full py-40 md:py-48 bg-cover bg-center bg-fixed flex flex-col justify-center items-center"
      style={{
        // Maine ek high-quality Padel court/racket ki image lagayi hai
        backgroundImage: "url('https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=1920&auto=format&fit=crop&q=80')" 
      }}
    >
      {/* 🌑 Dark Overlay (Taake white text asani se parha jaye) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 📝 Content Area (Text aur Button) */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        {/* Small Top Heading */}
        <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-4">
          Ready to Play?
        </h4>
        
        {/* Main Big Heading */}
        <h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white mb-10 leading-tight max-w-4xl"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          Join The Fastest Growing Sport Today
        </h2>
        
        {/* Transparent Border Button */}
        <button className="border-2 border-white text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
          Book A Court
        </button>

      </div>
    </div>
  );
};

export default ReadyToPlay;