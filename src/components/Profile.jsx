import React from 'react';
import { User, Target, Zap, Database } from 'lucide-react';

const Profile = () => {
  const highlights = [
    {
      icon: Target,
      title: "Backend Specialist",
      description: "Java, Spring Boot, RESTful APIs, JWT Authentication"
    },
    {
      icon: Database,
      title: "Database Expert",
      description: "MySQL & SQL Server - Triggers, Procedures, Views"
    },
    {
      icon: Zap,
      title: "Full-Stack Experience",
      description: "Spring Boot + ReactJS, Real-time Communication"
    }
  ];

  return (
    <section className="mb-12">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
          <User className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">Profile</h3>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100/50 shadow-sm">
        {/* Profile Description */}
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed text-lg font-medium mb-6">
            Fresh graduate Backend Developer with deep understanding of Java, Spring Boot, and comprehensive database systems. 
            Expert in complete database design lifecycle from requirement analysis to deployment, with advanced proficiency in 
            both MySQL and SQL Server (Triggers, Functions, Stored Procedures, Views, Transactions, Cursors).
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            Strong foundation in OOP principles, data structures & algorithms, and proven ability in full-stack development. 
            Demonstrated expertise in building secure RESTful APIs with JWT authentication and responsive web applications. 
            Strong problem-solving mindset with logical thinking approach and excellent teamwork experience.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-white/50 hover:shadow-md transition-all duration-300 group">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Profile;