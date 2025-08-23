import React from 'react';
import { MapPin, Phone, Mail, Github } from 'lucide-react';
// import avatar from '../assets/AnhCV1.jpg';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-8 px-6 rounded-t-lg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2 tracking-wide">TRUONG NGUYEN THANH</h1>
          <h2 className="text-xl font-light mb-6 text-blue-100">Fullstack Developer</h2>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>73 Thanh Loan Street, Ward 5, District 8, Ho Chi Minh City</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(+84) 981-907-754</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>honguyententhanhtruong@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <a href="https://github.com/truong-backend" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-blue-200 transition-colors">
                github.com/truong-backend
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
