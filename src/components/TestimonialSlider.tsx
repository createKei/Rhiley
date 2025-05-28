import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Wedding Client',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: "Rhiley captured our wedding day beautifully. Her attention to detail and ability to capture genuine emotions resulted in photos that we'll treasure forever. Highly recommend!"
  },
  {
    id: 2,
    name: 'Michael Roberts',
    role: 'Family Portrait Session',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Working with Rhiley for our family portraits was a fantastic experience. She was great with our kids and managed to capture beautiful candid moments that truly reflect our family dynamic.'
  },
  {
    id: 3,
    name: 'Jennifer Williams',
    role: 'Corporate Event',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Rhiley photographed our company gala, and the results exceeded our expectations. Professional, unobtrusive, and delivered stunning photos that perfectly captured the essence of our event.'
  }
];

const TestimonialSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  useEffect(() => {
    let interval: number;
    
    if (autoplay) {
      interval = window.setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [current, autoplay]);

  return (
    <div 
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-neutral-50 p-8 md:p-12 shadow-sm rounded-sm"
        >
          <Quote size={40} className="text-neutral-300 mb-6" />
          <p className="text-neutral-700 text-lg mb-8 leading-relaxed">
            {testimonials[current].text}
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img 
                src={testimonials[current].image} 
                alt={testimonials[current].name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-neutral-900">{testimonials[current].name}</p>
              <p className="text-neutral-600 text-sm">{testimonials[current].role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current ? 'bg-neutral-900' : 'bg-neutral-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-neutral-900 hover:bg-neutral-100 transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-neutral-900 hover:bg-neutral-100 transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default TestimonialSlider;