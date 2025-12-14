import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function ProviderFAQs() {
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
                Am I exposing myself to antitrust liability?
              </h3>
              <p className="font-sans text-[18px] text-secondary-text leading-[1.2]">
                No.
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

