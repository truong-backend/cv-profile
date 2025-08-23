import React from 'react';
import { Award } from 'lucide-react';
const Awards = () => {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <Award className="w-6 h-6 text-yellow-600" />
        <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-yellow-600 pb-1">AWARDS & ACHIEVEMENTS</h3>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <div className="bg-yellow-100 p-2 rounded-full">
              <Award className="w-4 h-4 text-yellow-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">2021-2022: 1st Place, "Promising Coder"</p>
              <p className="text-sm text-gray-600">Faculty of IT, STU</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="bg-green-100 p-2 rounded-full">
              <Award className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">2022-2023: "Excellent Academic and Training Performance"</p>
              <p className="text-sm text-gray-600">Good rating</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <Award className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">2023-2024: "Excellent Academic and Training Performance"</p>
              <p className="text-sm text-gray-600">Good rating</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Awards;
