import React from 'react';
import { Code, Brain, Database, Shield, TestTube, Cog, Zap } from 'lucide-react';

const Skills = () => {
  const coreCompetencies = [
    {
      icon: Brain,
      title: "Algorithm & Problem Solving",
      description: "Data Structures, BFS/DFS, Binary Search, Tree Traversal, Hash Tables, Linear/Exponential Search",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Database,
      title: "Database Design & Analysis (A-Z)",
      description: "Complete database lifecycle from requirement analysis to deployment, Entity Relationship Modeling, Normalization, Data Collection & Analysis",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "API Development",
      description: "RESTful API Design, JWT Authentication & Authorization, Frontend-Backend Integration",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TestTube,
      title: "Software Testing",
      description: "Black Box Testing & White Box Testing methodologies, Test Case Design, Quality Assurance fundamentals",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Cog,
      title: "DevOps Fundamentals",
      description: "Basic CI/CD concepts, Containerization with Docker, Version Control workflows",
      color: "from-gray-500 to-slate-500"
    },
    {
      icon: Zap,
      title: "Real-time Communication",
      description: "WebSocket implementation, Real-time data streaming, Live updates and notifications",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const coreStrengths = [
    { label: "Programming Languages", value: "Java, C++ (OOP, Data Structures & Algorithms)", color: "bg-blue-100 text-blue-800" },
    { label: "Backend Framework", value: "Spring Boot (JWT Authentication, RESTful API Design)", color: "bg-green-100 text-green-800" },
    { label: "Database Systems", value: "MySQL & SQL Server (Advanced: Triggers, Functions, Stored Procedures, Views, Transactions, Cursors, Indexing, Query Optimization)", color: "bg-purple-100 text-purple-800" },
    { label: "Algorithm & Data Structures", value: "BFS/DFS, Binary Search, Tree Traversal, Hashing, Linear/Binary/Exponential Search", color: "bg-indigo-100 text-indigo-800" }
  ];

  const proficient = [
    { label: "Frontend Technologies", value: "ReactJS, JavaScript, TypeScript, HTML, CSS, TailwindCSS", color: "bg-cyan-100 text-cyan-800" },
    { label: "Development Tools", value: "Git (Version Control & Team Collaboration), IntelliJ, VS Code, Postman, Maven, Docker, Bitbucket", color: "bg-orange-100 text-orange-800" },
    { label: "Other Technologies", value: "C#, ASP.NET Framework, ASP.NET Core, Entity Framework", color: "bg-red-100 text-red-800" },
    { label: "Languages", value: "Vietnamese (Native), English (Basic Communication)", color: "bg-gray-100 text-gray-800" }
  ];

  return (
    <section className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <Code className="w-6 h-6 text-purple-600" />
        <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-purple-600 pb-1">TECHNICAL SKILLS</h3>
      </div>

      {/* Core Competencies */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Brain className="w-5 h-5 text-purple-600" />
          Core Competencies
        </h4>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {coreCompetencies.map((competency, index) => {
            const Icon = competency.icon;
            return (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${competency.color}`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <h5 className="font-semibold text-gray-800 text-sm">{competency.title}</h5>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{competency.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Core Strengths */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Core Strengths (Deep Understanding)</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {coreStrengths.map((skill, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md border">
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${skill.color}`}>
                {skill.label}
              </div>
              <p className="text-gray-700 text-sm">{skill.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Proficient */}
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Proficient</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {proficient.map((skill, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md border">
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${skill.color}`}>
                {skill.label}
              </div>
              <p className="text-gray-700 text-sm">{skill.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;