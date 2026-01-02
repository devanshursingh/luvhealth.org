import { Star, Award, Clock, ArrowRight } from 'lucide-react';
import { Doctor } from '../../types/marketplace';

interface DoctorCardProps {
  doctor: Doctor;
  onBookNow: () => void;
}

export function DoctorCard({ doctor, onBookNow }: DoctorCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-200">
      <div className="relative">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-48 object-cover object-top"
        />
        {doctor.rating >= 4.8 && (
          <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-2.5 py-1 rounded-md flex items-center gap-1 text-xs">
            <Award size={12} />
            <span>Top Rated</span>
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="mb-3">
          <h3 className="text-lg text-[#111827] mb-1">
            {doctor.name}
          </h3>
          <p className="text-sm text-gray-600">{doctor.specialty}</p>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-1">
            <Star className="text-yellow-500 fill-yellow-500" size={14} />
            <span className="text-sm text-[#111827]">{doctor.rating}</span>
            <span className="text-xs text-gray-500">({doctor.reviewCount})</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <Clock size={14} />
            <span className="text-xs">{doctor.yearsExperience} yrs exp</span>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {doctor.bio}
        </p>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500 mb-0.5">As low as</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl text-[#111827]">${doctor.price}</span>
              <span className="text-sm text-gray-500">/ visit</span>
            </div>
          </div>
          <button
            onClick={onBookNow}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#f43f5e] text-white rounded-lg hover:bg-[#e11d48] transition-colors"
          >
            <span>Book</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

