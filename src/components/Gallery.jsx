import React from 'react';

const Gallery = () => {
  // Nayi 100% working aur achi quality ki images
  const galleryImages = [
    { 
      url: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=800&auto=format&fit=crop", 
      title: "TOURNAMENTS & EVENTS", 
      number: "01.",
      category: "Padel"
    },
    { 
      url: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=800&auto=format&fit=crop", 
      title: "PRIVATE & GROUP LESSONS", 
      number: "02.",
      category: "Padel"
    },
    { 
      url: "https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?w=800&auto=format&fit=crop&q=80",
      title: "COURT RESERVATIONS", 
      number: "03.",
      category: "Padel"
    },
    { 
      url: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=800&auto=format&fit=crop", 
      title: "PADEL COACHING PROGRAMS", 
      number: "04.",
      category: "Padel"
    }
  ];

  return (
    <div className="bg-white py-24 px-10 md:px-20">
      
      {/* 📝 Section Heading Area */}
      <div className="mb-12">
        <h4 className="text-gray-900 font-bold text-sm tracking-widest uppercase mb-4">Our Services</h4>
        <h2 className="text-5xl font-bold mb-4 uppercase text-black" style={{ fontFamily: "'Oswald', sans-serif" }}>
          Play Your Way
        </h2>
        <p className="text-gray-500 text-lg">Courts, coaching, and competition.</p>
      </div>
      
      {/* 🖼️ Image Grid with Hover Effects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {galleryImages.map((img, idx) => (
          <div key={idx} className="relative group overflow-hidden cursor-pointer h-125">
            
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition duration-500"
              style={{ backgroundImage: `url(${img.url})` }}
            ></div>
            
            {/* Default Dark Gradient (neeche se oopar) taake text parha jaye */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-300"></div>
            
            {/* 🟢 Hover Lime Green Overlay */}
            <div className="absolute inset-0 bg-[#c5d52f]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-8">
              
              {/* Top Number (Hover par show hoga) */}
              <span 
                className="text-white text-3xl font-bold" 
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {img.number}
              </span>
              
              {/* Bottom Text Area (Hover par change hoga) */}
              <div>
                <h3 
                  className="text-2xl font-bold uppercase text-white mb-2 leading-tight" 
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {img.title}
                </h3>
                {/* Chota text jo sirf hover par aata hai */}
                <p className="text-white/80 text-sm">{img.category}</p>
              </div>
            </div>

            {/* Default State Text (Jab hover na ho) */}
            <div className="absolute bottom-8 left-8 right-8 group-hover:opacity-0 transition-opacity duration-300">
              <h3 
                className="text-2xl font-bold uppercase text-white leading-tight" 
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {img.title}
              </h3>
            </div>
            
          </div>
        ))}
      </div>

    </div>
  );
};

export default Gallery;