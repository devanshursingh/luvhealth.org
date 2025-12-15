import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Layout from '../components/Layout';

export default function PatientFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you take my insurance?",
      answer: "Our platform is not insurance-based, but your doctor can provide you with a detailed receipt (superbill) that you can submit to your insurance for out-of-network reimbursement, if your insurance allows it. Our platform helps you book an ASAP appointment with an out-of-network doctor for a transparent, upfront rate. We don't accept insurance because it allows us to offer ASAP bookings, not 6 month wait times."
    }
  ];

  return (
    <Layout>
      {/* Patient FAQs Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-[48px] font-semibold text-center text-primary-text mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
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
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
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

          <div className="text-center mt-12">
            <Link 
              to="/"
              className="inline-block bg-ui-accent text-white px-8 py-4 rounded-full hover:bg-rose-600 transition font-sans font-semibold text-[18px]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

