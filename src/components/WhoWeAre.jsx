import React from 'react';

const WhoWeAre = () => {
  return (
    <div className="bg-white py-24 px-6 md:px-10 lg:px-20 max-w-350 mx-auto">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        
        {/* 🟦 Column 1: Blue Info Box */}
        <div className="bg-[#437bf2] text-white p-12 lg:p-16 flex flex-col justify-center items-center text-center">
          {/* Small Golden Dot */}
          <div className="w-2 h-2 bg-[#d4af37] rounded-full mb-8"></div>
          
          <h2 
            className="text-3xl font-bold uppercase mb-4 tracking-wider"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Who We Are
          </h2>
          
          <p className="text-white/90 text-sm md:text-base mb-8 leading-relaxed max-w-62.5">
            Passionate about padel and committed to helping every player improve with confidence.
          </p>
          
          <button className="bg-white text-black px-8 py-3 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition duration-300">
            About Us
          </button>
        </div>

        {/* 📸 Column 2: Center Image */}
        <div className="h-100 md:h-125 lg:h-137.5 w-full">
          <img 
            /* Yahan ek high quality female sports portrait lagai hai */
            src="image4.jfif" 
            alt="Sofia Rodriguez" 
            className="w-full h-full object-cover object-center shadow-sm"
          />
        </div>

        {/* 📝 Column 3: Team Member Info */}
        <div className="flex flex-col justify-center items-start md:pl-4 lg:pl-8">
          
          <h3 
            className="text-3xl lg:text-4xl font-bold uppercase text-black mb-2 tracking-tight"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Sofia Rodriguez
          </h3>
          
          <p className="text-gray-500 font-medium mb-8">
            Administrator
          </p>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-6 text-black">
            
            {/* Facebook */}
            <a href="#" className="hover:text-[#437bf2] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            
            {/* X (Twitter) */}
            <a href="#" className="hover:text-[#437bf2] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            
            {/* Globe (Website) */}
            <a href="#" className="hover:text-[#437bf2] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </a>
            
            {/* Instagram */}
            <a href="#" className="hover:text-[#437bf2] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>

          </div>
        </div>

      </div>
    </div>
  );
};

export default WhoWeAre;