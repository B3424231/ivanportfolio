import heroImg from '../assets/image/photo/mangui.jpg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-[68px] overflow-hidden bg-[#faf9f7]"
    >
      {/* Subtle background shapes */}
      <div className="absolute top-0 right-0 w-[55%] h-full bg-neutral-100/60 clip-hero-bg hidden lg:block" />
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-neutral-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-neutral-300/20 rounded-full blur-3xl" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── Text ── */}
          <div className={`anim-fade-left ${isVisible ? 'visible' : ''}`}>
            <p className="text-sm font-semibold text-neutral-400 tracking-[0.2em] uppercase mb-5">
              Hello, I'm
            </p>

            <h1 className="text-[clamp(2.8rem,6vw,4.8rem)] font-extrabold text-neutral-900 leading-[1.05] mb-3">
              Ivan<br />Manguilimotan
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-neutral-800 mb-6">
              Web Developer
            </p>

            <div className="border-l-[3px] border-neutral-900 pl-5 mb-10">
              <p className="text-neutral-500 leading-relaxed text-[15px]">
                Building clean, responsive, and<br className="hidden sm:inline" />
                modern web experiences.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => scrollTo('projects')}
                className="group inline-flex items-center gap-2.5 bg-neutral-900 text-white px-7 py-3.5 rounded-xl text-sm font-semibold
                  hover:bg-neutral-800 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-900/20 hover:-translate-y-0.5 active:translate-y-0"
              >
                View My Work
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="group inline-flex items-center gap-2.5 bg-white text-neutral-900 px-7 py-3.5 rounded-xl text-sm font-semibold border-2 border-neutral-200
                  hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300 hover:shadow-xl hover:shadow-neutral-900/10 hover:-translate-y-0.5 active:translate-y-0"
              >
                Contact Me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 bg-neutral-900 text-white rounded-full flex items-center justify-center
                  hover:bg-neutral-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 bg-neutral-900 text-white rounded-full flex items-center justify-center
                  hover:bg-[#0077b5] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:ivanmanguilimotan@gmail.com"
                aria-label="Email"
                className="w-11 h-11 bg-neutral-900 text-white rounded-full flex items-center justify-center
                  hover:bg-red-500 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Photo ── */}
          <div className={`flex justify-center lg:justify-end anim-fade-right ${isVisible ? 'visible' : ''}`}>
            <div className="relative">
              {/* decorative shadow box */}
              <div className="absolute inset-4 bg-neutral-900/5 rounded-[2rem] blur-2xl scale-105" />
              <img
                src={heroImg}
                alt="Ivan Manguilimotan"
                className="relative w-full max-w-[420px] rounded-[1.5rem] object-cover shadow-2xl shadow-neutral-400/20"
              />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .clip-hero-bg {
          clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
        }
      `}</style>
    </section>
  );
}
