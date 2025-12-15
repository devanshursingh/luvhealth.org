import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function ProviderFAQs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Provider FAQs Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-[48px] font-semibold text-center text-primary-text mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {/* FAQ Item */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-sans text-[32px] font-semibold text-primary-text mb-3">
                How does this work?
              </h3>
              <p className="font-sans text-[18px] text-secondary-text leading-[1.2]">
                You book a demo, sign up and create a practice profile with a profile photo, bio, practice address, phone number and other contact information, and photos to show our patients more about your practice. You select your price for a patient visit, choose an 'as low as' disclaimer if you would like, and start accepting self-paying patients!
              </p>
            </div>

            {/* FAQ Item */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-sans text-[32px] font-semibold text-primary-text mb-3">
                Am I exposing myself to antitrust liability?
              </h3>
              <p className="font-sans text-[18px] text-secondary-text leading-[1.2]">
                No, prices are not displayed in search results and you only display your patient visit price. Providers cannot view these prices or aggregated competitor prices of any kind. There are no price recommendations, and the algorithm does not use prices for rankings. Most importantly, prices are not displayed in search results and require click-through to be viewed, making competitor price aggregation difficult and costly. We are an independent marketing platform that allows your practice to find self-paying patients. We are not a provider organization. Our mission is to expand healthcare choices for patients and providers, and our platform does that by facilitating a healthcare marketplace where patients can find ASAP bookings at self-pay rates.
              </p>
            </div>

            {/* FAQ Item */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-sans text-[32px] font-semibold text-primary-text mb-3">
                Am I at risk of breaking my insurance contracts?
              </h3>
              <p className="font-sans text-[18px] text-secondary-text leading-[1.2]">
                No, our platform connects you with patients who are out-of-network with your practice, i.e. whose insurance you are not contracted with, or who are on plans that reimburse out-of-network visits. We recommend that you provide patients with a superbill that they can submit for reimbursements.
              </p>
            </div>

            {/* FAQ Item */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-sans text-[32px] font-semibold text-primary-text mb-3">
                The final cost for a patient depends on what's medically necessary and could be more than the base fee for a visit. Will patients commit me to the platform price?
              </h3>
              <p className="font-sans text-[18px] text-secondary-text leading-[1.2]">
                No. We have an option for you to add an 'as low as' price disclaimer. We will also disclaim that 'this price does not include the cost of any additional procedures deemed medically necessary during the visit'.
              </p>
            </div>

            {/* FAQ Item */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-sans text-[32px] font-semibold text-primary-text mb-3">
                What will patients think if my prices are high?
              </h3>
              <p className="font-sans text-[18px] text-secondary-text leading-[1.2]">
                Our platform connects you with patients who need medical care ASAP and are willing to pay for convenience, access, and quality.
              </p>
            </div>

            {/* FAQ Item */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="font-sans text-[32px] font-semibold text-primary-text mb-3">
                Will self-paying patients expect more time from me?
              </h3>
              <p className="font-sans text-[18px] text-secondary-text leading-[1.2]">
                No, this is not concierge and our patients are not paying for concierge care. We are connecting regular patients who need care with your practice. What our patients are paying for is convenient and available individual visits in a system where they otherwise have to wait months.
              </p>
            </div>
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

