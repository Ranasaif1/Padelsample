import React from 'react';

const AwardsBanner = () => {
  return (
    <div className="bg-[#c5d52f] py-10 md:py-16 overflow-hidden flex relative w-full">
      
      {/* ⚙️ Custom CSS for Infinite Scrolling Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            white-space: nowrap;
            width: max-content;
            /* 25s ko kam ya zyada kar ke aap speed adjust kar sakte hain */
            animation: marquee 25s linear infinite;
          }
          /* Agar aap chahte hain mouse aane par text ruk jaye, toh isko un-comment karein */
          /* .animate-marquee:hover { animation-play-state: paused; } */
        `}
      </style>

      {/* 🚀 Scrolling Wrapper */}
      <div className="animate-marquee">
        
        {/* First Text Set */}
        <h2 
          className="text-6xl md:text-[80px] font-bold text-white uppercase px-6 tracking-wide"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          • WE WIN INTERNATIONAL AWARDS 
        </h2>
        <h2 
          className="text-6xl md:text-[80px] font-bold text-white uppercase px-6 tracking-wide"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          • WE WIN INTERNATIONAL AWARDS 
        </h2>
        
        {/* Second Text Set (Exactly Same - Taake loop tootay nahi) */}
        <h2 
          className="text-6xl md:text-[80px] font-bold text-white uppercase px-6 tracking-wide"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          • WE WIN INTERNATIONAL AWARDS 
        </h2>
        <h2 
          className="text-6xl md:text-[80px] font-bold text-white uppercase px-6 tracking-wide"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          • WE WIN INTERNATIONAL AWARDS • 
        </h2>

      </div>
    </div>
  );
};

export default AwardsBanner;