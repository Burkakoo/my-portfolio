import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    // Here you would typically send the form data to your backend
    // For now, we'll simulate a successful submission
    try {
      // Replace this with your actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900 rounded-xl my-12 p-8">
      <h2 className="text-3xl font-bold text-center mb-4 dark:text-white">
        Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Hi Burka, I'd like to discuss a potential project..."
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                disabled={status === 'Sending...'}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {status === 'Sending...' ? 'Sending...' : 'Send Message'}
              </button>
              {status && (
                <p className={`mt-3 text-sm text-center ${
                  status.includes('successfully') ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'
                }`}>
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Feel free to reach out to me. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <i className="fas fa-envelope text-blue-600 dark:text-blue-400"></i>
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h4>
                <a 
                  href="mailto:burkamuhammed12@gmail.com" 
                  className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  burkamuhammed12@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <i className="fas fa-phone-alt text-blue-600 dark:text-blue-400"></i>
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</h4>
                <a 
                  href="tel:+251915200879" 
                  className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  +251 915 200 879
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <i className="fas fa-map-marker-alt text-blue-600 dark:text-blue-400"></i>
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h4>
                <p className="text-gray-900 dark:text-white">
                  Addis Ababa, Ethiopia
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Follow Me</h4>
            <div className="flex space-x-4">
              {[
                { icon: 'github', url: 'https://github.com/Burkakoo' },
                { icon: 'linkedin-in', url: 'https://linkedin.com/in/yourusername' },
                { icon: 'twitter', url: 'https://twitter.com/yourusername' },
                { icon: 'instagram', url: 'https://instagram.com/yourusername' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
                  aria-label={social.icon}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
