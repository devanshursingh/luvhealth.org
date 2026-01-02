import { useState } from 'react';
import { X, CreditCard, Lock, CheckCircle, AlertCircle } from 'lucide-react';
import { Booking } from '../types';

interface PaymentModalProps {
  booking: Booking;
  onClose: () => void;
  onPaymentComplete: (bookingId: string) => void;
}

export function PaymentModal({ booking, onClose, onPaymentComplete }: PaymentModalProps) {
  const [step, setStep] = useState<'payment' | 'processing' | 'success'>('payment');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [billingZip, setBillingZip] = useState('');
  const [saveCard, setSaveCard] = useState(false);

  const formatCardNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const groups = numbers.match(/.{1,4}/g);
    return groups ? groups.join(' ') : numbers;
  };

  const formatExpiryDate = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length >= 2) {
      return numbers.slice(0, 2) + '/' + numbers.slice(2, 4);
    }
    return numbers;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    if (formatted.replace(/\s/g, '').length <= 16) {
      setCardNumber(formatted);
    }
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value);
    if (formatted.replace(/\D/g, '').length <= 4) {
      setExpiryDate(formatted);
    }
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numbers = e.target.value.replace(/\D/g, '');
    if (numbers.length <= 4) {
      setCvv(numbers);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate payment processing
    setStep('processing');
    
    setTimeout(() => {
      setStep('success');
      setTimeout(() => {
        onPaymentComplete(booking.id);
        onClose();
      }, 2000);
    }, 2000);
  };

  const isFormValid = 
    cardNumber.replace(/\s/g, '').length === 16 &&
    expiryDate.length === 5 &&
    cvv.length >= 3 &&
    cardName.trim() !== '' &&
    billingZip.length >= 5;

  const confirmedSlot = booking.confirmedSlot || booking.selectedSlots[0];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div>
            <h2 className="text-2xl text-[#111827]">Complete Payment</h2>
            <p className="text-sm text-gray-600 mt-1">Secure checkout powered by Stripe</p>
          </div>
          {step === 'payment' && (
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
          )}
        </div>

        <div className="p-6">
          {step === 'payment' && (
            <>
              {/* Appointment Summary */}
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 mb-6">
                <h3 className="text-sm text-gray-600 mb-2">Appointment Summary</h3>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-lg text-[#111827]">{booking.doctorName}</p>
                    <p className="text-sm text-gray-600">{booking.doctorSpecialty}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm pt-3 border-t border-rose-200 mt-3">
                  <span className="text-gray-600">
                    {new Date(confirmedSlot.date + 'T00:00:00').toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })} at {confirmedSlot.time}
                  </span>
                </div>
              </div>

              {/* Payment Form */}
              <form onSubmit={handleSubmit}>
                <div className="space-y-4 mb-6">
                  {/* Card Number */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Card Number</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f43f5e] transition-colors"
                      />
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                  </div>

                  {/* Expiry and CVV */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={expiryDate}
                        onChange={handleExpiryChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f43f5e] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        value={cvv}
                        onChange={handleCvvChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f43f5e] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Cardholder Name */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Cardholder Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f43f5e] transition-colors"
                    />
                  </div>

                  {/* Billing Zip */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Billing ZIP Code</label>
                    <input
                      type="text"
                      placeholder="90210"
                      value={billingZip}
                      onChange={(e) => {
                        const numbers = e.target.value.replace(/\D/g, '');
                        if (numbers.length <= 5) {
                          setBillingZip(numbers);
                        }
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f43f5e] transition-colors"
                    />
                  </div>

                  {/* Save Card Checkbox */}
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="saveCard"
                      checked={saveCard}
                      onChange={(e) => setSaveCard(e.target.checked)}
                      className="w-4 h-4 text-[#f43f5e] border-gray-300 rounded focus:ring-[#f43f5e]"
                    />
                    <label htmlFor="saveCard" className="text-sm text-gray-700">
                      Save card for future appointments
                    </label>
                  </div>
                </div>

                {/* Security Notice */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                  <Lock className="text-gray-600 flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-sm text-gray-700">
                      Your payment information is encrypted and secure. We use Stripe for secure payment processing.
                    </p>
                  </div>
                </div>

                {/* Amount and Pay Button */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-4 border-t border-gray-200">
                    <span className="text-lg text-gray-600">Total Amount</span>
                    <span className="text-3xl text-[#111827]">${booking.totalAmount}</span>
                  </div>

                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className="w-full px-6 py-4 bg-[#f43f5e] text-white rounded-lg hover:bg-[#e11d48] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Lock size={20} />
                    <span>Pay ${booking.totalAmount}</span>
                  </button>

                  <p className="text-xs text-center text-gray-500">
                    By confirming payment, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </form>
            </>
          )}

          {step === 'processing' && (
            <div className="text-center py-16">
              <div className="w-20 h-20 border-4 border-[#f43f5e] border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
              <h3 className="text-2xl text-[#111827] mb-2">Processing Payment...</h3>
              <p className="text-gray-600">Please wait while we securely process your payment</p>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <CheckCircle className="text-white" size={40} />
              </div>
              <h3 className="text-3xl text-[#111827] mb-3">Payment Successful!</h3>
              <p className="text-gray-600 mb-2">Your appointment is fully confirmed and paid.</p>
              <p className="text-sm text-gray-500">You'll receive a confirmation email shortly.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
