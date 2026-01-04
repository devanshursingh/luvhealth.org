import { useState, useRef, useEffect } from 'react';
import { Search, MapPin, SlidersHorizontal } from 'lucide-react';
import { mockDoctors } from '../../data/marketplace/mockData';
import { Doctor, Booking } from '../../types/marketplace';
import { DoctorCard } from './DoctorCard';
import { BookingModal } from './BookingModal';

interface DoctorSearchProps {
  onBookingComplete: (booking: Booking) => void;
  initialQuery?: string;
  initialSpecialty?: string;
}

export function DoctorSearch({ onBookingComplete, initialQuery = '', initialSpecialty = 'all' }: DoctorSearchProps) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedSpecialty, setSelectedSpecialty] = useState(initialSpecialty);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [sortBy, setSortBy] = useState<'rating' | 'price'>('rating');
  const resultsRef = useRef<HTMLDivElement>(null);
  const shouldScrollRef = useRef(false);

  // Sync state with props when they change (e.g., URL params update)
  useEffect(() => {
    setSearchQuery(initialQuery);
    setSelectedSpecialty(initialSpecialty);
  }, [initialQuery, initialSpecialty]);

  const scrollToResults = () => {
    // Use setTimeout to ensure DOM is updated
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  // Scroll to results when there's an initial query (navigated from homepage)
  useEffect(() => {
    if (initialQuery) {
      // Wait for DOM to update and results to render, then scroll
      const timer = setTimeout(() => {
        if (resultsRef.current) {
          scrollToResults();
        }
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [initialQuery]); // Run when initialQuery changes

  // Scroll when search is explicitly triggered (button click or Enter key)
  // This effect watches for when shouldScrollRef is set to true
  useEffect(() => {
    if (shouldScrollRef.current && resultsRef.current) {
      // Wait a bit for filtered results to render
      const timer = setTimeout(() => {
        scrollToResults();
        shouldScrollRef.current = false;
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [searchQuery, selectedSpecialty]);

  const specialties = [
    { label: 'Pediatrician', emoji: '👶', value: 'Pediatrics' },
    { label: 'Ob/Gyn', emoji: '👗', value: 'Obstetrics & Gynecology' },
    { label: 'Internist', emoji: '🧠', value: 'Internal Medicine' },
    { label: 'Neurologist', emoji: '🧠', value: 'Neurology' },
  ];

  const filteredDoctors = mockDoctors
    .filter((doctor) => {
      // Check specialty match
      const matchesSpecialty = selectedSpecialty === 'all' || doctor.specialty === selectedSpecialty;
      
      // If a specific specialty is selected, show all doctors in that specialty
      // (ignore search query when specialty filter is active)
      if (selectedSpecialty !== 'all') {
        return matchesSpecialty;
      }
      
      // No specialty selected: apply text search filter
      if (!searchQuery.trim()) {
        return true; // Show all if no search query
      }
      const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      return a.price - b.price;
    });

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative bg-[#111827] pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Hero Text */}
          <h1 className="text-5xl md:text-6xl text-white mb-4">
            See Your Doctor ASAP,<br />No Phone Calls Required
          </h1>
          <p className="text-xl text-white/90 mb-10">
            Book hard-to-find doctors online for ASAP appointments
          </p>

          {/* Search Bar with Integrated Button */}
          <div className="max-w-3xl mx-auto">
            {/* Desktop: Inline button */}
            <div className="hidden md:block relative bg-white rounded-full shadow-xl overflow-hidden">
              <div className="flex items-center">
                <div className="flex-1 flex items-center">
                  <Search className="absolute left-6 text-gray-400" size={22} />
                  <input
                    type="text"
                    placeholder="Search for doctors or specialties..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        shouldScrollRef.current = true;
                        scrollToResults();
                      }
                    }}
                    className="w-full pl-16 pr-6 py-5 text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  />
                </div>
                <button 
                  className="px-8 py-5 bg-[#f43f5e] text-white rounded-full hover:bg-[#e11d48] transition-colors whitespace-nowrap m-1" 
                  onClick={() => {
                    shouldScrollRef.current = true;
                    scrollToResults();
                  }}
                >
                  Find Doctors Now!
                </button>
              </div>
            </div>

            {/* Mobile: Stacked button */}
            <div className="md:hidden space-y-4">
              <div className="relative bg-white rounded-2xl shadow-xl">
                <div className="flex items-center">
                  <Search className="absolute left-6 text-gray-400" size={22} />
                  <input
                    type="text"
                    placeholder="Search doctors or specialties..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        shouldScrollRef.current = true;
                        scrollToResults();
                      }
                    }}
                    className="w-full pl-16 pr-6 py-5 text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-2xl"
                  />
                </div>
              </div>
              <button 
                className="w-full px-8 py-5 bg-[#f43f5e] text-white rounded-2xl hover:bg-[#e11d48] transition-colors shadow-xl" 
                onClick={() => {
                  shouldScrollRef.current = true;
                  scrollToResults();
                }}
              >
                Find Doctors Now!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Specialty Filters */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 sm:pb-0">
              <SlidersHorizontal className="text-gray-400 flex-shrink-0" size={18} />
              <button
                onClick={() => setSelectedSpecialty('all')}
                className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-all ${
                  selectedSpecialty === 'all'
                    ? 'bg-[#f43f5e] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {specialties.map((specialty) => (
                <button
                  key={specialty.value}
                  onClick={() => setSelectedSpecialty(specialty.value)}
                  className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap transition-all ${
                    selectedSpecialty === specialty.value
                      ? 'bg-[#f43f5e] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {specialty.label}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'rating' | 'price')}
              className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 text-sm focus:outline-none focus:border-[#f43f5e] cursor-pointer"
            >
              <option value="rating">Highest Rated</option>
              <option value="price">Lowest Price</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" ref={resultsRef}>
        {filteredDoctors.length > 0 && (
          <div className="mb-6">
            <p className="text-sm text-gray-600">
              <span className="text-[#111827]">{filteredDoctors.length}</span> {filteredDoctors.length === 1 ? 'doctor' : 'doctors'} available
            </p>
          </div>
        )}

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBookNow={() => setSelectedDoctor(doctor)}
            />
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-gray-400" size={24} />
            </div>
            <h3 className="text-lg text-[#111827] mb-2">No doctors found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      {selectedDoctor && (
        <BookingModal
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
          onBookingComplete={onBookingComplete}
        />
      )}
    </div>
  );
}