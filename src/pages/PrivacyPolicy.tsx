import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Privacy Policy Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-[48px] font-semibold text-center text-primary-text mb-16">
            Privacy Policy
          </h2>

          <div className="space-y-6">
            {/* Content will be added here */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <p className="font-sans text-[18px] text-secondary-text leading-[1.2]">
                {/* Privacy Policy content will be added here */}
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

