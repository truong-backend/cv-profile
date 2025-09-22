import React from 'react';
import { Heart, BookOpen, Users, Code } from 'lucide-react';

const Interests = () => {
  const interests = [
    { icon: "🏸", text: "Badminton" },
    { icon: "🏐", text: "Volleyball" }, 
    { icon: "📚", text: "Technical Reading" },
    { icon: "🌐", text: "Open Source Contributions" }
  ];

  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <Heart className="w-6 h-6 text-red-600" />
        <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-red-600 pb-1">INTERESTS</h3>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border">
        {/* Interest Items */}
        <div className="flex flex-wrap gap-3 mb-6 justify-center">
          {interests.map((interest, index) => (
            <div key={index} className="flex items-center gap-2 bg-gradient-to-r from-red-50 to-pink-50 px-4 py-2 rounded-full border border-red-100">
              <span className="text-lg">{interest.icon}</span>
              <span className="text-gray-700 font-medium">{interest.text}</span>
            </div>
          ))}
        </div>
        
        {/* Motto */}
        <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg border-l-4 border-red-600">
          <div className="flex items-center justify-center gap-3">
            <Code className="w-6 h-6 text-red-600" />
            <p className="text-gray-700 text-center font-medium italic text-lg">
              "Code hard, learn continuously, sleep well, and repeat"
            </p>
            <Code className="w-6 h-6 text-red-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;