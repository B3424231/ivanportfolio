import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home',     id: 'home' },
  { label: 'About',    id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills',   id: 'skills' },
  { label: 'Contact',  id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  /* ── track scroll position for shadow + active link ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // determine which section is currently in view
      const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top <= 120) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">

          {/* ── Logo ── */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-9 h-9 bg-neutral-900 rounded-lg flex items-center justify-center text-white font-bold text-xs tracking-wide transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-3deg]">
              IM
            </div>
            <span className="text-neutral-900 font-semibold text-sm hidden sm:inline-block transition-colors duration-300 group-hover:text-neutral-600">
              Ivan Manguilimotan
            </span>
          </button>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300
                  ${activeSection === link.id
                    ? 'text-neutral-900'
                    : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'
                  }`}
              >
                {link.label}
                {/* active underline */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-neutral-900 rounded-full transition-all duration-300
                    ${activeSection === link.id ? 'w-5' : 'w-0'}`}
                />
              </button>
            ))}
          </div>

          {/* ── Mobile toggle ── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-neutral-100 transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            <div className="flex flex-col gap-[5px]">
              <span className={`block w-5 h-[2px] bg-neutral-800 rounded-full transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-5 h-[2px] bg-neutral-800 rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`block w-5 h-[2px] bg-neutral-800 rounded-full transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>

        {/* ── Mobile menu ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="py-3 space-y-1 border-t border-neutral-100">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`block w-full text-left px-4 py-3 text-sm rounded-xl transition-all duration-200
                  ${activeSection === link.id
                    ? 'text-neutral-900 bg-neutral-100 font-semibold'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
