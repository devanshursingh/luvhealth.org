import React, { useState } from 'react';
import { Search, Calendar, Heart, CreditCard, UserPlus, Menu, X, Users, DollarSign, ShieldOff, CalendarCheck, Linkedin } from 'lucide-react';
import doctorPatientImg from './assets/hero_background.png';
import devanshuPhoto from './assets/0b9bf62f4bbf6d17d9b64af8a00f57f76d9a7f7b.png';
import divyanshPhoto from './assets/948fe3bdbd94ab8d333035ceffc4e0884e82054e.png';
import srikanthPhoto from './assets/5629bb49a580382f9f44d0885caef801b0de6dfc.png';

function Logo({ size = 40, showText = true }) {
  return (
    <div className="flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform hover:scale-110"
      >
        <path
          d="M50 85 L25 60 C20 55 17 48 17 42 C17 32 24 25 33 25 C38 25 43 27 46 31 L50 35 L54 31 C57 27 62 25 67 25 C76 25 83 32 83 42 C83 48 80 55 75 60 L50 85 Z"
          fill="#f43f5e"
        />
        <g
          fill="white"
          fillRule="evenodd"
          stroke="#f43f5e"
          strokeWidth="2"
          transform="translate(50, 55) scale(0.45) translate(-96, -97)"
        >
          <path d="m 93,166 c 0,7 6,7 6,0 l 3,-138 c 0,-8 -12,-8 -12,0 l 3,135 0,3 z"/>
          <g>
            <path d="m 100,153 c 7,4 3,15 -3,15 2,-5 3,-9 3,-15 z m 1,-40 c 10,9 4,22 -3,26 -6,3 -6,7 -6,15 -9,-10 -4,-19 4,-24 5,-4 5,-10 5,-17 z m 1,-30 c 0,11 -17,14 -17,22 0,3 1,9 6,12 0,-11 9,-12 15,-18 7,-7 7,-19 -4,-28 0,4 0,8 0,12 z M 90,77 C 80,69 76,55 80,46 c 3,-10 20,-11 20,-3 0,8 -20,3 -13,16 l 3,5 0,13 z"/>
            <path d="m 95,43 c 7,-3 -7,-3 0,0 z" fill="#f43f5e" fillRule="evenodd" stroke="none"/>
          </g>
        </g>
      </svg>
      {showText && (
        <span className="text-2xl font-semibold" style={{ color: '#f43f5e' }}>
          luv health
        </span>
      )}
    </div>
  );
}

const team = [
  {
    name: "Devanshu Singh",
    title: "Co-Founder, Luv Health Inc.",
    credentials: "PhD Candidate at University of Washington in Political Science",
    bio: "After a recent major illness, Devanshu is setting out to create new options for patients and doctors. He combines an AI background with research expertise in political science. He also comes from a family of doctors. He has grown up around the healthcare system and knows the frustrations of doctors and patients.",
    linkedin: "https://www.linkedin.com/in/dsingh33",
    photo: devanshuPhoto,
  },
  {
    name: "Divyansh Khare",
    title: "Co-Founder, Luv Health Inc.",
    credentials: "Ex-Software Engineer at Union Pacific Railroad Company",
    bio: "Divyansh is an experienced Full Stack developer with history building high performing and scalable enterprise applications and services. He wants to build something great.",
    linkedin: "https://www.linkedin.com/in/divyansh-khare/",
    photo: divyanshPhoto,
  },
  {
    name: "Srikanth Bangalore",
    title: "Advisor",
    credentials: "Ex-Yahoo, Ex-Intuit Credit Karma Software Engineer",
    bio: "Srikanth is a Staff-level Software Engineer with 25+ years of experience designing, scaling, and simplifying distributed backend systems across ad-tech, fintech, and 3D real-estate technology. He wants to build community using his background.",
    linkedin: "https://www.linkedin.com/in/srikanth-bangalore/",
    photo: srikanthPhoto,
  },
];

export default function LuvHealthWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    window.location.href = '#signup';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="cursor-pointer">
              <Logo size={32} showText={true} />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-700 hover:text-rose-500 transition">
                How It Works
              </a>
              <a href="#for-providers" className="text-gray-700 hover:text-rose-500 transition">
                For Providers
              </a>
              <a href="#about-us" className="text-gray-700 hover:text-rose-500 transition">
                About Us
              </a>
              <a href="#login" className="text-gray-700 hover:text-rose-500 transition">
                Log In
              </a>
              <a 
                href="#signup" 
                className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition"
              >
                Sign Up
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <a href="#how-it-works" className="block text-gray-700 hover:text-rose-500">
                How It Works
              </a>
              <a href="#for-providers" className="block text-gray-700 hover:text-rose-500">
                For Providers
              </a>
              <a href="#about-us" className="block text-gray-700 hover:text-rose-500">
                About Us
              </a>
              <a href="#login" className="block text-gray-700 hover:text-rose-500">
                Log In
              </a>
              <a 
                href="#signup" 
                className="block bg-rose-500 text-white px-6 py-2 rounded-full text-center hover:bg-rose-600"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={doctorPatientImg}
            alt="Doctor and patient"
            className="brightness-90"
            style={{
              objectFit: 'cover',
              objectPosition: 'var(--hero-image-position)',
              width: '100%',
              height: '100%',
              minWidth: '100%',
              minHeight: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              transform: 'scale(1.2)',
              transformOrigin: 'var(--hero-image-position)',
              display: 'block'
            }}
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        
        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            See Your Doctor Now,<br />No Phone Calls Required
          </h1>
          <p className="text-xl text-white mb-12 drop-shadow-md">
            Book hard-to-find LA doctors online for faster appointments
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 bg-white/95 backdrop-blur-sm p-2 sm:p-2 rounded-2xl sm:rounded-full shadow-2xl">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for doctors or specialties..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full pl-12 pr-4 py-4 rounded-xl sm:rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-rose-500 text-lg bg-transparent"
                />
              </div>
              <button
                onClick={handleSearch}
                className="bg-rose-500 text-white px-8 py-4 rounded-xl sm:rounded-full hover:bg-rose-600 transition font-semibold whitespace-nowrap shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Find Doctors
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            How It Works
          </h2>

          <div className="text-center mb-12">
            <a 
              href="#signup"
              className="inline-block bg-rose-500 text-white px-8 py-4 rounded-full hover:bg-rose-600 transition font-semibold text-lg"
            >
              Find Bookings Now
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 text-rose-500" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Book ASAP Appointments
                </h3>
                <p className="text-gray-600 text-lg">
                  Find ASAP appointments with doctors who prioritize quality over quantity
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-rose-500" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Search High-Quality Doctors
                </h3>
                <p className="text-gray-600 text-lg">
                  Find doctors who take a genuine interest in your health
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-rose-500" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Your Choice
                </h3>
                <p className="text-gray-600 text-lg">
                  Pick the right doctor for you, not just the ones your insurance approves
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-rose-500" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Book and Pay Online Instantly
                </h3>
                <p className="text-gray-600 text-lg">
                  No phone calls required, no insurance hassles. Instant online bookings and simple online payments for more convenient, quality care
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Providers Section */}
      <section id="for-providers" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <UserPlus className="w-16 h-16 text-rose-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              For Providers
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Grow Your Practice with Self-Paying Patients!
            </p>
            <div className="mb-8">
              <a 
                href="#provider-signup"
                className="inline-block bg-rose-500 text-white px-8 py-4 rounded-full hover:bg-rose-600 transition font-semibold text-lg"
              >
                Join Our Platform
              </a>
            </div>
            <p className="text-gray-600 mb-8 text-lg">
              Join our platform to connect with self-paying patients who value personalized care
            </p>

            {/* Provider Benefits */}
            <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
              {/* Benefit 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-rose-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Find Self-Paying Patients
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Connect with a growing number of patients choosing to pay directly for convenient, quality care
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-rose-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    'As low as' Pricing
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Retain ownership over your prices with the 'as low as' disclaimer for your visits.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <ShieldOff className="w-6 h-6 text-rose-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Reduce Insurance Reliance
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Wean your practice off insurance contracts that pay less and less and reduce care quality
                  </p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <CalendarCheck className="w-6 h-6 text-rose-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    Integrate Calendar and Payments
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Sign up and book a demo for seamless calendar integration and payments
                  </p>
                </div>
              </div>
            </div>

            {/* FAQs Button */}
            <div className="text-center mt-12">
              <a 
                href="#faqs"
                className="inline-block border-2 border-rose-500 text-rose-500 px-8 py-4 rounded-full hover:bg-rose-500 hover:text-white transition font-semibold text-lg"
              >
                FAQs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {/* FAQ Item */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Am I exposing myself to antitrust liability?
              </h3>
              <p className="text-gray-600 text-lg">
                No.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              About Us
            </h2>
            <p className="text-2xl font-semibold text-gray-700 mb-6">
              Expanding healthcare choices for patients and providers.
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our mission is to bring the power of making healthcare choices back into the hands of patients and their doctors.
            </p>
          </div>

          {/* Team Section */}
          <div className="space-y-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-rose-100"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="flex-shrink-0">
                    <div className="w-40 h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-rose-100 to-rose-200 shadow-md">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                        <p className="text-rose-600 mb-2 font-medium">{member.title}</p>
                        <p className="text-gray-600">{member.credentials}</p>
                      </div>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-rose-600 hover:text-rose-700 transition-colors inline-flex items-center justify-center w-12 h-12 bg-rose-50 rounded-xl hover:bg-rose-100"
                        >
                          <Linkedin className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="cursor-pointer inline-block">
                <Logo size={50} showText={true} />
              </a>
              <p className="text-gray-400 mt-4">
                Expanding healthcare choices, one appointment at a time
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">For Patients</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#signup" className="hover:text-white transition">Sign Up</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#login" className="hover:text-white transition">Log In</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">For Providers</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#provider-signup" className="hover:text-white transition">Provider Sign Up</a></li>
                <li><a href="#for-providers" className="hover:text-white transition">Learn More</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Luv Health. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}