import React, { useRef } from 'react';

const Testimonials = () => {
  // Slider ko control karne ke liye ref
  const sliderRef = useRef(null);

  // Buttons se scroll karne ka function
  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 400; // Ek waqt mein kitna scroll ho
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Testimonials Data
  const reviews = [
    {
      id: 1,
      text: "Professional facilities and well-organized events make this my favorite place to play padel.",
      name: "SOFIA GARCIA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      text: "The community here is amazing. Every match is competitive, fun, and welcoming for all levels.",
      name: "MICHAEL BROWN",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      text: "Great coaching staff! My skills have improved dramatically since I joined the beginner program.",
      name: "EMMA WILSON",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      text: "Top-notch courts and a fantastic atmosphere. Highly recommend to anyone looking to start padel.",
      name: "DAVID MILLER",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="bg-white py-24 pl-6 md:pl-10 lg:pl-20 overflow-hidden">
      
      {/* Hide Scrollbar via inline CSS */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      <div className="max-w-350 mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* 📝 Left Column: Heading & Arrows */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center pr-6 md:pr-0">
          
          <h4 className="text-black font-bold text-sm tracking-widest uppercase mb-4">
            Testimonials
          </h4>
          
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-black mb-10 leading-[1.1]"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            What Our Players Say
          </h2>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            {/* Left Arrow */}
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300 focus:outline-none"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            
            {/* Right Arrow */}
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300 focus:outline-none"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>

        {/* 💬 Right Column: Cards Slider */}
        <div 
          ref={sliderRef}
          className="w-full lg:w-2/3 flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pr-6 lg:pr-20"
        >
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="min-w-75 md:min-w-95 bg-gray-50 p-8 md:p-10 snap-start flex flex-col justify-between"
            >
              <div>
                {/* Lime Green Double Quotes Icon */}
                <svg className="w-10 h-10 text-[#c5d52f] mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Review Text */}
                <p className="text-gray-600 text-lg mb-10 leading-relaxed font-medium">
                  {review.text}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-14 h-14 rounded-full object-cover"
                />
                <h4 
                  className="font-bold text-black uppercase tracking-wider text-lg"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {review.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Testimonials;