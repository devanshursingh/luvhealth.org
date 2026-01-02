import { useState, useEffect } from 'react';
import { DoctorSearch } from './components/DoctorSearch';
import { PatientDashboard } from './components/PatientDashboard';
import { Booking } from './types';
import logoWithName from 'figma:asset/4cf82844d2c6d516a03174c7454153e9e36d4dba.png';
import { Calendar, Search } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<'search' | 'dashboard'>('search');
  const [patientBookings, setPatientBookings] = useState<Booking[]>([]);

  const handleBookingComplete = (booking: Booking) => {
    setPatientBookings((prev) => [...prev, booking]);
    setActiveView('dashboard');
  };

  // Simulate appointment confirmation after a delay
  useEffect(() => {
    const pendingBookings = patientBookings.filter(b => b.status === 'pending');
    
    if (pendingBookings.length > 0) {
      // Simulate confirmation after 10 seconds for demo purposes
      const timer = setTimeout(() => {
        setPatientBookings((prev) =>
          prev.map((booking) => {
            if (booking.status === 'pending') {
              // Pick a random slot from their preferences to confirm
              const confirmedSlot = booking.selectedSlots[0];
              return {
                ...booking,
                status: 'confirmed' as const,
                confirmedSlot,
                confirmedAt: new Date().toISOString(),
                isNewlyConfirmed: true,
              };
            }
            return booking;
          })
        );
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [patientBookings]);

  // Handle payment completion
  const handlePaymentComplete = (bookingId: string) => {
    setPatientBookings((prev) =>
      prev.map((booking) => {
        if (booking.id === bookingId) {
          return {
            ...booking,
            paymentStatus: 'paid' as const,
            isNewlyConfirmed: false, // Clear the notification badge after payment
          };
        }
        return booking;
      })
    );
  };

  // Count newly confirmed appointments for badge
  const newlyConfirmedCount = patientBookings.filter(b => b.isNewlyConfirmed).length;
  const totalBadgeCount = patientBookings.filter(b => b.status === 'pending').length + newlyConfirmedCount;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Clean Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Hide text on mobile */}
            <div 
              className="flex items-center gap-3 cursor-pointer" 
              onClick={() => setActiveView('search')}
            >
              <img src={logoWithName} alt="LuvHealth" className="h-18" />
              <span className="hidden md:block text-2xl text-[#f43f5e]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                luv health
              </span>
            </div>
            
            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => setActiveView('search')}
                className={`flex items-center gap-2 transition-colors ${
                  activeView === 'search'
                    ? 'text-[#f43f5e]'
                    : 'text-gray-600 hover:text-[#111827]'
                }`}
              >
                <Search size={18} />
                <span>Find Doctors</span>
              </button>
              <button
                onClick={() => setActiveView('dashboard')}
                className={`flex items-center gap-2 transition-colors relative ${
                  activeView === 'dashboard'
                    ? 'text-[#f43f5e]'
                    : 'text-gray-600 hover:text-[#111827]'
                }`}
              >
                <Calendar size={18} />
                <span>Appointments</span>
                {totalBadgeCount > 0 && (
                  <span className="absolute -top-2 -right-3 min-w-[18px] h-[18px] px-1 bg-[#f43f5e] text-white text-xs rounded-full flex items-center justify-center">
                    {totalBadgeCount}
                  </span>
                )}
              </button>
            </nav>

            {/* Mobile Navigation - Icon only buttons */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setActiveView('search')}
                className={`p-2 transition-colors relative ${
                  activeView === 'search'
                    ? 'text-[#f43f5e]'
                    : 'text-gray-600'
                }`}
              >
                <Search size={24} />
              </button>
              <button
                onClick={() => setActiveView('dashboard')}
                className={`p-2 transition-colors relative ${
                  activeView === 'dashboard'
                    ? 'text-[#f43f5e]'
                    : 'text-gray-600'
                }`}
              >
                <Calendar size={24} />
                {totalBadgeCount > 0 && (
                  <span className="absolute top-0 right-0 min-w-[18px] h-[18px] px-1 bg-[#f43f5e] text-white text-xs rounded-full flex items-center justify-center">
                    {totalBadgeCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {activeView === 'search' ? (
        <DoctorSearch onBookingComplete={handleBookingComplete} />
      ) : (
        <PatientDashboard bookings={patientBookings} onPaymentComplete={handlePaymentComplete} />
      )}
    </div>
  );
}