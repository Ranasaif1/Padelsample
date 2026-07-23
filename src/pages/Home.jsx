// src/pages/Home.jsx
import React from 'react';

// Sab components ko import kar rahe hain
import Hero from '../components/Hero';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import Coaching from '../components/Coaching';
import AwardsBanner from '../components/AwardsBanner';
import CommunityAndBooking from '../components/CommunityAndBooking';
import BookLesson from '../components/BookLesson';
import ReadyToPlay from '../components/ReadyToPlay';
import Pricing from '../components/Pricing';
import WhoWeAre from '../components/WhoWeAre';
import Testimonials from '../components/Testimonials';
import ReserveCourt from '../components/ReserveCourt';
import NewsUpdates from '../components/NewsUpdates';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Gallery />
      <Coaching />
      <AwardsBanner />
      <CommunityAndBooking />
      <BookLesson/>
      <ReadyToPlay/>
      <Pricing />
      <WhoWeAre/>
      <Testimonials/>
      <ReserveCourt/>
      <NewsUpdates/>
      <Footer/>
    </div>
  );
};

export default Home;