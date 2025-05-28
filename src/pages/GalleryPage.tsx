import React from 'react';
import { motion } from 'framer-motion';
import Gallery from '../components/Gallery';

const GalleryPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('/public/pictures/_DSC2801.jpg')" }}
        ></div>
        
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">Portfolio Gallery</h1>
            <p className="text-lg max-w-xl">
              Explore a collection of my finest work across various photography styles and occasions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <Gallery />
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;