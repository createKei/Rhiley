import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Camera } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Camera size={20} />
              <span className="font-serif text-lg">RHILEY BOUTRON</span>
            </div>
            <p className="text-neutral-400 max-w-xs">
              Capturing life's precious moments with an artistic eye and timeless elegance.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com/Adventurephotographies" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/AdventurePhotographies" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:rhileyboutron@gmail.com" className="hover:text-neutral-300 transition-colors">
                <span className="text-sm">rhileyboutron@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="font-serif text-lg">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-neutral-400 hover:text-white transition-colors">Home</Link>
              <Link to="/gallery" className="text-neutral-400 hover:text-white transition-colors">Gallery</Link>
              <Link to="/about" className="text-neutral-400 hover:text-white transition-colors">About</Link>
              <Link to="/services" className="text-neutral-400 hover:text-white transition-colors">Services</Link>
              <Link to="/booking" className="text-neutral-400 hover:text-white transition-colors">Booking</Link>
              <Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="font-serif text-lg">Contact</h3>
            <p className="text-neutral-400">rhileyboutron@gmail.com</p>
            <div className="pt-2">
              <Link to="/booking" className="inline-block px-4 py-2 border border-white text-sm hover:bg-white hover:text-neutral-900 transition-colors">
                Book a Session
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-8 pt-8 text-sm text-neutral-500 flex flex-col md:flex-row justify-between">
          <p>&copy; {new Date().getFullYear()} Rhiley Boutron Photography. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;