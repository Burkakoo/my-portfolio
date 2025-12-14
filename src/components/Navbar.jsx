import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Load profile image from src/assets/photos. Prefer a file named `profile.*`, otherwise use the first image.
  let profileImageSrc = null;
  try {
    const modules = import.meta.globEager('../assets/photos/*.{png,jpg,jpeg,webp,svg}');
    const entries = Object.entries(modules);
    if (entries.length > 0) {
      const profileEntry = entries.find(([path]) => /profile\.(png|jpg|jpeg|webp|svg)$/i.test(path));
      const chosen = profileEntry ? profileEntry[1] : entries[0][1];
      profileImageSrc = chosen.default || chosen;
    }
  } catch (e) {
    // import.meta.globEager may not be available in some environments; ignore gracefully
    profileImageSrc = null;
  }

  // Default inline SVG avatar if no image provided
  const defaultSvg = `<svg xmlns='http://www.w3.org/2000/svg' width='228' height='228'><rect width='100%' height='100%' fill='%23759' /><text x='50%' y='54%' font-family='Arial' font-size='56' fill='white' text-anchor='middle' dominant-baseline='middle'>BM</text></svg>`;
  const defaultAvatar = `data:image/svg+xml;utf8,${encodeURIComponent(defaultSvg)}`;

  const [profileInfo, setProfileInfo] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        if (!profileImageSrc) {
          setProfileInfo({ size: 0, width: 228, height: 228 });
          return;
        }

        if (profileImageSrc.startsWith('data:')) {
          // default svg
          setProfileInfo({ size: 0, width: 228, height: 228 });
          return;
        }

        const res = await fetch(profileImageSrc);
        const blob = await res.blob();
        const size = blob.size || 0;

        const img = new Image();
        const loaded = new Promise((r) => {
          img.onload = r;
          img.onerror = r;
        });
        img.src = profileImageSrc;
        await loaded;

        if (mounted) setProfileInfo({ size, width: img.naturalWidth || img.width || 0, height: img.naturalHeight || img.height || 0 });
      } catch (e) {
        if (mounted) setProfileInfo(null);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [profileImageSrc]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    // Set a CSS variable on the root so other components can reference the avatar size.
    // Avatar will be between 56px and 160px, scaling with viewport (20vw preferred).
    try {
      document.documentElement.style.setProperty('--avatar-size', 'clamp(56px, 20vw, 160px)');
    } catch (e) {}
  }, []);

  return (
    <nav 
      style={{ minHeight: 'var(--avatar-size, 20vw)' }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={profileImageSrc || defaultAvatar}
              alt="profile"
              title={
                profileInfo
                  ? `${Math.round(profileInfo.size / 1024)} KB • ${profileInfo.width}×${profileInfo.height}`
                  : 'Profile'
              }
              style={{ width: 'var(--avatar-size, 20vw)', height: 'var(--avatar-size, 20vw)' }}
              className="rounded-full object-cover border border-gray-200 dark:border-gray-700"
            />
            <Link 
              to="home" 
              smooth={true} 
              duration={500}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent cursor-pointer"
            >
              BM
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium cursor-pointer transition-colors"
                activeClass="text-blue-600 dark:text-blue-400 font-semibold"
                spy={true}
                offset={-80}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <i className="fas fa-sun"></i>
              ) : (
                <i className="fas fa-moon"></i>
              )}
            </button>

            {/* profile moved to left - no top-right image here */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 mr-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <i className="fas fa-sun"></i>
              ) : (
                <i className="fas fa-moon"></i>
              )}
            </button>
            {/* profile moved to left - no inline mobile image here */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <i className="fas fa-times text-xl"></i>
              ) : (
                <i className="fas fa-bars text-xl"></i>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                  activeClass="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                  spy={true}
                  offset={-80}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
