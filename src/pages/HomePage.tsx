import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Gallery from '../components/Gallery';
import TestimonialSlider from '../components/TestimonialSlider';

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('/Rhiley/pictures/reighandivorce2.jpg')" }}
        ></div>

        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <motion.div 
            className="max-w-2xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
              Capturing life's <br />beautiful moments
            </h1>
            <p className="text-lg md:text-xl font-light max-w-lg mb-8">
              Professional photography services for weddings, portraits, family sessions and special events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/gallery" className="inline-block px-8 py-3 bg-white text-neutral-900 hover:bg-neutral-200 transition-colors font-medium">
                View Portfolio
              </Link>
              <Link to="/booking" className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-neutral-900 transition-colors font-medium">
                Book a Session
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">Meet Rhiley Boutron</h2>
                <p className="text-neutral-700 mb-6 leading-relaxed">
                  I've been in the photography world for almost ten years now. It hasn't always been a straight path - Life has a way of pulling us in unexpected directions.
                </p>
                <p className="text-neutral-700 mb-8 leading-relaxed">
                  My work is all about capturing the real stuff: The quiet in-between moments, the belly laughs, the soft looks, the chaos and calm.
                </p>
                <Link to="/about" className="inline-flex items-center text-neutral-900 font-medium hover:text-neutral-700 transition-colors">
                  Learn more about me
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            </div>
            <div className="order-1 md:order-2">
              <motion.div 
                className="relative h-[500px] w-full overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="/Rhiley/pictures/profile.jpg" 
                  alt="Rhiley Boutron Portrait" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">Portfolio Highlights</h2>
              <p className="text-neutral-700 max-w-2xl mx-auto">
                A glimpse into my diverse portfolio spanning weddings, portraits, family sessions, and special events.
              </p>
            </motion.div>
          </div>
          <Gallery preview={true} />
          <div className="text-center mt-12">
            <Link to="/gallery" className="inline-block px-8 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors font-medium">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">Photography Services</h2>
              <p className="text-neutral-700 max-w-2xl mx-auto">
                Tailored photography experiences designed to capture your unique story.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Weddings",
                img: "/pictures/wedding.jpg",
                description: "Capturing your special day with elegance and emotion."
              },
              {
                title: "Portraits",
                image: "/public/pictures/_DSC6756.jpg",
                description: "Professional portraits that showcase your personality."
              },
              {
                title: "Family",
                image: "/pictures/_DSC5173.jpg",
                description: "Preserving family moments and connections for generations."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white shadow-sm overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl mb-2">{service.title}</h3>
                  <p className="text-neutral-700 mb-4">{service.description}</p>
                  <Link to="/services" className="inline-flex items-center text-neutral-900 font-medium hover:text-neutral-700 transition-colors">
                    Learn more
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="inline-block px-8 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors font-medium">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">Client Testimonials</h2>
              <p className="text-neutral-700 max-w-2xl mx-auto">
                What my clients are saying about their photography experience.
              </p>
            </motion.div>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">Ready to capture your story?</h2>
            <p className="text-neutral-300 max-w-2xl mx-auto mb-8">
              Let's create beautiful memories together. Book your photography session today.
            </p>
            <Link to="/booking" className="inline-block px-8 py-3 bg-white text-neutral-900 hover:bg-neutral-200 transition-colors font-medium mx-2 mb-4">
              Book a Session
            </Link>
            <Link to="/contact" className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-neutral-900 transition-colors font-medium mx-2 mb-4">
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
