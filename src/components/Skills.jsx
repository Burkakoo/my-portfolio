export default function Skills() {
  const skills = [
    { name: 'JavaScript (ES6+)', level: 90 },
    { name: 'React.js', level: 88 },
    { name: 'Node.js', level: 85 },
    { name: 'HTML5 & CSS3', level: 92 },
    { name: 'Express.js', level: 83 },
    { name: 'MongoDB', level: 82 },
    { name: 'MySQL', level: 80 },
    { name: 'Git & GitHub', level: 88 },
  ];

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Redux']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication (JWT)', 'API Integration']
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'MySQL', 'Database Design', 'Schema Optimization']
    },
    {
      title: 'Tools & Others',
      skills: ['Git & GitHub', 'Postman', 'VS Code', 'npm', 'Agile/Scrum', 'Docker', 'Chapa Payment']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900 rounded-xl my-12 p-8">
      <h2 className="text-3xl font-bold text-center mb-4 dark:text-white">
        Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Here are the technologies and tools I work with to build amazing web applications.
      </p>
      
      <div className="max-w-5xl mx-auto">
        {/* Skills Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                <span className="text-sm font-medium text-blue-700 dark:text-blue-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-700 ease-in-out" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b pb-2">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-blue-500 mr-2">▹</span>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Key Projects */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 dark:text-white">
            Key <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Event Management System',
                description: 'PHP-based system for event creation, registration, and notifications',
                tech: ['PHP', 'MySQL', 'jQuery', 'Bootstrap']
              },
              {
                title: 'Event Registration System',
                description: 'Online registration system with email confirmations',
                tech: ['Node.js', 'Express', 'MongoDB', 'Nodemailer']
              },
              {
                title: 'Ethio University App',
                description: 'Student portal with course registration and grade management',
                tech: ['React', 'Node.js', 'MongoDB', 'JWT']
              },
              {
                title: 'DSA Project',
                description: 'Implemented sorting algorithms, trees, graphs, and dynamic programming',
                tech: ['Python', 'Data Structures', 'Algorithms']
              },
              {
                title: 'E-commerce Platform',
                description: 'Full-featured online store with payment integration',
                tech: ['MERN Stack', 'Redux', 'Chapa Payment']
              },
              {
                title: 'Task Management App',
                description: 'Collaborative task management with real-time updates',
                tech: ['React', 'Firebase', 'Material-UI']
              },
              {
                title: 'Grade 12 Student Practical Website',
                description: 'Educational platform for Grade 12 students with practical examples and resources',
                tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap']
              }
            ].map((project, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700">
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
