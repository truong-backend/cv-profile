import React from 'react';
import { Briefcase, Users, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Student Attendance Website",
      period: "April 2025 - Present",
      tech: "Spring Framework, ReactJS, MySQL, TailwindCSS",
      github: [
        { name: "Backend", url: "https://github.com/truong-backend/He-Thong-Diem-Danh-STU.git" },
        { name: "Frontend", url: "https://github.com/truong-backend/FRONT_END.git" }
      ],
      teamSize: "1 (Individual Project)",
      achievements: [
        "Designed and implemented secure RESTful APIs with JWT-based authentication system",
        "Developed comprehensive attendance management modules with role-based access control", 
        "Built responsive user interfaces using ReactJS and TailwindCSS with optimized user experience",
        "Created automated attendance reports and real-time statistics dashboard",
        "Analyzed business requirements and designed normalized database structure for optimal performance",
        "Implemented frontend-backend integration with proper error handling and data validation"
      ]
    },
    {
      title: "Bookstore E-commerce Website", 
      period: "October 2024 - December 2024",
      tech: "C#, Entity Framework, Microsoft SQL Server, TailwindCSS",
      github: [
        { name: "Project Link", url: "https://github.com/truong-backend/ThucHanhOSS.git" }
      ],
      teamSize: "1 (Individual Project)",
      achievements: [
        "Implemented secure user authentication and registration system with session management",
        "Developed MVC architecture following clean code principles and design patterns",
        "Integrated VNPay payment gateway with transaction handling for data consistency",
        "Built comprehensive shopping cart functionality and order management system",
        "Applied database optimization techniques including indexing and query optimization",
        "Implemented comprehensive error handling and logging system"
      ]
    }
  ];

  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <Briefcase className="w-6 h-6 text-orange-600" />
        <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-orange-600 pb-1">PROJECTS</h3>
      </div>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
            {/* Project Header */}
            <div className="mb-4">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <h4 className="text-xl font-semibold text-gray-800">{project.title}</h4>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{project.period}</span>
              </div>
              
              {/* Tech Stack */}
              <div className="mb-3">
                <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  {project.tech}
                </span>
              </div>
              
              {/* GitHub Links */}
              {project.github && (
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="text-sm text-gray-600 mr-1">GitHub:</span>
                  {project.github.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" 
                       className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm underline hover:no-underline transition-colors">
                      <ExternalLink className="w-3 h-3" />
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
              
              {/* Team Size */}
              {project.teamSize && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span><strong>Team Size:</strong> {project.teamSize}</span>
                </div>
              )}
            </div>
            
            {/* Key Achievements */}
            <div>
              <h5 className="font-semibold text-gray-800 mb-3">Key Achievements:</h5>
              <ul className="space-y-2">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;