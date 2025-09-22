import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <GraduationCap className="w-6 h-6 text-green-600" />
        <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-green-600 pb-1">EDUCATION</h3>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <div className="mb-4">
          <div className="flex justify-between items-start flex-wrap mb-2">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">Saigon University of Technology</h4>
              <p className="text-gray-600 mb-1">Faculty of Information Technology</p>
              <p className="text-sm text-gray-500">2021 - 2025 | Ho Chi Minh City, Vietnam</p>
            </div>
            <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
              <Award className="w-4 h-4 text-green-600" />
              <span className="text-green-800 font-semibold text-sm">GPA: 8.22/10</span>
            </div>
          </div>
          <p className="text-gray-700 font-medium mb-3">Bachelor of Information Technology</p>
        </div>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
            <span className="text-gray-700">Research Interest: Web Development, Frontend and Backend Programming</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
            <span className="text-gray-700">Web Applications: Responsive Design, Database Management, API Integration</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;