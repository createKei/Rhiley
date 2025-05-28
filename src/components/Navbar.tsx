import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center space-x-2">
            <Camera size={24} className={scrolled ? 'text-neutral-900' : 'text-white'} />
            <span className={`font-serif text-xl ${scrolled ? 'text-neutral-900' : 'text-white'}`}>
              RHILEY BOUTRON
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Gallery', 'About', 'Services', 'Booking', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : item.toLowerCase()}
                className={({ isActive }) => `
                  font-light tracking-wide hover:opacity-80 transition-opacity
                  ${scrolled ? 'text-neutral-900' : 'text-white'}
                  ${isActive ? 'font-medium' : ''}
                `}
              >
                {item}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${scrolled ? 'text-neutral-900' : 'text-white'}`}
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg absolute w-full"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {['Home', 'Gallery', 'About', 'Services', 'Booking', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : item.toLowerCase()}
                className={({ isActive }) => `
                  py-2 px-4 font-light tracking-wide text-neutral-900
                  ${isActive ? 'font-medium bg-neutral-100' : ''}
                `}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;