import { useSearchParams, useNavigate } from 'react-router-dom';
import { DoctorSearch } from '../components/marketplace/DoctorSearch';
import { Booking } from '../types/marketplace';

export default function FindDoctors() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Initialize search query from URL params
  const initialQuery = searchParams.get('q') || '';
  const initialSpecialty = searchParams.get('specialty') || 'all';

  // Handle booking completion - save to localStorage and navigate
  const handleBookingComplete = (booking: Booking) => {
    // Load existing bookings
    const savedBookings = localStorage.getItem('patientBookings');
    const existingBookings = savedBookings ? JSON.parse(savedBookings) : [];
    
    // Add new booking
    const updatedBookings = [...existingBookings, booking];
    localStorage.setItem('patientBookings', JSON.stringify(updatedBookings));
    
    // Navigate to appointments page after booking
    navigate('/appointments');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DoctorSearch 
        onBookingComplete={handleBookingComplete}
        initialQuery={initialQuery}
        initialSpecialty={initialSpecialty}
      />
    </div>
  );
}

