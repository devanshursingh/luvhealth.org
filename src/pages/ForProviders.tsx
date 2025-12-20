import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Users, DollarSign, ShieldOff, CalendarCheck, ChevronDown } from 'lucide-react';
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
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const providerFAQs = [
    {
      question: "How does this work?",
      answer: "You book a demo, sign up and create a practice profile with a profile photo, bio, practice address, phone number and other contact information, and photos to show our patients more about your practice. You select your price for a patient visit, choose an 'as low as' disclaimer if you would like, and start accepting self-paying patients!"
    },
    {
      question: "Am I exposing myself to antitrust liability?",
      answer: "No, prices are not displayed in search results and you only display your patient visit price. Providers cannot view these prices or aggregated competitor prices of any kind. There are no price recommendations, and the algorithm does not use prices for rankings. Most importantly, prices are not displayed in search results and require click-through to be viewed, making competitor price aggregation difficult and costly. We are an independent marketing platform that allows your practice to find self-paying patients. We are not a provider organization. Our mission is to expand healthcare choices for patients and providers, and our platform does that by facilitating a healthcare marketplace where patients can find ASAP bookings at self-pay rates."
    },
    {
      question: "Am I at risk of breaking my insurance contracts?",
      answer: "No, our platform connects you with patients who are out-of-network with your practice, i.e. whose insurance you are not contracted with, or who are on plans that reimburse out-of-network visits. We recommend that you provide patients with a superbill that they can submit for reimbursements."
    },
    {
      question: "The final cost for a patient depends on what's medically necessary and could be more than the base fee for a visit. Will patients commit me to the platform price?",
      answer: "No. We have an option for you to add an 'as low as' price disclaimer. We will also disclaim that 'this price does not include the cost of any additional procedures deemed medically necessary during the visit'."
    },
    {
      question: "What will patients think if my prices are high?",
      answer: "Our platform connects you with patients who need medical care ASAP and are willing to pay for convenience, access, and quality. These patients understand that in a system where wait times stretch out to 8 months or longer, convenient access to medical expertise is a cost worth paying."
    },
    {
      question: "Will self-paying patients expect more time from me?",
      answer: "No, this is not concierge and our patients are not paying for concierge care. We are connecting regular patients who need care with your practice. What our patients are paying for is convenient and available individual visits in a system where they otherwise have to wait months."
    }
  ];

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
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-[48px] font-semibold text-center text-primary-text mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {providerFAQs.map((faq, index) => (
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
      </section>
    </Layout>
  );
}

