import { Calendar, Clock, DollarSign, MapPin, Phone, Mail, AlertCircle, CheckCircle } from 'lucide-react';
import { Booking } from '../types';
import { useState } from 'react';
import { PaymentModal } from './PaymentModal';

interface PatientDashboardProps {
  bookings: Booking[];
  onMarkAsRead?: (bookingId: string) => void;
  onPaymentComplete?: (bookingId: string) => void;
}

export function PatientDashboard({ bookings, onMarkAsRead, onPaymentComplete }: PatientDashboardProps) {
  const [selectedBookingForPayment, setSelectedBookingForPayment] = useState<Booking | null>(null);
  const pendingBookings = bookings.filter(b => b.status === 'pending');
  const upcomingBookings = bookings.filter(b => b.status === 'confirmed');
  const pastBookings = bookings.filter(b => b.status === 'completed');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-[#111827] mb-2">My Appointments</h1>
          <p className="text-gray-600">Manage your healthcare appointments</p>
        </div>

        {bookings.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-gray-400" size={24} />
            </div>
            <h3 className="text-lg text-[#111827] mb-2">No appointments yet</h3>
            <p className="text-gray-600 mb-6">Book your first appointment to get started</p>
            <button className="px-6 py-2.5 bg-[#f43f5e] text-white rounded-lg hover:bg-[#e11d48] transition-colors">
              Find a Doctor
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Pending Appointments */}
            {pendingBookings.length > 0 && (
              <div>
                <h2 className="text-xl text-[#111827] mb-4">Pending Confirmation</h2>
                
                <div className="space-y-4">
                  {pendingBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="flex flex-col lg:flex-row gap-6">
                          {/* Main Info */}
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="text-xl text-[#111827] mb-1">{booking.doctorName}</h3>
                                <p className="text-gray-600 mb-2">{booking.doctorSpecialty}</p>
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-yellow-50 text-yellow-700 rounded-md text-sm">
                                  <AlertCircle size={14} />
                                  Awaiting Confirmation
                                </span>
                              </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4 flex items-start gap-3">
                              <AlertCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                              <div>
                                <p className="text-sm text-blue-900 mb-1">
                                  <span className="font-medium">Your request is being processed.</span>
                                </p>
                                <p className="text-xs text-blue-800">
                                  We'll notify you here once Dr. {booking.doctorName.split(' ')[1]} confirms one of your preferred time slots.
                                </p>
                              </div>
                            </div>

                            {/* Your Time Preferences */}
                            <div className="mb-4">
                              <p className="text-sm text-gray-600 mb-3">Your time preferences ({booking.selectedSlots.length} slots):</p>
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                {booking.selectedSlots.map((slot, index) => (
                                  <div key={slot.id} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg text-xs">
                                    <span className="w-5 h-5 bg-[#f43f5e] text-white rounded-full flex items-center justify-center flex-shrink-0">
                                      {index + 1}
                                    </span>
                                    <div>
                                      <p className="text-[#111827]">
                                        {new Date(slot.date + 'T00:00:00').toLocaleDateString('en-US', {
                                          month: 'short',
                                          day: 'numeric',
                                        })}
                                      </p>
                                      <p className="text-gray-600">{slot.time}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-3 bg-rose-50 border border-rose-200 p-3 rounded-lg">
                              <div className="w-10 h-10 bg-white border border-rose-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                <DollarSign className="text-[#f43f5e]" size={18} />
                              </div>
                              <div>
                                <p className="text-xs text-gray-600">Estimated Cost (payment after confirmation)</p>
                                <div className="flex items-baseline gap-2">
                                  <span className="text-xs text-gray-500">As low as</span>
                                  <span className="text-lg text-[#111827]">${booking.totalAmount}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Upcoming Appointments */}
            {upcomingBookings.length > 0 && (
              <div>
                <h2 className="text-xl text-[#111827] mb-4">Upcoming</h2>
                
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => {
                    const confirmedSlot = booking.confirmedSlot || booking.selectedSlots[0];
                    return (
                      <div
                        key={booking.id}
                        className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all overflow-hidden relative"
                      >
                        {booking.isNewlyConfirmed && (
                          <div className="absolute top-4 right-4 z-10">
                            <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1.5 shadow-lg animate-pulse">
                              <CheckCircle size={14} />
                              <span>Just Confirmed!</span>
                            </div>
                          </div>
                        )}
                        <div className="p-6">
                          <div className="flex flex-col lg:flex-row gap-6">
                            {/* Main Info */}
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-4">
                                <div>
                                  <h3 className="text-xl text-[#111827] mb-1">{booking.doctorName}</h3>
                                  <p className="text-gray-600 mb-2">{booking.doctorSpecialty}</p>
                                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-50 text-green-700 rounded-md text-sm">
                                    <CheckCircle size={14} />
                                    Confirmed
                                  </span>
                                </div>
                              </div>

                              {booking.isNewlyConfirmed && (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4 flex items-start gap-3">
                                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                                  <div>
                                    <p className="text-sm text-green-900 mb-1">
                                      <span className="font-medium">Your appointment is confirmed!</span>
                                    </p>
                                    <p className="text-xs text-green-800">
                                      Dr. {booking.doctorName.split(' ')[1]} confirmed your appointment. Complete payment below to finalize.
                                    </p>
                                  </div>
                                </div>
                              )}

                              {/* Appointment Details */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Calendar className="text-[#f43f5e]" size={18} />
                                  </div>
                                  <div>
                                    <p className="text-xs text-gray-500">Confirmed Date & Time</p>
                                    <p className="text-sm text-[#111827]">
                                      {new Date(confirmedSlot.date + 'T00:00:00').toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric',
                                      })}
                                    </p>
                                    <p className="text-sm text-[#111827]">{confirmedSlot.time}</p>
                                  </div>
                                </div>
                                
                                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <DollarSign className="text-green-600" size={18} />
                                  </div>
                                  <div>
                                    <p className="text-xs text-gray-500">
                                      {booking.paymentStatus === 'paid' ? 'Paid' : 'Payment Due'}
                                    </p>
                                    <p className="text-xl text-[#111827]">${booking.totalAmount}</p>
                                  </div>
                                </div>
                              </div>

                              {/* Payment Action */}
                              {booking.paymentStatus === 'pending' && (
                                <div className="mb-4">
                                  <button
                                    className="w-full px-6 py-3 bg-[#f43f5e] text-white rounded-lg hover:bg-[#e11d48] transition-colors flex items-center justify-center gap-2"
                                    onClick={() => setSelectedBookingForPayment(booking)}
                                  >
                                    <DollarSign size={18} />
                                    <span>Complete Payment - ${booking.totalAmount}</span>
                                  </button>
                                </div>
                              )}

                              {/* Contact Options */}
                              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                                <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-gray-50 text-gray-700 rounded-md hover:bg-gray-100 transition-colors border border-gray-200">
                                  <MapPin size={14} />
                                  <span>Directions</span>
                                </button>
                                <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-gray-50 text-gray-700 rounded-md hover:bg-gray-100 transition-colors border border-gray-200">
                                  <Phone size={14} />
                                  <span>Call</span>
                                </button>
                                <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-gray-50 text-gray-700 rounded-md hover:bg-gray-100 transition-colors border border-gray-200">
                                  <Mail size={14} />
                                  <span>Message</span>
                                </button>
                                <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 rounded-md hover:bg-gray-50 transition-colors border border-gray-200">
                                  <span>Reschedule</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Past Appointments */}
            {pastBookings.length > 0 && (
              <div>
                <h2 className="text-xl text-[#111827] mb-4">Past</h2>
                
                <div className="space-y-3">
                  {pastBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg text-[#111827] mb-1">{booking.doctorName}</h3>
                          <p className="text-sm text-gray-600 mb-2">{booking.doctorSpecialty}</p>
                          <div className="flex items-center gap-3 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar size={12} />
                              {new Date(booking.selectedSlots[0].date + 'T00:00:00').toLocaleDateString()}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={12} />
                              {booking.selectedSlots[0].time}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-xs text-gray-500">Paid</p>
                            <p className="text-lg text-[#111827]">${booking.totalAmount}</p>
                          </div>
                          <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            Review
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {selectedBookingForPayment && (
        <PaymentModal
          booking={selectedBookingForPayment}
          onClose={() => setSelectedBookingForPayment(null)}
          onPaymentComplete={onPaymentComplete}
        />
      )}
    </div>
  );
}