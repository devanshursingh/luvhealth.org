import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function ProviderFAQs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="cursor-pointer">
              <Logo size={32} showText={true} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Provider FAQs Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Provider FAQs
          </h2>

          <div className="space-y-6">
            {/* FAQ Item */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Am I exposing myself to antitrust liability?
              </h3>
              <p className="text-gray-600 text-lg">
                No.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/"
              className="inline-block bg-rose-500 text-white px-8 py-4 rounded-full hover:bg-rose-600 transition font-semibold text-lg"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

