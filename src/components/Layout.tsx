import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show navbar at the top
      if (currentScrollY < 10) {
        setNavbarVisible(true);
      } 
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setNavbarVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setNavbarVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 w-full bg-white/10 backdrop-blur-md shadow-lg z-[100] transition-transform duration-300 ${
        navbarVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link 
              to="/" 
              className="cursor-pointer hover:opacity-80 transition-opacity logo-heartbeat"
              onClick={handleLogoClick}
            >
              <Logo size={100} showText={true} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 font-sans font-medium text-base">
              <a href="/#how-it-works" className="text-gray-200 hover:text-white transition">
                How It Works
              </a>
              <a href="/#for-providers" className="text-gray-200 hover:text-white transition">
                For Providers
              </a>
              <Link to="/about-us" className="text-gray-200 hover:text-white transition">
                About Us
              </Link>
              <a href="/#login" className="text-gray-200 hover:text-white transition">
                Log In
              </a>
              <a 
                href="/#signup" 
                className="bg-ui-accent text-white px-6 py-2 rounded-full hover:bg-rose-600 transition font-sans font-medium text-base"
              >
                Sign Up
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20">
            <div className="px-4 py-4 space-y-4 font-sans font-medium text-base">
              <a href="/#how-it-works" className="block text-gray-200 hover:text-white">
                How It Works
              </a>
              <a href="/#for-providers" className="block text-gray-200 hover:text-white">
                For Providers
              </a>
              <Link to="/about-us" className="block text-gray-200 hover:text-white">
                About Us
              </Link>
              <a href="/#login" className="block text-gray-200 hover:text-white">
                Log In
              </a>
              <a 
                href="/#signup" 
                className="block bg-ui-accent text-white px-6 py-2 rounded-full text-center hover:bg-rose-600 font-sans font-medium text-base"
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
              <Link 
                to="/" 
                className="cursor-pointer inline-block logo-heartbeat hover:opacity-80 transition-opacity"
                onClick={handleLogoClick}
              >
                <Logo size={64} showText={true} />
              </Link>
              <p className="font-sans text-[18px] text-gray-400 mt-4 leading-[1.2]">
                Expanding healthcare choices, one appointment at a time
              </p>
            </div>
            
            <div>
              <h3 className="font-sans font-semibold mb-4 text-[18px]">For Patients</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/#signup" className="hover:text-white transition font-sans text-[18px]">Sign Up</a></li>
                <li><a href="/#how-it-works" className="hover:text-white transition font-sans text-[18px]">How It Works</a></li>
                <li><a href="/#login" className="hover:text-white transition font-sans text-[18px]">Log In</a></li>
                <li><Link to="/patient-faqs" className="hover:text-white transition font-sans text-[18px]">FAQs</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans font-semibold mb-4 text-[18px]">For Providers</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://calendly.com/dsinghjhu2020/30min" target="_blank" rel="noopener noreferrer" className="hover:text-white transition font-sans text-[18px]">Book A Demo</a></li>
                <li><a href="/#for-providers" className="hover:text-white transition font-sans text-[18px]">Learn More</a></li>
                <li><Link to="/provider-faqs" className="hover:text-white transition font-sans text-[18px]">FAQs</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 text-gray-400">
              <Link to="/terms-of-service" className="font-sans text-[16px] hover:text-white transition">
                Terms of Service
              </Link>
              <span className="hidden md:inline">|</span>
              <Link to="/privacy-policy" className="font-sans text-[16px] hover:text-white transition">
                Privacy Policy
              </Link>
            </div>
            <p className="font-sans text-[18px] text-center mt-4">&copy; 2024 Luv Health. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}


