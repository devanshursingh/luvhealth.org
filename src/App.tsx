import React, { useState } from 'react';
import { Search, Calendar, CreditCard, UserPlus, Menu, X } from 'lucide-react';
import doctorPatientImg from './assets/doctor-patient.png';

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
            <Logo size={32} showText={true} />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-700 hover:text-rose-500 transition">
                How It Works
              </a>
              <a href="#for-providers" className="text-gray-700 hover:text-rose-500 transition">
                For Providers
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
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${doctorPatientImg})`,
            filter: 'brightness(0.9)',
            backgroundSize: '120%',
            backgroundPosition: '5% 25%'
          }}
        />
        
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
            <div className="flex flex-col sm:flex-row gap-4 bg-white/95 backdrop-blur-sm p-2 rounded-full shadow-2xl">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for doctors or specialties..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full pl-12 pr-4 py-4 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-rose-500 text-lg bg-transparent"
                />
              </div>
              <button
                onClick={handleSearch}
                className="bg-rose-500 text-white px-8 py-4 rounded-full hover:bg-rose-600 transition font-semibold whitespace-nowrap shadow-lg hover:shadow-xl"
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
                  Search Quality Doctors
                </h3>
                <p className="text-gray-600 text-lg">
                  Search hard-to-find LA doctors with private practices who emphasize quality over quantity
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
                  Book Online Instantly
                </h3>
                <p className="text-gray-600 text-lg">
                  No phone calls needed. Book appointments directly through our platform at your convenience
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-rose-500" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Simple Payment
                </h3>
                <p className="text-gray-600 text-lg">
                  Pay online for the first visit only, use insurance after
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M50 85 L25 60 C20 55 17 48 17 42 C17 32 24 25 33 25 C38 25 43 27 46 31 L50 35 L54 31 C57 27 62 25 67 25 C76 25 83 32 83 42 C83 48 80 55 75 60 L50 85 Z"
                      fill="#da2576"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  Get Quality Care
                </h3>
                <p className="text-gray-600 text-lg">
                  Experience personalized care from doctors who prioritize your health and wellbeing
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <a 
              href="#signup"
              className="inline-block bg-rose-500 text-white px-8 py-4 rounded-full hover:bg-rose-600 transition font-semibold text-lg"
            >
              Get Started as a Patient
            </a>
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
              How Providers Can Join Us!
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Join our network of quality-focused healthcare providers and connect with patients who value personalized care
            </p>
            <a 
              href="#provider-signup"
              className="inline-block bg-rose-500 text-white px-8 py-4 rounded-full hover:bg-rose-600 transition font-semibold text-lg"
            >
              Provider Sign Up
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Logo size={50} showText={true} />
              <p className="text-gray-400 mt-4">
                Making healthcare accessible, one appointment at a time
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