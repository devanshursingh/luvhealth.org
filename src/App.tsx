import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Search, Calendar, Heart, CreditCard, UserPlus, Users, DollarSign, ShieldOff, CalendarCheck } from 'lucide-react';
import doctorPatientImg from './assets/hero_background.png';
import doctorImg from './assets/doctor.png';
import Layout from './components/Layout';
import PatientFAQs from './pages/PatientFAQs';
import ProviderFAQs from './pages/ProviderFAQs';
import AboutUs from './pages/AboutUs';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    window.location.href = '#signup';
  };

  return (
    <Layout>
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
          <h1 className="font-sans text-[48px] sm:text-[56px] font-semibold text-white mb-6 drop-shadow-lg leading-tight">
            See Your Doctor Now,<br />No Phone Calls Required
          </h1>
          <p className="font-sans text-[18px] text-white mb-12 drop-shadow-md leading-[1.2]">
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
                  className="w-full pl-12 pr-4 py-4 rounded-xl sm:rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-rose-500 text-[18px] bg-transparent font-sans"
                />
              </div>
              <button
                onClick={handleSearch}
                className="bg-ui-accent text-white px-8 py-4 rounded-xl sm:rounded-full hover:bg-rose-600 transition font-sans font-semibold text-[18px] whitespace-nowrap shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Find Doctors
              </button>
            </div>
            
            {/* Suggested Search Items */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <button
                onClick={() => {
                  setSearchQuery('Pediatrician');
                  handleSearch();
                }}
                className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full hover:bg-white hover:shadow-lg transition font-sans text-[16px] font-medium flex items-center gap-2"
              >
                👶 Pediatrician
              </button>
              <button
                onClick={() => {
                  setSearchQuery('Ob/Gyn');
                  handleSearch();
                }}
                className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full hover:bg-white hover:shadow-lg transition font-sans text-[16px] font-medium flex items-center gap-2"
              >
                🏥 Ob/Gyn
              </button>
              <button
                onClick={() => {
                  setSearchQuery('Internist');
                  handleSearch();
                }}
                className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full hover:bg-white hover:shadow-lg transition font-sans text-[16px] font-medium flex items-center gap-2"
              >
                🩺 Internist
              </button>
              <button
                onClick={() => {
                  setSearchQuery('Neurologist');
                  handleSearch();
                }}
                className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full hover:bg-white hover:shadow-lg transition font-sans text-[16px] font-medium flex items-center gap-2"
              >
                🧠 Neurologist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-sans text-[48px] font-semibold text-center text-primary-text mb-4">
            How It Works
          </h2>
          <p className="font-sans text-[18px] text-secondary-text text-center mb-8 leading-[1.2]">
              Don't Wait Months. Don't Wait on Hold.
          </p>
          <div className="text-center mb-12">
            <a 
              href="#signup"
              className="inline-block bg-ui-accent text-white px-8 py-4 rounded-full hover:bg-rose-600 transition font-sans font-semibold text-[18px]"
            >
              Find Bookings Now!
            </a>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 mb-8 text-left">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 text-ui-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-sans text-[32px] font-semibold text-primary-text mb-3">
                  Book ASAP Appointments
                </h3>
                <p className="font-sans text-[18px] text-secondary-text leading-[1.2]">
                  Find appointments quickly with doctors who prioritize quality over quantity
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-ui-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-sans text-[32px] font-semibold text-primary-text mb-3">
                  Search High-Quality Doctors
                </h3>
                <p className="font-sans text-[18px] text-secondary-text leading-[1.2]">
                  Find doctors who take a genuine interest in your health
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-ui-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-sans text-[32px] font-semibold text-primary-text mb-3">
                  Your Choice
                </h3>
                <p className="font-sans text-[18px] text-secondary-text leading-[1.2]">
                  Pick the right doctor for you, not just the ones your insurance approves
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-ui-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-sans text-[32px] font-semibold text-primary-text mb-3">
                  Pay Online Instantly
                </h3>
                <p className="font-sans text-[18px] text-secondary-text leading-[1.2]">
                  No phone calls required, no insurance hassles. Instant online bookings and payments for convenient, quality care made simple
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden max-w-2xl mx-auto">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={4000}
              arrows={false}
            >
              <div className="px-4">
                <div className="bg-white rounded-2xl shadow-lg p-12 text-center min-h-[300px] flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-8 h-8 text-ui-accent" />
                  </div>
                  <h3 className="font-sans text-[32px] font-semibold text-primary-text mb-4">
                    Book ASAP Appointments
                  </h3>
                  <p className="font-sans text-[18px] text-secondary-text leading-[1.2]">
                    Find appointments quickly with doctors who prioritize quality over quantity
                  </p>
                </div>
              </div>

              <div className="px-4">
                <div className="bg-white rounded-2xl shadow-lg p-12 text-center min-h-[300px] flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-ui-accent" />
                  </div>
                  <h3 className="font-sans text-[32px] font-semibold text-primary-text mb-4">
                    Search High-Quality Doctors
                  </h3>
                  <p className="font-sans text-[18px] text-secondary-text leading-[1.2]">
                    Find doctors who take a genuine interest in your health
                  </p>
                </div>
              </div>

              <div className="px-4">
                <div className="bg-white rounded-2xl shadow-lg p-12 text-center min-h-[300px] flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-ui-accent" />
                  </div>
                  <h3 className="font-sans text-[32px] font-semibold text-primary-text mb-4">
                    Your Choice
                  </h3>
                  <p className="font-sans text-[18px] text-secondary-text leading-[1.2]">
                    Pick the right doctor for you, not just the ones your insurance approves
                  </p>
                </div>
              </div>

              <div className="px-4">
                <div className="bg-white rounded-2xl shadow-lg p-12 text-center min-h-[300px] flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CreditCard className="w-8 h-8 text-ui-accent" />
                  </div>
                  <h3 className="font-sans text-[32px] font-semibold text-primary-text mb-4">
                    Pay Online Instantly
                  </h3>
                  <p className="font-sans text-[18px] text-secondary-text leading-[1.2]">
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
                className="inline-block border-2 border-ui-accent text-ui-accent px-8 py-4 rounded-full hover:bg-ui-accent hover:text-white transition font-sans font-semibold text-[18px]"
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
            filter: 'brightness(0.7)'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/25" />
        
        {/* Content - Add relative positioning */}
        <div className="relative max-w-4xl mx-auto text-center z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-12">
            <UserPlus className="w-16 h-16 text-ui-accent mx-auto mb-6" />
            <h2 className="font-sans text-[48px] font-semibold text-gray-100 mb-4">
              For Providers
            </h2>
            <p className="font-sans text-[18px] text-gray-200 mb-8 leading-[1.2]">
              Grow Your Practice with Self-Paying Patients!
            </p>
            <div className="mb-8">
              <a 
                href="https://calendly.com/dsinghjhu2020/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-ui-accent text-white px-8 py-4 rounded-full hover:bg-rose-600 transition font-sans font-semibold text-[18px]"
              >
                Book A Demo
              </a>
            </div>
            <p className="font-sans text-[18px] text-gray-200 mb-8 leading-[1.2]">
              Join our platform to connect with self-paying patients who value personalized care
            </p>

            {/* Desktop Grid Layout */}
            <div className="hidden md:grid md:grid-cols-2 gap-8 mb-12 text-left">
              {/* Benefit 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-ui-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-sans text-[32px] font-semibold text-gray-100 mb-3">
                    Find Self-Paying Patients
                  </h3>
                  <p className="font-sans text-[18px] text-gray-200 leading-[1.2]">
                    Connect with a growing number of patients choosing to pay directly for convenient, quality care
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-ui-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-sans text-[32px] font-semibold text-gray-100 mb-3">
                    'As low as' Pricing
                  </h3>
                  <p className="font-sans text-[18px] text-gray-200 leading-[1.2]">
                    Retain ownership over your prices with the 'as low as' disclaimer for your visits.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <ShieldOff className="w-6 h-6 text-ui-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-sans text-[32px] font-semibold text-gray-100 mb-3">
                    Reduce Insurance Reliance
                  </h3>
                  <p className="font-sans text-[18px] text-gray-200 leading-[1.2]">
                    Wean your practice off insurance contracts that pay less and less and reduce care quality
                  </p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                    <CalendarCheck className="w-6 h-6 text-ui-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-sans text-[32px] font-semibold text-gray-100 mb-3">
                    No Extra Work, We'll Call For Bookings
                  </h3>
                  <p className="font-sans text-[18px] text-gray-200 leading-[1.2]">
                    For seamless integration with no extra work for your office, our AI will robocall with patient info for bookings
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden mb-12">
              <Slider
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={4000}
                arrows={false}
              >
                <div className="px-4">
                  <div className="flex gap-6 text-left">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-ui-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-sans text-[32px] font-semibold text-gray-100 mb-3">
                        Find Self-Paying Patients
                      </h3>
                      <p className="font-sans text-[18px] text-gray-200 leading-[1.2]">
                        Connect with a growing number of patients choosing to pay directly for convenient, quality care
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-4">
                  <div className="flex gap-6 text-left">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-ui-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-sans text-[32px] font-semibold text-gray-100 mb-3">
                        'As low as' Pricing
                      </h3>
                      <p className="font-sans text-[18px] text-gray-200 leading-[1.2]">
                        Retain ownership over your prices with the 'as low as' disclaimer for your visits.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-4">
                  <div className="flex gap-6 text-left">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                        <ShieldOff className="w-6 h-6 text-ui-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-sans text-[32px] font-semibold text-gray-100 mb-3">
                        Reduce Insurance Reliance
                      </h3>
                      <p className="font-sans text-[18px] text-gray-200 leading-[1.2]">
                        Wean your practice off insurance contracts that pay less and less and reduce care quality
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-4">
                  <div className="flex gap-6 text-left">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                        <CalendarCheck className="w-6 h-6 text-ui-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-sans text-[32px] font-semibold text-gray-100 mb-3">
                        No Extra Work, We'll Call For Bookings
                      </h3>
                      <p className="font-sans text-[18px] text-gray-200 leading-[1.2]">
                        For seamless integration with no extra work for your office, our AI will robocall with patient info for bookings
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>

            {/* FAQs Button */}
            <div className="text-center mt-12">
              <Link 
                to="/provider-faqs"
                className="inline-block border-2 border-ui-accent text-ui-accent px-8 py-4 rounded-full hover:bg-gray-200 hover:text-gray-900 transition font-sans font-semibold text-[18px]"
              >
                FAQs
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>
    </Layout>
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