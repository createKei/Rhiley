import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { Calendar, Clock, Users, Camera } from 'lucide-react';

const BookingPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(packageName);
  };

  const handleNextStep = () => {
    setStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const handlePrevStep = () => {
    setStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-booking-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          formData,
          selectedDate,
          selectedPackage
        }),
      });

      let data;
      try {
        const text = await response.text();
        data = text ? JSON.parse(text) : {};
      } catch (parseError) {
        throw new Error('Invalid response from server');
      }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit booking');
      }

      setSubmitted(true);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Booking submission error:', error);
      setError(error instanceof Error ? error.message : 'Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const packages = [
    {
      id: 'wedding-all-inclusive',
      name: 'Wedding All-inclusive Package',
      category: 'Wedding',
      price: '$1,500',
      description: '8 hours of wedding coverage with engagement session',
      features: [
        'Consultation for customized shot list and timeline',
        '8 hours day of event (1000 photos)',
        'Online access to share with family and friends',
        'Flexible coverage options including rehearsal dinner',
        'Engagement photo session (2 hours)',
        '10-20 finalized engagement photos',
        'Up to 2 outfits for engagement'
      ]
    },
    {
      id: 'wedding-princess',
      name: 'Wedding Princess Package',
      category: 'Wedding',
      price: '$900',
      description: '8 hours of wedding coverage with basic engagement session',
      features: [
        'Consultation for customized shot list and timeline',
        '8 hours day of event (800 photos)',
        'Online access to share with family and friends',
        'Engagement photo session (1 hour)',
        '10 finalized engagement photos',
        '1 outfit for engagement'
      ]
    },
    {
      id: 'wedding-essentials',
      name: 'Wedding Essentials Package',
      category: 'Wedding',
      price: '$400',
      description: '8 hours of wedding coverage',
      features: [
        'Consultation for customized shot list and timeline',
        '8 hours day of event (600 photos)',
        'Online access to share with family and friends'
      ]
    },
    {
      id: 'portrait-classic',
      name: 'Classic Portrait Package',
      category: 'Portrait',
      price: '$99',
      description: 'Basic portrait session',
      features: [
        '1 hour session',
        '1 outfit limit',
        'Guaranteed 10-15 edited photos'
      ]
    },
    {
      id: 'portrait-premium',
      name: 'Premium Portrait Package',
      category: 'Portrait',
      price: '$199',
      description: 'Extended portrait session',
      features: [
        '2 hour session',
        '2 outfit limit',
        'Guaranteed 20-30 edited photos'
      ]
    },
    {
      id: 'maternity',
      name: 'Maternity Portrait Package',
      category: 'Maternity',
      price: '$299',
      description: 'Comprehensive maternity session',
      features: [
        '2-3 hour session',
        '2-3 outfits',
        'Guaranteed 60-80 photo gallery'
      ]
    },
    {
      id: 'events',
      name: 'Event Photography Package',
      category: 'Events',
      price: '$499',
      description: 'Professional event coverage',
      features: [
        '6 hours of photo coverage',
        'Consultation',
        'Guaranteed 200-300 photo gallery'
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=1920')" }}
        ></div>
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">Book a Session</h1>
            <p className="text-lg max-w-xl">
              {!submitted ? 'Schedule your photography session in a few simple steps.' : 'Thank you for your booking request!'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          {error && (
            <motion.div 
              className="max-w-2xl mx-auto mb-8 bg-red-50 border border-red-200 p-4 text-red-700 rounded"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="font-medium">Error submitting booking</p>
              <p className="text-sm">{error}</p>
            </motion.div>
          )}

          {submitted ? (
            <motion.div 
              className="max-w-2xl mx-auto text-center bg-neutral-50 p-10 shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl mb-6 text-green-600 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-20 h-20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="font-serif text-3xl mb-4">Booking Request Received!</h2>
              <p className="text-neutral-700 mb-6">
                Thank you for your booking request, {formData.name}. I'll review your details and get back to you 
                within 24-48 hours to confirm your session and discuss any additional details.
              </p>
              <p className="text-neutral-700 mb-8">
                A confirmation email has been sent to {formData.email} with a summary of your request.
              </p>
              <p className="text-neutral-700 mb-6">
                <strong>Session Details:</strong><br />
                Date: {selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'Not specified'}<br />
                Package: {selectedPackage}<br />
              </p>
              <button 
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                  setSelectedDate(null);
                  setSelectedPackage('');
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                  });
                }}
                className="inline-block px-8 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors font-medium"
              >
                Book Another Session
              </button>
            </motion.div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-12">
                <div className="hidden md:flex w-full max-w-xs">
                  <div className={`w-1/3 h-1 ${step > 1 ? 'bg-neutral-900' : 'bg-neutral-300'}`}></div>
                  <div className={`w-1/3 h-1 ${step > 2 ? 'bg-neutral-900' : 'bg-neutral-300'}`}></div>
                  <div className={`w-1/3 h-1 ${step > 3 ? 'bg-neutral-900' : 'bg-neutral-300'}`}></div>
                </div>
                <div className="text-center w-full md:w-auto">
                  <span className="inline-block w-8 h-8 bg-neutral-900 text-white rounded-full text-sm flex items-center justify-center mr-2">
                    {step}
                  </span>
                  <span className="font-medium">
                    {step === 1 && 'Select a Package'}
                    {step === 2 && 'Choose a Date'}
                    {step === 3 && 'Your Details'}
                    {step === 4 && 'Confirm Booking'}
                  </span>
                </div>
                <div className="hidden md:block w-full max-w-xs"></div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Select Package */}
                {step === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="font-serif text-2xl mb-6 text-center">Select Your Photography Package</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {packages.map((pkg) => (
                        <div 
                          key={pkg.id} 
                          className={`border p-6 cursor-pointer transition-all ${
                            selectedPackage === pkg.name 
                              ? 'border-neutral-900 bg-neutral-50' 
                              : 'border-neutral-200 hover:border-neutral-400'
                          }`}
                          onClick={() => handlePackageSelect(pkg.name)}
                        >
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="font-medium text-lg">{pkg.name}</h3>
                              <p className="text-sm text-neutral-600">{pkg.category}</p>
                            </div>
                            <div className="text-lg font-medium">{pkg.price}</div>
                          </div>
                          <p className="text-neutral-700 mb-4">{pkg.description}</p>
                          <ul className="space-y-2 mb-4">
                            {pkg.features.map((feature, index) => (
                              <li key={index} className="flex items-start text-sm">
                                <svg className="w-4 h-4 text-neutral-900 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="text-neutral-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-center">
                            <div className={`w-4 h-4 rounded-full border ${
                              selectedPackage === pkg.name 
                                ? 'border-neutral-900 bg-neutral-900' 
                                : 'border-neutral-400'
                            }`}></div>
                            <span className="ml-2 text-sm">
                              {selectedPackage === pkg.name ? 'Selected' : 'Select this package'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={handleNextStep}
                        disabled={!selectedPackage}
                        className={`px-8 py-3 ${
                          selectedPackage 
                            ? 'bg-neutral-900 text-white hover:bg-neutral-800' 
                            : 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                        } transition-colors font-medium`}
                      >
                        Continue to Date Selection
                      </button>
                    </div>
                  </motion.div>
                )}
                
                {/* Step 2: Select Date */}
                {step === 2 && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="font-serif text-2xl mb-6 text-center">Select Your Preferred Date</h2>
                    
                    <div className="bg-neutral-50 p-8 mb-8">
                      <div className="flex items-center mb-4">
                        <Calendar className="mr-2 text-neutral-700" size={20} />
                        <h3 className="font-medium">Choose a Date</h3>
                      </div>
                      
                      <div className="w-full">
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                          minDate={new Date()}
                          placeholderText="Select a date"
                          className="w-full p-3 border border-neutral-300 rounded-sm"
                          wrapperClassName="w-full"
                        />
                      </div>
                      
                      {selectedDate && (
                        <div className="mt-6 p-4 bg-white border border-neutral-200">
                          <p className="font-medium">Selected Date:</p>
                          <p className="text-neutral-700">{format(selectedDate, 'EEEE, MMMM d, yyyy')}</p>
                          <p className="text-sm text-neutral-600 mt-2">
                            * Exact time will be confirmed after submission based on availability.
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="px-6 py-3 border border-neutral-900 text-neutral-900 hover:bg-neutral-100 transition-colors font-medium"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNextStep}
                        disabled={!selectedDate}
                        className={`px-8 py-3 ${
                          selectedDate 
                            ? 'bg-neutral-900 text-white hover:bg-neutral-800' 
                            : 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                        } transition-colors font-medium`}
                      >
                        Continue to Your Details
                      </button>
                    </div>
                  </motion.div>
                )}
                
                {/* Step 3: Contact Information */}
                {step === 3 && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="font-serif text-2xl mb-6 text-center">Your Contact Information</h2>
                    
                    <div className="space-y-4 mb-8">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 border border-neutral-300 focus:border-neutral-900 focus:ring-0 transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 border border-neutral-300 focus:border-neutral-900 focus:ring-0 transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 border border-neutral-300 focus:border-neutral-900 focus:ring-0 transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                          Additional Information (Optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full p-3 border border-neutral-300 focus:border-neutral-900 focus:ring-0 transition-colors"
                          placeholder="Please share any specific requests, questions, or details about your session."
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="px-6 py-3 border border-neutral-900 text-neutral-900 hover:bg-neutral-100 transition-colors font-medium"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNextStep}
                        disabled={!formData.name || !formData.email || !formData.phone}
                        className={`px-8 py-3 ${
                          formData.name && formData.email && formData.phone
                            ? 'bg-neutral-900 text-white hover:bg-neutral-800' 
                            : 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                        } transition-colors font-medium`}
                      >
                        Review & Confirm
                      </button>
                    </div>
                  </motion.div>
                )}
                
                {/* Step 4: Review & Confirm */}
                {step === 4 && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="font-serif text-2xl mb-6 text-center">Review & Confirm Your Booking</h2>
                    
                    <div className="bg-neutral-50 p-8 mb-8">
                      <h3 className="font-medium text-lg mb-4">Booking Summary</h3>
                      
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <Camera className="mt-1 mr-3 text-neutral-700 flex-shrink-0" size={20} />
                          <div>
                            <p className="font-medium">Selected Package</p>
                            <p className="text-neutral-700">{selectedPackage}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Calendar className="mt-1 mr-3 text-neutral-700 flex-shrink-0" size={20} />
                          <div>
                            <p className="font-medium">Requested Date</p>
                            <p className="text-neutral-700">
                              {selectedDate ? format(selectedDate, 'EEEE, MMMM d, yyyy') : 'Not specified'}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Users className="mt-1 mr-3 text-neutral-700 flex-shrink-0" size={20} />
                          <div>
                            <p className="font-medium">Contact Information</p>
                            <p className="text-neutral-700">{formData.name}</p>
                            <p className="text-neutral-700">{formData.email}</p>
                            <p className="text-neutral-700">{formData.phone}</p>
                          </div>
                        </div>
                        
                        {formData.message && (
                          <div className="border-t border-neutral-200 pt-4">
                            <p className="font-medium mb-2">Additional Information</p>
                            <p className="text-neutral-700">{formData.message}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="bg-neutral-100 p-4 mb-8">
                      <p className="text-sm text-neutral-700">
                        By submitting this booking request, you acknowledge that this is not a confirmed booking. 
                        I will contact you within 24-48 hours to confirm availability and discuss any additional details.
                      </p>
                    </div>
                    
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="px-6 py-3 border border-neutral-900 text-neutral-900 hover:bg-neutral-100 transition-colors font-medium"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`px-8 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors font-medium ${
                          isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                        }`}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BookingPage;