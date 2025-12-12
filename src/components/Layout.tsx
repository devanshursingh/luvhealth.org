import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="cursor-pointer">
              <Logo size={48} showText={true} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/#how-it-works" className="text-secondary hover:text-ui-accent transition">
                How It Works
              </a>
              <a href="/#for-providers" className="text-secondary hover:text-ui-accent transition">
                For Providers
              </a>
              <Link to="/about-us" className="text-secondary hover:text-ui-accent transition">
                About Us
              </Link>
              <a href="/#login" className="text-secondary hover:text-ui-accent transition">
                Log In
              </a>
              <a 
                href="/#signup" 
                className="bg-ui-accent text-white px-6 py-2 rounded-full hover:bg-rose-600 transition"
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
              <a href="/#how-it-works" className="block text-secondary hover:text-ui-accent">
                How It Works
              </a>
              <a href="/#for-providers" className="block text-secondary hover:text-ui-accent">
                For Providers
              </a>
              <Link to="/about-us" className="block text-secondary hover:text-ui-accent">
                About Us
              </Link>
              <a href="/#login" className="block text-secondary hover:text-ui-accent">
                Log In
              </a>
              <a 
                href="/#signup" 
                className="block bg-ui-accent text-white px-6 py-2 rounded-full text-center hover:bg-rose-600"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      {children}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Link to="/" className="cursor-pointer inline-block">
                <Logo size={64} showText={true} />
              </Link>
              <p className="text-gray-400 mt-4">
                Expanding healthcare choices, one appointment at a time
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">For Patients</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/#signup" className="hover:text-white transition">Sign Up</a></li>
                <li><a href="/#how-it-works" className="hover:text-white transition">How It Works</a></li>
                <li><a href="/#login" className="hover:text-white transition">Log In</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">For Providers</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/#provider-signup" className="hover:text-white transition">Provider Sign Up</a></li>
                <li><a href="/#for-providers" className="hover:text-white transition">Learn More</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Luv Health. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


