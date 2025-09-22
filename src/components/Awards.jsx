import React from 'react';
import { Award, Star, Trophy, BookOpen } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      icon: Trophy,
      title: "2021-2022: 1st Place, \"Promising Coder\"",
      description: "Faculty of IT, STU",
      color: "bg-yellow-100 text-yellow-600",
      iconBg: "bg-yellow-100"
    },
    {
      icon: Star,
      title: "2022-2023: \"Excellent Academic and Training Performance\"",
      description: "Good rating",
      color: "bg-green-100 text-green-600", 
      iconBg: "bg-green-100"
    },
    {
      icon: Star,
      title: "2023-2024: \"Excellent Academic and Training Performance\"",
      description: "Good rating",
      color: "bg-blue-100 text-blue-600",
      iconBg: "bg-blue-100"
    },
    {
      icon: BookOpen,
      title: "Academic Focus",
      description: "Strong performance in Data Structures, Algorithms, Database Systems, and Software Engineering",
      color: "bg-purple-100 text-purple-600",
      iconBg: "bg-purple-100"
    }
  ];

  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <Award className="w-6 h-6 text-yellow-600" />
        <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-yellow-600 pb-1">AWARDS & ACHIEVEMENTS</h3>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <ul className="space-y-4">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <li key={index} className="flex items-start gap-3">
                <div className={`${award.iconBg} p-2 rounded-full`}>
                  <Icon className={`w-4 h-4 ${award.color.split(' ')[1]}`} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800 mb-1">{award.title}</p>
                  <p className="text-sm text-gray-600">{award.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
        
        {/* Additional Strengths Section */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-blue-600" />
            Additional Strengths
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Problem-Solving Approach",
                description: "Logical thinking methodology, systematic debugging, and efficient algorithm implementation"
              },
              {
                title: "Team Collaboration", 
                description: "Experience with Git workflows, code reviews, and Agile development practices"
              },
              {
                title: "Learning Agility",
                description: "Quick adaptation to new technologies and frameworks, self-directed learning through documentation"
              },
              {
                title: "Code Quality",
                description: "Clean code practices, proper documentation, and maintainable software architecture"
              }
            ].map((strength, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium text-gray-800 mb-2">{strength.title}</h5>
                <p className="text-sm text-gray-600">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;