import React from 'react';

const NewsUpdates = () => {
  // Right side wali 3 choti posts ka data
  const smallPosts = [
    {
      id: 1,
      category: "PADEL",
      date: "Jun 11, 2026",
      title: "5 COMMON MISTAKES NEW PADEL PLAYERS MAKE",
      image: "https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?w=400&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      category: "PADEL",
      date: "Jun 11, 2026",
      title: "CHOOSING THE RIGHT PADEL RACKET",
      image: "image4.jfif"
    },
    {
      id: 3,
      category: "PADEL",
      date: "Jun 11, 2026",
      title: "UPCOMING TOURNAMENTS THIS SEASON",
      image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-white py-24 px-6 md:px-10 lg:px-20 max-w-350 mx-auto">
      
      {/* 📝 Header Section */}
      <div className="text-center mb-16">
        <h4 className="text-black font-bold text-sm tracking-widest uppercase mb-4">
          Latest News
        </h4>
        <h2 
          className="text-4xl md:text-5xl lg:text-[60px] font-bold uppercase text-black"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          Padel Tips & Club Updates
        </h2>
      </div>

      {/* 📰 Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* 🌟 Left Side: Featured Post */}
        <div className="flex flex-col group cursor-pointer">
          
          {/* Image Container */}
          <div className="relative w-full h-75 md:h-112.5 mb-8 overflow-hidden">
            <img 
              src="image2.jpg" 
              alt="Padel Player" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Blue Padel Tag */}
            <div className="absolute top-6 left-6 bg-[#437bf2] text-white px-4 py-1 text-xs font-bold tracking-widest uppercase">
              Padel
            </div>
          </div>

          {/* Post Content with Custom Date Block */}
          <div className="flex gap-6 items-start">
            
            {/* Date Block (11 JUN) */}
            <div className="flex flex-col items-center justify-start mt-1 shrink-0">
              <span 
                className="text-5xl font-bold text-black leading-none" 
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                11
              </span>
              <span className="text-sm font-bold uppercase tracking-widest text-black mt-1">
                Jun
              </span>
            </div>

            {/* Title & Excerpt */}
            <div>
              <h3 
                className="text-3xl lg:text-[32px] font-bold uppercase text-black mb-4 leading-tight group-hover:text-[#437bf2] transition-colors duration-300"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                How To Improve Your Padel Game Faster
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                Proin faucibus nec mauris a sodales, sed elementum mi libero. Quisque viverra egestas nisi in consequat...
              </p>
            </div>

          </div>
        </div>

        {/* 📋 Right Side: Small Posts List */}
        <div className="flex flex-col justify-between gap-10 lg:gap-0">
          
          {smallPosts.map((post) => (
            <div key={post.id} className="flex gap-6 group cursor-pointer items-center">
              
              {/* Thumbnail Image */}
              <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Info */}
              <div className="flex flex-col">
                {/* Category & Date */}
                <div className="flex items-center text-xs md:text-sm font-bold tracking-widest text-gray-400 uppercase mb-3">
                  <span className="text-black">{post.category}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                
                {/* Post Title */}
                <h4 
                  className="text-xl md:text-2xl font-bold uppercase text-black leading-tight group-hover:text-[#437bf2] transition-colors duration-300"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {post.title}
                </h4>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default NewsUpdates;