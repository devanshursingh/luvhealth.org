import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Terms of Service Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans text-[48px] font-semibold text-center text-primary-text mb-16">
            Terms of Service
          </h2>

          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h1 className="font-sans text-[36px] font-semibold text-primary-text mb-6">
                LUV HEALTH TERMS OF SERVICE (USERS)
              </h1>

              <p className="font-sans text-[18px] text-secondary-text leading-[1.6] mb-8">
                Welcome to LUV HEALTH. By using our service, you agree to the following terms:
              </p>

              <div className="space-y-8">
                {/* Section 1 */}
                <div>
                  <h2 className="font-sans text-[28px] font-semibold text-primary-text mb-4">
                    1. Services
                  </h2>
                  <p className="font-sans text-[18px] text-secondary-text leading-[1.6]">
                    LUV HEALTH connects patients with private healthcare providers. We do not provide medical advice or treatment.
                  </p>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="font-sans text-[28px] font-semibold text-primary-text mb-4">
                    2. Eligibility
                  </h2>
                  <p className="font-sans text-[18px] text-secondary-text leading-[1.6]">
                    Users must be at least 18 years old or have parental consent.
                  </p>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="font-sans text-[28px] font-semibold text-primary-text mb-4">
                    3. Privacy
                  </h2>
                  <p className="font-sans text-[18px] text-secondary-text leading-[1.6]">
                    User information may include PHI. See our Privacy Policy for details on data collection and usage.
                  </p>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="font-sans text-[28px] font-semibold text-primary-text mb-4">
                    4. Payments
                  </h2>
                  <p className="font-sans text-[18px] text-secondary-text leading-[1.6]">
                    Users pay providers directly. The Platform may facilitate payment processing through third-party services (e.g., Stripe). Fees may apply.
                  </p>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="font-sans text-[28px] font-semibold text-primary-text mb-4">
                    5. Limitation of Liability
                  </h2>
                  <p className="font-sans text-[18px] text-secondary-text leading-[1.6]">
                    The Platform is not responsible for healthcare services provided by providers. Always consult your licensed healthcare provider.
                  </p>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="font-sans text-[28px] font-semibold text-primary-text mb-4">
                    6. Dispute Resolution
                  </h2>
                  <p className="font-sans text-[18px] text-secondary-text leading-[1.6]">
                    This Agreement is governed by the laws of California. Any dispute shall be resolved through binding arbitration.
                  </p>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="font-sans text-[28px] font-semibold text-primary-text mb-4">
                    7. Changes
                  </h2>
                  <p className="font-sans text-[18px] text-secondary-text leading-[1.6]">
                    The Platform may update these Terms of Service. Users will be notified of significant changes.
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="font-sans text-[18px] text-secondary-text text-center">
                  Luv Health © 2025
                </p>
              </div>
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

