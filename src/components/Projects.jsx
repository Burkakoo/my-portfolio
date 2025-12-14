export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product catalog, and payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://via.placeholder.com/600x400?text=E-commerce+Platform',
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A mobile-first task management application with real-time updates and team collaboration features.',
      tags: ['React Native', 'Firebase', 'Redux'],
      image: 'https://via.placeholder.com/600x400?text=Task+Management+App',
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with modern web technologies.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://via.placeholder.com/600x400?text=Portfolio+Website',
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 rounded-xl my-12 p-8">
      <h2 className="text-3xl font-bold text-center mb-4 dark:text-white">
        Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Here are some of my recent projects. Each project was built to solve specific problems and deliver exceptional user experiences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  title="View on GitHub"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  title="Live Demo"
                >
                  <i className="fas fa-external-link-alt text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a 
          href="#" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          View All Projects
          <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </section>
  );
}
