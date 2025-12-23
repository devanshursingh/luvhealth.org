import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Search, Calendar, Heart, CreditCard, ChevronDown } from 'lucide-react';
import heroVideo from './assets/hero_background_video.mp4';
import Layout from './components/Layout';
import PatientFAQs from './pages/PatientFAQs';
import ProviderFAQs from './pages/ProviderFAQs';
import AboutUs from './pages/AboutUs';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ForProviders from './pages/ForProviders';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const handleSearch = () => {
    window.open('https://form.typeform.com/to/jtte8Dj4', '_blank');
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const patientFAQs = [
    {
      question: "How does this work?",
      answer: "You can find ASAP bookings with out-of-network private practice doctors at an affordable, out-of-pocket price for you. You can easily compare and choose the right doctor for you from our platform, and use their profile to learn more about their practice. Don't wait months for a medically necessary appointment. Don't wait hours on hold."
    },
    {
      question: "Do you take my insurance?",
      answer: "Our platform does not take insurance, but your doctor can provide you with a detailed receipt (superbill) that you can submit to your insurance for out-of-network reimbursement, if your insurance allows it. Our platform helps you book an ASAP appointment with an out-of-network doctor for a transparent, upfront rate. We don't accept insurance because it allows us to offer ASAP bookings, not 6 month wait times."
    },
    {
      question: "Why can't I just go to urgent care?",
      answer: "Imagine waiting in line at urgent care for hours, only to be told that you need to see a specialist. Urgent care is for one time checkups for standard issues, not personalized medical care from your doctor. On our platform, you can book appointments with ob/gyns, pediatricians, dentists, and more for high-quality, convenient medical care that otherwise takes months."
    },
    {
      question: "How can I send my electronic medical records (EMRs) to the doctor?",
      answer: "You can bring your electronic medical records (EMRs) to your appointment in a digital format, such as on a USB drive, via email, or through a secure patient portal if your previous provider offers one. You can also request that your previous healthcare provider send your records directly to your new doctor. Many practices have patient portals where you can download your records, or you can request them through your provider's medical records department."
    }
  ];

  const howItWorksSteps = [
    {
      icon: Calendar,
      title: 'Book ASAP Appointments',
      description: 'Find appointments quickly with doctors who actually have time for you'
    },
    {
      icon: Search,
      title: 'Search High-Quality Doctors',
      description: 'Find doctors who take a genuine interest in your health and prioritize quality over quantity'
    },
    {
      icon: Heart,
      title: 'Your Choice',
      description: 'Pick the right doctor for you, not just the ones your insurance approves'
    },
    {
      icon: CreditCard,
      title: 'Book and Pay Online',
      description: 'No phone calls required, no insurance hassles. Instant online bookings and transparent, no-surprise prices for convenient, quality care made simple'
    }
  ];


  return (
    <Layout>
      {/* Hero Section - Full Screen Video */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-16 sm:pb-0 overflow-hidden" style={{ marginTop: '0', paddingTop: '96px' }}>
        {/* Background Video with Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="brightness-90"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              minWidth: '100%',
              minHeight: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        
        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-center z-10 pt-24">
          <h1 className="font-sans text-[48px] sm:text-[56px] font-semibold text-white mb-6 drop-shadow-lg leading-tight">
            See Your Doctor ASAP,<br />No Phone Calls Required
          </h1>
          <p className="font-sans text-[24px] text-white mb-8 drop-shadow-md leading-[1.2]">
            Book hard-to-find doctors online for ASAP appointments
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
            
            {/* Provider CTA - Subtle secondary action */}
            <div className="mt-4 mb-2">
              <Link
                to="/for-providers"
                className="inline-block font-sans text-[16px] text-white/80 hover:text-white transition underline underline-offset-4 decoration-white/50 hover:decoration-white"
              >
                Are you a provider? Book a demo →
              </Link>
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
                🤰 Ob/Gyn
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
            
            {/* Available In */}
            <div className="mt-6 mb-8 sm:mb-0 flex items-center justify-center gap-2">
              <span className="font-sans text-[16px] text-white/90 drop-shadow-md">
                Available In:
              </span>
              <span className="font-sans text-[18px] font-semibold text-white drop-shadow-lg flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                🌴 Los Angeles
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works & FAQs Section */}
      <section id="how-it-works" className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-sans text-[48px] font-semibold text-center text-primary-text mb-4">
            How It Works
          </h2>
          <p className="font-sans text-[24px] font-semibold text-secondary-text text-center mb-8 leading-[1.2]">
              Don't Wait Months. Don't Wait on Hold.
          </p>
          <div className="text-center mb-12">
            <a 
              href="https://form.typeform.com/to/jtte8Dj4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-ui-accent text-white px-8 py-4 rounded-full hover:bg-rose-600 transition font-sans font-semibold text-[18px]"
            >
              Find Doctors Now!
            </a>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 mb-8 text-left">
            {howItWorksSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-ui-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans text-[32px] font-semibold text-primary-text mb-3">
                      {step.title}
                    </h3>
                    {/* <p className="font-sans text-[18px] text-secondary-text leading-[1.2]">
                      {step.description}
                    </p> */}
                  </div>
                </div>
              );
            })}
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
              {howItWorksSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="px-6 py-4">
                    <div className="bg-white rounded-2xl shadow-lg p-12 text-center min-h-[300px] flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="w-8 h-8 text-ui-accent" />
                      </div>
                      <h3 className="font-sans text-[32px] font-semibold text-primary-text mb-4">
                        {step.title}
                      </h3>
                      {/* <p className="font-sans text-[18px] text-secondary-text leading-[1.2]">
                        {step.description}
                      </p> */}
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>

          {/* FAQs Section */}
          <div className="max-w-4xl mx-auto mt-20">
            <h2 className="font-sans text-[48px] font-semibold text-center text-primary-text mb-16">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {patientFAQs.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-sans text-[32px] font-semibold text-primary-text pr-4">
                      {faq.question}
                      </h3>
                    <ChevronDown
                      className={`flex-shrink-0 w-8 h-8 text-primary-text transition-transform duration-300 ${
                        openFAQIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFAQIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <p className="font-sans text-[18px] text-secondary-text leading-[1.2]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
            </div>
              ))}
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
      <Route path="/for-providers" element={<ForProviders />} />
      <Route path="/patient-faqs" element={<PatientFAQs />} />
      <Route path="/provider-faqs" element={<ProviderFAQs />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}