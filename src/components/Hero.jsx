export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 dark:text-white">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Burka Muhammed</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
          Full Stack Developer & UI/UX Designer
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          I build exceptional digital experiences that are fast, accessible, and visually appealing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
