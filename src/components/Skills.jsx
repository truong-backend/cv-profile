import React from 'react';
import { Code } from 'lucide-react';

const Skills = () => {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <Code className="w-6 h-6 text-purple-600" />
        <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-purple-600 pb-1">TECHNICAL SKILLS</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { label: "Programming Languages", value: "Java, C#, C++, JavaScript, HTML, CSS, SQL, TypeScript", color: "bg-blue-100 text-blue-800" },
          { label: "Frameworks & Libraries", value: "Spring Boot, ASP.NET, ReactJS, TailwindCSS, etc.", color: "bg-green-100 text-green-800" },
          { label: "Tools & Software", value: "VS Code, IntelliJ, Git, Postman, Maven, Docker, Trello", color: "bg-purple-100 text-purple-800" },
          { label: "Databases", value: "MySQL, Microsoft SQL Server", color: "bg-red-100 text-red-800" },
          { label: "Technologies", value: "RESTful API, JWT, Swagger/OpenAPI, Zalo Mini App SDK, QR Code", color: "bg-yellow-100 text-yellow-800" },
          { label: "Languages", value: "Vietnamese (Native), English (Basic Communication)", color: "bg-indigo-100 text-indigo-800" }
        ].map((skill, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md border">
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${skill.color}`}>
              {skill.label}
            </div>
            <p className="text-gray-700 text-sm">{skill.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
