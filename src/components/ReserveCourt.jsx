import React from 'react';

const ReserveCourt = () => {
  // Calendar Dates Array (M = Current Month, P = Prev Month, N = Next Month)
  // Format: { date: number, type: 'P' | 'M' | 'N', isSelected: boolean, hasEvent: boolean }
  const calendarDays = [
    { date: 29, type: 'P' }, { date: 30, type: 'P' }, { date: 1, type: 'M' }, { date: 2, type: 'M' }, { date: 3, type: 'M' }, { date: 4, type: 'M' }, { date: 5, type: 'M' },
    { date: 6, type: 'M' }, { date: 7, type: 'M' }, { date: 8, type: 'M' }, { date: 9, type: 'M' }, { date: 10, type: 'M' }, { date: 11, type: 'M', hasEvent: true }, { date: 12, type: 'M' },
    { date: 13, type: 'M' }, { date: 14, type: 'M' }, { date: 15, type: 'M' }, { date: 16, type: 'M' }, { date: 17, type: 'M' }, { date: 18, type: 'M' }, { date: 19, type: 'M' },
    { date: 20, type: 'M' }, { date: 21, type: 'M' }, { date: 22, type: 'M' }, { date: 23, type: 'M', isSelected: true }, { date: 24, type: 'M' }, { date: 25, type: 'M' }, { date: 26, type: 'M' },
    { date: 27, type: 'M' }, { date: 28, type: 'M' }, { date: 29, type: 'M' }, { date: 30, type: 'M' }, { date: 31, type: 'M' }, { date: 1, type: 'N' }, { date: 2, type: 'N' }
  ];

  return (
    <div className="bg-[#c5d52f] py-24 px-6 md:px-10 lg:px-20">
      <div className="max-w-350 mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* 📅 Left Side: Calendar Widget */}
        <div className="w-full lg:w-[45%] bg-white shadow-2xl">
          
          {/* Header */}
          <div className="flex justify-between items-center px-8 py-6 border-b border-gray-100">
            <div></div> {/* Empty div for centering trick */}
            <h3 
              className="text-2xl font-bold uppercase text-black ml-4"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              July 2026
            </h3>
            <button className="text-gray-400 hover:text-black transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>

          {/* Days Row */}
          <div className="grid grid-cols-7 bg-gray-50/50 px-6 py-4 text-center">
            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, index) => (
              <div key={index} className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                {day}
              </div>
            ))}
          </div>

          {/* Dates Grid */}
          <div className="grid grid-cols-7 px-6 pb-8 pt-4 gap-y-6 text-center">
            {calendarDays.map((item, index) => (
              <div 
                key={index} 
                className="relative flex justify-center items-center h-12 cursor-pointer group"
              >
                {/* Background Box for selected date */}
                {item.isSelected ? (
                  <div className="absolute inset-0 bg-black flex justify-center items-center">
                    <span className="text-white font-medium">{item.date}</span>
                  </div>
                ) : (
                  <span className={`font-medium transition-colors group-hover:text-[#c5d52f] ${
                    item.type === 'P' || item.type === 'N' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {item.date}
                  </span>
                )}

                {/* Black Dot Event Indicator */}
                {item.hasEvent && !item.isSelected && (
                  <div className="absolute bottom-1 right-2 w-2 h-2 bg-black rounded-full"></div>
                )}
              </div>
            ))}
          </div>
          
        </div>

        {/* 📝 Right Side: Content */}
        <div className="w-full lg:w-[55%] flex flex-col items-start text-white">
          
          <h4 className="font-bold text-sm tracking-widest uppercase mb-4 text-white/90">
            Book Your Court
          </h4>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-8 leading-[1.1] max-w-2xl"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Reserve Your Next Padel Match And Enjoy The Game
          </h2>
          
          <p className="text-white/90 text-lg mb-6 max-w-xl">
            Planning a casual game or competitive match?
          </p>
          
          <p className="text-white/90 text-lg mb-12 max-w-2xl leading-relaxed">
            Whether you're planning a casual game or a competitive match, our easy booking system helps you secure the perfect court at a time that suits you.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            
            <button className="bg-white text-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition duration-300 w-full sm:w-auto">
              Book Now
            </button>
            
            <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-start">
              <div className="w-12 h-12 rounded-full bg-[#437bf2] flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <span className="font-bold text-lg tracking-wider">
                1 800 458 56 97
              </span>
            </div>
            
          </div>

        </div>

      </div>
    </div>
  );
};

export default ReserveCourt;