import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 'portraits',
      title: 'Portrait Photography',
      image: '/pictures/_DSC6756.jpg',
      description: 'Professional portrait sessions tailored to capture your unique personality and style.',
      packages: [
        {
          name: 'Classic Portrait',
          price: '$99.00',
          features: [
            '1 hour session',
            '1 outfit limit',
            'Guaranteed 10-15 edited photos',
            'Online gallery access'
          ]
        },
        {
          name: 'Premium Portrait',
          price: '$199.00',
          features: [
            '2 hour session',
            '2 outfit limit',
            'Guaranteed 20-30 edited photos',
            'Online gallery access',
            'Professional retouching'
          ]
        }
      ]
    },
    {
      id: 'maternity',
      title: 'Maternity Photography',
      image: '/pictures/_DSC4696 (2).jpg',
      description: 'Beautiful maternity sessions to capture this special time in your life.',
      packages: [
        {
          name: 'Maternity Package',
          price: '$299.00',
          features: [
            '2-3 hour session',
            '2-3 outfits',
            'Guaranteed 60-80 photo gallery',
            'Indoor and outdoor locations',
            'Professional retouching',
            'Online gallery access'
          ]
        }
      ]
    },
    {
      id: 'events',
      title: 'Event Photography',
      image: '/pictures/IMG_20241023_225618027_HDR.jpg',
      description: 'Comprehensive coverage for your special events and celebrations.',
      packages: [
        {
          name: 'Event Package',
          price: '$499.00 and Up',
          features: [
            '6 hours of photo coverage',
            'Consultation',
            'Guaranteed 200-300 photo gallery',
            'Professional editing',
            'Online gallery access',
            'High-resolution digital downloads'
          ]
        }
      ]
    },
    {
      id: 'wedding',
      title: 'Wedding Photography',
      image: '/pictures/_DSC7929.jpg',
      description: 'Comprehensive wedding photography packages designed to capture every precious moment of your special day.',
      packages: [
        {
          name: 'All-inclusive Package',
          price: '$1,500',
          features: [
            'Consultation for customized shot list and timeline',
            '8 hours of event coverage (1000 photos)',
            'Online gallery access to share with family and friends',
            'Flexible coverage options including rehearsal dinner',
            'Engagement photo session (2 hours)',
            '10-20 finalized engagement photos',
            'Up to 2 outfit changes for engagement session'
          ]
        },
        {
          name: 'Princess Package',
          price: '$900',
          features: [
            'Consultation for customized shot list and timeline',
            '8 hours of event coverage (800 photos)',
            'Online gallery access to share with family and friends',
            'Engagement photo session (1 hour)',
            '10 finalized engagement photos',
            '1 outfit for engagement session'
          ]
        },
        {
          name: 'Essentials Package',
          price: '$400',
          features: [
            'Consultation for customized shot list and timeline',
            '8 hours of event coverage (600 photos)',
            'Online gallery access to share with family and friends'
          ]
        }
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3760585/pexels-photo-3760585.jpeg?auto=compress&cs=tinysrgb&w=1920')" }}
        ></div>
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">Photography Services</h1>
            <p className="text-lg max-w-xl">
              Professional photography packages tailored to capture your special moments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl mb-6">Capturing Your Story</h2>
            <p className="text-neutral-700 mb-4 leading-relaxed">
              From intimate portraits to grand celebrations, I offer a range of photography services 
              designed to capture your unique moments with authenticity and artistry.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              Each package is thoughtfully crafted to provide you with beautiful, lasting memories 
              that you'll treasure for years to come.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    className="order-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="font-serif text-3xl mb-4">{service.title}</h2>
                    <p className="text-neutral-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-6 mt-8">
                      {service.packages.map((pkg, pkgIndex) => (
                        <motion.div 
                          key={pkgIndex}
                          className="border border-neutral-200 p-6 bg-white"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: pkgIndex * 0.1 }}
                        >
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="font-serif text-xl">{pkg.name}</h3>
                            <p className="text-xl font-medium">{pkg.price}</p>
                          </div>
                          <ul className="space-y-2">
                            {pkg.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start">
                                <svg className="w-4 h-4 text-neutral-900 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span className="text-neutral-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-6">
                            <Link 
                              to="/booking" 
                              className="inline-block w-full py-3 bg-neutral-900 text-white text-center hover:bg-neutral-800 transition-colors"
                            >
                              Book This Package
                            </Link>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="order-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="h-[500px] overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">Ready to book your session?</h2>
            <p className="text-neutral-300 max-w-2xl mx-auto mb-8">
              Let's work together to create beautiful photographs that you'll cherish for a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/booking" 
                className="inline-block px-8 py-3 bg-white text-neutral-900 hover:bg-neutral-200 transition-colors font-medium"
              >
                Book Now
              </Link>
              <Link 
                to="/contact" 
                className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-neutral-900 transition-colors font-medium"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;