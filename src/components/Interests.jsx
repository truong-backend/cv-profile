import React from 'react';
import { Heart } from 'lucide-react';
const Interests = () => {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <Heart className="w-6 h-6 text-red-600" />
        <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-red-600 pb-1">INTERESTS</h3>
      </div>
      <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg border-l-4 border-red-600">
        <p className="text-gray-700 text-center font-medium italic text-lg">
          "Code hard, sleep well and repeat"
        </p>
      </div>
    </section>
  );
};

export default Interests;
