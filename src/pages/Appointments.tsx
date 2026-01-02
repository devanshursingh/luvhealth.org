import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PatientDashboard } from '../components/marketplace/PatientDashboard';
import { Booking } from '../types/marketplace';

export default function Appointments() {
  const navigate = useNavigate();
  const [patientBookings, setPatientBookings] = useState<Booking[]>([]);

  // Load bookings from localStorage on mount
  useEffect(() => {
    const savedBookings = localStorage.getItem('patientBookings');
    if (savedBookings) {
      try {
        setPatientBookings(JSON.parse(savedBookings));
      } catch (e) {
        console.error('Failed to load bookings from localStorage', e);
      }
    }
  }, []);

  // Save bookings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('patientBookings', JSON.stringify(patientBookings));
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

  return (
    <PatientDashboard 
      bookings={patientBookings} 
      onPaymentComplete={handlePaymentComplete}
    />
  );
}

