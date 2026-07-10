import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/quran', label: 'Quran' },
    { to: '/hadiths', label: 'Hadiths' },
    { to: '/history', label: 'History' },
    { to: '/figures', label: 'Figures' },
  ];

  const linkClass = ({ isActive }) =>
    `text-white transition-colors duration-200 ${
      isActive ? 'bg-emerald-700 underline underline-offset-4' : 'hover:bg-emerald-800'
    }`;

  return (
    <nav className="bg-emerald-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <svg
              className="w-8 h-8 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 4h2v6h-2z" />
              <path d="M12 2a10 10 0 0 0-3.16 19.5c.15-1.63.65-3.15 1.42-4.5A8.98 8.98 0 0 1 12 17c1.54 0 2.98-.46 4.19-1.24.77 1.35 1.27 2.87 1.42 4.5A10 10 0 0 0 12 2z" />
            </svg>
            <span className="text-xl font-bold hidden sm:block">Islamic Platform</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                end={link.to === '/'}
              >
                <span className="px-3 py-2 rounded-md text-sm font-medium">{link.label}</span>
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-emerald-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                end={link.to === '/'}
                onClick={() => setIsOpen(false)}
              >
                <span className="block px-3 py-2 rounded-md text-base font-medium">{link.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;