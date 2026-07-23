import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-8 px-6 md:px-10 lg:px-20">
      <div className="max-w-350 mx-auto">
        
        {/* 🌟 Top Big Heading */}
        <h2 
          className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase mb-20 leading-[1.1]"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          We're proud to be<br />the best
        </h2>

        {/* 📋 4 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          {/* Column 1: ADDRESS */}
          <div className="flex flex-col items-start">
            <h4 
              className="text-sm font-bold tracking-widest uppercase mb-8"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Address
            </h4>
            <p className="text-gray-400 leading-relaxed font-medium">
              The USA —<br />
              11792 London Rd, Derby,<br />
              OH 43117, US
            </p>
          </div>

          {/* Column 2: SAY HELLO */}
          <div className="flex flex-col items-start">
            <h4 
              className="text-sm font-bold tracking-widest uppercase mb-8"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Say Hello
            </h4>
            {/* Underlined Email Link */}
            <a 
              href="mailto:info@email.com" 
              className="text-gray-400 hover:text-white transition-colors border-b border-gray-600 pb-1 mb-4"
            >
              info@email.com
            </a>
            {/* Bold Phone Number */}
            <p className="text-white font-bold text-lg mt-2 tracking-wider">
              +1 800 555 45 65
            </p>
          </div>

          {/* Column 3: SOCIALS */}
          <div className="flex flex-col items-start">
            <h4 
              className="text-sm font-bold tracking-widest uppercase mb-8"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Socials
            </h4>
            <ul className="text-gray-400 space-y-4 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dribble</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>

          {/* Column 4: NEWSLETTER */}
          <div className="flex flex-col items-start w-full">
            <h4 
              className="text-sm font-bold tracking-widest uppercase mb-8"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Newsletter
            </h4>
            {/* Minimalist Input Field */}
            <div className="flex items-center border-b border-gray-600 pb-2 w-full group">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-transparent outline-none w-full text-gray-300 placeholder-gray-600 font-medium" 
              />
              <button className="text-gray-500 group-hover:text-white transition-colors ml-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* ⚖️ Bottom Bar (Copyright) */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-medium relative">
          
          {/* Custom Zarvix Digital Copyright */}
          <p>Zarvix Digital © 2026. All Rights Reserved.</p>
          
          {/* Back to Top Arrow (Absolute positioning on right side) */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hidden md:flex absolute right-0 -top-6 bg-[#1a1a1a] hover:bg-[#c5d52f] hover:text-black transition-colors w-12 h-12 items-center justify-center text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;