import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Search, Calendar, Heart, CreditCard, UserPlus, Menu, X, Users, DollarSign, ShieldOff, CalendarCheck } from 'lucide-react';
import doctorPatientImg from './assets/hero_background.png';
import doctorImg from './assets/doctor.png';
import Logo from './components/Logo';
import PatientFAQs from './pages/PatientFAQs';
import ProviderFAQs from './pages/ProviderFAQs';
import AboutUs from './pages/AboutUs';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
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
            <Link to="/" className="cursor-pointer">
              <Logo size={32} showText={true} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-700 hover:text-rose-500 transition">
                How It Works
              </a>
              <a href="#for-providers" className="text-gray-700 hover:text-rose-500 transition">
                For Providers
              </a>
              <Link to="/about-us" className="text-gray-700 hover:text-rose-500 transition">
                About Us
              </Link>
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
              <Link to="/about-us" className="block text-gray-700 hover:text-rose-500">
                About Us
              </Link>
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
          <p className="text-xl text-gray-600 text-center mb-8">
              Don't Wait Months. Don't Wait on Hold.
          </p>
          <div className="text-center mb-12">
            <a 
              href="#signup"
              className="inline-block bg-rose-500 text-white px-8 py-4 rounded-full hover:bg-rose-600 transition font-semibold text-lg"
            >
              Find Bookings Now!
            </a>
          </div>

          {/* Carousel Container */}
        <div className="max-w-2xl mx-auto">
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={4000}
            arrows={true}
            responsive={[
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                }
              }
            ]}
          >
            {/* Slide 1 */}
            <div className="px-4">
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center min-h-[300px] flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-rose-500" />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  Book ASAP Appointments
                </h3>
                <p className="text-gray-600 text-xl">
                  Find appointments quickly with doctors who prioritize quality over quantity
                </p>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="px-4">
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center min-h-[300px] flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-rose-500" />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  Search High-Quality Doctors
                </h3>
                <p className="text-gray-600 text-xl">
                  Find doctors who take a genuine interest in your health
                </p>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="px-4">
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center min-h-[300px] flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-rose-500" />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  Your Choice
                </h3>
                <p className="text-gray-600 text-xl">
                  Pick the right doctor for you, not just the ones your insurance approves
                </p>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="px-4">
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center min-h-[300px] flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CreditCard className="w-8 h-8 text-rose-500" />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                  Pay Online Instantly
                </h3>
                <p className="text-gray-600 text-xl">
                  No phone calls required, no insurance hassles. Instant online bookings and payments for convenient, quality care made simple
                </p>
              </div>
            </div>
          </Slider>
        </div>

          {/* FAQs Button */}
          <div className="text-center mt-16">
            <Link 
              to="/patient-faqs"
              className="inline-block border-2 border-rose-500 text-rose-500 px-8 py-4 rounded-full hover:bg-rose-500 hover:text-white transition font-semibold text-lg"
            >
              FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* For Providers Section */}
      <section id="for-providers" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${doctorImg})`,
            backgroundPosition: 'center center',
            filter: 'brightness(0.85)'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/25" />
        
        {/* Content - Add relative positioning */}
        <div className="relative max-w-4xl mx-auto text-center z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-12">
            <UserPlus className="w-16 h-16 text-rose-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-100 mb-4">
              For Providers
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Grow Your Practice with Self-Paying Patients!
            </p>
            <div className="mb-8">
              <a 
                href="https://calendly.com/dsinghjhu2020/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-rose-500 text-white px-8 py-4 rounded-full hover:bg-rose-600 transition font-semibold text-lg"
              >
                Book A Demo
              </a>
            </div>
            <p className="text-gray-200 mb-8 text-lg">
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
                  <h3 className="text-2xl font-semibold text-gray-100 mb-3">
                    Find Self-Paying Patients
                  </h3>
                  <p className="text-gray-200 text-lg">
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
                  <h3 className="text-2xl font-semibold text-gray-100 mb-3">
                    'As low as' Pricing
                  </h3>
                  <p className="text-gray-200 text-lg">
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
                  <h3 className="text-2xl font-semibold text-gray-100 mb-3">
                    Reduce Insurance Reliance
                  </h3>
                  <p className="text-gray-200 text-lg">
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
                  <h3 className="text-2xl font-semibold text-gray-100 mb-3">
                    No Extra Work, We'll Call For Bookings
                  </h3>
                  <p className="text-gray-200 text-lg">
                    For seamless integration with no extra work for your office, our AI will robocall with patient info for bookings
                  </p>
                </div>
              </div>
            </div>

            {/* FAQs Button */}
            <div className="text-center mt-12">
              <Link 
                to="/provider-faqs"
                className="inline-block border-2 border-rose-500 text-rose-500 px-8 py-4 rounded-full hover:bg-gray-200 hover:text-gray-900 transition font-semibold text-lg"
              >
                FAQs
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Link to="/" className="cursor-pointer inline-block">
                <Logo size={50} showText={true} />
              </Link>
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/patient-faqs" element={<PatientFAQs />} />
      <Route path="/provider-faqs" element={<ProviderFAQs />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
}