import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=1920')" }}
        ></div>
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">Get in Touch</h1>
            <p className="text-lg max-w-xl">
              Have questions or ready to book? I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl mb-6">Let's Connect</h2>
              <p className="text-neutral-700 mb-8">
                Whether you're interested in booking a session or just have a question, 
                I'm here to help. Reach out through any of these channels and I'll get 
                back to you as soon as possible.
              </p>
            </motion.div>
            
            <div className="space-y-8">
              <motion.div 
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-neutral-100 p-3 mr-4">
                  <Mail className="text-neutral-700" size={24} />
                </div>
                <a 
                  href="mailto:rhileyboutron@gmail.com" 
                  className="text-lg text-neutral-700 hover:text-neutral-900 transition-colors"
                >
                  rhileyboutron@gmail.com
                </a>
              </motion.div>

              <motion.div 
                className="flex flex-col items-center space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="font-serif text-xl">Social Media</h3>
                <div className="flex space-x-8">
                  <a 
                    href="https://instagram.com/Adventurephotographies" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center hover:text-neutral-600 transition-colors"
                  >
                    <Instagram size={24} className="mr-2" />
                    <span>@Adventurephotographies</span>
                  </a>
                  <a 
                    href="https://facebook.com/AdventurePhotographies" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center hover:text-neutral-600 transition-colors"
                  >
                    <Facebook size={24} className="mr-2" />
                    <span>Adventure Photographies</span>
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link 
                to="/booking" 
                className="inline-block px-8 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors font-medium"
              >
                Book a Session
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl font-light mb-4">Frequently Asked Questions</h2>
              <p className="text-neutral-700 max-w-2xl mx-auto">
                Quick answers to common questions about working with me.
              </p>
            </motion.div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How quickly do you respond to inquiries?",
                  answer: "I typically respond to all inquiries within 24-48 hours. For urgent matters, please feel free to email me directly."
                },
                {
                  question: "Do you travel for photoshoots?",
                  answer: "Yes! I'm available for travel throughout the area and beyond for special events and sessions. Travel fees may apply depending on the location."
                },
                {
                  question: "What is the booking process like?",
                  answer: "After our initial consultation, I'll create a custom proposal based on your needs. Once you're ready to proceed, a signed contract and retainer fee will secure your date on my calendar."
                },
                {
                  question: "Can I request specific poses or shots?",
                  answer: "Of course! Prior to your session, we'll discuss your vision and preferences. Feel free to share inspiration images or specific shots you'd like to capture during your session."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-white shadow-sm p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
                  <p className="text-neutral-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;