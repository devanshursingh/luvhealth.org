import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Users, DollarSign, ShieldOff, CalendarCheck } from 'lucide-react';
import doctorPatientImg from '../assets/doctor-patient.png';
import Layout from '../components/Layout';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const providerBenefits = [
  {
    icon: Users,
    title: 'Find Self-Paying Patients',
    description: 'Connect with a growing number of patients choosing to pay directly for convenient, quality care'
  },
  {
    icon: DollarSign,
    title: "'As low as' Pricing",
    description: "Retain ownership over your patient visit price with the 'as low as' disclaimer for your visits"
  },
  {
    icon: ShieldOff,
    title: 'Reduce Insurance Reliance',
    description: 'Wean your practice off insurance contracts that pay less and less and reduce care quality'
  },
  {
    icon: CalendarCheck,
    title: "No Extra Work, We'll Call For Bookings",
    description: 'For seamless integration with no extra work for your office, our AI will robocall with patient info for bookings'
  }
];

export default function ForProviders() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* For Providers Section */}
      <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${doctorPatientImg})`,
            backgroundPosition: 'center center',
            filter: 'brightness(0.5)'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/25" />
        
        {/* Content - Add relative positioning */}
        <div className="relative max-w-4xl mx-auto text-center z-10 pt-32">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-12">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-rose-500 rounded-full flex items-center justify-center">
                <UserPlus className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="font-sans text-[48px] font-semibold text-white mb-4">
              For Providers
            </h2>
            <p className="font-sans text-[18px] text-gray-100 mb-8 leading-[1.2]">
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
            <p className="font-sans text-[18px] text-gray-100 mb-8 leading-[1.2]">
              Join our platform to connect with self-paying patients who value personalized care
            </p>

            {/* Desktop Grid Layout */}
            <div className="hidden md:grid md:grid-cols-2 gap-8 mb-12 text-left">
              {providerBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-ui-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-sans text-[32px] font-semibold text-white mb-3">
                        {benefit.title}
                      </h3>
                      <p className="font-sans text-[18px] text-gray-100 leading-[1.2]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
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
                {providerBenefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="px-4">
                      <div className="text-center min-h-[300px] flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                          <IconComponent className="w-8 h-8 text-ui-accent" />
                        </div>
                        <h3 className="font-sans text-[32px] font-semibold text-white mb-4">
                          {benefit.title}
                        </h3>
                        <p className="font-sans text-[18px] text-gray-100 leading-[1.2]">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            to="/provider-faqs"
            className="inline-block border-2 border-ui-accent text-ui-accent px-8 py-4 rounded-full hover:bg-ui-accent hover:text-white transition font-sans font-semibold text-[18px]"
          >
            FAQs
          </Link>
        </div>
      </section>
    </Layout>
  );
}

