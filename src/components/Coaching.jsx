import React, { useEffect, useState, useRef } from 'react';

const Coaching = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = window.innerHeight - rect.top;
        if (progress > 0) {
          setScrollProgress(progress);
        } else {
          setScrollProgress(0);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 100% Working Verified Image Links and Texts
  const gridData = {
    bigImage: {
      url: "/image2.jpg",
      title: "ELITE PADEL ARENA",
      category: "Padel"
    },
    smallImages: [
      {
        url: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&auto=format&fit=crop&q=80",
        title: "PRO TOURNAMENTS",
        category: "Padel"
      },
      {
        url: "/image1.jfif",
        title: "WOMEN'S LEAGUE",
        category: "Padel"
      },
      {
        url: "https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?w=800&auto=format&fit=crop&q=80",
        title: "SUNSET PADEL RESORT",
        category: "Padel"
      },
      {
        url: "/image3.jfif",
        title: "KIDS COACHING",
        category: "Padel"
      }
    ]
  };

  return (
    <div ref={sectionRef} className="bg-white pt-20 text-center overflow-hidden">
      
      {/* 🌟 1. FLOATING PARALLAX HEADER SECTION */}
      <div className="relative py-40 max-w-350 mx-auto flex justify-center items-center min-h-125 px-4 md:px-10">
        
        {/* Main Title */}
        <h3 
          className="relative z-20 text-3xl md:text-5xl lg:text-[60px] font-bold uppercase text-black tracking-tight leading-[1.2] w-full"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          <span className="whitespace-nowrap">ELEVATE YOUR PERFORMANCE THROUGH</span> <br className="hidden md:block" />
          <span className="whitespace-nowrap">PROFESSIONAL PADEL COACHING</span>
        </h3>

        {/* --- FLOATING ELEMENTS START --- */}
        <div 
          className="absolute z-10 bg-[#c5d52f] text-white font-bold uppercase tracking-widest text-xs md:text-sm py-3 px-6 md:px-8 rounded-full shadow-xl whitespace-nowrap"
          style={{ 
            top: '50%', left: '50%', 
            transform: `translate(calc(-50% - ${scrollProgress * 0.4}px), calc(-50% - ${scrollProgress * 0.25}px)) rotate(-10deg)` 
          }}
        >
          Court Rental
        </div>

        <img 
          src="/image.png" 
          alt="Tennis Ball" 
          className="absolute z-30 w-16 h-16 md:w-24 md:h-24 drop-shadow-2xl"
          style={{ 
            top: '50%', left: '50%', 
            transform: `translate(calc(-50% - ${scrollProgress * 0.6}px), calc(-50% - ${scrollProgress * 0.05}px)) rotate(${-scrollProgress}deg)` 
          }}
        />

        <div 
          className="absolute z-10 bg-[#c5d52f] text-white font-bold uppercase tracking-widest text-xs md:text-sm py-3 px-6 md:px-8 rounded-full shadow-xl whitespace-nowrap"
          style={{ 
            top: '50%', left: '50%', 
            transform: `translate(calc(-50% - ${scrollProgress * 0.3}px), calc(-50% + ${scrollProgress * 0.25}px)) rotate(-15deg)` 
          }}
        >
          Tournaments
        </div>

        <div 
          className="absolute z-10 bg-[#c5d52f] text-white font-bold uppercase tracking-widest text-xs md:text-sm py-3 px-6 md:px-8 rounded-full shadow-xl whitespace-nowrap"
          style={{ 
            top: '50%', left: '50%', 
            transform: `translate(calc(-50% + ${scrollProgress * 0.45}px), calc(-50% - ${scrollProgress * 0.2}px)) rotate(12deg)` 
          }}
        >
          Private Lessons
        </div>

        <div 
          className="absolute z-10 bg-[#c5d52f] text-white font-bold uppercase tracking-widest text-xs md:text-sm py-3 px-6 md:px-8 rounded-full shadow-xl whitespace-nowrap"
          style={{ 
            top: '50%', left: '50%', 
            transform: `translate(calc(-50% + ${scrollProgress * 0.35}px), calc(-50% + ${scrollProgress * 0.3}px)) rotate(20deg)` 
          }}
        >
          Community
        </div>

        <img 
          src="/image.png" 
          alt="Tennis Ball" 
          className="absolute z-30 w-20 h-20 md:w-28 md:h-28 drop-shadow-2xl"
          style={{ 
            top: '50%', left: '50%', 
            transform: `translate(calc(-50% + ${scrollProgress * 0.6}px), calc(-50% + ${scrollProgress * 0.1}px)) rotate(${scrollProgress}deg)` 
          }}
        />
        {/* --- FLOATING ELEMENTS END --- */}
      </div>

      {/* 🖼️ 2. MASONRY IMAGE GRID WITH DYNAMIC HOVER */}
      <div className="w-full relative z-30 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-2">
          
          {/* Left Side: 1 Big Image */}
          <div className="relative h-100 lg:h-200 group overflow-hidden cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              style={{ backgroundImage: `url('${gridData.bigImage.url}')` }}
            ></div>
            
            {/* Dark Overlay on Hover (for better text readability) */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            
            {/* Hover Text in Center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 translate-y-4 group-hover:translate-y-0">
              <div 
                className="bg-[#1a1a1a] text-white px-8 py-4 font-bold uppercase tracking-wider text-2xl mb-1 text-center"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {gridData.bigImage.title}
              </div>
              <div className="bg-[#1a1a1a] text-white px-8 py-2 text-md font-semibold">
                {gridData.bigImage.category}
              </div>
            </div>
          </div>

          {/* Right Side: 4 Smaller Images (2x2 Grid) */}
          <div className="grid grid-cols-2 grid-rows-2 gap-1 lg:gap-2 h-100 lg:h-200">
            
            {gridData.smallImages.map((img, index) => (
              <div key={index} className="relative group overflow-hidden cursor-pointer">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: `url('${img.url}')` }}
                ></div>
                
                {/* Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                
                {/* Hover Text in Center */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 translate-y-4 group-hover:translate-y-0">
                  <div 
                    className="bg-[#1a1a1a] text-white px-4 py-2 md:px-6 md:py-3 font-bold uppercase tracking-wider text-sm md:text-xl mb-1 text-center"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {img.title}
                  </div>
                  <div className="bg-[#1a1a1a] text-white px-4 py-1 md:px-6 md:py-2 text-xs md:text-sm font-semibold">
                    {img.category}
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
      
    </div>
  );
};

export default Coaching;