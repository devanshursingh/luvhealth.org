import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const [isOverWhite, setIsOverWhite] = useState(location.pathname !== '/');
  const lastScrollY = useRef(0);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  };

  const handleSectionLink = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // Already on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to home page with hash - the useEffect will handle scrolling
      navigate(`/#${sectionId}`);
    }
  };

  // Handle hash scrolling when navigating to home page with hash
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.substring(1); // Remove the #
      // Wait for page to render, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  }, [location.pathname, location.hash]);

  // Navigation items configuration
  const navigationItems = [
    {
      type: 'anchor' as const,
      label: 'How It Works',
      href: '/#how-it-works',
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleSectionLink(e, 'how-it-works'),
      hideOnRoutes: [] as string[],
    },
    {
      type: 'link' as const,
      label: 'Providers Book A Demo',
      to: '/for-providers',
      hideOnRoutes: ['/for-providers'],
    },
    {
      type: 'link' as const,
      label: 'About Us',
      to: '/about-us',
      hideOnRoutes: [] as string[],
    },
  ];

  // Filter navigation items based on current route
  const visibleNavItems = navigationItems.filter(
    (item) => !item.hideOnRoutes.includes(location.pathname)
  );

  useEffect(() => {
    // Set initial state based on route
    setIsOverWhite(location.pathname !== '/');
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Determine if navbar is over white content (scrolled past hero section)
      // Hero section is typically full viewport height, so check if scrolled past ~80% of viewport
      // Only apply scroll-based logic on home page
      if (location.pathname === '/') {
        setIsOverWhite(currentScrollY > viewportHeight * 0.8);
      }
      
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
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 w-full backdrop-blur-md shadow-lg z-[100] transition-all duration-300 ${
        navbarVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isOverWhite ? 'bg-white/90' : 'bg-white/10'
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
              {visibleNavItems.map((item, index) => {
                const baseClasses = `transition ${isOverWhite ? 'text-gray-900 hover:text-gray-700' : 'text-gray-200 hover:text-white'}`;
                if (item.type === 'anchor') {
                  return (
                    <a
                      key={index}
                      href={item.href}
                      onClick={item.onClick}
                      className={`${baseClasses} cursor-pointer`}
                    >
                      {item.label}
                    </a>
                  );
                }
                return (
                  <Link key={index} to={item.to} className={baseClasses}>
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <button 
              className={`md:hidden transition ${isOverWhite ? 'text-gray-900' : 'text-gray-200'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={`md:hidden backdrop-blur-md border-t transition-colors ${
            isOverWhite ? 'bg-white/90 border-gray-200' : 'bg-white/10 border-white/20'
          }`}>
            <div className="px-4 py-4 space-y-4 font-sans font-medium text-base">
              {visibleNavItems.map((item, index) => {
                const baseClasses = `block transition ${isOverWhite ? 'text-gray-900 hover:text-gray-700' : 'text-gray-200 hover:text-white'}`;
                if (item.type === 'anchor') {
                  return (
                    <a
                      key={index}
                      href={item.href}
                      onClick={(e) => {
                        item.onClick?.(e);
                        setMobileMenuOpen(false);
                      }}
                      className={`${baseClasses} cursor-pointer`}
                    >
                      {item.label}
                    </a>
                  );
                }
                return (
                  <Link
                    key={index}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={baseClasses}
                  >
                    {item.label}
                  </Link>
                );
              })}
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
                <li><a href="https://form.typeform.com/to/jtte8Dj4" target="_blank" rel="noopener noreferrer" className="hover:text-white transition font-sans text-[18px]">Sign Up</a></li>
                <li><a href="/#how-it-works" className="hover:text-white transition font-sans text-[18px]">How It Works</a></li>
                <li><a href="https://form.typeform.com/to/jtte8Dj4" target="_blank" rel="noopener noreferrer" className="hover:text-white transition font-sans text-[18px]">Log In</a></li>
                <li><Link to="/patient-faqs" className="hover:text-white transition font-sans text-[18px]">FAQs</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans font-semibold mb-4 text-[18px]">For Providers</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://calendly.com/dsinghjhu2020/30min" target="_blank" rel="noopener noreferrer" className="hover:text-white transition font-sans text-[18px]">Book A Demo</a></li>
                <li><Link to="/for-providers" className="hover:text-white transition font-sans text-[18px]">Learn More</Link></li>
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


