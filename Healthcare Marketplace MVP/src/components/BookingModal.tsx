import { useState } from 'react';
import { X, Calendar, Clock, CheckCircle, ArrowRight, Info } from 'lucide-react';
import { Doctor, Booking, TimeSlot } from '../types';

interface BookingModalProps {
  doctor: Doctor;
  onClose: () => void;
  onBookingComplete: (booking: Booking) => void;
}

export function BookingModal({ doctor, onClose, onBookingComplete }: BookingModalProps) {
  const [selectedSlots, setSelectedSlots] = useState<TimeSlot[]>([]);
  const [step, setStep] = useState<'slots' | 'info' | 'success'>('slots');
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSlotToggle = (slot: TimeSlot) => {
    setSelectedSlots((prev) => {
      const exists = prev.find((s) => s.id === slot.id);
      if (exists) {
        return prev.filter((s) => s.id !== slot.id);
      } else {
        return [...prev, slot];
      }
    });
  };

  const groupSlotsByDate = () => {
    const grouped: { [key: string]: TimeSlot[] } = {};
    doctor.availableSlots.forEach((slot) => {
      if (!grouped[slot.date]) {
        grouped[slot.date] = [];
      }
      grouped[slot.date].push(slot);
    });
    return grouped;
  };

  const handleBooking = () => {
    const booking: Booking = {
      id: `b${Date.now()}`,
      doctorId: doctor.id,
      doctorName: doctor.name,
      doctorSpecialty: doctor.specialty,
      patientName: patientInfo.name,
      patientEmail: patientInfo.email,
      selectedSlots,
      totalAmount: doctor.price,
      status: 'pending',
      paymentStatus: 'pending',
      bookedAt: new Date().toISOString(),
    };
    
    setStep('success');
    setTimeout(() => {
      onBookingComplete(booking);
      onClose();
    }, 3500);
  };

  const groupedSlots = groupSlotsByDate();

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {step !== 'success' && (
          <div className="bg-[#f43f5e] p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-16 h-16 rounded-xl object-cover border-2 border-white"
                />
                <div>
                  <h2 className="text-2xl">{doctor.name}</h2>
                  <p className="text-white/90">{doctor.specialty}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center gap-2">
              <div className={`flex-1 h-1 rounded-full ${step === 'slots' ? 'bg-white' : 'bg-white/30'}`} />
              <div className={`flex-1 h-1 rounded-full ${step === 'info' ? 'bg-white' : 'bg-white/30'}`} />
            </div>
          </div>
        )}

        <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
          {step === 'slots' && (
            <>
              <h3 className="text-2xl text-gray-900 mb-2">Select Your Available Times</h3>
              <p className="text-gray-600 mb-2">Choose multiple time slots in order of preference for the next 7 days</p>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                <Info className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-blue-900">
                  <span className="font-medium">Tip:</span> Select at least 5 time slots to maximize your chances of getting an appointment. We'll confirm one slot and notify you via email.
                </p>
              </div>

              <div className="space-y-6">
                {Object.entries(groupedSlots).map(([date, slots]) => (
                  <div key={date} className="bg-gray-50 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar size={18} className="text-[#f43f5e]" />
                      <span className="text-[#111827]">
                        {new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                      {slots.map((slot) => {
                        const isSelected = selectedSlots.find((s) => s.id === slot.id);
                        const selectionIndex = selectedSlots.findIndex((s) => s.id === slot.id);
                        return (
                          <button
                            key={slot.id}
                            onClick={() => handleSlotToggle(slot)}
                            className={`p-3 rounded-xl text-sm transition-all relative ${
                              isSelected
                                ? 'bg-[#f43f5e] text-white shadow-lg shadow-rose-200 scale-105'
                                : 'bg-white border-2 border-gray-200 hover:border-[#f43f5e] text-[#111827]'
                            }`}
                          >
                            {isSelected && (
                              <span className="absolute -top-2 -right-2 bg-white text-[#f43f5e] rounded-full w-6 h-6 flex items-center justify-center text-xs shadow-md">
                                {selectionIndex + 1}
                              </span>
                            )}
                            <Clock size={14} className="mx-auto mb-1" />
                            <div>{slot.time}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {selectedSlots.length > 0 && (
                <div className="mt-6 bg-rose-50 border border-rose-200 rounded-2xl p-5">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-gray-600 text-sm">Selected: {selectedSlots.length} time slot(s)</p>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-xs text-gray-500">As low as</span>
                        <span className="text-2xl text-[#111827]">${doctor.price}</span>
                        <span className="text-sm text-gray-500">/ visit</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setStep('info')}
                      className="flex items-center gap-2 px-6 py-3 bg-[#f43f5e] text-white rounded-xl hover:shadow-lg transition-all"
                    >
                      <span>Continue</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                  <div className="bg-white/60 rounded-lg p-3 text-xs text-gray-600 flex items-start gap-2">
                    <Info size={14} className="flex-shrink-0 mt-0.5" />
                    <p>This price does not include any additional procedures the doctor may suggest are medically necessary during the visit.</p>
                  </div>
                </div>
              )}
            </>
          )}

          {step === 'info' && (
            <>
              <h3 className="text-2xl text-[#111827] mb-2">Your Information</h3>
              <p className="text-gray-600 mb-6">We'll send your booking confirmation here</p>

              {/* Booking Summary */}
              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 mb-6">
                <h4 className="text-[#111827] mb-3">Booking Summary</h4>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Selected time preferences:</span>
                    <span className="text-sm text-[#111827]">{selectedSlots.length} slot(s)</span>
                  </div>
                  <div className="flex justify-between items-start pt-3 border-t border-rose-200">
                    <span className="text-gray-600">Estimated cost:</span>
                    <div className="text-right">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs text-gray-500">As low as</span>
                        <span className="text-2xl text-[#111827]">${doctor.price}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">per visit</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/60 rounded-lg p-3 text-xs text-gray-600 flex items-start gap-2">
                  <Info size={14} className="flex-shrink-0 mt-0.5" />
                  <p>This price does not include any additional procedures the doctor may suggest are medically necessary during the visit.</p>
                </div>
              </div>

              <div className="space-y-5 mb-6">
                <div>
                  <label className="block text-[#111827] mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={patientInfo.name}
                    onChange={(e) => setPatientInfo({ ...patientInfo, name: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#f43f5e] transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-[#111827] mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={patientInfo.email}
                    onChange={(e) => setPatientInfo({ ...patientInfo, email: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#f43f5e] transition-colors"
                    placeholder="john@email.com"
                  />
                </div>
                <div>
                  <label className="block text-[#111827] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={patientInfo.phone}
                    onChange={(e) => setPatientInfo({ ...patientInfo, phone: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-[#f43f5e] transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep('slots')}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-[#111827] rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleBooking}
                  disabled={!patientInfo.name || !patientInfo.email}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#f43f5e] text-white rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Book Now</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </>
          )}

          {step === 'success' && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <CheckCircle className="text-white" size={40} />
              </div>
              <h3 className="text-3xl text-[#111827] mb-3">Request Submitted!</h3>
              <p className="text-gray-600 mb-2">We've received your availability preferences for Dr. {doctor.name}.</p>
              <p className="text-gray-600 mb-6">Check the <span className="font-medium text-[#111827]">Appointments tab</span> for updates. You'll see an in-app notification once your appointment is confirmed.</p>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mx-auto max-w-md">
                <p className="text-sm text-blue-900">
                  <span className="font-medium">Next steps:</span> Once confirmed, you'll complete payment in the Appointments section.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}