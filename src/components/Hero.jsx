import React from 'react';

const Navbar = () => {
    return (
        <nav className="relative z-20 flex justify-between items-center px-10 py-6 text-white border-b border-white/20">
            <div className="flex items-center gap-3 cursor-pointer">
                <div className="w-10 h-10 bg-[#c5d52f] rounded-full flex items-center justify-center text-black text-xl">
                    🎾
                </div>
                <div className="text-2xl font-bold tracking-wider" style={{ fontFamily: "'Oswald', sans-serif" }}>
                    TENNIS CLUB
                </div>
            </div>

            <ul className="hidden lg:flex space-x-8 text-sm font-bold uppercase tracking-wider">
                <li className="hover:text-[#c5d52f] cursor-pointer transition">Home</li>
                <li className="hover:text-[#c5d52f] cursor-pointer transition">Pages</li>
                <li className="hover:text-[#c5d52f] cursor-pointer transition">Events</li>
                <li className="hover:text-[#c5d52f] cursor-pointer transition">Blog</li>
                <li className="hover:text-[#c5d52f] cursor-pointer transition">Shop</li>
                <li className="hover:text-[#c5d52f] cursor-pointer transition">Contact</li>
            </ul>

            <div className="flex items-center space-x-6">
                <div className="hidden md:flex items-center gap-3">
                    <div className="bg-[#437bf2] p-2 rounded-full">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                    </div>
                    <span className="font-bold tracking-wider text-sm">1 800 458 56 97</span>
                </div>
                <button className="bg-white text-black px-6 py-3 text-sm font-bold uppercase tracking-wide hover:bg-gray-200 transition">
                    Let's Talk
                </button>
            </div>
        </nav>
    );
};

const Hero = () => {
    return (
        <div className="relative w-full h-screen flex flex-col justify-between overflow-hidden bg-black">

            <iframe
                className="absolute max-w-none pointer-events-none"
                style={{
                    width: '100vw',
                    height: '56.25vw',
                    minHeight: '100vh',
                    minWidth: '177.77vh',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
                src="https://www.youtube-nocookie.com/embed/A9ABYEeOxOs?autoplay=1&mute=1&controls=0&loop=1&playlist=A9ABYEeOxOs&playsinline=1&enablejsapi=1&origin=http://localhost:5173"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
            ></iframe>

            <Navbar />

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-end px-10 md:px-20 pb-20 w-full h-full">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <h1
                        className="text-6xl md:text-8xl lg:text-[100px] font-bold text-white leading-none uppercase"
                        style={{ fontFamily: "'Oswald', sans-serif", textShadow: "2px 2px 10px rgba(0,0,0,0.5)" }}
                    >
                        PLAY PADEL.<br />FEEL THE GAME.
                    </h1>
                </div>

                <div className="w-full md:w-1/2 flex flex-col md:items-start lg:items-start xl:pl-32">
                    <p className="text-white text-lg max-w-md mb-8 font-medium drop-shadow-md" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Ready to play? Reserve your court, meet players, and enjoy dynamic padel games whenever it suits you best!
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-[#437bf2] text-white px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-blue-600 transition shadow-lg">
                            Book a Court
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition shadow-lg">
                            Get in Touch
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;