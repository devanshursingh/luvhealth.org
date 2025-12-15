import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Layout from '../components/Layout';

export default function ProviderFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
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
      {/* Provider FAQs Section */}
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

