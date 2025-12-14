export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 rounded-xl shadow-lg my-12 p-8">
      <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
        About <span className="text-blue-600 dark:text-blue-400">Me</span>
      </h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          I'm a passionate Full Stack Developer with experience in creating high-quality web and mobile applications. 
          I specialize in building scalable, user-friendly digital solutions that deliver exceptional user experiences.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          My journey in software development has equipped me with a strong foundation in both frontend and backend technologies, 
          allowing me to build complete, end-to-end solutions. I'm dedicated to writing clean, efficient code and staying 
          updated with the latest industry trends and best practices.
        </p>
        
        <div className="space-y-12 mt-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 dark:text-white border-b pb-2">Experience</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Full Stack Developer (Academic)</h4>
                    <p className="text-blue-600 dark:text-blue-400">2017 - Present</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mt-1 mr-2">•</span>
                    <span className="dark:text-gray-300">Built 6+ production-ready full-stack applications using React, Node.js, MySQL & MongoDB</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mt-1 mr-2">•</span>
                    <span className="dark:text-gray-300">Designed optimized MySQL & MongoDB schemas for high performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mt-1 mr-2">•</span>
                    <span className="dark:text-gray-300">Integrated secure authentication (JWT) & role-based access control</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mt-1 mr-2">•</span>
                    <span className="dark:text-gray-300">Developed REST APIs and integrated payment systems (Chapa)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 dark:text-white border-b pb-2">Education</h3>
            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">BSc in Software Engineering</h4>
                  <p className="text-blue-600 dark:text-blue-400">Haramaya University</p>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">2015 - 2019</span>
              </div>
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                Specialized in full-stack development, database systems, and software engineering principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
