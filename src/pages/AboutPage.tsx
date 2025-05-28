import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Baby, Flower2, Music, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3973468/pexels-photo-3973468.jpeg?auto=compress&cs=tinysrgb&w=1920')" }}
        ></div>
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">About Me</h1>
            <p className="text-lg max-w-xl">
              Get to know the person behind the lens and my passion for photography.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl mb-6">Hey there!</h2>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                I'm Rhiley, and I'm so glad you're here.
              </p>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                I've been in the photography world for almost ten years now. It hasn't always been a straight 
                path—life has a way of pulling us in unexpected directions—but no matter what, I've always 
                found my way back to photography. It's where I feel most like myself.
              </p>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                My work is all about capturing the real stuff: the quiet in-between moments, the belly laughs, 
                the soft looks, the chaos and calm. I specialize in portraits, weddings, and maternity, but 
                I'm always up for something new. If you've got an idea or something a little out of the box, 
                let's talk. If it feels right, we'll figure it out together.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Thanks for stopping by—I can't wait to hear your story.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="w-full h-[600px] relative z-10">
             <img 
              src="/pictures/profile.jpg" 
              alt="Rhiley Boutron" 
              className="w-full h-full object-cover"
  />
              </div>

              <div className="absolute w-full h-full border-2 border-neutral-900 top-6 left-6 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">My Approach</h2>
              <p className="text-neutral-700 max-w-2xl mx-auto">
                The many facets that shape my perspective and approach to photography.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                icon: <Camera className="h-10 w-10 text-neutral-900" />,
                title: "A Photographer",
                description: "Capturing life's precious moments through an artistic lens."
              },
              {
                icon: <Baby className="h-10 w-10 text-neutral-900" />,
                title: "A Mom",
                description: "Understanding the beauty in everyday family moments."
              },
              {
                icon: <Flower2 className="h-10 w-10 text-neutral-900" />,
                title: "A Cultivator",
                description: "Nurturing growth and beauty in every project."
              },
              {
                icon: <Music className="h-10 w-10 text-neutral-900" />,
                title: "A Musician",
                description: "Finding rhythm and harmony in visual storytelling."
              },
              {
                icon: <Briefcase className="h-10 w-10 text-neutral-900" />,
                title: "An Entrepreneur",
                description: "Building meaningful connections through business."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                <p className="text-neutral-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">Let's Create Something Beautiful</h2>
            <p className="text-neutral-700 max-w-2xl mx-auto mb-8">
              Ready to capture your special moments? I'd love to hear about your vision and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/booking" 
                className="inline-block px-8 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors font-medium"
              >
                Book a Session
              </Link>
              <Link 
                to="/contact" 
                className="inline-block px-8 py-3 border border-neutral-900 text-neutral-900 hover:bg-neutral-100 transition-colors font-medium"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;