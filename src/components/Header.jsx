import React from 'react';
import { MapPin, Phone, Mail, Github, FileText } from 'lucide-react';
import avatar from '../resource/Image/AnhCV2.jpg';
import cvPdf from '../resource/PDF/NguyenThanhTruong.pdf';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-6 px-4 sm:px-6 relative">
      <div className="absolute top-3 right-4 sm:top-4 sm:right-6">
        <a
          href={cvPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 sm:gap-2 bg-white/15 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-lg font-medium hover:bg-white/25 transition-all text-xs sm:text-sm"
        >
          <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">Xem CV</span>
          <span className="sm:hidden">CV</span>
        </a>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <div className="flex-shrink-0">
            <img
              src={avatar}
              alt="Truong Nguyen Thanh"
              className="w-full h-auto max-w-[120px] sm:max-w-[140px] aspect-[3/4] rounded-xl shadow-lg border-2 border-white/30"
            />
          </div>
          
          <div className="flex-grow text-center">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 tracking-wide">
              TRUONG NGUYEN THANH
            </h1>
            <h2 className="text-base sm:text-lg font-light text-blue-100 mb-3 sm:mb-4">
              Fullstack Developer
            </h2>
            
            <div className="flex flex-col items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="text-center">District 12, Ho Chi Minh City</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>(+84) 981-907-754</span>
              </div>
              
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="break-all">honguyententhanhtruong@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <Github className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <a
                  href="https://github.com/truong-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition-colors break-all"
                >
                  github.com/truong-backend
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;