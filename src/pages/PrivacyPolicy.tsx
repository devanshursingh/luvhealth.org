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

          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h1 className="font-sans text-[36px] font-semibold text-primary-text mb-8">
                LUV HEALTH PRIVACY POLICY
              </h1>

              <div className="space-y-8">
                {/* Section 1 */}
                <div>
                  <h2 className="font-sans text-[28px] font-semibold text-primary-text mb-4">
                    1. Information We Collect
                  </h2>
                  <ul className="font-sans text-[18px] text-secondary-text leading-[1.6] space-y-2 list-disc list-inside">
                    <li>Personal identification (name, email, phone number)</li>
                    <li>Appointment scheduling data</li>
                    <li>Messaging between patients and providers</li>
                    <li>Payment information (if applicable)</li>
                  </ul>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="font-sans text-[28px] font-semibold text-primary-text mb-4">
                    2. How We Use Information
                  </h2>
                  <ul className="font-sans text-[18px] text-secondary-text leading-[1.6] space-y-2 list-disc list-inside">
                    <li>Facilitate appointments and communications</li>
                    <li>Improve platform services</li>
                    <li>Comply with legal and regulatory requirements</li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="font-sans text-[28px] font-semibold text-primary-text mb-4">
                    3. Data Sharing
                  </h2>
                  <ul className="font-sans text-[18px] text-secondary-text leading-[1.6] space-y-2 list-disc list-inside">
                    <li>Only with HIPAA-compliant vendors (e.g., AWS, Clerk)</li>
                    <li>Only as required by law or to provide healthcare services</li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="font-sans text-[28px] font-semibold text-primary-text mb-4">
                    4. Data Security
                  </h2>
                  <ul className="font-sans text-[18px] text-secondary-text leading-[1.6] space-y-2 list-disc list-inside">
                    <li>Encryption at rest and in transit</li>
                    <li>Access control and monitoring</li>
                    <li>Logging and auditing per HIPAA requirements</li>
                  </ul>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="font-sans text-[28px] font-semibold text-primary-text mb-4">
                    5. User Rights
                  </h2>
                  <ul className="font-sans text-[18px] text-secondary-text leading-[1.6] space-y-2 list-disc list-inside">
                    <li>Access, correction, or deletion requests</li>
                    <li>Opt-out of non-essential communications</li>
                  </ul>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="font-sans text-[28px] font-semibold text-primary-text mb-4">
                    6. HIPAA Compliance
                  </h2>
                  <ul className="font-sans text-[18px] text-secondary-text leading-[1.6] space-y-2 list-disc list-inside">
                    <li>Platform maintains HIPAA-aligned policies</li>
                    <li>BAAs exist with AWS, Clerk, and other HIPAA-compliant vendors</li>
                  </ul>
                </div>
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

