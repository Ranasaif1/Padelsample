import React from 'react';

const BookLesson = () => {
  // Lessons ka data
  const lessonsData = [
    {
      id: 1,
      day: "06",
      monthYear: "Oct, 2027",
      image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=300&auto=format&fit=crop&q=80",
      title: "PRIVATE COACHING SESSION",
      datetime: "Oct 6, 2027 08:00",
      price: "$254",
      isActive: true // Pehli line par black dot (timeline marker) show karne ke liye
    },
    {
      id: 2,
      day: "04",
      monthYear: "Aug, 2027",
      image: "/image3.jfif",
      title: "GROUP TRAINING CLASS",
      datetime: "Aug 4, 2027 08:00",
      price: "$150",
      isActive: false
    },
    {
      id: 3,
      day: "18",
      monthYear: "Jun, 2027",
      image: "/image1.jfif",
      title: "BEGINNER PADEL FUNDAMENTALS",
      datetime: "Jun 18, 2027 08:00",
      price: "Free",
      isActive: false
    }
  ];

  return (
    <div className="bg-white py-24 px-6 md:px-10 lg:px-20 max-w-350 mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* 📝 Left Side: Main Heading */}
        <div className="w-full lg:w-1/3">
          <h2 
            className="text-5xl md:text-6xl lg:text-[30px] font-bold uppercase text-black leading-[1.1]"
            style={{ fontFamily: "'Oswald', Arial-bold" }}
          >
            BOOK YOUR NEXT <br /> LESSON
          </h2>
        </div>

        {/* 📋 Right Side: Lessons List */}
        <div className="w-full lg:w-2/3 flex flex-col">
          
          {/* Top Header Area (Text & Link) */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-12 gap-6">
            <p className="text-gray-500 max-w-md font-medium text-lg">
              Choose from private coaching, group sessions, and specialized training programs designed for every level.
            </p>
            <a href="#" className="font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:text-[#c5d52f] transition-colors whitespace-nowrap">
              ALL LESSONS 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>

          {/* List Items */}
          <div className="flex flex-col">
            {lessonsData.map((lesson, index) => (
              <div 
                key={lesson.id} 
                className="relative flex flex-col sm:flex-row items-start sm:items-center py-10 border-b border-gray-200 group hover:bg-gray-50 transition-colors duration-300"
              >
                
                {/* Timeline Black Dot (Design Element) */}
                {lesson.isActive && (
                  <div className="absolute top-0 left-0 w-3 h-3 bg-black rounded-full mt-[-1.5px]"></div>
                )}

                {/* 1. Date */}
                <div className="flex flex-col w-20 mb-4 sm:mb-0 shrink-0">
                  <span className="text-3xl font-bold text-black leading-none mb-1" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    {lesson.day}
                  </span>
                  <span className="text-sm text-gray-400 font-medium whitespace-nowrap">
                    {lesson.monthYear}
                  </span>
                </div>

                {/* 2. Image */}
                <img 
                  src={lesson.image} 
                  alt={lesson.title} 
                  className="w-full sm:w-32 h-48 sm:h-20 object-cover mb-4 sm:mb-0 mr-0 sm:mr-8 transition-transform duration-500 group-hover:scale-105"
                />

                {/* 3. Title & Time Details */}
                <div className="flex-1 flex flex-col justify-center mb-4 sm:mb-0">
                  <h3 
                    className="text-xl font-bold uppercase text-black mb-2" 
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {lesson.title}
                  </h3>
                  <div className="flex items-center text-sm text-[#c5d52f] font-medium gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {lesson.datetime}
                  </div>
                </div>

                {/* 4. Price */}
                <div 
                  className="text-2xl font-bold text-[#c5d52f]"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {lesson.price}
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookLesson;