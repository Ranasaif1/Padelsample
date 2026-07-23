import React from 'react';

const Features = () => {
  // Image ke mutabiq data aur SVGs update kar diye gaye hain
  const featuresData = [
    { 
      title: "PROFESSIONAL COURTS", 
      desc: "Play on modern padel courts designed to deliver comfort, safety, and consistent performance.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="1" />
          <path d="M12 4v16" />
          <path d="M2 12h20" />
        </svg>
      )
    },
    { 
      title: "EXPERT COACHING", 
      desc: "Train with experienced coaches who help players improve skills and build confidence.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M5.6 5.6c2.5 2.5 6 3.4 9.4 2.4" />
          <path d="M18.4 18.4c-2.5-2.5-6-3.4-9.4-2.4" />
        </svg>
      )
    },
    { 
      title: "ACTIVE COMMUNITY", 
      desc: "Meet passionate players through friendly matches, club events, and regular tournaments.",
      icon: (
         <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="2.5" />
          <path d="M5 22v-5l3.5-5 4 4 4-6" />
          <path d="M15 11l4-4" />
          <circle cx="20" cy="6" r="1.5" />
        </svg>
      )
    },
    { 
      title: "ALL SKILL LEVELS", 
      desc: "Whether you're a beginner or advanced player, there's a place for you on our courts.",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
          <path d="M16 11h2.5a2.5 2.5 0 0 1 2.5 2.5v.5a2.5 2.5 0 0 1-2.5 2.5H16" />
          <path d="M8 11H5.5A2.5 2.5 0 0 0 3 13.5v.5A2.5 2.5 0 0 0 5.5 16H8" />
          <circle cx="12" cy="16" r="3.5" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white border-b border-gray-100">
      {/* divide-x class columns ke darmian lines banati hai */}
      <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        
        {featuresData.map((feature, index) => (
          /* group class se hum batate hain ke is poore dabbe par hover effect lagega */
          <div 
            key={index} 
            className="group px-8 py-20 flex flex-col items-center text-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#c5d52f]"
          >
            {/* Icon - Hover par white ho jayega */}
            <div className="text-[#c5d52f] mb-6 group-hover:text-white transition-colors duration-300">
              {feature.icon}
            </div>

            {/* Heading - Hover par white ho jayegi */}
            <h3 
              className="text-xl font-bold mb-4 text-gray-900 group-hover:text-white transition-colors duration-300 uppercase" 
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {feature.title}
            </h3>

            {/* Description - Hover par white ho jayegi */}
            <p className="text-gray-500 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
              {feature.desc}
            </p>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Features;