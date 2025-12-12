import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../components/Logo';

export default function PatientFAQs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="cursor-pointer">
              <Logo size={32} showText={true} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/#how-it-works" className="text-gray-700 hover:text-rose-500 transition">
                How It Works
              </a>
              <a href="/#for-providers" className="text-gray-700 hover:text-rose-500 transition">
                For Providers
              </a>
              <Link to="/about-us" className="text-gray-700 hover:text-rose-500 transition">
                About Us
              </Link>
              <a href="/#login" className="text-gray-700 hover:text-rose-500 transition">
                Log In
              </a>
              <a 
                href="/#signup" 
                className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition"
              >
                Sign Up
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              <a href="/#how-it-works" className="block text-gray-700 hover:text-rose-500">
                How It Works
              </a>
              <a href="/#for-providers" className="block text-gray-700 hover:text-rose-500">
                For Providers
              </a>
              <Link to="/about-us" className="block text-gray-700 hover:text-rose-500">
                About Us
              </Link>
              <a href="/#login" className="block text-gray-700 hover:text-rose-500">
                Log In
              </a>
              <a 
                href="/#signup" 
                className="block bg-rose-500 text-white px-6 py-2 rounded-full text-center hover:bg-rose-600"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Patient FAQs Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {/* FAQ Item - Add your patient FAQs here */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Patient FAQ Question
              </h3>
              <p className="text-gray-600 text-lg">
                Patient FAQ answer goes here.
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

