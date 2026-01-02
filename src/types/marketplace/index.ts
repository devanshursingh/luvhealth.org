export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  price: number;
  image: string;
  bio: string;
  education: string;
  yearsExperience: number;
  availableSlots: TimeSlot[];
}

export interface TimeSlot {
  id: string;
  date: string;
  time: string;
  available: boolean;
}

export interface Booking {
  id: string;
  doctorId: string;
  doctorName: string;
  doctorSpecialty: string;
  patientName: string;
  patientEmail: string;
  selectedSlots: TimeSlot[];
  confirmedSlot?: TimeSlot; // The actual confirmed time slot
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'refunded';
  bookedAt: string;
  confirmedAt?: string; // When the appointment was confirmed
  isNewlyConfirmed?: boolean; // For showing notification badge
}

