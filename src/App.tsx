import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Search, Calendar, Heart, CreditCard, UserPlus, Users, DollarSign, ShieldOff, CalendarCheck } from 'lucide-react';
import doctorPatientImg from './assets/hero_background.png';
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
                    Find ASAP appointments with doctors who prioritize quality over quantity
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
                    Book and Pay Online Instantly
                  </h3>
                  <p className="text-gray-600 text-xl">
                    No phone calls required, no insurance hassles. Instant online bookings and simple online payments for more convenient, quality care
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
              <Link 
                to="/provider-faqs"
                className="inline-block border-2 border-rose-500 text-rose-500 px-8 py-4 rounded-full hover:bg-rose-500 hover:text-white transition font-semibold text-lg"
              >
                FAQs
              </Link>
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