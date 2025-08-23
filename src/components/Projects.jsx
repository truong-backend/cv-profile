import React from 'react';
import { Briefcase } from 'lucide-react';

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
      highlights: [
        "Design and implement APIs with JWT-based authorization",
        "Develop functional modules for attendance management",
        "Create responsive user interfaces using ReactJS and TailwindCSS",
        "Build comprehensive attendance reports and statistics",
        "Analyze and design optimized database structure"
      ]
    },
    {
      title: "Bookstore Website",
      period: "October 2024 - December 2024",
      tech: "C#, Entity Framework, Microsoft SQL Server, TailwindCSS",
      github: [
        { name: "Project Link", url: "https://github.com/truong-backend/ThucHanhOSS.git" }
      ],
      teamSize: "1 (Individual Project)",
      highlights: [
        "Implemented user authentication and registration system",
        "Developed MVC architecture with clean separation of concerns",
        "Integrated online payment processing via VNPay",
        "Built shopping cart functionality and order management",
        "Applied transaction handling for data consistency"
      ]
    },
    {
      title: "Mini Supermarket Management App",
      period: "June 2024 - October 2024",
      tech: "C#, Entity Framework, Microsoft SQL Server",
      github: [
        { name: "Project Link", url: "https://github.com/truong-backend/DoanCSharp.git" }
      ],
      teamSize: "3 (Team Project)",
      highlights: [
        "Developed comprehensive WinForms application for retail management",
        "Implemented invoice management and product inventory tracking",
        "Built revenue tracking and customer relationship management features",
        "Created user-friendly interface for efficient business operations",
        "Designed and optimized database for performance"
      ]
    },
    {
      title: "Movie Ticket Booking App",
      period: "June 2024 - October 2024",
      tech: "Java, Spring Boot, Microsoft SQL Server",
      github: [
        { name: "Project Link", url: "https://github.com/zHyuhz/OSS_AppDatVeXemPhim.git" }
      ],
      teamSize: "3 (Team Project)",
      highlights: [
        "Developed complete Android application using Java",
        "Implemented ticket booking system with seat selection",
        "Built user authentication and registration functionality",
        "Integrated payment processing for ticket purchases"
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
            <div className="mb-4">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h4>
              <p className="text-sm text-gray-500 mb-2">{project.period}</p>
              <div className="mb-2">
                <span className="inline-block bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium">
                  {project.tech}
                </span>
              </div>
              {project.github && (
                <div className="mb-2">
                  <span className="text-sm text-gray-600 mr-2">GitHub:</span>
                  {project.github.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" 
                       className="text-blue-600 hover:text-blue-800 text-sm mr-2 underline">
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
              {project.teamSize && (
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Team Size:</strong> {project.teamSize}
                </p>
              )}
            </div>
            <ul className="space-y-2">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;